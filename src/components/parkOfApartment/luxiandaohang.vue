<template>
  <section class="modlude">
    <p class="margintop"></p>
    <!-- <div class="background_img" v-if="radio1=='列表'">
      <img src="../assets/img/停车场.png" alt="">
    </div> -->
    <el-form class="gridContt" label-width="">
      <el-form-item size="small" label="显示切换">
        <el-radio-group v-model="radio1">
          <el-radio-button label="地图"></el-radio-button>
          <el-radio-button label="列表" @click="getList"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="tuxing" v-show="radio1=='列表'">
      <!-- <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="creator" label="创建者"></el-table-column>
        <el-table-column prop="checkImg" label="选中该类的图标路径" ></el-table-column>
        <el-table-column prop="uncheckImg"label="未选中该类的图标路径"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{$root.getDateArray(scope.row.gmtCreate)[9]}}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width=250>
          <template slot-scope="scope">
            <el-button type="warning" size="small" @click="updateShowBox(scope.row)">修 改</el-button>
            <el-button type="danger" size="small" @click="deleInfor(scope.row.id)">删 除</el-button>
          </template>
        </el-table-column>
      </el-table> -->
      <!-- <paging @changePage = handleCurrentPage :get-total='total'></paging> -->
    </div>
    <!-- 打开地图 -->
    <div class="openMap" v-show="radio1 == '地图'">
      <!-- 右边信息 -->
    <div class="right_infor">
        <el-form label-position="right" label-width="90px" :model="formPush" ref='formUpdate'>
          <el-form-item label="请选择起点" size="small">
            <el-select v-model="startIdIndex" @change="getlisttype1">
              <el-option v-for="(item,index) in asset" :label="item.name" :value="index" :key="index" ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择终点" size="small">
            <el-select v-model="endIdIndex" @change="getlisttype2">
              <el-option v-for="(item,index) in asset" :label="item.name" :value="index" :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      <div class="font_size" v-for="(item,index) in formPush.points" :key="index" style="margin-bottom:10px;">
        <p>进度:{{item.latitude}}</p>
        <p>进度:{{item.longitude}}</p>
      </div>
       <div slot="footer" class="dialog-footer">

         <el-button size="small" @click="addList('addList')">新 增</el-button>
         <el-button type="primary" plain size="small" @click="yulan">预览</el-button>

       </div>
      </div>

    </div>
    <div class="baidumap" id="container" v-show="radio1 == '地图'"></div>
    </div>
  </section>
</template>

<script>
  import Tmap from '../../assets/js/initmap.js'
  import {
    getTourist,Wayplansave,assetSelect,selectPlan
  } from '../../url/api';
  export default {
    data() {
      return {
        radio1: '地图',
        formSearch: { //查询条件
          current: 1,
          size: 10
        },
        startIdIndex:'',
        endIdIndex:'',
        asset:[],
        formUpdate:{
          points:[]
        },
        latLngList:[],//点击的经纬度
        formPush:{
          points:[],
          startId:'',
          endId:''
        },
        total:0,
        startlt:{
          latitude:'',
          longitude:'',
        },
        endlt:{
          latitude:'',
          longitude:'',
        },
        mapObj:{},
        latLng:[],//预览点击的经纬度
        geometries:[],//点标记数据数组
        formData: [], //数据
        inforList:[]
      }
    },
    methods: {
      getList(){
       selectPlan({}).then((res)=>{//查询路线
          this.radio1 = "列表"
          console.log(res)
          if(res.data.code == 200){
            this.inforList = res.data.data
          }
        })
      },
    getlisttype1(val){//选中起始点
      console.log(val,this.asset[val])
      let _this = this
      let position = {}
      
      this.formPush.startType = this.asset[val].type
      this.formPush.startId = this.asset[val].id
      position={
        lat:this.asset[val].latitude,
        lng:this.asset[val].longitude,
      }
      this.startlt.latitude=this.asset[val].latitude
      this.startlt.longitude=this.asset[val].longitude
      this.mapObj.setCenter(new TMap.LatLng(position.lat,position.lng));//设置地图的中心位置
    },
     getlisttype2(val){//选中终点
       console.log(val)
       let _this = this
       let position = {}
      this.formPush.endType = this.asset[val].type
      this.formPush.endId = this.asset[val].id
      position={
        lat:this.asset[val].latitude,
        lng:this.asset[val].longitude,
      }
      this.endlt.latitude=this.asset[val].latitude
      this.endlt.longitude=this.asset[val].longitude
      this.mapObj.setCenter(new TMap.LatLng(position.lat,position.lng));//设置地图的中心位置
     },
      addList(addList){//添加
        // if(this.endlt){
        //   this.formPush.points.push(this.endlt)
        // }
        // if(this.startlt){
        //   this.formPush.points.unshift(this.startlt)
        // }
        Wayplansave(this.formPush).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message({
              message: '添加成功',
              type: 'success'
            })
           this.formPush.points = []
          }else{
            this.$message('添加失败')
          }
        })
      },
      initList() {
        assetSelect({}).then((res)=>{//公园内设施列表
          console.log(res)
          if(res.data.code == 200){
            this.asset = res.data.data
          }
        })
        getTourist({}).then((res) => {//获取景点列表接口
          console.log(res)
          if (res.data.code == 200) {
            let _this = this
            this.formData = res.data.data.records.filter((item,index) => {
              console.log(item.latitude,item.longitude)
              let obj ={
                "id": index,   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
                "styleId": 'myStyle',  //指定样式id
                "position": new TMap.LatLng(item.latitude, item.longitude),  //点标记坐标位置22.831779, 114.980945
                "properties": {//自定义属性
                    "name": item.name,
                   "label": item.label,
                   "latitude":item.latitude,
                   "longitude":item.longitude,

                  },
                }

               _this.geometries.push(obj)
               // let center = new TMap.LatLng(item.latitude, item.longitude);
               // _this.addInfoWindow(center,item)
              return item
            })
            this.getMarkerLayer( _this.geometries)

            this.total = res.data.data.total
          } else {
            this.$message(res.data.msg);
          }
        })
      },
      goBack() {
        this.$router.go(-1)
      },
      playLine(geometries) { //划线 = this
        console.log(geometries)
        let num = Math.random()
        let _this = this
        let paths=[]
        geometries.forEach((item)=>{
          let obj = new TMap.LatLng(item.properties.latitude, item.properties.longitude)
          paths.push(obj)

        })
        let polyline = new TMap.MultiPolyline({
          id: num,
          map: _this.mapObj,
          styles: {
            'polyline': new TMap.PolylineStyle({
              'color': '#00FF00', //线填充色
              'width': 4, //折线宽度
              'borderWidth': 5, //边线宽度
              'borderColor': 'rgba(0,125,255,0.5)', //边线颜色
              'lineCap': 'round' //线端头方式
            }),

          },
          geometries: [{
            'id': 'polyline', //折线图形数据的标志信息
            'styleId': 'polyline', //样式id
            'paths': paths, //折线的位置信息
            'properties': { //折线的属性数据
              'title': 'customStyle'
            }
          }, ]
        });
      },
      //添加infoWindow
      addInfoWindow(center,content) {
         let _this = this
            console.log(content)

         new TMap.InfoWindow({
              map: _this.mapObj,
              position: center, //设置信息框位置
              content: '<div class="tuxing_box2" style="position:relative;padding-bottom:20px;font-size:12px;min-height:100px;width:140px;padding:10px 10px;background:rgba(5,28,58,0.5);  border:1px solid #19dcf3;color:#19dcf3;border-radius:5px;">'+
                      '<div class="radio radio_right"></div>'+
                      '<div style="position:relative;"><h5>智云谷</h5><span id="xiangqng" style="cursor: pointer;position:absolute;top:0;right:0;">详情</span></div>'+
                      '<div>'+
                        '<span>  深山合作区-英达斯瑞公园- </span>'+
                        '<div>'+
                        "公园名称："+content.name+
                        '</div>'+
                      '</div>'+
                      '<div>'+
                        '<span> 4573 </span>'+
                      '</div>'+
                      '<div>'+
                        '<span>日均：1311</span>'+
                      '</div>'+
                      '<div>'+
                        '<span>34℃ 湿度60% PM2.5 12gm/m³</span>'+
                      '</div>'+

                      '<div style="position: absolute;bottom: 0px;margin: 0px auto;height: 0px;width: 100%;clear: both;text-align: center;">'+
                        '<img style="z-index: 104;position: relative;" src="https://webapi.amap.com/images/sharp.png">'+
                      '</div>'+
                    '</div>' //设置信息框内容
          });

      },
      initTmap() {
        let _this = this
        // 初始化地图
        Tmap.init().then((Tmap) => {
          var center = new TMap.LatLng(22.831779, 114.980945);
          //初始化地图
          var map = new TMap.Map("container", {
            rotation: 20, //设置地图旋转角度
            pitch: 0, //设置俯仰角度（0~45）
            zoom: 17, //设置地图缩放级别
            center: center //设置地图中心点坐标
          });
          TMap.ImageTileLayer.createCustomLayer({
            layerId: '5f6b13185922',
            // layerId: '5f5f2ad23757',
            map: map
          }).then(customLayer => {
            if (customLayer) {// 成功创建个性化图层
    
            } else {
              // 创建失败，请查看控制台错误信息
              console.log('fail');
            }
          });
          _this.mapObj = map
          _this.changeStyle()
          // _this.changeStyle()
          _this.initList()
          // this.playLine(map)//划线
        })

      },
      changeLi() {
        this.radio1 = "列表"
        console.log(this.radio1)
      },
      changeStyle(){//点位标点添加时候用到
        let _this = this
        //初始化marker图层
        var markerLayer = new TMap.MultiMarker({
            id: 'marker-layer',
            map: _this.mapObj
        });

        //监听点击事件添加marker
        _this.mapObj.on("click", (evt) => {
            console.log(evt.latLng)
            _this.latLng.push(evt.latLng)
            markerLayer.add({
              position: evt.latLng
            });
          let obj1={
            latitude:evt.latLng.lat,
            longitude:evt.latLng.lng,
          }
          _this.formPush.points.push(obj1)//提交完后需要清零
          //   _this.latLng.forEach((item)=>{
          //   let obj = new TMap.LatLng(item.properties.latitude, item.properties.longitude)
          //   paths.push(obj)
          //   let obj1={
          //     lat:item.properties.latitude,
          //     lng:item.properties.longitude,
          //   }
          //   _this.latLngList.push(obj1)//提交完后需要清零
          // })

        });
      },
      getMarkerLayer(geometries){//控制多个标点
        let _this = this
        console.log(geometries)
        //创建并初始化MultiMarker
        var markerLayer = new TMap.MultiMarker({
            map: _this.mapObj,  //指定地图容器
            //样式定义
            styles: {
                //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
                "myStyle": new TMap.MarkerStyle({
                    "width": 25,  // 点标记样式宽度（像素）
                    "height": 35, // 点标记样式高度（像素）
                    "src": 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png',  //图片路径
                    //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                    "anchor": { x: 16, y: 32 }
                })
            },
            //点标记数据数组
            geometries: geometries
        });
        if(geometries.length!=0||geometries.length!=1){
          this.showWindow(geometries)
          // this.playLine(geometries)//划线
        }
      },
      showWindow(geometries){//展示弹框信息
        let _this = this
        let paths=[]
        geometries.forEach((item)=>{
          new TMap.InfoWindow({
            map: _this.mapObj,
            position: new TMap.LatLng(item.properties.latitude, item.properties.longitude), //设置信息框位置
            content: item.properties.name//设置信息框内容
          });

        })
      },
      yulan(){//路线预览
        let _this =this
        _this.geometries=[]
        if(this.endlt){
          this.formPush.points.push(this.endlt)
        }
        if(this.startlt){
          this.formPush.points.unshift(this.startlt)
        }
        _this.formPush.points.forEach(item=>{
          let obj ={
            "properties": {//自定义属性
               "latitude":item.latitude,
               "longitude":item.longitude,
              },
            }
           _this.geometries.push(obj)
        })
        console.log(_this.geometries)
        this.playLine(_this.geometries)
      }
    },
    mounted() {

      this.initTmap()
      let _this = this
      // this.$nextTick(() => {
      //   setTimeout(() => {
      //     console.log(document.getElementById('xiangqng'))
      //     document.getElementById('xiangqng').onclick = () => {
      //       _this.radio1 = '列表'
      //     }
      //   }, 1000)
      // })

    }
  }
</script>

<style scoped>
  .shebei_list {
    position: absolute;
    top: 20px;
    left: -120px;
    z-index: 999999;
  }

  .shebei_list div {
    margin-bottom: 10px;
  }

  .modlude {
    position: relative;
  }

  .right_infor_top {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .infor_item {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 10px;
    border-radius: 4px;
    margin-top: 10px;
  }

  .font_size {
    font-size: 12px;
    /* padding:0 10px; */
  }

  .tuxing {
    width: 100%;
    position: relative;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .zhyz_img {
    width: 70%;
    margin-right: 300px;
  }

  .tuxing_box1 {
    font-size: 12px;
    position: absolute;
    top: 70px;
    left: 170px;
    border: 1px solid #19dcf3;
    color: #19dcf3;
    border-radius: 5px;
    padding: 10px 10px;
    background: rgba(5, 28, 58, 0.5);
  }

  .tuxing_box2 {
    font-size: 12px;
    position: absolute;
    top: 240px;
    left: -70px;
    border: 1px solid #19dcf3;
    color: #19dcf3;
    border-radius: 5px;
    padding: 10px 10px;
    background: rgba(5, 28, 58, 0.5);
  }

  .tuxing_box3 {
    font-size: 12px;
    position: absolute;
    top: 50px;
    right: 420px;
    border: 1px solid #19dcf3;
    color: #19dcf3;
    border-radius: 5px;
    padding: 10px 10px;
    background: rgba(5, 28, 58, 0.5);
  }

  .tuxing_box4 {
    font-size: 12px;
    position: absolute;
    top: 360px;
    right: 340px;
    border: 1px solid #19dcf3;
    color: #19dcf3;
    border-radius: 5px;
    padding: 10px 10px;
    background: rgba(5, 28, 58, 0.5);
  }

  .but {
    padding: 0px 10px;
    background: #19dcf3;
    border: 0px;
    color: rgba(5, 28, 58, 0.5);
    margin-top: 5px;
    display: inline-block;
    cursor: pointer;
  }

  .radio {
    position: absolute;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(25, 220, 243);
  }

  .radio_left {
    left: -10px;
  }

  .radio_right {
    right: -10px;
  }

  .openMap {
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .baidumap {
    height: 700px;
    width: 70%;
  }
</style>
