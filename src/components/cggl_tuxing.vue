<template>
  <section class="modlude">
    <p class="margintop"></p>
    <div style="margin:20px 0;">
      <el-button type="primary" @click="goBack" size="small">返 回</el-button>
    </div>
    <div class="tuxing">
      <img class="zhyz_img" src="../assets/img/zhinengyizhan.png" alt="">
      <!--  -->
      <div class="tuxing_box1">
        <div class="radio radio_right"></div>
        <div><h5>照明</h5></div>
        <div>
          <span>编号：zm001</span>
        </div>
        <div>
          <span>状态：开</span>
        </div>
        <div style="text-align:center;">
          <button class="but">关 闭</button>
        </div>
      </div>
      <!--  -->
      <div class="tuxing_box2">
        <div class="radio radio_right"></div>
        <div><h5>智能座椅</h5></div>
        <div>
          <span>编号：znzy001</span>
        </div>
        <div>
          <span>状态：正常</span>
        </div>
        <div style="text-align:center;">
          <button class="but">详 情</button>
        </div>
      </div>
      <!--  -->
      <div class="tuxing_box3">
        <div class="radio radio_left"></div>
        <div><h5>智能垃圾桶</h5></div>
        <div>
          <span>编号：znljt001</span>
        </div>
        <div>
          <span>状态：正常</span>
        </div>
        <div style="text-align:center;">
          <button class="but">详 情</button>
        </div>
      </div>
      <!--  -->
      <div class="tuxing_box4">
        <div class="radio radio_left"></div>
        <div><h5>智能导览屏</h5></div>
        <div>
          <span>编号：zndlp001</span>
        </div>
        <div style="margin-top:20px;">
          <span>温度：25℃ 湿度：42%</span>
        </div>
        <div>
          <span>PM2.5：10ug/m3</span>
        </div>
        <div style="text-align:center;">
          <button class="but">详 情</button>
        </div>
      </div>
      <!--  -->
    </div>
    <!-- 右边信息 -->
    <div class="right_infor">
      <h3 style="color:#539cfa;">智能驿站1(zbyz001)</h3>
      <div class="font_size blue">
      位置：智云谷大道与圳美谷交叉路口
      </div>
      <div class="font_size blue">
      （经度：101    纬度：77）
      </div>
      <div class="font_size blue" style="margin:20px 0;">
        智能驿站1月均/日均人流量：450人次/15人次
      </div>
      <div class=" green">
        预约记录
      </div>
      <div class="infor_item infor_green">
        <span>智能驿站1预约</span>
        <span>14:16:10</span>
      </div>
      <div class="infor_item infor_green">
        <span>智能驿站1预约</span>
        <span>11:11:11</span>
      </div>
      <div class="infor_item infor_green">
        <span>智能驿站1预约</span>
        <span>08:34:10</span>
      </div>
      <div class="infor_item infor_green">
        <span>智能驿站1预约</span>
        <span>08:11:10</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      radio1:'地图'
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)

    },
  },
  mouted(){

  }
}
</script>

<style scoped>
.modlude{
  position:relative;
}
.right_infor{
  position: absolute;
  right:0px;
  top:0px;
  width:280px;
  min-height:600px;
  padding:20px 10px;
  background:#0a1c31;
  border:1px solid #04121f;
}
.infor_item{
  font-size:12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:2px 10px;
  border-radius:4px;
  margin-top:10px;
}
.font_size{
  font-size:12px;
  padding:0 10px;
}
.tuxing{
  width:900px;
  margin:0 auto;
  position:relative;
}
.zhyz_img{
  width:100%;
}
.tuxing_box1{
  font-size:12px;
  position: absolute;
  top:126px;
  left:80px;
    border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.tuxing_box2{
  font-size:12px;
  position: absolute;
  top:310px;
  left:230px;
    border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.tuxing_box3{
  font-size:12px;
  position: absolute;
  top:260px;
  right:250px;
  border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.tuxing_box4{
  font-size:12px;
  position: absolute;
  top:180px;
  right:90px;
  border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}

.radio{
  position:absolute;
  top:-10px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:rgba(25,220,243,0.5);
}
.radio_left{
  left:-10px;
}
.radio_right{
  right:-10px;
}
</style>