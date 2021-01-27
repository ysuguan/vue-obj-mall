<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
      <li>1-100</li>
    </ul>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';

export default {
  name: 'Category',
  mounted() {
    setTimeout(this.useBScroll, 3000);
  },
  methods: {
    useBScroll(){
      BScroll.use(PullUp);
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: true,
      pullUpLoad: true
    });

    this.scroll.on('pullingUp', () => {
      console.log('到底了');
      this.scroll.finishPullUp();
    });
    }
  }
}
</script>
<style scoped>
  .wrapper {
    background-color: red;
    height: 300px;
    overflow: hidden  ;
  }
</style>