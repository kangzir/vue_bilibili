<template>
  <div>
    <div class="child-box">
      <div class="user">
        <img v-if="items.userinfo" :src="items.userinfo.user_img">
        <p>
        <span>{{items.userinfo.name}}</span>
        <span>{{items.comment_content}}</span>
        </p>
      </div>
      <div class="info">
        <p>{{items.comment_date}}</p>
        <a href="">回复</a>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name:'commentsListChild',
    props:['items']
  }
</script>


<style scoped lang="less">
.child-box{
   display: flex;
  justify-content: space-between;
  border-radius: 2.778vw;
  padding: 0 2.778vw;
  background-color: rgb(238, 237, 237);
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
}
</style>