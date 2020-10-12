<template>
  <section>
    <div class="nav_options">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="isActive=1">
        <span>云门禁控制器</span>
      </div>
      <!-- <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="isActive=2">
        <span>对讲机</span>
      </div> -->
      <div class="nav_option" :class="{nav_option_active:isActive == 3}" @click="isActive=3">
        <span>门口机</span>
      </div>
      <!-- <div class="nav_option" :class="{nav_option_active:isActive == 4}" @click="isActive=4">
        <span>IP门口机</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 7}" @click="isActive=7">
        <span>白名单ncu</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 8}" @click="isActive=8">
        <span>霍尼门禁权限</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 6}" @click="isActive=6">
        <span>商汤人脸机</span>
      </div> -->
      <div class="nav_option_right" style="float:right;">
        <el-button size = "small">新增设备类型</el-button>
      </div>
    </div>
    <div class="modoule_online">
      <deviceInfor :top-active="isActive"></deviceInfor>
    </div>

  </section>  
</template>

<script>
import deviceInfor from './deviceInfor';
export default {
  data(){
    return{
      isActive:1
    }
  },
  methods:{

  },
  mounted(){

  },
  components:{
    deviceInfor
  }
}
</script>
<style scoped>
 .modoule_online{
   padding:0 40px;
 }
</style>