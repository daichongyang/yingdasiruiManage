<template>
  <section class="modlude">
    <!-- <el-form :inline="true" :model="formSearch" class="form_inline" label-width="80px">

      <el-form-item label="公园名称" size="small">
        <el-input v-model="formSearch.name" placeholder="请输入房间名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button size="small" @click="getInit">查 询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="showAdd">添 加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="danger" @click="deleInfor(false)">批量删除</el-button>
      </el-form-item>
    </el-form> -->
    <searchModule  @muchDeleteType="getMuchDeleteType" @searchInfor="getSearchInfor" @addTotrue="getAddTotrue" :formSearch="formSearch" :formItems="formItems" :showAddBtn="showAddBtn" :showDelBtn="showDelBtn"></searchModule>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @select="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name"label="名称"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="runTime" label="开始运行时间">
        <template slot-scope="scope" v-if="scope.row.runTime">
          {{$root.getDateArray(Number(scope.row.runTime))[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="gmtModified" label="修改时间">
        <template slot-scope="scope" v-if="scope.row.gmtModified">
          {{$root.getDateArray(Number(scope.row.gmtModified))[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="创建时间">
        <template slot-scope="scope" v-if="scope.row.gmtCreate">
          {{$root.getDateArray(scope.row.gmtCreate)[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="isDel" label="是否已删除">
        <template slot-scope="scope">
          {{scope.row.isDel==1?"是":"否"}}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width=200 v-if="!showBtnFather">
				<template slot-scope="scope">
					<el-button type="warning" size="small" @click="updateShowBox(scope.row),updateDialog = true">修 改</el-button>
					<el-button type="danger" size="small" @click="deleInfor(scope.row.id)">删 除</el-button>
          <!-- <el-button type="primary" size="small" @click="updateShowBox(scope.row),detailsDialog=false">查看详情</el-button> -->
				</template>
			</el-table-column>
    </el-table>
    <paging @changePage = handleCurrentPage :get-total='total'></paging>
    <div class="export_template" style="margin-bottom:20px;" v-if="showBtnFather">
      <el-button size="small" @click="upshDevInfor" type="primary">确 定</el-button>
    </div>
    <!-- 添加 -->
    <el-dialog title="新增" :visible.sync="addDialog">
      <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules"  ref='addList'>
         <el-form-item label="名称" prop="name">
           <el-input v-model="formPush.name"></el-input>
         </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="formPush.num"></el-input>
          </el-form-item>
          <el-form-item label="开始运行时间">
           <el-date-picker
              v-model="formPush.runTime"
              type="datetime"
              value-format="timestamp"
              placeholder="开始运行时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="类型" >
            <el-select v-model="formPush.type">
              <el-option label="水设备" :value="1"></el-option>
              <el-option label="电设备" :value="2"></el-option>
              <el-option label="安保" :value="3"></el-option>
              <el-option label="卫生" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地图点位">
            <el-input v-model="mapOpints"></el-input>
            <el-button size="mini" @click="mapDialog = true">选 择</el-button>
          </el-form-item>
        </el-form>
        <!-- <div id="container"></div> -->
        <el-form label-position="right" label-width="110px">
          
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium " @click="addDialog = false">取 消</el-button>
        <el-button size="medium " @click="addList('addList')">新 增</el-button>
      </div>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog title="修改" :visible.sync="updateDialog">
      <div class="cont_box_left">
        <el-form label-position="right" :rules="rules" label-width="110px" :model="formUpdate" ref='formUpdate'>
         <el-form-item label="名称" prop="name">
           <el-input v-model="formUpdate.name"></el-input>
         </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="formUpdate.num"></el-input>
          </el-form-item>
          <el-form-item label="开始运行时间" >
           <el-date-picker
              v-model="formUpdate.runTime"
              type="datetime"
              value-format="timestamp"
              placeholder="开始运行时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="类型" >
            <el-select v-model="formUpdate.type">
              <el-option label="水设备" :value="1"></el-option>
              <el-option label="电设备" :value="2"></el-option>
              <el-option label="安保" :value="3"></el-option>
              <el-option label="卫生" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地图点位">
            <el-input v-model="mapOpints"></el-input>
            <el-button size="mini" @click="mapDialog = true,aa()">选 择</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="updateDialog = false">取 消</el-button>
        <el-button size="medium" @click="updateList('formUpdate')">确定</el-button>
      </div>
    </el-dialog>
    <!-- 地图 -->
    <el-dialog title="地图" :visible.sync="mapDialog">
      <div class="cont_box_left">
        <mapPoints @mapOpintsArr="mapOpintsArr" :opintsArr="opintsArr"></mapPoints>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import paging from '../paging'
import mapPoints from './mapPoints'
import searchModule from '../searchModule'
import TMap from '../../assets/js/initmap'

import { queryDevice,addDevice,editDevice,delDevlist } from '../../url/api.js';
export default {
  props:['showBtnFather'],
  data(){
    return{
      mapOpints:'',
      mapDialog:false,
      showAddBtn:this.showBtnFather==1?false:true,//显示添加按钮
      showDelBtn:true,//显示批量删除按钮
      formItems:{//搜索模块label
        formItemsArr:[
          {
            name:'开始运行时间',
            filed:"runTime",
            type:'datePicker'
          },
          {
            name:'姓名',
            filed:"name",
            type:'text'
          },


        ],
        labelWidth:'100px'
      },
      deleBatch:[],
      formSearch:{//查询条件
        current:1,
        size: 10
      },
      formPush:{//信息提交
        items:[
        ]
      },//表单提交
      formData: [],//数据
      formUpdate:{},//修改表单
      total: 0,//数据总数
      addDialog:false,
      updateDialog:false,
      rules: {
        name:[{ required: true, message: '该项不能为空',trigger: 'change'}],
        coverImg:[{ required: true, message: '该项不能为空',trigger: 'change'}],
        coverVideo:[{ required: true, message: '该项不能为空',trigger: 'change'}],
      },
      mapObj:'',
      markerObj:'',
      opintsArr:[],
      opintsArr1:[]
    }
  },
  methods:{
    aa(){
      setTimeout(item=>{
        this.opintsArr = this.opintsArr1
        console.log(this.opintsArr)
      },5000)
      
    },
    mapOpintsArr(val){//地图点位信息
      this.mapOpints=''
      this.formPush.items = val
      if(val.length!=0){
        val.forEach(item=>{
          this.mapOpints = item.name+","+this.mapOpints
        })
      }
      this.mapDialog=false
    },
    upshDevInfor(){//
      this.$emit("getDevIds",this.deleBatch)
    },
    initTmap(){
      let _this = this;
      TMap.init().then((TMap)=>{
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
        var markerLayer = new TMap.MultiMarker({
            id: 'marker-layer',
            map: map
        });
        _this.markerObj = markerLayer
        map.on('click', function(e) {
          console.log(e)

          _this.formPush.latitude= e.latLng.getLat();
          _this.formPush.longitude = e.latLng.getLng();
          markerLayer.add({
            position: e.latLng
          }); 
         console.log(e.latLng.getLng()+ ',' + e.latLng.getLat())
          });   
      })
    },
    getlist(){
      queryDevice(this.formSearch).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.formData = res.data.data.records.filter((item)=>{
            return item
          })
          this.total = res.data.data.total
        }else{
          this.$message(res.data.msg);
        }
      })
    },
    getInit(){//初始化列表
      this.getlist()

    },
    addList(addList){//添加
      if(this.formPush.items.length!=this.formPush.num){
        this.$message("点位和数量必须相等")
        return
      }
      this.$refs[addList].validate((valid) => {
        if (valid) {
          addDevice(this.formPush).then((res)=>{
            console.log(res)
            if(res.data.code == 200){
              this.getlist()
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }else{
              this.$message('添加失败')
            }
          })
          this.addDialog = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },


    updateList(formUpdate){//修改
    console.log(this.formUpdate)
      if(this.formUpdate.items.length!=this.formUpdate.num){
        this.$message("点位和数量必须相等")
        return
      }
      this.$refs[formUpdate].validate((valid) => {
        if (valid) {
          editDevice(this.formUpdate).then((res)=>{
            console.log(res)
            if(res.data.code == 200){
              this.$message({
                message: '修改成功',
                type: 'warning'
              });
              this.getlist()
            }
          })
          this.updateDialog = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    deleInfor(ids){//删除
      let arrId = []
      if(ids){
        arrId.push(ids)
      }
      if(this.deleBatch.length!=0){
        this.deleBatch.filter((item)=>{
          arrId.push(item.id)
          return item
        })
      }
      this.$confirm('确认删除吗？')
      .then(_ => {
        delDevlist(arrId).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message('删除成功');
            this.getlist()
          }
        })
      })
      .catch(_ => {});
    },

    handleSelectionChange(val,self) {//多选
      this.deleBatch = val
    },
    handleCurrentPage(val){//页码改变
      this.formSearch.current=val
      this.getlist()
    },
    updateShowBox(item){//修改东西弹窗
      this.mapOpints = ''
      this.formUpdate = {
        items:item.items,
        name:item.name,
        id:item.id,
        num:item.num,
        runTime:item.runTime,
        serial:item.serial,
        type:item.type,
        longitude:item.longitude,
        latitude:item.latitude
      }
      this.opintsArr1 = item.items.filter(item=>{
        this.mapOpints = item.name+","+this.mapOpints
        return item
      })
        console.log(this.formUpdate,this.opintsArr)

      },

    getMuchDeleteType(val){//从模块中执行删除功能
      this.deleInfor(val)
    },
    getAddTotrue(val){//从模块中执行添加弹框功能
      this.addDialog=val
      // if(this.markerObj){
      //   this.markerObj.setMap(null)
      // }
      
      if(!this.mapObj){
        // this.initTmap()
      }
      
    },
    showMap(){

    },
    getSearchInfor(val){//从模块中执行查询功能
      this.formSearch=val
      this.getlist()
    },
  },
  mounted(){
    // console.log(this.showBtnFather)
    this.getInit()
    // this.initAmap()
  },
  components:{
    paging,
    mapPoints,
    searchModule
  }
}
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .cont_box{
    width:100%;
    display: flex;
  }
  .cont_box_left,.cont_box_right{
    flex:1;
    background: transparent ;
    padding:10px;
  }
  .cont_box_left{
    margin-right:10px;
  }
  .margin10{
    margin-bottom:10px;
  }
  .marginRight{
    margin-bottom:10px;
    border-bottom: 1px solid #eee;
  }
  .cont_box_right .el-form-item{
    margin-bottom:20px;
  }
#container{
  width:100%;
  height:200px;
}
</style>
