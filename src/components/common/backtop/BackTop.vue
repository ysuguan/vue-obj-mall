<template>
  <img @click="backToTop" src="~assets/img/common/top.png">
</template>
<script>
export default {
  name: 'BackTop',
  methods: {
    backToTop() {
      //子组件必然具备的功能，比如点击触发某功能，那么对点击事件的监听就应在子组件内部完成，只要给父组件留出一个处理接口
      this.$emit('backToTop');
    }
  },
}
</script>
<style scoped>
</style>