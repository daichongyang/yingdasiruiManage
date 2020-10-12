<template>
  <section class="modlude">
    <!-- 导航栏 -->
    <p class="margintop"></p>
    <el-form class="gridContt" label-width="">
      <el-form-item size="small" label="显示切换">
        <el-radio-group v-model="radio1">
          <el-radio-button label="地图"></el-radio-button>
          <el-radio-button label="列表"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;"  v-show="radio1 == '列表'">
      <el-form :inline="true" class="gridContt">
        <el-form :inline="true">
          <el-form-item size="small" label="场馆类型">
          <el-select v-model="checkInfor.value" placeholder="请选择">
            <el-option label="类型1" :value="1"></el-option>
            <el-option label="类型2" :value="2"></el-option>
          </el-select>
          </el-form-item>
        <el-form-item size="small" label="添加时间">
            <el-date-picker
              v-model="checkInfor.liveStartTime"
              type="date"
              value-format="timestamp"
              placeholder="开始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item size="small" label="-">
            <el-date-picker
              v-model="checkInfor.liveEndTime	"
              type="date"
              value-format="timestamp"
              placeholder="结束时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item size="small" label="操作人员">
            <el-input placeholder="操作人员" v-model="checkInfor.nativePlace" size='small'></el-input>
          </el-form-item>
          <el-form-item size="small" label="操作人员角色">
            <el-input placeholder="操作人员角色" v-model="checkInfor.nativePlace" size='small'></el-input>
          </el-form-item>

        </el-form>
      </el-form>
        <el-form class="marginTop20" :inline="true">
          <el-form-item label="查询结果" class="margin0">
            <el-button type="primary" size='small'>报表导出</el-button>
            <el-button type="primary" size='small' @click="showTc">+新增</el-button>
            <el-button type="primary" size='small' @click="getList">查询</el-button>
            <el-button type="primary" size='small' @click="reloadCon">重置</el-button>
            <!-- <el-button type="primary" size='small' @click="tuxing">图形</el-button> -->
          </el-form-item>
        </el-form>
    <!-- 列表部分 -->
    <el-table :data="inforList" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column class="ccc" type="selection" width="55" label="全选">
			</el-table-column>
			<el-table-column prop="name" label="场馆">
			</el-table-column>
			<el-table-column prop="sex" label="地址">
			</el-table-column>
			<el-table-column prop="duty" label="开放时间">
			</el-table-column>
			<el-table-column prop="department" label="负责人">
			</el-table-column>
			<el-table-column prop="isSplite" label="对讲号">
			</el-table-column>
			<el-table-column label="操作" fixed="right" width=400>
				<template slot-scope="scope">
          <el-button size="small" >查看</el-button>
          <el-button size="small" >定位</el-button>
          <!-- <el-button size="small" >{{scope.row.isContactt}}</el-button> -->
				</template>
			</el-table-column>
		</el-table>
    <!-- 批量删除，下标页码 -->
		<el-col :span="24" class="paginationt">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :page-count="total" class="pagination">
			</el-pagination>
		</el-col>
    </el-col>
    <!-- 打开地图 -->
    <div class="openMap" v-show="radio1 == '地图'">
          <!-- 右边信息 -->
        <div class="right_infor">
          <h3 class="h3_zn" style="color:#539cfa;">园区场馆</h3>
          <div class="font_size ">
          场馆总数：30个
          </div>
          <div class="font_size">
          荣耀馆：1个
          </div>
          <div class="font_size">
          智能驿站：12个
          </div>
          <div class="font_size">
          管理处：2个
          </div>
          <div class="font_size" style="margin-top:20px;">
          月均/日均人流量：3000人次/100人次
          </div>
          <div class="green">
            预约记录
          </div>
          <div class="infor_item infor_green">
            <span>智能驿站2预约</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>智能驿站1预约</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>荣耀馆预约</span>
            <span>14:16:10</span>
          </div>
          <div class="infor_item infor_green">
            <span>荣耀馆预约</span>
            <span>14:16:20</span>
          </div>
          <!-- 智能设备列表 -->
          <div class="shebei_list">
            <div><el-button type="primary" plain size="small" round>全部</el-button></div>
            <div><el-button type="primary" plain size="small" round>荣耀馆</el-button></div>
            <div><el-button type="primary"  size="small" round>智能驿站</el-button></div>
            <div><el-button type="primary" plain size="small" round>管理处</el-button></div>
            <div><el-button type="primary" plain size="small" round>新增</el-button></div>
          </div>
        </div>
      <div class="baidumap" id="container"></div>
    </div>
  </section>
</template>
<script>
import Amap from '../assets/js/initmap'
// import {getDateArray} from '../../util/util'
// import {getYqfkPerson, deptaddList, selectOffice,locationHouse,deptupdateList,deptdeleteList} from '../../api/api'
export default {
  data(){
    return{
      headIcon:'',
      radio1:'地图',
      isActive:1,
      remark:'',//修改备注
      total:1,
      selectArr:[],
      addFormVisible:false,
      addFormVisible1:false,
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
      inforList:[
        {
          name:'荣耀馆',
          sex:'西河路7号',
          duty:'08：00--7：00',
          department:'刘梅',
          isSplite:'010101',
          temperature:'个',
          health:'130',
          isCross:'2号仓库',
          isContact:'审核通过/未领用',
          isContactt:"领用"
        },
        {
          name:'公园管理处',
          sex:'西河路7号',
          duty:'08：00--7：00',
          department:'刘梅',
          isSplite:'010101',
          temperature:'个',
          health:'30',
          isCross:'3号仓库',
          isContact:'未审核',
          isContactt:"审核通过"
        },
        {
          name:'智慧驿站1',
          sex:'西河路7号',
          duty:'08：00--7：00',
          department:'刘梅',
          isSplite:'010101',
          temperature:'个',
          health:'10',
          isCross:'4号仓库',
          isContact:'审核通过/未领用',
          isContactt:"领用"
        }
      ],
      checkInfor:{
        current:1,
        size:10,
        type:1
      },//条件查询
      updataForm:{},
      addForm:{},
      params:{}
    }
  },
  methods:{
    reloadCon(){
      location.reload()
    },
//添加marker标记
    addMarker(map) {
        let html = '<div class="tuxing_box2" style="position:relative;padding-bottom:20px;font-size:12px;min-height:100px;width:140px;padding:10px 10px;background:rgba(5,28,58,0.5);  border:1px solid #19dcf3;color:#19dcf3;border-radius:5px;">'+
                    '<div class="radio radio_right"></div>'+
                    '<div style="position:relative;"><h5>智能驿站1</h5><span id="xiangqng" style="cursor: pointer;position:absolute;top:0;right:0;">详情</span></div>'+
                    '<div>'+
                      '<span>编号：znyz001</span>'+
                    '</div>'+
                    '<div>'+
                      '<span> 文心路与教育路交叉口</span>'+
                    '</div>'+
                    '<div>'+
                      '<span>（经度：101    纬度：77）</span>'+
                    '</div>'+
                    '<div>'+
                      '<span> 日均100人流量</span>'+
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
    tuxing(){
      if(this.radio1 == "地图"){
          this.$router.push({
            path:'./cggl_tuxing'
          })
      }else{
          this.$router.push({
            path:'./cggl'
          })
      }

    },
    getList1(item){
      if(item == 1){
        this.$router.push({
          path:'./jcrManage'
        })
      }else if(item == 2){
        this.$router.push({
          path:'./txzsq'
        })
      }
    },
    changexianmu(officeId){
      this.houseAssign.officeId=officeId
    },
    getList(){//获取列表
      let params=this.checkInfor
      console.log(params)
      getYqfkPerson(params).then(res=>{
        console.log(res)
        // if(res.data.code===200){
        //   this.inforList=res.data.data.filter(function(item){
        //     if(item.isRent===0){
        //       item.isRentName='否'
        //     }else if(item.isRent===1){
        //       item.isRentName='是'
        //     }
        //     return item
        //   })
        //   this.total=res.data.data.pages
        // }
      })
    },
    changeItem(){//修改

      let params ={
        address:this.updataForm.address,
        name:this.updataForm.name,
        officeId:this.updataForm.officeId,
        phone:this.updataForm.phone,
        privateAccount:this.updataForm.privateAccount,
        publicAccount:this.updataForm.publicAccount,
      } 
      console.log(params)
      deptupdateList(params).then(res => {
        console.log(res)
        if(res.data.code == 200){
          this.getList();
        }else{
          alert(res.data.msg)
        }
      }).catch(err => {
          alert("网络请求失败")
        })
      this.addFormVisible1 = false

    },
    showTc(){
      // this.addFormVisible=true
    },
    pushInfor(){//添加
      if(!this.addForm.name){
        alert('请输入公司名称')
        return
      }
      let params=this.addForm
      console.log(params)
      deptaddList(params).then(res=>{
        console.log(res)
        this.addFormVisible=false
        if(res.data.code===200){
          this.getList()
        }else{
          alert(res.data.msg)
        }
      })
    },
    deleteInfor (row) { // 删除
      let params = row.officeId
      console.log(params)
      this.$confirm('确定要删除该条信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        deptdeleteList(params).then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.getList()
            this.$message({
              type: 'success',
              message: '操作成功'
            })
          } else {
            alert('删除失败')
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    handleCurrentChange(val){
      this.checkInfor.current = val;
			this.getList();
    },
    selsChange: function (sels) {// 当选择项发生变化时会触发该事件
      this.houseAssign.houseIds=[]
      console.log(sels)
      if(sels.length!==0){
        for(let i = 0 ; i < sels.length ; i++){
          this.houseAssign.houseIds.push(sels[i].houseId)
        }       
      }
      console.log( this.houseAssign.houseIds)
      this.sels=sels.filter(function (sel) {
        if(sel.isExist!==1){
            return sel
        }
      })
    } 
  },
  mounted(){
    this.initAmap()
    let _this = this
    this.$nextTick(()=>{
        setTimeout(()=>{
        console.log(document.getElementById('xiangqng'))
        document.getElementById('xiangqng').onclick=()=>{
          _this.$router.push({
            path:'./cggl_tuxing'
          })
        }
        },1500)
    })
  }
}
</script>
<style scoped>
.gridContt{
  line-height:30px;
}
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


