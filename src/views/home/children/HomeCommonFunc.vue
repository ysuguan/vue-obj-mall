<template>
  <div>
    
  </div>
</template>
<script>
export default {
  name: 'HomeCommonFunc',
  methods: {
    //公用的图片加载触发方法
    imageLoaded() {
      this.$emit('imageLoaded');
    }
  },
}
</script>
<style>
  
</style>