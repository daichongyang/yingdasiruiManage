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
    <searchModule  @muchDeleteType="getMuchDeleteType" @searchInfor="getSearchInfor" @addTotrue="getAddTotrue" :formItems="formItems" :showAddBtn="showAddBtn" :showDelBtn="showDelBtn"></searchModule>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @select="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name"label="名称"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="department" label="部门"></el-table-column>
      <el-table-column prop="idNumber" label="身份证"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="title" label="职位"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          {{scope.row.sex==1?"男":"女"}}
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
        <el-button size="small" @click="upshRenyuan" type="primary">确 定</el-button>
      </div>
    <!-- 添加 -->
    <el-dialog title="增加运维人员" :visible.sync="addDialog">
      <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules"  ref='addList'>
         <el-form-item label="名称" prop="name">
           <el-input v-model="formPush.name"></el-input>
         </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="formPush.phone"></el-input>
          </el-form-item>
          <el-form-item label="住址" prop="address">
            <el-input v-model="formPush.address"></el-input>
          </el-form-item>
          <el-form-item label="部门" prop="department">
            <el-input v-model="formPush.department	"></el-input>
          </el-form-item>
          <el-form-item label="身份证" prop="idNumber">
            <el-input v-model="formPush.idNumber"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="title">
            <el-input v-model="formPush.title"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="formPush.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="人员类型" >
            <el-select v-model="formPush.type">
              <el-option label="运维人员" :value="1"></el-option>
              <el-option label="维修人员" :value="2"></el-option>
              <el-option label="巡查人员" :value="3"></el-option>
            </el-select>
          </el-form-item>
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
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="formUpdate.phone"></el-input>
          </el-form-item>
          <el-form-item label="住址" prop="address">
            <el-input v-model="formUpdate.address"></el-input>
          </el-form-item>
          <el-form-item label="部门" prop="department">
            <el-input v-model="formUpdate.department	"></el-input>
          </el-form-item>
          <el-form-item label="身份证" prop="idNumber">
            <el-input v-model="formUpdate.idNumber"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="title">
            <el-input v-model="formUpdate.title"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="formUpdate.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="人员类型" >
            <el-select v-model="formUpdate.type">
              <el-option label="运维人员" :value="1"></el-option>
              <el-option label="维修人员" :value="2"></el-option>
              <el-option label="巡查人员" :value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="updateDialog = false">取 消</el-button>
        <el-button size="medium" @click="updateList('formUpdate')">确定</el-button>
      </div>
    </el-dialog>

  </section>
</template>

<script>
import paging from '../paging'
import searchModule from '../searchModule'
import { queryStaff,addStaff,editStaff,delStaff, } from '../../url/api.js';
export default {
  props:["showBtnFather"],
  data(){
    return{
      imageUrl:'',
      showAddBtn:this.showBtnFather==1?false:true,//显示添加按钮
      showDelBtn:true,//显示批量删除按钮
      formItems:{//搜索模块label
        formItemsArr:[
          {
            name:'姓名',
            filed:"name",
            type:'text'
          },
          {
            name:'住址',
            filed:"address",
            type:'text'
          },
          {
            name:'手机号',
            filed:"phone",
            type:'text'
          },
          {
            name:'部门',
            filed:"department",
            type:'text'
          },
          {
            name:'身份证',
            filed:"idNumber",
            type:'text'
          },
          {
            name:'职位',
            filed:"title",
            type:'text'
          },
          {
            name:'性别',
            filed:"sex",
            type:'radio',
            options:[
              {
                label:1,
                nanme:'男',
              },
              {
                label:2,
                nanme:'女',
              },
            ]
          },
          {
            name:'人员类型',
            filed:"type",
            type:'select'
          }
        ],
        labelWidth:'80px'
      },
      deleBatch:[],
      formSearch:{//查询条件
        current:1,
        size: 10
      },
      formPush:{//信息提交

      },//表单提交
      formData: [],//数据
      formUpdate:{},//修改表单
      total: 0,//数据总数
      addDialog:false,
      updateDialog:false,
      rules: {
        name:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        department:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        address:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        idNumber:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        phone:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        title:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        sex:[{ required: true, message: '该项不能为空',trigger: 'change'}],
      },
      mapObj:'',
      markerObj:''
    }
  },
  methods:{
    upshRenyuan(){//获取运维人员模块
      this.$emit("getRenyuanIds",this.deleBatch)
    },
    getlist(){
      queryStaff(this.formSearch).then((res)=>{
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

      this.$refs[addList].validate((valid) => {
        if (valid) {
          addStaff(this.formPush).then((res)=>{
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
    this.$refs[formUpdate].validate((valid) => {
      if (valid) {
        editStaff(this.formUpdate).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message({
              message: '修改成功',
              type: 'warning'
            });
            this.getInit()
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
        delStaff(arrId).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message('删除成功');
            this.getInit()
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
      this.formUpdate = {
        address:item.address,
        name:item.name,
        id:item.id,
        department:item.department,
        idNumber:item.idNumber,
        coverImg:item.coverImg,
        phone:item.phone,
        sex:item.sex,
        title:item.title,
        type:item.type,
      }
        console.log(this.formUpdate,this.fileList)

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
        this.initTmap()
      }
      
    },
    getSearchInfor(val){//从模块中执行查询功能
      this.formSearch=val
      this.getlist()
    },
  },
  mounted(){
    this.getInit()
    // this.initAmap()
  },
  components:{
    paging,
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
