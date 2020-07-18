<template>
  <div class="register">
    <!-- 导航栏 -->
    <login-navbar 
    navbartext="注册bilibili">
      <div 
      style="font-size:3.611vw"
      slot="isShow"
      @click="$router.push('/login')">
      切换到登陆
      </div>
    </login-navbar>
    <!-- 输入框 -->
    <login-txtx 
    style="margin: 4.167vw 0;"
    type="text" 
    label="姓名"
    placeholder="请输入姓名"
    @subform="res => name = res"
    ></login-txtx>
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
        name:'',
        uname:'',
        password:'',
      }
    },
    methods: {
      subbtnform(){
        if(this.name.length !== 0 &&
        this.uname.length !== 0 &&
        this.password.length !== 0){
          this.$http.post('/register',{
            name : this.name,
            username : this.uname,
            password : this.password
          }).then( res =>{
            console.log(res);
            if(res.data.code === 200){
              localStorage.setItem('token',res.data.objtoken)
              localStorage.setItem('id',res.data.id)
              this.$toast(res.data.msg)
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
</style>