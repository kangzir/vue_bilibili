<template>
  <div class="hoem-navbar">
    <div class="left">
      <img  @click.stop="$router.push('/home')" src="../../../assets/img/logo.png" alt="">
    </div>
    <div class="center">
      <van-icon name="search" />
      <p>
        请输入搜索内容
      </p>
    </div>
    <div class="right">
      <img @click.stop="clickuserinfo" src="../../../assets/img/head_img.jpg">
      <p>下载APP</p>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    methods: {
      clickuserinfo(){
        if(!localStorage.getItem('token')){
          this.$toast('请先登录')
          this.$router.push('/login')
          return
        }
        this.$router.push('/userinfo')
      }
    },
  }
</script>


<style scoped lang="less">
.hoem-navbar{
  display: flex;
  background-color: rgb(255, 255, 255);
  align-items: center;
  .left{
    img{
      width: 80%;
    }
  }
  .center{
    display: flex;
    align-items: center;
    flex: 1;
    background-color: #f4f4f4;
    height: 6.944vw;
    font-size: 3.333vw;
    border-radius: 8.333vw;
    color: #b4b4b4;
    i{
      padding-left: 2.222vw;
    }
    p{
      padding-left: 1.389vw;
    }
  }
  .right{
    display: flex;
    align-items: center;
    img{
      width: 6.667vw;
      height: 6.667vw;
      border-radius: 50%;
    }
    p{
      font-size: 3.611vw;
      background-color: #ff819b;
      padding: 0.586vw 2.222vw;
      color: #fff;
      border-radius: 0.833vw;
      margin: 0 2.778vw;
    }
  }
}
</style>