<template>
  <div class="login_navbar">
    <div class="left"></div>
    <div class="navbartext">{{navbartext}}</div>
    <div class="right">
      <slot name="isShow"></slot>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:[
      'navbartext'
    ]
  }
</script>


<style scoped lang="less">
.login_navbar{
  height: 12.5vw;
  background-color: #fff;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  .navbartext{
    width: 27.778vw;
  }
  div{
    font-size: 4.444vw;
  }
  .left{
    width: 27.778vw;
  }
  .right{
    width: 27.778vw;
  }
}
</style>