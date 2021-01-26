<template>
  <div>
    <navi-bar>
      <template v-slot:left>
        <div>
        </div>
      </template>
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
      <template v-slot:right>
        <div>
        </div>
      </template>
      
    </navi-bar>
  </div>
</template>
<script>
import naviBar from "components/common/navibar/NaviBar";


export default {
  name: 'HomeNaviBar',
  components: {
    naviBar
  }
}
</script>