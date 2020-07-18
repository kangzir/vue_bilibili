<template>
  <div v-if="Category">
    <hoem-navbar></hoem-navbar>
    <div class="top-bar">
      <van-icon @click="$router.push('/Editcategory')" class="top-icon" name="more-o" />
      <van-tabs v-model="active" sticky swipeable animated >
        <van-tab v-for="(item, index) in Category" :key="index" :title="item.title">
          <van-list
            v-model="item.loading"
            :finished="item.finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check='false'
            loading-text="客官别急正在努力中..."
          >
            <detail v-for="(Categoryitem, index) in item.list" :key="index" :Categoryitem="Categoryitem"></detail>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<script>
import HoemNavbar from '../../components/common/hoem/HoemNavbar'
import Detail from './childHome/Detail'
  export default {
    name:'home',
    components:{
      HoemNavbar,
      Detail,
    },
    data() {
      return {
        Category:[],
        active:0
      }
    },
    created() {
      if(localStorage.getItem('tabList')){
        return
      }
      this._getHomeCategory()
    },
    activated() {
      if(localStorage.getItem('tabList')){
        const tabList = JSON.parse(localStorage.getItem('tabList'))
          tabList.map( item =>{
          item.list = []
          item.page = 0
          item.pagesize = 8
          item.loading = false
          item.finished = false
        })
        this.Category = tabList
        this._getDetails()
      }
    },
    watch: {
      active(){
        this._getDetails()
      }
    },
    methods: {
      // 获取列表数据
      async _getHomeCategory(){
        const res = await this.$http.get('/category')
        res.data.map( item =>{
          item.list = []
          item.page = 0
          item.pagesize = 8
          item.loading = false
          item.finished = false
        })
        this.Category = res.data
        // 列表数据获取完获取item默认数据
        this._getDetails()
      },
      async _getDetails(){
        // 获取到当前点击的item
        const CategoryItem = this.Category[this.active]
        //请求详情页数据
        const res = await this.$http('/detail/'+CategoryItem._id,{
          params:{
            page:CategoryItem.page,
            pagesize:CategoryItem.pagesize}
        })
        // 将数据添加到当前的item中
        CategoryItem.list.push(...res.data)
        //多次加载
        CategoryItem.loading = false
        // 判断是否所有数据加载完了 如果加载完了结束加载
        if(CategoryItem.pagesize > res.data.length){
          CategoryItem.finished = true
        }
        return CategoryItem
      },
      onLoad(){
        setTimeout(() => {
          this._getDetails().then( res =>{
            res.page ++
            console.log(res.page);
          })
        }, 300);
      }
    },
  }
</script>


<style  lang="less">
.van-list{
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-between;
  .van-list__finished-text,.van-list__loading{
    text-align: center;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
.top-bar{
  position: relative;
  .top-icon{
    position: absolute;
    right: 0;
    width: 6.944vw;
    background-color: #fff;
    top: 3.333vw;
    z-index: 99;
    height: 5.556vw;
    text-align: center;
    line-height: 5.556vw;
  }
}
</style>