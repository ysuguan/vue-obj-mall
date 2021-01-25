<template>
    <a :href="linkURL" class="goods-item">
      <img :src="imgURL" />
      <span>{{title}}</span>
    </a>
</template>
<script>
export default {
  name: 'GoodsItem',
  props: {
    linkURL: String,
    imgURL: String,
    title: String
  }
}
</script>
<style scoped>
  .goods-item img{
    width: 100%;
    display: block;
  }
  .goods-item {
    height: 100%;
    border: solid 2px red;
    flex: 1;
  }
</style>