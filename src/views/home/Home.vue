<template>
  <div class="home">
    <home-navi-bar></home-navi-bar>
    <home-recommend :recommend="recommend"/>
  </div>
</template>

<script>
import HomeNaviBar from "./HomeNaviBar";
import HomeRecommend from './HomeRecommend'

import { getMultiData } from "network/HomeRequest";

export default {
  name: 'Home',
  components: {
    HomeNaviBar,
    HomeRecommend
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    this.getMultiData();
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        console.log(this.banner);
        console.log(this.recommend);
      });
    }
  }
}
</script>
