<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" @load='imageLoaded'>
    </a>
  </div>
</template>
<script>
import HomeCommonFunc from './HomeCommonFunc';

export default {
  name: 'HomeFeature',
  extends: HomeCommonFunc
}
</script>
<style scoped>
  .feature img {
    width: 100%;
    height: 25%;
  }
</style>