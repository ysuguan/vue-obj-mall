<template>
  <div id="home">
    <home-navi-bar class='home-nav'></home-navi-bar>
    <home-swiper :banner='banner'></home-swiper>
    <home-recommend :recommend="recommend"/>
    <home-feature></home-feature>
    <type-control :goods-types='goodsTypes' @typeControlClick='typeControlClick'></type-control>
    <goods-list :goods='currentGoods' ::key="currentType"/>
    <ul>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
      <li>100</li>
    </ul>
  </div>
</template>

<script>
import HomeNaviBar from "./children/HomeNaviBar";
import HomeRecommend from './children/HomeRecommend';
import HomeSwiper from './children/HomeSwiper';
import HomeFeature from './children/HomeFeature';

import TypeControl from 'components/content/TypeControl';
import GoodsList from 'components/content/goods/GoodsList';


import { getMultiData, getHomeData } from "network/HomeRequest";

export default {
  name: 'Home',
  components: {
    HomeNaviBar,
    HomeRecommend,
    HomeSwiper,
    HomeFeature,

    TypeControl,
    GoodsList
  },
  data() {
    return {
      //所有网络请求到的数据放在这里
      banner: [],
      recommend: [],
      goodsList: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        }
      },
      currentType: ''
    }
  },
  computed: {
    //提取所有类型传递到子组件featuretabbar
    goodsTypes() {
      return Object.keys(this.goodsList);
    },
    currentGoods() {
      if(this.currentType === '')
      {
        this.currentType = this.goodsTypes[0];
      }
      return this.goodsList[this.currentType].list;
    }
  },
  created() {
    //发起网络请求
    this.getMultiData();
    this.getGoodsList();
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getGoodsList(){
      for (const item in this.goodsList) {
        this.goodsList[item].page++ ;
        getHomeData(item, this.goodsList[item].page).then(res => {
          this.goodsList[item].list.push(...res.data.data.list);
        });
      }
    },


    typeControlClick(goodsType) {
      this.currentType = goodsType;
    }
  }
}
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
  .type-control {
    position: sticky;
    top: 44px;
  }
</style>
