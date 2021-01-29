<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline" label-width="100px">
      <!-- <el-form-item label="选择小区" size="small" prop="xqId">
        <el-select v-model="formSearch.xqId" placeholder="请选择小区">
          <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item>
        <el-button size="small" @click="addDialog=true">添加平台</el-button>
      </el-form-item>
      <el-form-item>
        <!-- <el-button size="small" type="danger" @click="">试用设备</el-button> -->
        <!-- <el-button size="small" type="danger" @click="deleInfor(false)">批量删除</el-button> -->
      </el-form-item>
    </el-form>
    <el-table :data="formData" style="width: 100%" stripe @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="ip" label="设备IP"></el-table-column>
      <el-table-column prop="loginName" label="登录名称"></el-table-column>
      <el-table-column prop="loginPwd" label="登录密码"></el-table-column>
      <el-table-column prop="port" label="设备端口"></el-table-column>
      <el-table-column prop="" label="创建时间">
				<template slot-scope="scope">
          {{$root.getDateArray(scope.row.creator)[9]}}
				</template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width=150>
				<template slot-scope="scope">
					<el-button type="warning" size="small" @click="updateShowBox(scope.row)">修改</el-button>
					<el-button type="danger" size="small" @click="deleInfor(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
    </el-table>
    <!-- <paging @changePage = handleCurrentPage :get-total='total'></paging> -->
    <!-- 添加 -->
    <el-dialog title="添加" :visible.sync="addDialog" :close-on-click-modal="false">
      <div class="cont_box_right">
        <el-form label-position="right" :rules="rules" label-width="85px" :model="formPush" ref="addList"> 
          <el-form-item label="选择小区" size="small" prop="xqId">
            <el-select v-model="formPush.xqId" placeholder="请选择小区">
              <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备IP" size="small" prop="ip">
            <el-input v-model="formPush.ip" placeholder="请输入设备IP"></el-input>
          </el-form-item>
          <el-form-item label="登录名称" size="small" prop="loginName">
            <el-input v-model="formPush.loginName" placeholder="请输入登录名称"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" size="small" prop="loginPwd">
            <el-input v-model="formPush.loginPwd" placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <el-form-item label="设备端口" size="small" prop="port">
            <el-input v-model="formPush.port" placeholder="请输入设备端口"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium " @click="addDialog = false">取 消</el-button>
        <el-button size="medium " @click="addList('addList')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="修改" :visible.sync="updateDialog" :close-on-click-modal="false">
      <div class="cont_box_right">
        <el-form label-position="right" :rules="rules" label-width="85px" :model="formUpdate" ref="update"> 
          <el-form-item label="选择小区" size="small" prop="xqId">
            <el-select v-model="formUpdate.xqId" placeholder="请选择小区">
              <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备IP" size="small" prop="ip">
            <el-input v-model="formUpdate.ip" placeholder="请输入设备IP"></el-input>
          </el-form-item>
          <el-form-item label="登录名称" size="small" prop="loginName">
            <el-input v-model="formUpdate.loginName" placeholder="请输入登录名称"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" size="small" prop="loginPwd">
            <el-input v-model="formUpdate.loginPwd" placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <el-form-item label="设备端口" size="small" prop="port">
            <el-input v-model="formUpdate.port" placeholder="请输入设备端口"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium " @click="updateDialog = false">取 消</el-button>
        <el-button size="medium " @click="updateList('update')">确 定</el-button>
      </div>
    </el-dialog>
  </section>  
</template>

<script>
import paging from "../paging"
// import { getDevInfo,delDevInfo,addDevInfo,updateDevInfo,addReply,xqSelectList } from '../../url/api';
export default {
  data(){
    return{
      checkStrictly:false,
      bindRole:{},
      showmenuList:[],
      menuList:[],
      option1:[],
      xqTree:[],
      total:0,
      isAddorUpdate:1,//1添加、2修改
      formSearch:{
        xqId:'',
        current:1,
        size:10
      },
      formData: [],//数据
      deleBatch: [],//删除数据
      formUpdate:{},//修改表单
      total: 0,//数据总数
      pages:0,//页面总数
      addDialog:false,
      updateDialog:false,
      dialog:false,
      replyType:1,//1。单个回复 2.批量回复
      formPush:{
      },
      dataTree:[],
      defaultProps: {//树状图key定义
        children: 'data',
        label: 'name'
      },
      defaultProps2: {
        children: 'children',
        label: 'name',
        value: 'id',
        expandTrigger: 'hover',checkStrictly: true
      },
      reply:'',
      rules: {
        port:[{ required: true, message: '该项不能为空'}],
        loginName:[{ required: true, message: '该项不能为空'}],
        loginPwd:[{ required: true, message: '该项不能为空'}],
        ip:[{ required: true, message: '该项不能为空'}],
        type:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        xqId:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
      },
      imageUrl:''
    }
  },
  methods:{
    getlist(){
      getDevInfo().then((res)=>{//获取平台信息列表
        console.log(res)
        if(res.data.code == 200){
          this.formData = res.data.data.filter((item)=>{
            return item
          })
          this.total = res.data.data.total
        }else{
          this.$message(res.data.msg);
        }
      })
    },
    getInit(){
      xqSelectList({}).then((res)=>{//小区选择列表
        console.log(res)
        if(res.data.code == 200){
          this.xqTree = res.data.data
          this.formSearch.xqId =Number(sessionStorage.getItem('defailXqid')||this.xqTree[0].id)
          this.getlist()
        }
      })
    },
    addList(addList){//添加树状图node节点
      console.log(addList)
      this.$refs[addList].validate((valid) => {
        if (valid) {
          addDevInfo(this.formPush).then((res)=>{
            console.log(res)
            if(res.data.code == 200){
              this.getlist()
              this.$message({
                message: '添加成功',
                type: 'success'
              });
              
            }else{
              this.$message('添加失败:'+res.data.msg)
            }
          })
          this.addDialog = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    updateList(formName){//修改
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = this.formUpdate
          updateDevInfo(params).then((res)=>{
            console.log(res)
            if(res.data.code == 200){
              this.$message({
                message: '修改成功',
                type: 'warning'
              });
              this.getlist()
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
        this.updateDialog =false
      });
    },
    updateShowBox(item){//修改东西弹窗
      console.log(item)
      // this.formUpdate = JSON.parse(JSON.stringify(item));
      this.formUpdate = {
        id:item.id,
        ip:item.ip,
        loginName:item.loginName,
        loginPwd:item.loginPwd,
        port:item.port,
        xqId:item.xqId,
      }
      this.updateDialog = true
      
    },
   deleInfor(ids){//删除
      let arrId = []
      if(ids){
        arrId.push(ids)
      }else{
        if(this.deleBatch.length!=0){
          this.deleBatch.filter((item)=>{
            arrId.push(item.carId)
            return item
          })
        }
      }
      let params={
        infoIn:ids
      }
      this.$confirm('确认删除吗？')
      .then(_ => {
        delDevInfo(params).then((res)=>{
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
      console.log(this.deleBatch)
    },
    handleCurrentPage(val){//页码改变
      this.formSearch.current=val
      this.getList()
    },
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