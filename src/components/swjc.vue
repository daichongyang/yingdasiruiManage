<template>
  <section class="modlude">
    <!-- <div style="margin:20px 0;">
      <el-button type="primary" @click="goBack" size="small">返 回</el-button>
    </div> -->
    <el-form class="gridContt" label-width="90px">
      <el-form-item size="small" label="显示切换">
        <el-radio-group v-model="radio1">
          <el-radio-button label="地图"></el-radio-button>
          <el-radio-button label="列表" :disabled="true"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="tuxing" v-show="radio1=='列表'">
      <img class="zhyz_img" src="../assets/img/zhihuidenggan.png" alt="">
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
        <div><h5>人脸识别摄像头</h5></div>
        <div>
          <span>编号：rljk001</span>
        </div>
        <div style="text-align:center;">
          <button class="but">监控查看</button>
        </div>
      </div>
      <!--  -->
      <div class="tuxing_box3">
        <div class="radio radio_left"></div>
        <div><h5>广播</h5></div>
        <div>
          <span>编号：gb001</span>
        </div>
        <div style="text-align:center;">
          <button class="but">详 情</button>
        </div>
      </div>
      <!--  -->
      <div class="tuxing_box4">
        <div class="radio radio_left"></div>
        <div><h5>显示屏</h5></div>
        <div>
          <span>编号：xsp001</span>
        </div>
        <div style="text-align:center;">
          <button class="but">详 情</button>
        </div>
      </div>
      <!--  -->
    </div>
    <!-- 右边信息 -->
        <div class="right_infor" v-show="radio1 == '列表'">
          <h3 style="color:#539cfa;">智能灯杆1</h3>
          <div class="infor_item infor_blue">
          位置：智云谷大道与圳美谷交叉路口
          </div>
          <div class="infor_item infor_blue">
          （经度：101    纬度：77）
          </div>
          <div class="infor_item infor_blue" style="margin:20px 0;">
            智能灯杆搭载的摄像头、无线AP、气象监测、公共广播、显示屏、报警器数量
          </div>
          <div class="font_size green">
            预约记录
          </div>
          <div class="infor_item infor_green">
            <span>智能灯杆1</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>智能灯杆1</span>
            <span>11:11:11</span>
          </div>
          <div class="infor_item infor_green">
            <span>智能灯杆1</span>
            <span>08:34:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>智能灯杆1</span>
            <span>08:11:10</span>
          </div>
          <!-- 智能设备列表 -->
          <div class="shebei_list">
            <div><el-button type="primary" plain size="small" round>全部</el-button></div>
            <div><el-button type="primary" plain size="small" round>路灯</el-button></div>
            <div><el-button type="primary"  size="small" round>智能灯杆1类</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆2类</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆3类</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆4类</el-button></div>
            <div><el-button type="primary" plain size="small" round>编辑</el-button></div>
          </div>
        </div>
    <!-- 打开地图 -->
    <div class="openMap" v-show="radio1 == '地图'">
          <!-- 右边信息 -->
        <div class="right_infor">
          <h3 class="h3_zn" style="color:#539cfa;">水文监测</h3>
          <div class=" font_size">
           水文监测数量：4个
          </div>
          <div class="font_size">
            正常：4个     异常：0个
          </div>
          <div class="infor_item infor_blue" style="margin-top:20px;">
            月均/日均降雨量：3000mm/100mm
          </div>
          <div class="infor_item infor_blue">
            水文监测1月均水位：42mm
          </div>
          <div class="infor_item infor_blue">
            水文监测2月均水位：42mm
          </div>
          <div class="infor_item infor_blue">
            水文监测3月均水位：42mm
          </div>
          <div class="infor_item infor_blue">
            水文监测4月均水位：42mm
          </div>
          <div class=" red">
            报警记录
          </div>
          <div class="infor_item infor_red">
            <span>水位过高报警</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_red">
            <span>内涝蓝色预警</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_red">
            <span>内涝蓝色预警</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_red">
            <span>内涝蓝色预警</span>
            <span>14:16:10</span>
          </div>
          <div class="blue">
            实时监控
          </div>  
          <div class="infor_item_img">
              <video @click="addDialog = true" src="../assets/shiping.mp4"></video>
              <video @click="addDialog = true" src="../assets/shiping.mp4"></video>
          </div>
          <!-- 智能设备列表 -->
          <div class="shebei_list">
            <div><el-button type="primary" plain size="small" round>新增</el-button></div>
          </div>
        </div>
      <div class="baidumap" id="container"></div>
    </div>
    <el-dialog title="监控视频" :visible.sync="addDialog">
      <video controls="controls" src="../assets/shiping.mp4" autoplay="autoplay"></video>
    </el-dialog>
  </section>
</template>

<script>
let changeaa
let lnglats = [
    [116.382122, 39.921176],
    [116.387271, 39.922501],
    [116.398258, 39.914600]
];
import Amap from '../assets/js/initmap'
export default {
  data(){
    return{
      radio1:'地图',
      addDialog:false
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
//添加marker标记
    addMarker(map) {
        let html = '<div class="tuxing_box2" style="position:relative;padding-bottom:20px;font-size:12px;min-height:140px;width:140px;padding:10px 10px;background:rgba(5,28,58,0.5);  border:1px solid #19dcf3;color:#19dcf3;border-radius:5px;">'+
                    '<div class="radio radio_right"></div>'+
                    '<div style="position:relative;"><h5>水文监测4</h5><span id="xiangqng" style="cursor: pointer;position:absolute;top:0;right:0;">详情</span></div>'+
                    '<div>'+
                      '<span>编号：swjc004</span>'+
                    '</div>'+
                    '<div>'+
                      '<span> 文心路与教育路交叉口</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>（经度：101    纬度：77）</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>状态：正常</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>当前水位：42mm</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>当前降雨量：60mm</span>'+
                    '</div>'+
                    '<div style="position:absolute;bottom:5px;left:0px;width:100%;box-sizing: border-box;padding:0 10px;display: flex;justify-content: space-between;">'+
                      '<button class="but">监控查看</button>'+
                    '</div>'+
                    '<div style="position: absolute;bottom: 0px;margin: 0px auto;height: 0px;width: 100%;clear: both;text-align: center;">'+
                      '<img style="z-index: 104;position: relative;" src="https://webapi.amap.com/images/sharp.png">'+
                    '</div>'+
                  '</div>'

        // for (let i = 0; i < lnglats.length; i++) {
        //     marker = new AMap.Marker({
        //         position: lnglats[i],
        //         map: map
        //     });
        //     infoWindow = new AMap.InfoWindow({
        //         isCustom: true,  //使用自定义窗体
        //         content: '<div><span>编号：'+i+'</span></div>',
        //         offset: new AMap.Pixel(16, -45)
        //     });
        //     infoWindow.open(map, marker.getPosition());
        // }
        // map.clearMap();
        let infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: html,
            offset: new AMap.Pixel(16, -45)
        });
        var marker = new AMap.Marker({
            map: map,
            position: [114.987516 ,22.842548]
        });
        marker.setMap(map);
        var marker1 = new AMap.Marker({
            map: map,
            position: [114.987 ,22.842548]
        });
         marker1.setMap(map);
        var marker2 = new AMap.Marker({
            map: map,
            position: [114.987516 ,22.84]
        });
         marker2.setMap(map);
        var marker3 = new AMap.Marker({
            map: map,
            position: [116.4811, 39.9895]
        });
         marker3.setMap(map);
        var marker4 = new AMap.Marker({
            map: map,
            position: [114.982 ,22.848]
        });
         marker4.setMap(map);
         infoWindow.open(map, marker.getPosition());
    },
    initAmap(){
      let _this = this
    // 初始化地图
      Amap.init().then((Amap)=>{
        let buildingLayer = new AMap.Buildings({zIndex:130,merge:false,sort:false,zooms:[17,20]});
        buildingLayer.setStyle(_this.options);
        var map = new AMap.Map("container", {
                resizeEnable: true,
                rotateEnable:true,
                pitchEnable:true,
                zoom: 17,
                pitch:50,//视角偏移量
                rotation:-5,
                viewMode:'3D',//开启3D视图,默认为关闭
                buildingAnimation:true,//楼块出现是否带动画
                expandZoomRange:true,
                zooms:[3,20],
                //features:['bg','point','road'],
                //mapStyle:'amap://styles/dark',
                center:[114.987516 ,22.842548],
                layers:[
                  new AMap.TileLayer(),
                  buildingLayer,
                ]
        });
        this.addMarker(map)
      })
      
    },
    changeLi(){
      this.radio1="列表"
      console.log(this.radio1)
    }
  },
  mounted(){
    let _this = this
    this.initAmap()
    // this.$nextTick(()=>{
    //     setTimeout(()=>{
    //     console.log(document.getElementById('xiangqng'))
    //     document.getElementById('xiangqng').onclick=()=>{
    //       _this.radio1 = '列表'
    //     }
    //     },1000)
    // })
  }
}
</script>

<style scoped>
.shebei_list{
  position: absolute;
  top:20px;
  left:-120px;
}
.shebei_list div {
  margin-bottom:10px;
}
.modlude{
  position:relative;
}
.right_infor_top{
  margin-bottom:10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  /* padding:0 10px; */
}
.tuxing{
  width:900px;
  margin:0 auto;
  position:relative;
}
.zhyz_img{
  /* width:100%; */
}
.tuxing_box1{
  font-size:12px;
  position: absolute;
  top:70px;
  left:170px;
    border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.tuxing_box2{
  font-size:12px;
  position: absolute;
  top:240px;
  left:-70px;
    border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.tuxing_box3{
  font-size:12px;
  position: absolute;
  top:50px;
  right:420px;
    border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.tuxing_box4{
  font-size:12px;
  position: absolute;
  top:360px;
  right:340px;
    border:1px solid #19dcf3;
  color:#19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:rgba(5,28,58,0.5);
}
.but{
    padding:0px 10px;
  background: #19dcf3;
  border:0px;
  color:rgba(5,28,58,0.5);
  margin-top:5px;
  display: inline-block;
  cursor: pointer;
}
.radio{
  position:absolute;
  top:-10px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:rgb(25,220,243);
}
.radio_left{
  left:-10px;
}
.radio_right{
  right:-10px;
}
.openMap{
  position: relative;
  margin-top:20px;
  margin-bottom:20px;
}
.baidumap{
  height:700px;
  width:100%;
}
.infor_item_img{
  display: flex;
  justify-content: space-between;
  margin-top:10px;
}
.infor_item_img video{
  width: 130px;
  margin-right:10px;
}
.infor_item_img video:nth-child(2n){
  margin-right:0px;
}
</style>