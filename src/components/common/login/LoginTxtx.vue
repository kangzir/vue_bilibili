<template>
  <div>
    <van-cell-group>
      <van-field v-model="content" :type="type" :label="label" :placeholder="placeholder" />
    </van-cell-group>
  </div>
</template>


<script>
import _ from 'lodash'
  export default {
    name:'',
    props:['label','placeholder','type'],
    data() {
      return {
        content:'',
        shu:null
      }
    },
    mounted() {
      
    },
    methods: {

    },
    watch: {
      content(){
        this.$emit('subform', this.content)
      }
    },
  }
</script>


<style scoped lang="less">

</style>