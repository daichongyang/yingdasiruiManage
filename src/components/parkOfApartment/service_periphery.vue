<template>
  <section>
    <div class="nav_options" style="margin-bottom:20px;">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="changeActive(1)">
          <span class="txt">公园介绍</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="changeActive(2)">
        <span>公园推荐</span>
      </div>
    </div>
    <zhoubianjieshao v-if="isActive==1"></zhoubianjieshao>
    <ipsRecommend v-if="isActive==2"></ipsRecommend>
  </section>
</template>

<script>
import zhoubianjieshao from './zhoubianjieshao'//公园介绍
import ipsRecommend from '../xinxifabu/ips_recommend'//公园推荐
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
    zhoubianjieshao,
    ipsRecommend
  }
}
</script>

<style>

</style>