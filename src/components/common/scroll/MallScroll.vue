<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';

export default {
  name: 'MallScroll',
  data() {
    return {
      scroll: {
        type: Object,
        default() {
          return {};
        }  
      }
    }
  },
  mounted() {
    //延迟挂载wrapper，否则content尺寸计算会因为图片加载延时出错
    // setTimeout(this.useBScroll, 1500);
    this.useBScroll;
  },
  methods: {
    useBScroll() {
      BScroll.use(PullUp);

      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: true,
        probeType: 3
      });

      this.scroll.on('pullingUp', ()=>{
        this.$emit('pullingUp');
        this.scroll.finishPullUp();
      });

      this.scroll.on('scroll', (position) => {
        //简单地向父组件发射位置改变信号即可
        this.$emit('positionChanged', position);
      });
    }
  },
}
</script>
<style scoped>
  
</style>