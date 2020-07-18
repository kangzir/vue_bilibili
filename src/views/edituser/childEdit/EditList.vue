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
      <span @click="isShow = true">{{right.name}}</span>
      <span>{{right.name}}</span>
      <span 
      @click="isGender = true" >{{right.gender == 1 ? '男' :'女'}}</span>
      <span>{{right.name}}</span>
      <span @click="isSign = true">{{right.user_desc}}</span>
    </p>
    <!-- 修改昵称 -->
    <van-dialog 
      v-model="isShow" 
      title="昵称" 
      show-cancel-button
      @confirm="Commitname"
      @cancel="content = ''"
     > 
      <van-field v-model="content" placeholder="请输入昵称" />
    </van-dialog>
    <!-- 修改个性签名 -->
    <van-dialog 
      v-model="isSign" 
      title="个性签名" 
      show-cancel-button
      @confirm="CommitSign"
      @cancel="content = ''"
     > 
      <van-field v-model="content" placeholder="请输入个性签名" />
    </van-dialog>

    <!-- 选择性别 -->
    <van-action-sheet
      v-model="isGender"
      :actions="gender"
      cancel-text="取消"
      close-on-click-action
      @select="selectGender"
    />
  </div>
</template>


<script>
  export default {
    name:'',
    props:['left','right'],
    data () {
      return {
        content:'',
        isShow:false,
        isGender:false,
        isSign:false,
        gender:[{name:'男',val:1},{name:'女',val:2}]
      }
    },
    methods: {
      // 修改昵称提交
      Commitname(){
        if(this.content.length !== 0){
          console.log(123);
          this.right.name = this.content
          this.getforminfo()
          this.content = ''
          return
        }else{
          this.$toast('请输入内容')
        }
      },
      // 修改提交到服务器
      getforminfo(){
        console.log(this.right);
        this.$http.post('/update/'+localStorage.getItem('id'),this.right).then( res=>{
          console.log(res);
          if(res.data.code === 200){
            this.$toast('修改成功')
          }else{
            this.$toast('修改失败')
          }
        })
      },
      // 修改个性签名提交
      CommitSign() {
        if(this.content.length !== 0){
          this.right.user_desc = this.content
          this.getforminfo()
        }else{
          this.$toast('请输入内容')
        }
        this.content = ''
      },
      // 修改性别提交
      selectGender(action){
        this.right.gender = action.val
        this.getforminfo()
      }

    },
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
    span:nth-child(1){
      padding: 6.944vw 1.389vw;
    }
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