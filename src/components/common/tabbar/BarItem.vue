<template >
  <div class="barItem" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name='item-icon-deactive'></slot></div>
    <div :style="activeColor"><slot name='item-text'></slot></div>
  </div>
</template>
<script>
export default {
  name: 'BarItem',
  props: {
    path: String,
    fontColor: {
      type: String,
      default: 'black'
      }
  },
  data() {
    return {
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColor() {
      return this.isActive ? {color: this.fontColor} : {};
    }
  }
}
</script>
<style scoped>
  .activeClass {
    font-weight: bolder;
  }
  .barItem {
    flex: 1;
  }
</style>