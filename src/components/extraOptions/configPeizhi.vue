<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline" label-width="80px">

      <el-form-item label="姓名" size="small">
        <el-input v-model="formSearch.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <!-- <el-form-item label="选择小区" size="small" prop="xqId">
        <el-select v-model="formSearch.xqId" placeholder="请选择小区">
          <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item>
        <el-button size="small" @click="getlist">查 询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="addDialog=true">添 加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="danger" @click="deleInfor(false)">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @select="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="parentName" label="父类"></el-table-column>
      <el-table-column prop="checkImg" label="选中该类的图标路径">
        <template slot-scope="scope">
          <el-image style="width:80px; height:80px;" :src="scope.row.checkImg"></el-image>
				</template>
      </el-table-column>
      <el-table-column prop="uncheckImg"label="未选中该类的图标路径">
        <template slot-scope="scope">
          <el-image style="width:80px; height:80px;" :src="scope.row.uncheckImg"></el-image>
				</template>
      </el-table-column>
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
    </el-table>
    <paging @changePage = handleCurrentPage :get-total='total'></paging>

    <!-- 添加 -->
    <el-dialog title="新增" :visible.sync="addDialog">
      <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules"  ref='addList'>
          <el-form-item label="姓名">
            <el-input v-model="formPush.name"></el-input>
          </el-form-item>
          <el-form-item label="未选中图标" size="small">
            <el-upload
              class="avatar-uploader"
              :action="uploadToRealPath"
              :show-file-list="false"
              :headers='headers'
              :on-success="handleAvatarSuccess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="选中图标" size="small">
            <el-upload
              class="avatar-uploader"
              :action="uploadToRealPath"
              :show-file-list="false"
              :headers='headers'
              :on-success="handleAvatarSuccess1">
              <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="层级选择">
            <el-radio-group v-model="parentId">
              <el-radio :label="0" @change="formPush.parentId=0">一级分类</el-radio>
              <el-radio :label="1">二级分类</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="二级分类必选" size="small" v-if="parentId">
            <el-select v-model="formPush.parentId" placeholder="请选择分类">
              <el-option v-for="item in typeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
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
          <el-form-item label="姓名">
            <el-input v-model="formUpdate.name"></el-input>
          </el-form-item>
          <el-form-item label="未选中图标" size="small">
            <el-upload
              class="avatar-uploader"
              :action="uploadToRealPath"
              :show-file-list="false"
              :headers='headers'
              :on-success="handleAvatarSuccess2">
              <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="选中图标" size="small">
            <el-upload
              class="avatar-uploader"
              :action="uploadToRealPath"
              :show-file-list="false"
              :headers='headers'
              :on-success="handleAvatarSuccess3">
              <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="updateDialog = false">取 消</el-button>
        <el-button size="medium" @click="updateList">确定</el-button>
      </div>
    </el-dialog>
  </section>  
</template>

<script>
import paging from '../paging'
import { classifylistone,classifyList,addClassify,updateClassify,deleteClassify,orgTree,xqSelectList,houseList } from '../../url/api';
export default {
  data(){
    return{
      allSelect:[],
      option1:[],
      deleBatch:[],
      typeList:[],
      parentId:0,
      imageUrl:'',
      imageUrl1:"",
      imageUrl2:"",
      imageUrl3:"",
      isGetFather:false,//是否选中
      formSearch:{//查询条件
        current:1,
        size: 10
      },
      formSearch1:{
        current:1,
        size: 10
      },
      formPush:{
        parentId:0
      },//表单提交
      formData: [],//数据
      formData1: [],//数据
      formUpdate:{},//修改表单
      total: 0,//数据总数
      total1: 0,//数据总数
      pages:0,//页面总数
      addDialog:false,
      updateDialog:false,
      headers:{
        Authorization:sessionStorage.getItem('Authorization'),
        token:sessionStorage.getItem('token')
      },
      uploadToRealPath:'/park/upload/file/upload',
      dataTree:[],
      defaultProps: {//树状图key定义
        children: 'children',
        label: 'label'
      },
      defaultProps2: {
        children: 'children',
        label: 'name',
        value: 'id',
        expandTrigger: 'hover'
      },
      xqTree:[],//小区列表
      rules: {
        phone:[{ required: true, message: '该项不能为空'}],
        ubicellJyh:[{ required: true, message: '该项不能为空'}],
        addUser:[{ required: true, message: '该项不能为空',trigger: 'change'}],
        getCall:[{ required: true, message: '该项不能为空',trigger: 'change'}],
        xqId:[{ required: true, message: '该项不能为空',trigger: 'change'}],
        houseId:[{ required: true, message: '该项不能为空',trigger: 'change'}],
        userType:[{ required: true, message: '该项不能为空',trigger: 'change'}],
      },
    }
  },
  methods:{
    handleAvatarSuccess(res,file){//未选中的图标
      this.formPush.checkImg = res.data[0]
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess1(res,file){//选中的图标
      this.formPush.uncheckImg = res.data[0]
      this.imageUrl1 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess2(res,file){//未选中的图标
      this.formUpdate.checkImg = res.data[0]
      this.imageUrl2 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess3(res,file){//选中的图标
      this.formUpdate.uncheckImg = res.data[0]
      this.imageUrl3 = URL.createObjectURL(file.raw);
    },
    getlist(){
      classifyList(this.formSearch).then((res)=>{//查询房间业主/成员分页列表
        console.log(res)
        if(res.data.code == 200){
          this.formData = res.data.data.records.filter((item)=>{
            if(item.gmtCreate){
              item.gmtCreate = this.$root.getDateArray(item.gmtCreate)[9]
            }
            return item
          })
          this.$nextTick(()=>{
            this.total =res.data.data.total
            // this.toggleSelection(this.allSelect)
          })
        }else{
          this.$message(res.data.msg);
        }
      })
    },
    getInit(){//初始化列表
      this.getlist()
      // this.gethouseLIst()
      let org_tree={
            name:'',
            status:1
          }
      orgTree(org_tree).then((res)=>{//组织列表
        console.log(res)
        if(res.data.code == 200){
          this.dataTree = res.data.data
        }
      })
      let params = {
        parentId:0
      }
      classifylistone({}).then((res)=>{//查询公园资产归类一级下拉列表
        console.log(res)
        if(res.data.code == 200){
          this.typeList = res.data.data
        }
      })
      
      let org_tree1={}
      xqSelectList(org_tree1).then((res)=>{//小区选择列表
        console.log(res)
        if(res.data.code == 200){
          this.xqTree = res.data.data
        }
      })
    },
    addList(addList){//添加
    
      this.$refs[addList].validate((valid) => {
        if (valid) {

          addClassify(this.formPush).then((res)=>{
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
    updateList(){//修改
    console.log(this.formUpdate)
      updateClassify(this.formUpdate).then((res)=>{
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
        deleteClassify(arrId).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message('删除成功');
            this.getInit()
          }
        })
      })
      .catch(_ => {});
    },
    toggleSelection(rows) {//回显
      console.log(rows,this.formData)
      if (rows) {
      let objs = []
      for(let i = 0;i<rows.length; i++){
        console.log(this.formData.find(item=>item.id==rows[i].id))
        if(this.formData.find(item=>item.id==rows[i].id)){
          
          objs.push(this.formData[0])
        }
      } 
      console.log(objs)
      console.log(objs[0]==this.formData[0])
        objs.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val,self) {//多选
      this.deleBatch = val
      let obj = {}
      let aa = val.find(item=>item.id == self.id) 
      console.log(aa)
      if(aa){
        this.allSelect = [...this.allSelect,...val]
        this.allSelect = this.allSelect.reduce((cur,next) => {
            obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
            return cur;
        },[])
      }else{
        this.allSelect = this.allSelect.filter((item)=>{
          return item.id!=self.id
        })
      }
      console.log(this.allSelect)
      // this.deleBatch = this.allSelect
      // console.log(this.deleBatch)
    },
    handleCurrentPage(val){//页码改变
      this.formSearch.current=val
      this.getInit()
      
    },
    checkTreeInfor(data,ev) {//监听树状图勾选
      // console.log(ev);
      if(ev.checkedKeys.length>1){
        this.$message('只能选择一个组织');
      }else{
        this.formPush.orgId = ev.checkedKeys[0]
        this.formUpdate.orgId = ev.checkedKeys[0]
      }
    },
    updateShowBox(item){//修改东西弹窗
      this.formUpdate = {
        uncheckImg:item.uncheckImg,
        checkImg:item.checkImg,
        name:item.name,
        parentId:item.parentId,
        id:item.id
      }
      this.imageUrl2 = item.uncheckImg
      this.imageUrl3 = item.checkImg
      this.updateDialog = true
      console.log(this.formUpdate)
    },
    zuzhiChange1(value){//改变组织
      if(value.length!=0){
        console.log(value)
        this.formSearch1.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id
      }else{
        this.formSearch1.orgId = ''
      }
      this.gethouseLIst(this.formSearch1)
    },    
    handleChange(value){
      if(value.length!=0){
        console.log(value)
        this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id
      }else{
        this.formSearch.orgId = ''
      }
      classifyList(this.formSearch).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.formData = res.data.data.records.filter((item)=>{
            if(item.gmtCreate){
              item.gmtCreate = this.$root.getDateArray(item.gmtCreate)[9]
            }
            return item
          })
          this.total = res.data.data.total
          this.pages = res.data.pages
        }else{
          this.$message(res.data.msg);
        }
      })
    }
  },
  mounted(){
    this.getInit()
  },
  components:{
    paging
  }
}
</script>
<style scoped>
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

</style>