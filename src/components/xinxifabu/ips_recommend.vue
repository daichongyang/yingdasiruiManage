<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline" label-width="90px">
      <!-- <el-form-item label="选择小区" size="small" prop="xqId">
        <el-select v-model="formSearch.xqId" placeholder="请选择小区" @change="formSearch1.xqId=formSearch.xqId">
          <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="getlist">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addData">添加图片</el-button>
      </el-form-item>
    </el-form>
    <div class="app_advertise">
      <div class="app_advertise_item" v-for="(item,index) in formData" :key="index" @click="getItem(index)">
        <div>位置{{index+1}}</div>
        <div style="margin-left:30px;width:200px"><span>名称：{{item.name}}</span></div>
        <div class="app_advertise_item_l">
          <el-image v-if="item.id" style="width:150px;height:90px;" :src="item.coverImg"></el-image>
        </div>
        <div>
          <el-button type="text" @click="upData(index)">上移</el-button>
          <el-button type="text" @click="downData(index)">下移</el-button>
          <el-button type="text" @click="upCharu(index)">向上插入</el-button>
          <el-button type="text" @click="downCharu(index)">向下插入</el-button>
          <el-button type="text" @click="deleteVillage(index)">删除</el-button>
        </div>
      </div>
    </div>
    <!-- 添加 -->
    <el-dialog title="添加推荐" :visible.sync="addDialog">
      <el-form :inline="true" :model="formSearch" class="form_inline" label-width="100px">
        <el-form-item label="推荐设施类型" size="small">
          <el-select v-model="typeselect.type" placeholder="请选择推荐设施类型" @change="changeType">
            <el-option v-for="item in dataTree" :label="item.typeName" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公园设施" size="small">
          <el-select v-model="typeselect.facilityId" placeholder="请选择公园设施">
            <el-option v-for="item in dataTree1" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div style="margin-top:20px;text-align:center;"><el-button type="primary" @click="saveData">添 加</el-button></div>
    </el-dialog>
  </section>
</template>

<script>
import { recommendassetsList,recommendupdateList,recommendtype,xqSelectList,recommendfacility } from '../../url/api';
export default {
  data(){
    return{
      typeselect:{},
      uploadToRealPath:'/intellmanagerV3.0/upload/file/upload',
      headers:{
        Authorization:sessionStorage.getItem('Authorization'),
        token:sessionStorage.getItem('token')
      },
      addDialog:false,
      formData:[],
      formSearch:{},
      formPush:{
        delIds:[],
        pictureNodes:[],
      },
      xqTree:[],
      dataTree:[],
      dataTree1:[],
      formSearch:{//查询条件
      },
      imageUrl:'',
      indexBianhao:0,
      imageUrl1:'',
      defaultProps2: {
        children: 'children',
        label: 'name',
        value: 'id',
        expandTrigger: 'hover',checkStrictly: true
      },
      picArr:[]
    }
  },
  methods:{
    changeType(val){
      let parmas={
        type:val
      }
      recommendfacility(parmas).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.dataTree1 = res.data.data
        }
      })
    },
    getItem(index){
      console.log(index)
      this.indexBianhao = index
    },
    deleteVillage(index){//删除
      this.$confirm('确认删除吗？')
      .then(_ => {
        this.formData.splice(index,1)
        let obj=[]
        this.formData.forEach(item=>{
            let itemObj = {
              facilityId:item.facilityId,
              type:item.type,
            }
            obj.push(itemObj)
        })
        this.formPush=obj
        recommendupdateList(this.formPush).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.getlist()
            this.$message({
              message: '删除成功',
              type: 'success'
            })
          }else{
            this.$message('删除失败')
          }
        })
      })
      .catch(_ => {});
    },
    getlist(){
      let params = this.formSearch
      recommendassetsList(params).then((res)=>{//
        console.log(res)
        if(res.data.code == 200){
          this.formData = res.data.data.filter((item)=>{
            return item
          })
        }else{
          this.$message(res.data.msg);
        }
      })
    },
    initData(){
      // let org_tree={
      //       name:'',
      //       status:1
      //     }
      recommendtype({}).then((res)=>{//推荐设施类型下拉列表
        console.log(res)
        if(res.data.code == 200){
          this.dataTree = res.data.data
        }
      })
      this.getlist()
      
    },
    handleChange(value){
      if(value.length!=0){
        console.log(value)
        this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id
      }else{
        this.formSearch.orgId = ''
      }
    },
    upData(index){//上移
      if(index!=0){
        let obj1 = {
          facilityId:'',
          type:'',
        }
        let obj2 = {
          facilityId:'',
          type:'',
        }
        obj1.facilityId=this.formData[index].facilityId
        obj1.type=this.formData[index].type
        obj2.facilityId=this.formData[index-1].facilityId
        obj2.type=this.formData[index-1].type

        this.formData[index].facilityId = obj2.facilityId
        this.formData[index].type = obj2.type
        this.formData[index-1].facilityId = obj1.facilityId
        this.formData[index-1].type = obj1.type
        this.typeselect={}
        this.saveData()
      }
    },
    downData(index){//下移
      if(index != this.formData.length-1){
        let obj1 = {
          facilityId:'',
          type:'',
        }
        let obj2 = {
          facilityId:'',
          type:'',
        }
        obj1.facilityId=this.formData[index].facilityId
        obj1.type=this.formData[index].type
        obj2.facilityId=this.formData[index+1].facilityId
        obj2.type=this.formData[index+1].type

        this.formData[index].facilityId = obj2.facilityId
        this.formData[index].type = obj2.type
        this.formData[index+1].facilityId = obj1.facilityId
        this.formData[index+1].type = obj1.type
        this.typeselect={}
        this.saveData()
        // obj1.address=this.formData[index].address
        // obj2.address=this.formData[index+1].address

        // this.formData[index].address = obj2.address
        // this.formData[index+1].address = obj1.address
      }
    },
    upCharu(){//插入

    },
    downCharu(){//插入

    },
    addData(){//添加
      if(this.formData.length==9){
          this.$message({
            message: '最多只能添加9个推荐',
          })
        return 
      }
      this.addDialog=true
      // let obj = {
      //   address:''
      // }
      // this.formData.push(obj)
    },
    saveData(){
      let obj=[]
      if(this.typeselect.type){
        obj.push(this.typeselect)
      }
      this.formData.forEach(item=>{
          let itemObj = {
            facilityId:item.facilityId,
            type:item.type,
          }
          obj.push(itemObj)
      })
      this.formPush=obj
      recommendupdateList(this.formPush).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.getlist()
          this.$message({
            message: '操作成功',
            type: 'success'
          })
        }else{
          this.$message('操作失败')
        }
      })
      this.addDialog = false
    },
    handleAvatarSuccess1(res, file,fileList) {
      console.log(res, file,fileList)
      this.imageUrl = res.data[0];
      this.imageUrl1=URL.createObjectURL(file.raw);
      this.formData[this.indexBianhao].address = this.imageUrl
      console.log(this.formData,this.indexBianhao)
    },
  },
  mounted(){
    this.initData()
  }
}
</script>

<style scoped>
  .app_advertise{
    border:1px solid #1fc9f3;
  }
  .app_advertise_item{
    display:flex;
    align-items: center;
    justify-content: center;
    border-top:1px solid #1fc9f3;
  }
  .app_advertise_item:first-child{
    border:0px
  }
  .app_advertise_item_l{
    margin:10px 20px;
  }
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
</style>