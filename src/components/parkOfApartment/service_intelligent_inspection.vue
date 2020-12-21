<template>
  <section>
    <div class="nav_options" style="margin-bottom:20px;">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="changeActive(1)">
          <span class="txt">巡查任务</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="changeActive(2)">
        <span>巡查记录</span>
      </div>
    </div>
    <serviceInspection v-if="isActive==1"></serviceInspection>
    <serviceInspectionLog v-if="isActive==2"></serviceInspectionLog>
  </section>
</template>

<script>
import serviceInspection from '../fangwuxuncha2'//巡查任务
import serviceInspectionLog from '../fangwuxuncha1'//巡查记录
export default {
  data(){
    return{
      isActive:1
    }
  },
  methods:{
    changeActive(index){
      this.isActive = index
    }
  },
  components:{
    serviceInspection,
    serviceInspectionLog
  }
}
</script>

<style>

</style>