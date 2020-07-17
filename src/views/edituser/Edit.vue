<template>
  <div class="edit">
    <hoem-navbar></hoem-navbar>
    <div class="uploader">
      <van-uploader preview-size="100%" :after-read="afterRead" />
      <edit-list :left="left" :right="right"></edit-list>
    </div>
    <div>
      <button @click="logOut">退出登陆</button>
      <button @click="$router.push('/userinfo')">返回空间</button>
    </div>
  </div>
</template>


<script>
import HoemNavbar from '../../components/common/hoem/HoemNavbar'
import EditList from './childEdit/EditList'
  export default {
    name:'',
    components:{
      HoemNavbar,
      EditList,
    },
    data() {
      return {
        left:['头像','昵称','UID','性别','出生日期','个性签名'],
        right:{}
      }
    },
    created() {
      this._getuser()
    },
    methods: {
      // 请求数据
      _getuser(){
        this.$http.get('/user/'+localStorage.getItem('id')).then( res =>{
          console.log(res);
          this.right = res.data[0]
        })
      },
      afterRead(file){
        //构造上传对象
        const formdata = new FormData()
        // 将内容添加进去
        formdata.append('file',file.file)
        // 发送请求
        this.$http.post('/upload',formdata).then( res =>{
          console.log(res);
          //上传的照片替换到当前使用的数据里
          this.right.user_img = res.data.url
          //本地上传完上传到服务器
          this._getImgUpload()
        })
      },
      // 上传照片
      _getImgUpload(){
        this.$http.post('/update/'+localStorage.getItem('id'),this.right).then( res =>{
          console.log(res);
        })
      },
      // 点击退出登陆
      logOut(){
        window.localStorage.clear()
        this.$router.replace('/login')
      }
    },
  }
</script>


<style scoped lang="less">
.edit{
  background-color: rgb(244, 244, 244);
  height: 100vh;
}
button{
  width: 100%;
  border: 0;
  background-color: #fff;
  padding: 2.778vw 0;
  margin-top: 1.389vw;
}
.uploader{
  position: relative;
  .van-uploader{
    width: 100vw;
    height: 11.111vw;
    position: absolute;
    opacity: 0;
  }
}
</style>