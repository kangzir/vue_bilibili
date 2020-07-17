<template>
  <div class="user-box">
    <div class="user-top">
      <p><img src="../../../assets/img/head_img.jpg" alt=""></p>
      <div>
        <div>
          <p>
            <span>0</span>
            <span>粉丝</span>
          </p>
          <span>|</span>
          <p>
            <span>54</span>
            <span>关注</span>
          </p>
          <span>|</span>
          <p>
            <span>0</span>
            <span>获赞</span>
          </p>
        </div>
        <button @click="pathedit">编辑资料</button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    methods: {
      pathedit(){
        this.$router.push('/edit')
      }
    },
  }
</script>


<style scoped lang="less">
.user-box{

}
.user-top{
  display: flex;
  justify-content: space-between;
  p{
    margin-left: 10px;
    img{
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 50%;
    }

  }
  div{
    width: 250px;
    div{
      display: flex;
      align-items: center;
      span{
        color: #cbcbcb;
      }
      p{
        flex: 1;
        span{
          display: block;
          text-align: center;
          color: #404040;
          font-size: 3.611vw;
        }
        span:nth-child(2){
          color: #cbcbcb;
          font-size: 3.056vw;
        }
      }
    }
    button{
      width: 58.333vw;
      background-color: #fff;
      border: 0.278vw solid #ff819b;
      border-radius: 1.111vw;
      color: #ff819b;
      margin-left: 5.556vw;
      font-size: 3.611vw;
      height: 6.944vw;
    }
  }
}
</style>