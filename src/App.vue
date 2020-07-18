<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
import Register from './views/login/Register'

  export default {
    name:'',
    components: {
      Register
    }
  }
</script>


<style scoped lang="less">

</style>