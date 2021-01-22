<template>
  <div id="app">
    <router-view/>
    <mall-tabbar></mall-tabbar>
  </div>
</template>

<script>
import mallTabbar from "components/content/MallTabbar"

export default {
  name: 'App',
  components: {
    mallTabbar
  }
}
</script>

<style>
</style>
