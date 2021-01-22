<template>
  <div class="mallTabbar">
    <tab-bar>
      <bar-item fontColor="black" path="/home">
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home-active.svg">
        </template>
        <template v-slot:item-icon-deactive>
          <img src="~assets/img/tabbar/home-deactive.svg">
        </template>
        <template v-slot:item-text>
          首页
        </template>
      </bar-item>
      <bar-item path="/category">
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category-active.svg">
        </template>
        <template v-slot:item-icon-deactive>
          <img src="~assets/img/tabbar/category-deactive.svg">
        </template>
        <template v-slot:item-text>
          分类
        </template>
      </bar-item>
      <bar-item path="/cart">
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/cart-active.svg">
        </template>
        <template v-slot:item-icon-deactive>
          <img src="~assets/img/tabbar/cart-deactive.svg">
        </template>
        <template v-slot:item-text>
          购物车
        </template>
      </bar-item>
      <bar-item path="/profile">
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile-active.svg">
        </template>
        <template v-slot:item-icon-deactive>
          <img src="~assets/img/tabbar/profile-deactive.svg">
        </template>
        <template v-slot:item-text>
          我的
        </template>
      </bar-item>
    </tab-bar>
  </div>
</template>
<script>
import tabBar from "components/common/tabbar/Tabbar";
import barItem from "components/common/tabbar/BarItem";

export default {
  name: 'mallTabbar',
  components: {
    tabBar,
    barItem
  }
}
</script>
<style>
  .mallTabbar {
    height: 49px;
    color: gray;
  }
  img {
    height: 25px;
    width: 45px;
  }
</style>