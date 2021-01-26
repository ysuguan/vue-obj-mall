<template >
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swipper/index.js';

export default {
  name: 'HomeSwiper',
  props: {
    banner: Array
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
  img {
    height: 100%;
  }
</style>