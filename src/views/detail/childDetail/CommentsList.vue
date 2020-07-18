<template>
  <div v-if="contents">
    <div class="comments" v-for="(item, index) in contents" :key="index">
      <div class="comments-box">
        <div class="user">
          <img :src="item.userinfo.user_img">
          <p>
          <span>{{item.userinfo.name}}</span>
          <span>{{item.comment_content}}</span>
          </p>
        </div>
        <div class="info">
          <p>{{item.comment_date}}</p>
          <a href.stop="" @click="Reply(item.comment_id)">回复</a>
        </div>
      </div>
      <comments-list-child :items="item" class="childlist"></comments-list-child>
    </div>
  </div>
</template>


<script>
import commentsListChild from './commentsListChild'
  export default {
    name:'',
    components:{
      commentsListChild
    },
    props:['contents'],
    methods: {
      Reply(id){
        this.$bus.$emit('Reply',id)
      }
    },
  }
</script>


<style scoped lang="less">
.comments{
  border-bottom: 0.278vw solid rgb(218, 216, 216);
}
.comments-box{
  display: flex;
  justify-content: space-between;
  .user{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img{
      width: 9.722vw;
      height: 9.722vw;
    }
    p{
      margin-left: 2.778vw;
      span{
        display: block;
      }
      span:nth-child(1){
        color: rgb(124, 124, 124);
      }
    }
  }
  .info{
    p{
      padding: 0;
      margin-bottom: 1.389vw;
      color: rgb(124, 124, 124);
    }
    a{
      margin-left: 1.667vw;
      color: red;
    }
  }
  .childlist{
    margin-left: 2.778vw;
  }
}
</style>