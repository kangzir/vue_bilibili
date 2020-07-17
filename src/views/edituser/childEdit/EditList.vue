<template>
  <div class="editlist">
    <p class="left">
      <span v-for="(item, index) in left" :key="index">{{item}}</span>
    </p>
    <p class="right">
      <span>
        <img :src="right.user_img" v-if="right.user_img">
        <img src="../../../assets/img/head_img.jpg" v-else>
      </span>
      <span>{{right.name}}</span>
      <span>{{right.name}}</span>
      <span>{{right.gender}}</span>
      <span>{{right.name}}</span>
      <span>{{right.name}}</span>
    </p>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['left','right']
  }
</script>


<style scoped lang="less">
.editlist{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 5.556vw 0;
  p{
    margin: 0;
  }
  .left{
    span{
      display: block;
      padding: 2.778vw 1.389vw;
    }
  }
  .right{
    span{
      display: block;
      padding: 2.778vw 1.389vw;
      img{
        width: 13.889vw;
        border-radius: 50%;
      }
    }
  }
}
</style>