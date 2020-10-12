<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline" label-width="100px">
      <el-form-item label="标题" size="small">
        <el-input v-model="formSearch.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="发送人账号" size="small">
        <el-input v-model="formSearch.account" placeholder="请输入发送人账号"></el-input>
      </el-form-item>
      <el-form-item label="发送人姓名" size="small">
        <el-input v-model="formSearch.name" placeholder="请输入发送人姓名"></el-input>
      </el-form-item>
      <el-form-item label="发送人手机号" size="small">
        <el-input v-model="formSearch.phone" placeholder="请输入发送人手机号"></el-input>
      </el-form-item>
      <el-form-item label="时间" size="small">
        <el-date-picker
          v-model="formSearch.startTime"
          type="datetime"
          value-format="timestamp"
          placeholder="开始时间">
        </el-date-picker>
        <span style="color:#a1d6f4;"> - </span>
        <el-date-picker
          v-model="formSearch.endTime"
          type="datetime"
          value-format="timestamp"
          placeholder="结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="getInit">查 询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="getgetAllHouseUser">添 加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="danger" @click="deleInfor(false)">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="account" label="发送人账号"></el-table-column>
          <el-table-column prop="endTime" label="结束时间" ></el-table-column>
      <el-table-column prop="name" label="发送人姓名" ></el-table-column>
      <el-table-column prop="phone"label="发送人手机号"></el-table-column>
          <el-table-column prop="startTime" label="开始时间" ></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{scope.row.status==1?"已发送":scope.row.status==2?"待发送":"已撤回"}}
				</template>
      </el-table-column>

      <el-table-column label="操作" fixed="right" width=250>
				<template slot-scope="scope">
					<el-button type="warning" v-if="scope.row.status==1" size="small" @click="chehui(scope.row.id)">撤 回</el-button>
					<el-button type="" v-if="scope.row.status==2" size="small" @click="lijifasong(scope.row.id)">立即发送</el-button>
					<el-button type="warning" v-if="scope.row.status==2" size="small" @click="updateShowBox(scope.row)">修 改</el-button>
					<el-button type="danger" v-if="scope.row.status==2" size="small" @click="deleInfor(scope.row.id)">删 除</el-button>
				</template>
			</el-table-column>
    </el-table>
    <paging @changePage = handleCurrentPage :get-total='total'></paging>

    <!-- 添加 -->
    <el-dialog title="发送资讯" :visible.sync="addDialog" :close-on-click-modal="false">
      <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules"  ref='addList'>

         <el-form-item label="标题">
            <el-input v-model="formPush.title"></el-input>
          </el-form-item>
          <el-form-item label="详细内容">
            <el-input v-model="formPush.content"></el-input>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input v-model="formPush.summary"></el-input>
          </el-form-item>
          <!-- <el-form-item label="所属归类" size="small">
            <el-select v-model="formPush.assetsClassifyId" placeholder="请选择分类">
              <el-option v-for="item in typeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="图片" size="small" prop="picture">
            <el-upload
              class="avatar-uploader"
              :action="uploadToRealPath"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="是否发送">
            <el-radio v-model="formPush.isSend" :label="1">是</el-radio>
            <el-radio v-model="formPush.isSend" :label="0">否</el-radio>
          </el-form-item>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium " @click="addDialog = false">取 消</el-button>
        <el-button size="medium " @click="addList('addList')">发 送</el-button>
      </div>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog title="修改" :visible.sync="updateDialog" :close-on-click-modal="false">
      <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formUpdate" :rules="rules"  ref='addList'>
         <el-form-item label="标题">
            <el-input v-model="formUpdate.title"></el-input>
          </el-form-item>
          <el-form-item label="详细内容">
            <el-input v-model="formUpdate.content"></el-input>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input v-model="formUpdate.summary"></el-input>
          </el-form-item>
          <el-form-item label="图片" size="small" prop="picture">
            <el-upload
              class="avatar-uploader"
              :action="uploadToRealPath"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1">
              <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="是否发送">
            <el-radio v-model="formUpdate.isSend" :label="1">是</el-radio>
            <el-radio v-model="formUpdate.isSend" :label="0">否</el-radio>
          </el-form-item>

            </el-tree>
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
import acsdev from "./xinxiacs_dev1"
import { getMessage,addMessage,editMessage,delMessage,recallMessage,getOneHouseUser,sendMessage,classifylisttwo } from '../../url/api';
export default {
  data(){
    return{
      uploadToRealPath:'/park/upload/file/upload',
      headers:{
        Authorization:sessionStorage.getItem('Authorization'),
        token:sessionStorage.getItem('token')
      },
      allSelect:[],
      option1:[],
      showhouseUser:false,
      pushSelect:0,//控制是否提交勾选的东西
      devListt:'',
      imageUrl:'',
      imageUrl1:'',
      xqId:'',
      devList:[],
      deleBatch:[],
      isGetFather:false,//是否选中
      devDialog:false,//选择设备
      formSearch:{//查询条件
        current:1,
        size: 10
      },
      formSearch1:{
        type:2,
        current:1,
        size: 10
      },
      formPush:{
        isSend:1,
      
      },//表单提交
      formData: [],//数据
      formData1: [],//数据
      formData2: [],//数据
      formUpdate:{},//修改表单
      total: 0,//数据总数
      total1: 0,//数据总数
      pages:0,//页面总数
      addDialog:false,
      updateDialog:false,
      dataTree:[],
      defaultProps: {//树状图key定义
        children: 'children',
        label: 'name'
      },
      defaultProps2: {
        children: 'children',
        label: 'name',
        value: 'id',
        expandTrigger: 'hover',checkStrictly: true
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
        devList:[{ type: 'array',required: true, message: '该项不能为空',trigger: 'change'}]
      },
      fileList:[],
      typeList:[],
      selectedHouse:[]
    }
  },
  methods:{
    getOneHouseUser(id){//获取单个房间的用户列表
    console.log(`id:`+id)
      getOneHouseUser(id).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.$nextTick(()=>{
            this.formData2 = res.data.data.userList
          })
        }
      })
    },
    chehui(id){//撤回
       this.$confirm('确定要撤回吗？')
       .then(_ => {
         recallMessage(id).then((res)=>{
           console.log(res)
           if(res.data.code == 200){
             this.$message('撤回成功');
             this.getlist()
           }
         })
       })
       .catch(_ => {});
     },
    lijifasong(id){//立即发送
      this.$confirm('确定要立即发送吗？')
      .then(_ => {
        sendMessage(id).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message('立即发送成功');
            this.getlist()
          }
        })
      })
      .catch(_ => {});
    },
    handleAvatarSuccess(res, file,fileList) {
      console.log(res, file)
      this.imageUrl = URL.createObjectURL(file.raw);
      this.formPush.imageNames = res.data
    },
    handleAvatarSuccess1(res, file,fileList) {
      console.log(res, file)
      this.imageUrl1 = URL.createObjectURL(file.raw);
      this.formUpdate.imageNames = res.data
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.fileList = fileList
    },
    loadNode(node, resolve) {
      // console.log(node, resolve)
      if(node.level == 0){
        return resolve(node.data);
      }
      let data1=node.data.children||[]
      let data2 =node.data.houseNodes||[]
      let data3 =node.data.userList||[]
      let data =[...data1,...data2]
      setTimeout(() => {
        resolve(data);
      }, 500);
    },
    getgetAllHouseUser(){
      this.addDialog = true


    },
    handleCurrentPage1(val){//页码房间列表
      this.formSearch1.current=val
      this.getgetAllHouseUser()
    },
    getlist(){
      getMessage(this.formSearch).then((res)=>{//查询房间业主/成员分页列表
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
      classifylisttwo({}).then((res)=>{//查询公园资产归类二级下拉列表
        console.log(res)
        if(res.data.code == 200){
          this.typeList = res.data.data
        }
      })
      this.getlist()
      let org_tree={
            name:'',
            status:1
          }

    },
    addList(addList){//添加
      console.log(this.formPush)
      addMessage(this.formPush).then((res)=>{
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
        
    },
    updateList(){//修改
    console.log(this.formUpdate)
      editMessage(this.formUpdate).then((res)=>{
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
      }else{
        if(this.deleBatch.length!=0){
          this.deleBatch.filter((item)=>{
            arrId.push(item.id)
            return item
          })
        }
      }
      this.$confirm('确认删除吗？')
      .then(_ => {
        delMessage(arrId).then((res)=>{
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
      this.getlist()
    },
    selected(arrobj){//选中的设备
      this.pushSelect = 0
      if(arrobj.length!=0){
        this.devListt = ''
        this.formPush.devIds = []
        arrobj = arrobj.filter((item)=>{
          let obj ={
            devSn:item.devSn||'',
            devType:item.devType||'',
            doorkeySign:item.doorkeySign||'',
            id:item.id||'',
            name:item.name||'',
            ncuSn:item.ncuSn||'',
            viceDevice:item.viceDevice||'',
          }
          this.formPush.devIds.push(item.id)
          // this.devList.push(obj)
          this.devListt =this.devListt + item.name + "，"
          return item
        })
        this.devListt = this.devListt.substring(0,this.devListt.length-1)
      }

      console.log(arrobj)
      this.devDialog =false
    },
    nextt(){
      this.devDialog =true
      this.$nextTick(()=>{
        this.xqId = this.formPush.xqId||this.xqTree[0].id
        this.devList =this.formPush.devIds
        console.log(this.formPush.devIds)
      })
    },
    checkTreeInfor(data,ev) {//监听树状图勾选
      console.log(ev);
      let obj = ev.checkedNodes
      if(obj[0].houseNodes){

      }
      this.getOneHouseUser(ev.checkedKeys[0])
      // this.formPush.orgId = ev.checkedKeys[0]
      // this.formUpdate.orgId = ev.checkedKeys[0]

    },
    checkTreeInfor1(data,ev) {//监听树状图勾选
      console.log(ev);
      let obj = ev.checkedNodes
      // this.formPush.orgId = ev.checkedKeys[0]
      // this.formUpdate.orgId = ev.checkedKeys[0]
      this.formPush.userIds = [ev.checkedKeys]
    },
    updateShowBox(item){//修改东西弹窗
      this.devListt = ''
      this.formUpdate = {
        devIds:item.devIds,
        content:item.content,
        userIds:item.userIds,
        imageNames:item.imageNames,
        isSend:item.isSend,
        summary:item.summary,
        title:item.title,
        id:item.id
      }
      this.updateDialog = true
      console.log(item)
    },
    zuzhiChange1(value){//改变组织
      if(value.length!=0){
        console.log(value)
        this.formSearch1.orgId=this.$refs.cascader1.getCheckedNodes()[0].data.id
        this.formSearch.orgId=this.$refs.cascader1.getCheckedNodes()[0].data.id
      }else{
        this.formSearch.orgId = ''
        this.formSearch1.orgId = ''
      }
      this.getgetAllHouseUser(this.formSearch1)
    },
    handleChange(value){
      if(value.length!=0){
        console.log(value)
        this.formSearch1.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id
        this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id
      }else{
        this.formSearch.orgId = ''
        this.formSearch1.orgId = ''
      }
      getMessage(this.formSearch).then((res)=>{
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
    paging,
    acsdev
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
