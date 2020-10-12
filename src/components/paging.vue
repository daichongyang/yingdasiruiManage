<template>
  <section>
    <div class="pagination">
      <!-- <span class="total">总条数：{{total}} 条</span> -->
      <el-pagination
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        @current-change="handleCurrentPage"
        :page-size="10" 
        :total="total">
      </el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  props:['getTotal'],
  data(){
    return{
      total:0
    }
  },
  watch:{
    getTotal(val){
      this.total = val
    }
  },
  methods:{
    handleCurrentPage(val){//页码房间列表
      this.$emit('changePage',val)
    },
  }
}
</script>

<style>

</style>