<template>
  <div id="home">
    <home-navi-bar class='home-nav'></home-navi-bar>
    <mall-scroll @pullingUp="pullingUp" class="scroll-wrapper"
     ref="wrapper"
      :scroll-position-func="scrollPositionFunc"
       @positionChanged='positionChanged'>
      <home-swiper :banner='banner' @imageLoaded='imageLoaded'></home-swiper>
      <home-recommend :recommend="recommend" @imageLoaded='imageLoaded'/>
      <home-feature @imageLoaded='imageLoaded'></home-feature>
      <type-control :goods-types='goodsTypes' @typeControlClick='typeControlClick'></type-control>
      <goods-list :goods='currentGoods' :key="currentType"/>
    </mall-scroll>
    <back-top class="back-top" v-show="backAlive" @backToTop="backToTop"></back-top>
  </div>
</template>

<script>
import HomeNaviBar from "./children/HomeNaviBar";
import HomeRecommend from './children/HomeRecommend';
import HomeSwiper from './children/HomeSwiper';
import HomeFeature from './children/HomeFeature';

import TypeControl from 'components/content/TypeControl';
import GoodsList from 'components/content/goods/GoodsList';
import MallScroll from 'components/common/scroll/MallScroll';
import BackTop from 'components/common/backtop/BackTop';

import { getMultiData, getHomeData } from "network/HomeRequest";

export default {
  name: 'Home',
  components: {
    HomeNaviBar,
    HomeRecommend,
    HomeSwiper,
    HomeFeature,

    TypeControl,
    GoodsList,
    MallScroll,
    BackTop
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
      currentType: '',
      backAlive: false,
      scrollPositionFunc: (position) => {
        if(-position.y > 1000){
          this.$emit('showBack');
        }
      }
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
    for (const item in this.goodsList) {
      this.getGoodsList(item);
    }
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getGoodsList(goodsType){
        getHomeData(goodsType, this.goodsList[goodsType].page).then(res => {
          this.goodsList[goodsType].list.push(...res.data.data.list);
        });
        this.goodsList[goodsType].page++;
    },


    typeControlClick(goodsType) {
      this.currentType = goodsType;
    },

    
    pullingUp(){
      // getHomeData(this.currentType, this.goodsList[this.currentType].page).then(res => {
      //   this.goodsList[item]
      // })
      this.getGoodsList(this.currentType);
      this.$refs.wrapper.scroll.refresh();
    },
    positionChanged(position) {
      this.backAlive = (-position.y > 1000)?true: false;
    },
    backToTop() {
      this.$refs.wrapper.scroll.scrollTo(0,-300, 1000);
    },
    debounce(func, delay){
      //
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
  .scroll-wrapper {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: absolute;
    right: 10px;
    bottom: 50px;

    height: 9%;
    width: 18%;
  }

  /* .type-control {
    position: sticky;
    top: 44px;
  } */
</style>
