<template>
  <div class="register">
    <!-- 导航栏 -->
    <login-navbar
    class="navbar" 
    navbartext="注册bilibili">
      <div 
      style="font-size:13px"
      slot="isShow"
      @click="$router.push('/register')">
      切换到注册
      </div>
    </login-navbar>

    <login-txtx 
    type="text" 
    label="账号"
    placeholder="请输入账号"
    @subform="res => uname = res"
    ></login-txtx>
    <login-txtx 
    type="password" 
    label="密码"
    placeholder="请输入密码"
    @subform="res => password = res"
    ></login-txtx>
    <!-- 按钮 -->
    <login-btn @subbtnform="subbtnform" btntext="注册"></login-btn>
  </div>
</template>

<script>
import LoginNavbar from '../../components/common/login/LoginNavbar'
import LoginTxtx from '../../components/common/login/LoginTxtx'
import LoginBtn from '../../components/common/login/LoginBtn'
  export default {
    name:'register',
    components: {
      LoginBtn,
      LoginNavbar,
      LoginTxtx
    },
    data() {
      return {
        uname:'',
        password:'',
      }
    },
    methods: {
      subbtnform(){
        if(this.uname.length !== 0 &&
        this.password.length !== 0){
          this.$http.post('/login',{
            username : this.uname,
            password : this.password
          }).then( res =>{
            console.log(res);
            if(res.data.code === 200){
              localStorage.setItem('token',res.data.token)
              localStorage.setItem('id',res.data.id)
              setTimeout(() => {
              this.$router.push('/userinfo')
              }, 1000);
            }else{
              this.$toast(res.data.msg)
            }
          })
        }else{
            this.$toast('格式不正确')
        }
      }
    },
  }
</script>


<style scoped lang="less">
.register{
  height: 100vh;
  background-color: rgb(244, 244, 244);
}
.navbar{
  margin-bottom: 4.167vw;
}
</style>