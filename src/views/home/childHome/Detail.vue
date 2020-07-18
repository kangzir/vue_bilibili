<template>
  <div class="detail-box" @click="$router.push('/hoemdetail/'+Categoryitem.id)">
    <div class="Play-box">
      <img :src="Categoryitem.img">
      <div>
        <div class="PlayVV">
          <i class=" icon-play2"></i>
          <span>1886</span>
        </div>
        <div class="Message">
          <i class="icon-file-text"></i>
          <span>35</span>
        </div>
      </div>
    </div>
    <p>{{Categoryitem.name}}</p>
  </div>
</template>

<script>
  export default {
    name:'',
    props:['Categoryitem']
  }
</script>


<style scoped lang="less">
.detail-box{
  width: 50vw;
  margin-top: 5.556vw;
  .Play-box{
    position: relative;
    overflow: hidden;
    >div{
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      height: 8.333vw;
      z-index: 9;
      position: absolute;
      bottom: 0.833vw;
      right: 0;
      left: 0;
      >div{
        padding: 0 1.389vw;
      }
      .PlayVV{
        position: absolute;
        bottom: 1.389vw;
      }
      .Message{
        position: absolute;
        right: 2.778vw;
        bottom: 1.389vw;
      }
    }
    img{
      width: 100%;
      height: 30.556vw;
    }
  }
  p{
    font-size: 3.889vw;
    padding: 0vw 1.389vw;
    margin-bottom: 11.111vw;
  }
}
</style>