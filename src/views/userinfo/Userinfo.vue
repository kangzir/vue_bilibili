<template>
  <div>
    <hoem-navbar></hoem-navbar>
    <div class="user-logo"><img src="../../assets/img/bannerTop_new.png" alt=""></div>
    <userbox></userbox>
  </div>
</template>


<script>
//头部导航栏
import HoemNavbar from '../../components/common/hoem/HoemNavbar'
// 用户介绍板块
import Userbox from './childUserinfo/Userbox'
  export default {
    name:'',
    components:{
      HoemNavbar,
      Userbox,
    },
    created() {
      this._getuser()
    },
    methods: {
      _getuser(){
        this.$http.get('/user/'+localStorage.getItem('id')).then( res =>{
          console.log(res);
        })
      }
    },
  }
</script>


<style scoped lang="less">
.user-logo{
  height: 44.444vw;
  width: 100%;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>