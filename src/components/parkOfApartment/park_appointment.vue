<template>
  <section class="modlude">
    <searchModule  @muchDeleteType="getMuchDeleteType" @searchInfor="getSearchInfor" @addTotrue="getAddTotrue" :formSearch="formSearch" :formItems="formItems" :showAddBtn="showAddBtn" :showDelBtn="showDelBtn"></searchModule>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @select="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="场馆名字"></el-table-column>
      <el-table-column prop="appointmentTime" label="最小可预约时间段"></el-table-column>
     <el-table-column prop="" label="开馆时间"  width="150">
        <template slot-scope="scope" v-if="scope.row.openingTime">
          {{$root.getDateArray(Number(scope.row.openingTime))[11]}}
        </template>
    </el-table-column>
     <el-table-column prop="" label="闭馆时间"  width="150">
        <template slot-scope="scope" v-if="scope.row.closingTime">
          {{$root.getDateArray(Number(scope.row.closingTime))[11]}}
        </template>
    </el-table-column>
     <!-- <el-table-column prop="" label="放号时间"  width="150">
        <template slot-scope="scope" v-if="scope.row.numberTime">
          {{$root.getDateArray(Number(scope.row.numberTime))[9]}}
        </template>
    </el-table-column> -->
    <el-table-column prop="" label="是否可预约">
      <template slot-scope="scope">
        {{scope.row.ifappointMent==1?"已预约":"未预约"}}
      </template>
    </el-table-column>
    <el-table-column prop="smallPrice" label="最小预约价格单价"></el-table-column>
    <el-table-column prop="gmtModified" label="不服务时间开始">
        <template slot-scope="scope" v-if="scope.row.outofserviceHoursks">
          {{$root.getDateArray(scope.row.outofserviceHoursks)[11]}}
        </template>
    </el-table-column>
    <el-table-column prop="gmtCreate" label="不服务时间结束">
        <template slot-scope="scope" v-if="scope.row.outofserviceHoursjs">
          {{$root.getDateArray(scope.row.outofserviceHoursjs)[11]}}
        </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width=150>
        <template slot-scope="scope">
            <!-- <el-button type="warning" size="small" @click="updateShowBox(scope.row),detailsDialog = true">修 改</el-button> -->
            <el-button type="danger" size="small" @click="deleInfor(scope.row.id)">删 除</el-button>
            <!-- <el-button type="primary" size="small" @click="updateShowBox(scope.row),detailsDialog=false">查看详情</el-button> -->
            <el-button type="primary" size="small" @click="fanhao.id=scope.row.id,fanhaoDialog=true,getonckieAallocation(scope.row.id)">放号</el-button>
        </template>
    </el-table-column>
</el-table>

<paging @changePage="handleCurrentPage" :get-total='total'></paging>

<!-- 添加 -->
<el-dialog title="新增" :visible.sync="addDialog">
    <div class="cont_box_left">
        <el-table ref="multipleTable" :data="formData1" style="width: 100%" stripe @select="handleSelectionChange" height="300">
          <el-table-column  width="55" label="编号">
              <template slot-scope="scope">
                <el-radio v-model="formPush.touristId" :label="scope.row.id">{{scope.row.id}}</el-radio>
              </template>
          </el-table-column>
          <el-table-column prop="name" label="公园名称"></el-table-column>
          <el-table-column prop="updator" label="更新者"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="" label="营业时间"  width="150">
              <template slot-scope="scope" v-if="scope.row.businessHours">
                {{$root.getDateArray(Number(scope.row.businessHours))[9]}}
              </template>
          </el-table-column>
          <el-table-column prop="contactNumber" label="联系电话"></el-table-column>
          <el-table-column prop="label" label="标签"></el-table-column>
        </el-table>
        <el-form :inline="true" class="el_input200" label-position="right" label-width="120px" :model="formPush" :rules="rules" ref='addList'>
            <el-form-item label="最小时间段" style="margin-top:20px;">
                <el-input v-model="formPush.appointmentTime" placeholder="单位（分钟）"></el-input>
                <!-- <span>分</span> -->
            </el-form-item>
            <el-form-item label="最小价格单价" style="margin-top:20px;">
                <el-input v-model.number="formPush.smallPrice"></el-input>
            </el-form-item>
            <el-form-item label="开馆时间">
                <el-time-picker v-model="formPush.openingTime" value-format="timestamp" placeholder="开馆时间"></el-time-picker>
            </el-form-item>
            <el-form-item label="闭馆时间">
                <el-time-picker v-model="formPush.closingTime" value-format="timestamp" placeholder="闭馆时间"></el-time-picker>
            </el-form-item>
            <!-- <el-form-item label="提前放号天数" prop="numberAdvance">
                <el-input v-model.number="formPush.numberAdvance"></el-input>
            </el-form-item>
            <el-form-item label="放号天数" prop="daysNumberallocation">
                <el-input v-model.number="formPush.daysNumberallocation"></el-input>
            </el-form-item> -->
            <el-form-item label="不服务开始时间">
                <el-time-picker v-model="formPush.outofserviceHoursks" value-format="timestamp" placeholder="不服务开始时间"></el-time-picker>
            </el-form-item>
            <el-form-item label="不服务结束时间">
                <el-time-picker v-model="formPush.outofserviceHoursjs" value-format="timestamp" placeholder="不服务结束时间"></el-time-picker>
            </el-form-item>
            <el-form-item label="是否可预约">
              <el-radio v-model="formPush.ifappointment" :label="0">未预约</el-radio>
              <el-radio v-model="formPush.ifappointment" :label="1">已预约</el-radio>
            </el-form-item>
        </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="medium " @click="addDialog = false">取 消</el-button>
      <el-button size="medium " @click="addList('addList')">新 增</el-button>
    </div>
  </el-dialog>
<!-- 放号 -->
<el-dialog title="放号" :visible.sync="fanhaoDialog">
    <div class="cont_box_left">
        <el-form label-position="right" label-width="130px">
          <el-form-item label="放号天数" class="fanghao_time">
            <el-date-picker
              v-model="fanghaoDate"
              @change="getfanghaoDate"
              type="daterange"
              value-format="timestamp"
              :picker-options="pickerOptions1"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="可预约人数">
            <el-input v-model.number="fanhao.number"></el-input>
          </el-form-item>
        </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="medium " @click="fanhaoDialog = false">取 消</el-button>
      <el-button size="medium " @click="getnumberAallocation" :loading="loading">放 号</el-button>
    </div>
  </el-dialog>
</section>
</template>

<script>
  import searchModule from '../searchModule'
    import paging from '../paging'
    import {
        appointmentListData,
        delectAallocation,
        appointmentList,
        appointmentAdd,
        onckieAallocation,
        numberAallocation,
    } from '../../url/api';
    export default {
        data() {
            return {
                loading:false,
                defineDate:[],
                // defineDate:[1608134400000,1608480000000,1606233600000],
                pickerOptions: {
                  disabledDate(time) {
                    let curDate = (new Date()).getTime();
                    let adate =  24 * 3600 * 1000-10;
                    return time.getTime() == 1606233600000;
                  }
                },
                fanghaoDate:[],
                deleBatch: [],
                formSearch: { //查询条件
                    current: 1,
                    size: 10
                },
                formSearch1: {
                    type: 2,
                    current: 1,
                    size: 10
                },
                formPush: { //信息提交
                }, //表单提交
                formData: [], //数据
                formData1: [], //数据
                touristOptions: [], //数据
                formUpdate: {}, //修改表单
                total: 0, //数据总数
                addDialog: false,
                updateDialog: false,
                fanhaoDialog: false,
                dataTree: [],
                uploadToRealPath: '/park/upload/file/upload',
                defaultProps: { //树状图key定义
                    children: 'children',
                    label: 'label'
                },
                defaultProps2: {
                    children: 'children',
                    label: 'name',
                    value: 'id',
                    expandTrigger: 'hover'
                },
                headers: {
                    Authorization: sessionStorage.getItem('Authorization'),
                    token: sessionStorage.getItem('token')
                },
                showAddBtn:true,//显示添加按钮
                showDelBtn:true,//显示批量删除按钮
                formItems:{//搜索模块label
                  formItemsArr:[
                    {
                      name:'最小价格单价',
                      filed:"smallPrice",
                      type:'text'
                    },
                    {
                      name:'最小时间段',
                      filed:"appointmentTime",
                      type:'text'
                    },
                    {
                      name:'放号天数',
                      filed:"daysNumberallocation",
                      type:'text'
                    },
                    {
                      name:'提前放号天数',
                      filed:"numberAdvance",
                      type:'text'
                    },
                    // {
                    //   name:'开馆时间',
                    //   filed:"openingTime",
                    //   type:'datePicker'
                    // },
                    // {
                    //   name:'闭馆时间',
                    //   filed:"closingTime",
                    //   type:'datePicker'
                    // },
                    // {
                    //   name:'放号时间',
                    //   filed:"numberTime",
                    //   type:'datePicker'
                    // },
                    // {
                    //   name:'不服务时间开始',
                    //   filed:"outofserviceHoursks",
                    //   type:'datePicker'
                    // },
                    // {
                    //   name:'不服务时间结束',
                    //   filed:"outofserviceHoursjs",
                    //   type:'datePicker'
                    // },
                    {
                      name:'景点',
                      filed:"touristId",
                      type:'select',
                      options:[]
                    },
                    {
                      name:'是否可预约',
                      filed:"ifappointMent",
                      type:'radio',
                      options:[
                        {
                          label:1,
                          name:'已预约',
                        },
                        {
                          label:0,
                          name:'未预约',
                        },
                      ]
                    },
                  ],
                  labelWidth:'110px'
                },
                rules: {
                    touristId: [{
                        type:'radio',
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    numberAdvance: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'blur'
                    }],
                    daysNumberallocation: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'blur'
                    }],
                    daysNumberallocation: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    ifappointment: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    openingTime: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    outofserviceHoursjs: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    outofserviceHoursks: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    smallPrice: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                },
                fanhao:{}
            }
        },
        computed:{
          pickerOptions1(){
            let _this = this
            let obj = {
              disabledDate(time){
                let b=''
                _this.defineDate.forEach((item,index)=>{
                    b = b+'time.getTime()=='+item+'||';
                })
                b= b+'time.getTime()<(new Date()).getTime()-24 * 3600 * 1000'
                let a = eval(b);
                return a;
              }
            }
            return obj
          }
        },
        methods: {
          getonckieAallocation(id){//放号时间限制
            let params = {
              id:id
            }
            console.log(id)
            onckieAallocation(params).then(res=>{
              console.log(res)
              if(res.data.code == 200){
                this.defineDate=res.data.data
              }
            })
          },
          getfanghaoDate(val){ 
            
            this.fanhao.startTime = val[0]
            this.fanhao.numberofTime = val[1]
            console.log(val,this.fanhao)
          },
          getnumberAallocation(){//放号
            
            let params = this.fanhao
            let defineDatee = this.defineDate
            if(!this.fanhao.number){
              this.$message("请填写可预约人数")
              return
            }
            for (let index = 0; index < defineDatee.length; index++) {
              if(defineDatee[index]<this.fanhao.numberofTime&&defineDatee[index]>=this.fanhao.startTime){
                this.$message("选中的时间段不可用")
                return
              }
            }
            this.loading = true
            numberAallocation(params).then(res=>{
              if(res.data.code == 200){
                this.$message("放号成功")
                this.fanhaoDialog = false
                this.getlist()
              }else{
                this.$message("放号失败")
              }
              this.loading = false
            })
          },
            getlist() {
              appointmentListData(this.formSearch).then((res) => {
                  console.log(res)
                  if (res.data.code == 200) {
                      this.formData = res.data.data.records.filter((item) => {
                          return item
                      })
                      this.total = res.data.data.total
                  } else {
                      this.$message(res.data.msg);
                  }
              })
            },
            getInit() { //初始化列表
                this.getlist()
                this.getappointmentList()
            },
            getappointmentList(){//查询景点无分页列表
              let params={
                size:1,
                current:10
              }
              appointmentList(params).then(res=>{
                console.log(res)
                let aa= []
                if(res.data.code == 200){
                  this.formData1 = res.data.data.filter(item=>{
                    let obj = {
                      label:item.name,
                      value:item.id
                    }
                    aa.push(obj)
                    return item
                  })
                  this.formItems.formItemsArr.forEach(item=>{
                    if(item.type == 'select'){
                      item.options = aa
                    }
                  })
                    // this.touristOptions = aa
                }
              })
            },
            showAdd() {
                this.addDialog = true
            },
            addList(addList) { //添加
              this.appointmentTime
              if(this.appointmentTime>60||this.appointmentTime<0){
                this.$message("最小时间段不能大于60小于0分钟")
                return
              }
                this.$refs[addList].validate((valid) => {
                    if (valid) {
                        appointmentAdd(this.formPush).then((res) => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.getlist()
                                this.$message({
                                    message: '添加成功',
                                    type: 'success'
                                })
                            } else {
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
            updateList() { //修改
                console.log(this.formUpdate)
                updParklist(this.formUpdate).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$message({
                            message: '修改成功',
                            type: 'warning'
                        });
                        this.getInit()
                    }
                })
                this.updateDialog = false
            },
            deleInfor(ids) { //删除
                let arrId = []
                if (ids) {
                    arrId.push(ids)
                }
                if (this.deleBatch.length != 0) {
                    this.deleBatch.filter((item) => {
                        arrId.push(item.id)
                        return item
                    })
                }
                this.$confirm('确认删除吗？')
                    .then(_ => {
                        delectAallocation(arrId).then((res) => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.$message('删除成功');
                                this.getInit()
                            }
                        })
                    })
                    .catch(_ => {});
            },

            handleSelectionChange(val, self) { //多选
                this.deleBatch = val
            },
            handleCurrentPage(val) { //页码改变
                this.formSearch.current = val
                this.getlist()
            },
            updateShowBox(item) { //修改东西弹窗
                this.formUpdate = {
                    address: item.address,
                    name: item.name,
                    id: item.id,
                    businessHours: item.businessHours,
                    contactNumber: item.contactNumber,
                    coverImg: item.coverImg,
                    coverVideo: item.coverVideo,
                    description: item.description,
                    intro: item.intro,
                    label: item.label
                }
                this.imageUrl = item.coverImg
                this.videoUrl = item.coverVideo
                this.updateDialog = true
                if (item.picture) {
                    item.picture.split(',').forEach(item => {
                        let obj = {
                            url: item
                        }
                        if (item) {
                            this.fileList.push(obj)
                        }

                    })

                }
                console.log(this.formUpdate, this.fileList)

            },
            getMuchDeleteType(val){//从模块中执行删除功能
              this.deleInfor(val)
            },
            getAddTotrue(val){//从模块中执行添加弹框功能
              this.addDialog=val
            },
            getSearchInfor(val){//从模块中执行查询功能
              this.formSearch=val
              this.getlist()
            },
        },
        mounted() {
            this.getInit()
        },
        components: {
            paging,
            searchModule
        }
    }
</script>
<style>
.el_input200 .el-input{
  width:200px;
}
.el_input200 span{
  color:#a1d6f4;
}
</style>