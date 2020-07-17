<template>
  <div class="login-btn">
    <div class="register-btn" @click="subbtnform">{{btntext}}</div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['btntext'],
    methods: {
      subbtnform() {
        this.$emit('subbtnform')
      }
    },
  }
</script>


<style scoped lang="less">
.register-btn{
  height: 8.333vw;
  background-color: rgb(255, 169, 181);
  border-radius: 5.556vw;
  text-align: center;
  line-height: 8.333vw;
  margin:2.778vw 5.556vw 0 2.778vw;
  color: #fff;
}
</style>