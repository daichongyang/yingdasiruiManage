<template>
  <section class="modlude">
    <p class="margintop"></p>
    <!-- 广播发布 -->
    <el-form class="gridContt" label-width="">
      <el-form-item size="small" label="显示切换">
        <el-radio-group v-model="radio1">
          <el-radio-button label="地图"></el-radio-button>
          <el-radio-button label="列表" :disabled="true"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <!-- 打开地图 -->
    <div class="openMap">
  <!-- 右边信息 -->
        <div class="right_infor">
          <div class="right_infor_top">
            <el-button style="width:100px;" type="primary" size="small" round>语音直播</el-button>
            <el-button style="width:100px;" type="primary" size="small" round @click="goGgtz">新增广播</el-button>
          </div>
          <h3 style="color:#539cfa;">广播</h3>
          <div class="font_size blue">
            正在广播
          </div>
          <div class="infor_item infor_blue">
            <span>当前   所有广播正在播放晨间音乐</span>
            <img src="../assets/img/index/播放.png" alt="">
          </div>
          <div class="infor_item infor_blue">
            <span>预约   08:00广播1广播2播放游客入园须知</span>
            <img src="../assets/img/index/播放.png" alt="">
          </div>
          <div class="green">
            广播记录
          </div>
          <div class="infor_item infor_green">
            <span>  湖区行人靠近预警</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>  游客点播《signal》 </span>
            <span>11:11:11</span>
          </div>
          <div class="infor_item infor_green">
            <span>湖区行人靠近预警</span>
            <span>08:34:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>  游客点播《signal》  </span>
            <span>08:11:10</span>
          </div>
          <!-- 智能设备列表 -->
          <div class="shebei_list">
            <div><el-button type="primary" plain size="small" round>全部</el-button></div>
            <div><el-button type="primary" size="small" round>广播1</el-button></div>
            <div><el-button type="primary" plain size="small" round>广播2</el-button></div>
            <div><el-button type="primary" plain size="small" round>广播3</el-button></div>
            <div><el-button type="primary" plain size="small" round>广播4</el-button></div>
            <div><el-button type="primary" plain size="small" round>新增</el-button></div>
          </div>
        </div>
      <div class="baidumap" id="container"></div>
    </div>
  </section>
</template>
<script>
import Amap from '../assets/js/initmap'
// import {getYqfkPerson, deptaddList, selectOffice,locationHouse,deptupdateList,deptdeleteList} from '../../api/api'
export default {
  data(){
    return{
      data:[
        {
          label:'英达斯瑞智慧公园',
          children:[
            {
              label:'智慧谷',
              children:[
                { 
                  label:'荣耀馆',
                  children:[
                    {
                      label:'显示大屏',
                    },
                    {
                      label:'智能机器人',
                    },
                    {
                      label:'电梯显示屏',
                    },

                  ]
                },
                {
                  label:'智能驿站'
                } 
              ]
            },
            {
              label:'智动谷'
            }
          ]
        }
      ],
      radio1:'地图',
      isActive:1,
      remark:'',//修改备注
      total:1,
      selectArr:[],
      dialogImageUrl: '',
      dialogVisible: false,
      updataVisible:false,
      listLoading:false,
      sels: [],//列表选中列
      locationHouseList:[],//区域层级列表
      selectOfficeList:[],//分店下拉列表
      temListtList:[],//房间模板列表
      checkList:[],
      houseAssign:{
        houseIds:[],//房间id
        officeId:''
      },
      checkInfor:{
        current:1,
        size:10,
        type:1
      },//条件查询
      updataForm:{},
      addForm:{},
      params:{},
      newTree:[],
      newTree1:[],
      newTree2:[
        {
          label:'疏散广播'
        },
        {
          label:'闭园音乐'
        },
        {
          label:'警告远离广播'
        }
      ],
      checked:true
    }
  },
  methods:{
    checkChange(val1,val2){
      console.log(val1,val2)
      this.newTree1 = val2.checkedNodes
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    goGgtz(){
      this.$router.push({
        path:'/ggtz2',
        query:{
          isActive:4
        }
      })

      
    },
    handleRemove(val1,val2){
      console.log(val1,val2)
    },
//添加marker标记
    addMarker(map) {
        let html = '<div class="tuxing_box2" style="position:relative;padding-bottom:20px;font-size:12px;min-height:100px;width:140px;padding:10px 10px;background:rgba(5,28,58,0.5);border:1px solid #19dcf3;color:#19dcf3;border-radius:5px;">'+
                    '<div class="radio radio_right"></div>'+
                    '<div style="position:relative;"><h5>广播1</h5><span style="cursor: pointer;position:absolute;top:0;right:0;">详情</span></div>'+
                    '<div>'+
                      '<span> 编号：gb001</span>'+
                    '</div>'+
                    '<div>'+
                      '<span> 文心路与教育路交叉口</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>14:00广播安全注意项</span>'+
                    '</div>'+
                    '<div style="position:absolute;bottom:5px;left:0px;width:100%;box-sizing: border-box;padding:0 10px;display: flex;justify-content: space-between;">'+
                      '<button class="but">语音直播</button>'+
                      '<button class="but" id="xiangqng">新增广播</button>'+
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
  },
  mounted(){
    this.initAmap()
    let _this = this
    this.$nextTick(()=>{
        setTimeout(()=>{
        console.log(document.getElementById('xiangqng'))
        document.getElementById('xiangqng').onclick=()=>{
          _this.goGgtz()
        }
        },1000)
    })
  }
}
</script>
<style scoped>
.toolbar{
  overflow: hidden;
  display: block;
}
.boxx{
  display: flex;
  align-items: center;
}
.gridContt{
  line-height:30px;

}
.choise_equipment{
  border:1px solid #a1d6f4;
  border-radius:10px;
  padding:20px 20px;
  min-height:100px;
  width:400px;
  display: inline-block;
}
.openMap{
  position:relative;
  margin-top:20px;
  margin-bottom:20px;
}
.baidumap{
  height:700px;
  width:100%;
}
.tuxing_box2{
  font-size:12px;
  border:1px solid #19dcf3;
  border-radius:5px;
  padding:10px 10px;
  background:#fff;
  width:140px;
  min-height:100px;
}
.but{
    padding:0px 10px;
  background: #19dcf3;
  border:0px;
  color:#fff;
  margin-top:5px;
  display: inline-block;
  cursor: pointer;
}
.radio{
  position:absolute;
  top:0px;
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
.shebei_list{
  position: absolute;
  top:20px;
  left:-120px;
}
.shebei_list div {
  margin-bottom:10px;
}
</style>


