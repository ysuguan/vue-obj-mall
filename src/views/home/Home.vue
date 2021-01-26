<template>
  <div id="home">
    <home-navi-bar class='home-nav'></home-navi-bar>
    <home-swiper :banner='banner'></home-swiper>
    <home-recommend :recommend="recommend"/>
    <home-feature></home-feature>
    <type-control :goods-types='goodsTypes'></type-control>
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

import { getMultiData, getHomeData } from "network/HomeRequest";

export default {
  name: 'Home',
  components: {
    HomeNaviBar,
    HomeRecommend,
    HomeSwiper,
    HomeFeature,

    TypeControl
  },
  data() {
    return {
      //所有网络请求到的数据放在这里
      banner: [],
      recommend: [],
      goodsList: {
        'pop': [],
        'new': [],
        'sell': []
      }
    }
  },
  computed: {
    //提取所有类型传递到子组件featuretabbar
    goodsTypes() {
      return Object.keys(this.goodsList);
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
        getHomeData(item).then(res => {
          this.goodsList[item] = res.data.data.list;
        });
      }
      console.log(this.goodsList);
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
