<template>
  <div class="type-control">
    <div class="type-item"
    v-for="(item, index) in goodsTypes"
     :style="autoStyle(index)"
       @click="itemClick(index)"
        :key="index">
        <span>{{typesMap[item]}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'TypeControl',
  props: {
    goodsTypes: {
      type: Array,
      default: () =>{return ['pop', 'new', 'sell']}
    },
    activeStyle: {
      type: Object,
      default:() => { return {
        color: 'pink',
        borderBottom: '1px solid pink'
      }}
    }
  },
  data(){
    return {
      currentIndex: 0,
      typesMap: {
        pop: '流行',
        new: '新款',
        sell: '畅销',
      }
    }
  },
  methods: {
    itemClick(index) {
      if(this.currentIndex !== index)
      {
        this.$emit('typeControlClick', this.goodsTypes[index]);
        this.currentIndex = index;
      }
    },
    autoStyle(index) {
      return this.currentIndex === index? this.activeStyle : {};
    }
  }
}
</script>

<style scoped>
  .type-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .type-item {
    flex: 1;
  }
</style>