<template>
  <section class="modlude">
    <div class="nav_options" style="margin-bottom:20px;" v-if="false">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="isActive=1">
        <span>用户信息通知</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="isActive=2">
        <span>设备信息通知</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 3}" @click="isActive=3">
        <span>管理端信息通知</span>
      </div>
      <!-- <div class="nav_option" :class="{nav_option_active:isActive == 4}" @click="isActive=4">
        <span>广播发布</span>
      </div> -->
    </div>
    <!-- 导航栏 -->
    <p class="margintop"></p>
      <el-form class="gridContt" label-width="90px">
        <el-form-item size="small" label="巡查员姓名" v-if="isActive != 4">
          <el-input placeholder="输入员姓名" v-model="checkInfor.officeName" size='small' style="width:200px"></el-input>
        </el-form-item>
        <el-form-item size="small" label="详细内容" v-if="isActive != 4">
          <el-input type="textarea" placeholder="输入详细内容" v-model="checkInfor.name" size='small' :rows="4" style="width:400px;"></el-input>
        </el-form-item>
        <el-form-item size="small" label="照片" v-if="isActive != 4">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>        
        </el-form-item>
        <!-- 广播发布 -->
        <!-- <el-form-item size="small" label="显示切换" v-show="isActive == 4">
          <el-radio-group v-model="radio1">
            <el-radio-button label="地图"></el-radio-button>
            <el-radio-button label="列表"></el-radio-button>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item size="small" label="选择语音" v-show="isActive == 4&&radio1 == '列表'">
          <div class="choise_equipment">
            <el-checkbox-group v-model="checkList">
              <div v-for="(item,index) in newTree2" :key="index">
                <el-checkbox :label="item.label"></el-checkbox>
              </div>
            </el-checkbox-group>    
            <el-button type="primary" size='small'>+新增广播内容</el-button>      
          </div>
        </el-form-item>

        <el-form-item size="small" label="设备选择" v-show="radio1 == '列表'||isActive != 4">
          <div class="boxx">
            <div class="choise_equipment">
              <el-tree
                v-if="isActive != 4"
                :data="data1"
                show-checkbox
                default-expand-all
                :default-checked-keys="[1,2]"
                @check='checkChange'
                node-key="id"
                ref="tree">
              </el-tree>
              <el-tree
                v-else
                :data="data2"
                show-checkbox
                default-expand-all
                :default-checked-keys="[1]"
                @check='checkChange'
                node-key="id"
                ref="tree">
              </el-tree>
            </div>
            <el-button v-if="isActive == 4" type="primary" icon="el-icon-right" style="margin:0 20px;" @click="newTree3 = newTree">选择</el-button>
            <el-button v-else type="primary" icon="el-icon-right" style="margin:0 20px;" @click="newTree1 = newTree">选择</el-button>
            <div class="choise_equipment">
              <el-checkbox-group v-model="checked" v-if="isActive == 4">
                <el-checkbox :disabled="true" v-for="(item,index) in newTree3" :key="index">{{item.label}}</el-checkbox>
              </el-checkbox-group>
              <el-checkbox-group v-model="checked" v-else>
                <el-checkbox :disabled="true" v-for="(item,index) in newTree1" :key="index">{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </el-form-item>
      </el-form>

    <div style="text-align:center;margin-top:20px;" v-show="isActive == 4&&radio1 == '列表'">
      <el-button>预约播放</el-button>
      <el-button>立即播放</el-button>
      <el-button>语音直播</el-button>
      <el-button>取 消</el-button>
    </div>
    <div style="text-align:center;margin-top:20px;" v-show="isActive != 4">
      <el-button>发 送</el-button>
    </div>
    <!-- 打开地图 -->
    <div class="openMap" v-show="radio1 == '地图'&&isActive == 4">
  <!-- 右边信息 -->
        <div class="right_infor">
          <div class="right_infor_top">
            <el-button style="width:100px;" type="primary" size="small" round>语音直播</el-button>
            <el-button style="width:100px;" type="primary" size="small" round>新增广播</el-button>
          </div>
          <h3 style="color:#539cfa;">广播</h3>
          <div class="font_size blue">
            正在广播
          </div>
          <div class="infor_item infor_blue">
            <span>当前   所有广播正在播放晨间音乐</span>
          </div>
          <div class="infor_item infor_blue">
            <span>预约   08:00广播1广播2播放游客入园须知</span>
          </div>
          <div class="font_size green">
            预约记录
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
      data1:[
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
                      id:1
                    },
                    {
                      label:'智能机器人',
                      id:2
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
      data2:[
        {
          label:'英达斯瑞智慧公园',
          children:[
            {
              label:'智慧谷',
              children:[
                { 
                  label:'荣耀馆广播',
                  id:1
                },
                {
                  label:'智能驿站1广播'
                },
                {
                  label:'智能驿站2广播'
                },
                {
                  label:'智能驿站3广播'
                }
              ]
            },
            {
              label:'智动谷'
            }
          ]
        }
      ],
      radio1:'列表',
      isActive:this.$route.query.isActive||1,
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
      newTree:[

      ],
      newTree1:[
        {
          label:'显示大屏'
        },
        {
          label:'智能机器人'
        },
      ],
      newTree3:[
        {
          label:'荣耀馆广播'
        },
      ],
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
      checked:['荣耀馆广播','显示大屏','智能机器人']
    }
  },
  methods:{
    checkChange(val1,val2){
      console.log(val1,val2)
      this.newTree = val2.checkedNodes
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(val1,val2){
      console.log(val1,val2)
    },
//添加marker标记
    addMarker(map) {
        let html = '<div class="tuxing_box2" style="position:relative;padding-bottom:20px;font-size:12px;min-height:100px;width:140px;padding:10px 10px;background:rgba(5,28,58,0.5);border:1px solid #19dcf3;color:#19dcf3;border-radius:5px;">'+
                    '<div class="radio radio_right"></div>'+
                    '<div style="position:relative;"><h5>广播1</h5><span id="xiangqng" style="cursor: pointer;position:absolute;top:0;right:0;">详情</span></div>'+
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
                      '<button class="but">新增广播</button>'+
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
  },
  mounted(){
    console.log(this.$route.query)
    // this.initAmap()
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


