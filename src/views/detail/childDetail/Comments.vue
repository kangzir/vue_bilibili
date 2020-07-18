<template>
  <div class="comments-box">
    <div class="comments-title">
      <span>评论</span>
      <span>({{commlength}})</span>
    </div>
    <div class="userinfo">
      <img v-if="userInfo" :src="userInfo.user_img">
      <img v-else src="../../../assets/img/default_img.jpg" alt="">
      <input type="text" v-model="content">
      <button @click="subComments">发表</button>
    </div>
    <comments-list :contents="contents"></comments-list>
  </div>
</template>


<script>
import CommentsList from './CommentsList'
  export default {
    name:'',
    components: {
      CommentsList
    },
    data() {
      return {
        userInfo:null,
        content:'',
        contents:null,
        commlength:0
      }
    },
    created() {
      this._getuserinfo()
    },
    methods: {
      // 获取个人信息
      async _getuserinfo(){
        const {data:res} = await this.$http.get('/user/'+localStorage.getItem('id'))
        this.userInfo = res[0]
        // console.log(this.userInfo);
        this._getCommentsList()
      },
      // 获取评论数据
      async _getCommentsList(){
        const res = await this.$http.get('/comment/'+this.$route.params.id)
        this.commlength = res.data.length
        this.contents = this.changeCommentData(res.data)
        // console.log(this.contents);
      },
      changeCommentData(data) {
        function fn(temp) {
          let arr1 = [];
          for (var i = 0; i < data.length; i++) {
            if (data[i].parent_id == temp) {
              arr1.push(data[i]);
              data[i].child = fn(data[i].comment_id);
            }
          }
          return arr1;
        }
        return fn(null);
      },
      subComments(){
        if(!localStorage.getItem('token')){
          this.$router.push('/login')
        }
        this.$emit('subComments',this.content)
        this.content = ""
      }
    },
  }
</script>


<style scoped lang="less">
.comments-box{
  padding: 0vw 2.778vw;
}
.comments-title{
  span:nth-child(2){
    color: rgb(183, 183, 183);
    margin-left: 2.778vw;
  }
}
.userinfo{
  display: flex;
  width: 83.333vw;
  margin: 2.778vw 0;
  img{
    width: 8.333vw;
    border-radius: 50%;
  }
  input{
    border: none;
    background-color: rgb(244, 244, 244);
    border-radius: 5.556vw;
    width: 41.667vw;
    margin-left:2.778vw;
    padding: 0 2.778vw;
  }
  button{
    border: none;
    color: #fff;
    background-color: rgb(251, 114, 153);
    border-radius: 5.556vw;
    padding: 1.389vw 3.333vw;
    font-size: 3.889vw;
  }
}
</style>