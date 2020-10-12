<template>
  <section class="modlude">
    <div style="margin:20px 0;" v-show="radio1=='列表'">
      <el-button type="primary" @click="radio1 = '地图'" size="small">返 回</el-button>
    </div>
    <el-form class="gridContt" label-width="" v-show="radio1=='地图'">
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
          <h3 class="h3_zn" style="color:#539cfa;">智能灯杆1</h3>
          <div class="font_size">
          位置：智云谷大道与圳美谷交叉路口
          </div>
          <div class="font_size">
          （经度：101    纬度：77）
          </div>
          <div class="font_size" style="margin:20px 0;">
            搭载：人脸识别摄像头，无线AP，气象监测，公共广播，显示屏，报警器
          </div>
          <div class="red">
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
          <div class="right_infor_top">
            <el-button style="width:100px;" type="primary" size="small" round>全 开</el-button>
            <el-button style="width:100px;" type="primary" size="small" round>全 关</el-button>
          </div>
          <h3 class="h3_zn" style="color:#539cfa;">智能灯杆</h3>
          <div class="font_size ">
          总数量:110
          </div>
          <div class="font_size">
          在线/离线：108/2
          </div>
          <div class="font_size">
          智能灯杆（4类）/普通灯杆数量：47/63
          </div>
          <div class="font_size">
          摄像头搭载量：47
          </div>
          <div class="font_size">
          无线AP搭载量：20
          </div>
          <div class="font_size">
          气象监测搭载量：20
          </div>
          <div class="font_size">
          公共广播搭载量：20
          </div>
          <div class="font_size">
          显示屏搭载量：20
          </div>
          <div class="font_size">
          报警器搭载量：47
          </div>
          <div class="red">
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
          <!-- 智能设备列表 -->
          <div class="shebei_list">
            <div><el-button type="primary" size="small" round>全部</el-button></div>
            <div><el-button type="primary" plain size="small" round>路灯</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆1类</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆2类</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆3类</el-button></div>
            <div><el-button type="primary" plain size="small" round>智能灯杆4类</el-button></div>
            <div><el-button type="primary" plain size="small" round>编辑</el-button></div>
          </div>
        </div>
      <div class="baidumap" id="container"></div>
    </div>
  </section>
</template>

<script>

import Amap from '../assets/js/initmap'
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
//添加marker标记
    addMarker(map) {
        let html = '<div class="tuxing_box2" style="position:relative;padding-bottom:20px;font-size:12px;min-height:100px;width:140px;padding:10px 10px;background:rgba(5,28,58,0.5);  border:1px solid #19dcf3;color:#19dcf3;border-radius:5px;">'+
                    '<div class="radio radio_right"></div>'+
                    '<div style="position:relative;"><h5>智能灯杆1</h5><span id="xiangqng" style="cursor: pointer;position:absolute;top:0;right:0;">详情</span></div>'+
                    '<div>'+
                      '<span> 1类  编号：zhdg1-001 </span>'+
                    '</div>'+
                    '<div>'+
                      '<span> 文心路与教育路交叉口</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>（经度：101    纬度：77）</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>照明：开</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>人脸识别摄像头：开</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>无线AP：开</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>气象监测：开</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>   公共广播：关</span>'+
                    '</div>'+
                    '<div>'+
                      '<span> 显示屏：开</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>一键报警：运行中</span>'+
                    '</div>'+
                    '<div style="position: absolute;bottom: 0px;margin: 0px auto;height: 0px;width: 100%;clear: both;text-align: center;">'+
                      '<img style="z-index: 104;position: relative;" src="https://webapi.amap.com/images/sharp.png">'+
                    '</div>'+
                  '</div>'
        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: html,
            offset: new AMap.Pixel(16, -45)
        });

        map.clearMap();
        var marker = new AMap.Marker({
            map: map,
            position: [114.987516 ,22.842548]
        });
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
      Amap.AmapInit().then((Amap)=>{
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
    this.initAmap()
    let _this = this
    this.$nextTick(()=>{
        setTimeout(()=>{
        console.log(document.getElementById('xiangqng'))
        document.getElementById('xiangqng').onclick=()=>{
          _this.radio1 = '列表'
        }
        },1500)
    })
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
</style>