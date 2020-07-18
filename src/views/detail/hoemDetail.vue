<template>
  <div v-if="detailInfo">
    <hoem-navbar></hoem-navbar>
    <div class="detail-box">
      <video controls="controls" :src="detailInfo.content"></video>
      <div class="detail-text">
        <div class="title-box">
          <span v-if="detailInfo.category.title">{{detailInfo.category.title}}</span>
          <span>{{detailInfo.name}}</span>
        </div>
        <div class="user-box">
          <span>{{detailInfo.userinfo.name}}</span>
          <span>146.8万观看</span>
          <span>6575弹幕</span>
          <span>{{detailInfo.date}}</span>
        </div>
        <div class="icon-box">
          <span @click="Collect" :class="{active:isActive}"><i class=" icon-star-full"></i>收藏</span>
          <span @click="Follower" :class="{active:isFollower}"><i class=" icon-bubble"></i>关注</span>
          <span><i class=" icon-redo2"></i>分享</span>
        </div>
      </div>
    </div>
    <div class="imglist">
      <detail v-for="(item, index) in imglist" :key="index" :Categoryitem="item"></detail>
    </div>
    <comments @subComments="subComments"></comments>
  </div>
</template>


<script>
import HoemNavbar from '../../components/common/hoem/HoemNavbar'
import Detail from '../../views/home/childHome/Detail'
import Comments from './childDetail/Comments'
  export default {
    name:'',
    components:{
      HoemNavbar,
      Detail,
      Comments,
    },
    data() {
      return {
        id:0,
        detailInfo:null,
        imglist:null,
        Procom:{
          comment_content:'',
          comment_date:'',
          parent_id:null,
          article_id:null
        },
        isActive:null,
        isFollower:null
      }
    },
    created(){
      this.id = this.$route.params.id
      this._getArticle()  
      this._getCommend()
      this.mouCollect()
    },
    mounted() {
      this.$bus.$on('Reply',(id) =>{
        this.Procom.parent_id = id
      })
    },
    methods: {
      // 获取文章数据
      async _getArticle() {
        const res = await this.$http.get('/article/' + this.id)
        this.detailInfo = res.data[0]
        if(this.detailInfo){
          //获取到了内容再获取当前状态
          this.mouFollower()
        }
      },
      // 获取列表数据
      async _getCommend(){
        const {data:res} = await this.$http.get('/commend')
        this.imglist = res
      },
      // 获取当然时间
      getNowFormatDate() {
          var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
      } ,
      // 发表评论请求
      async subComments(val){
        const newdate = this.getNowFormatDate()
        this.Procom.comment_content = val
        this.Procom.comment_date = newdate
        this.Procom.article_id = this.$route.params.id
        // this.Procom.parent_id = null
        const res = await this.$http.post('/comment_post/'+localStorage.getItem('id'),this.Procom)
        console.log(res);
        console.log(this.Procom.parent_id);
        console.log(this.Procom);
        val = ''
        this._getCommend()
      },
      // 点击收藏
      async Collect(){
        if(localStorage.getItem('token')){
         const res = await this.$http.post('/collection/'+localStorage.getItem('id'),{article_id:this.$route.params.id})
         console.log(res);
          if(res.data.msg == '收藏成功'){
            this.isActive = true
          }else{
            this.isActive = false
          }
        }
      },
      // 页面加载完获取数据状态
      async mouCollect(){
        if(localStorage.getItem('token')){
        const res = await this.$http.get('/collection/'+localStorage.getItem('id'),{
          params:{article_id:this.$route.params.id}
        })
        console.log(res);
        this.isActive = res.data.success
        }
      },
      // 点击关注发帖用户
      async Follower(){
        if(localStorage.getItem('token')){
          const res = await this.$http.post('/sub_scription/'+localStorage.getItem('id'),{sub_id:this.detailInfo.userid})
          console.log(res);
          if(res.data.msg == '关注成功'){
            this.isFollower = true
          }else{
            this.isFollower = false
          }
         }
      },
      // 在文章数据获取完 再获取关注的状态
      async mouFollower(){
        console.log(this.detailInfo);
        if(localStorage.getItem('token')){
          const res = await this.$http.get('/sub_scription/'+localStorage.getItem('id'),{
            params:{sub_id:this.detailInfo.userid}
          })
          this.isFollower = res.data.success
          console.log(res);
        }
      }
    },
    watch: {
      // 监听route的改变
      $route(){
        this._getArticle()
        this._getCommend()
        this.mouCollect()
      }
    },
  }
</script>

<style scoped lang="less">
.detail-box{
  width: 100%;
  height: 55.556vw;
  video{
    width: 100%;
  }
}
.detail-text{
  padding: 2.778vw 4.167vw;
}
.title-box{
  margin-bottom: 2.778vw;
  span:nth-child(1){
    color: rgb(248, 153, 180);
    background-color: rgb(244, 244, 244);
    padding: 0.833vw;
    border-radius: 2.778vw;
    margin-right: 2.778vw;
  }
  span:nth-child(2)
}
.user-box{
  margin-bottom: 2.778vw;
  span:nth-child(1){
    color: #000;
  }
  span{
    color: rgb(175, 175, 175);
    margin-right: 2.778vw;
  }
}
.icon-box{
  span{
    margin-right: 2.778vw;
    color: rgb(117, 117, 117);
  }
}
.imglist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 36.111vw;
  div{
    width: 47.222vw;
  }
}
.active{
  color: rgb(255, 129, 155) !important;
}
</style>