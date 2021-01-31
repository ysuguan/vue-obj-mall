<template>
  <div class='home-recommend'> 
    <div v-for="(item,index) in recommend" class="recommend-item" :key='index'>
      <a :href="item.link">
        <img :src="item.image" @load='imageLoaded'>
        <div>{{item.title}}</div> 
      </a>
    </div>
  </div>
</template>
<script>
import HomeCommonFunc from './HomeCommonFunc';

export default {
  name: 'HomeRecommend',
  extends: HomeCommonFunc,
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>
<style>
  .home-recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>