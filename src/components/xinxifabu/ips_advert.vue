<template>
  <section>
    <div class="nav_options" style="margin-bottom:20px;">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="changeActive(1)">
          <span class="txt">管家app</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="changeActive(2)">
        <span>小程序</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 3}" @click="changeActive(3)">
        <span>门户</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 4}" @click="changeActive(4)">
        <span>智能设备</span>
      </div>
    </div>
    <ipsAppBanner v-if="isActive==1"></ipsAppBanner>
    <!-- <ipsDeviceAdvertising v-if="isActive==2"></ipsDeviceAdvertising> -->
  </section>
</template>

<script>
import ipsAppBanner from './ips_app_banner'//管家app
import ipsDeviceAdvertising from './ips_device_advertising'//小程序
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
    ipsAppBanner,
    ipsDeviceAdvertising
  }
}
</script>

<style>

</style>