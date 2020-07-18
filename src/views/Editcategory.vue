<template>
  <div class="editcategory">
    <van-divider class="use" dashed>现有栏目</van-divider>
    <div>
      <p @click="datlibtn(index)" v-for="(item, index) in tabList" :key="index">{{item.title}}</p>
    </div>
    <van-divider class="DonTuse" dashed>已删除栏目</van-divider>
    <div>
      <p @click="pushbtn(index)" v-for="(item, index) in deletea" :key="index">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    data() {
      return {
        tabList:[],
        deletea:[]
      }
    },
    created() {
      if(localStorage.getItem('tabList')&&localStorage.getItem('deletea')){
        this.tabList = JSON.parse(localStorage.getItem('tabList'))
        this.deletea = JSON.parse(localStorage.getItem('deletea'))
        return
      }
      this._getCategory()
    },
    watch: {
      tabList(){
        localStorage.setItem('tabList',JSON.stringify(this.tabList))
      },
      deletea(){
        localStorage.setItem('deletea',JSON.stringify(this.deletea))
      }
    },
    methods: {
      async _getCategory(){
        const res = await this.$http.get('/category')
        console.log(res);
        this.tabList = res.data
      },
      datlibtn(i){
        if(this.tabList.length < 3){
          this.$toast('不能在删了客官!')
          return
        }
        this.deletea.push(this.tabList[i])
        this.tabList.splice(i,1)
      },
      pushbtn(i){
        this.tabList.push(this.deletea[i])
        this.deletea.splice(i,1)
      }
    },
  }
</script>


<style scoped lang="less">
.use{
  color: rgb(76, 145, 235);
}
.DonTuse{
  color: rgb(238, 10, 36);
}
.editcategory{
  
  div:nth-last-of-type(3){
    // background-color: red;
    display: flex;
    flex-wrap: wrap;
    p{
      width: 19.444vw;
      border: 0.556vw solid rgb(164, 199, 245);
      margin: 2.778vw 5.556vw;
      text-align: center;
    }
  }
  div:nth-last-of-type(1){
    display: flex;
    flex-wrap: wrap;
    p{
      width: 19.444vw;
      border: 0.556vw solid red;
      margin: 2.778vw 5.556vw;
      text-align: center;
    }
  }
}
</style>