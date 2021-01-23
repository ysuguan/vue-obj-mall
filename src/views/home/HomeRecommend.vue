<template>
  <div class='home-recommend'> 
    <goods-item v-for= "(item, index) in recommend" :key="index" :linkURL="item.link" :imgURL='item.image' :title="item.title">
    </goods-item>
  </div>
</template>
<script>
import GoodsItem from "components/common/goods/GoodsItem";

export default {
  name: 'HomeRecommend',
  components: {
    GoodsItem
  },
  props: {
    recommend: Array
  }
}
</script>
<style scoped>
  .home-recommend{
    height: 80px;
    border: 2px green solid;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>