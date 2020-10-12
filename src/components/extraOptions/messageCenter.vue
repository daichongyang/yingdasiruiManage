<template>
  <section class="modlude">
    <div class="nav_options" style="margin-bottom:20px;">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="changeActive(1)">
        <el-badge :value="noRead.financeNum" class="item" :max="99" style="">
          <span class="txt">报警信息</span>
        </el-badge>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="changeActive(2)">
        <span>公告通知</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 3}" @click="changeActive(3)">
        <span>支付信息</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 4}" @click="changeActive(4)">
        <span>服务信息</span>
      </div>
    </div>
      <!-- 水列表部分 -->
      <el-table :data="inforList"  v-if="isActive == 1" style="width: 100%" stripe @selection-change="handleSelectionChange">

    <el-table-column prop="" label="创建时间">
        <template slot-scope="scope" v-if="scope.row.gmtCreate">
          {{$root.getDateArray(scope.row.gmtCreate)[9]}}
        </template>
</el-table-column>
<el-table-column prop="" label="修改时间">
    <template slot-scope="scope" v-if="scope.row.gmtModified">
            {{$root.getDateArray(scope.row.gmtModified)[9]}}
          </template>
</el-table-column>

<el-table-column prop="id" label="id"></el-table-column>
<el-table-column prop="latitude" label="纬度"></el-table-column>
<el-table-column prop="longitude" label="经度"></el-table-column>
<el-table-column prop="remark" label="备注"></el-table-column>
<el-table-column prop="score" label="评论"></el-table-column>
<el-table-column prop="nickname" label="报警人姓名"></el-table-column>

<el-table-column prop="phone" label="报警人手机号"></el-table-column>
<el-table-column prop="status" label="状态">
    <template slot-scope="scope">
       		{{scope.row.status==1?"未处理":scope.row.status==2?"处理中":"处理完成"}}
       	</template>
</el-table-column>
<el-table-column prop="userId" label="用户"></el-table-column>
<el-table-column label="操作" fixed="right" width=250>
    <template slot-scope="scope">

            <el-button type="warning" size="small" @click="updateShowBox(scope.row.id)">{{scope.row.status==1?"未处理":scope.row.status==2?"处理中":"处理完成"}}</el-button>
          </template>
</el-table-column>
</el-table>
<!-- 批量删除，下标页码 -->
<el-col :span="24" class="paginationt">
    <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :page-count="total" class="pagination">
    </el-pagination>
</el-col>
<div id="query">
    <canvas id="canvas"></canvas>
</div>
<!-- <div>
            <button @click="send">发消息</button>
            <button @click="getMessage">发消息1</button>

        </div> -->
</section>
</template>
<script>
    // import QRCode from 'qrcode'
    // import {getDateArray} from '../../util/util'
    import {
        sosQuery,
        updateSosById
    } from '../../url/api'
    export default {
        data() {
            return {
                isActive: 1,
                total: 1,
                inforList: [], //数据
                pages: 1, //总页码数
                apartmentId: '',
                formSearch: {
                    current: 1,
                    size: 10
                },
                addORupdate: 0,
                addFormVisible1: false,
                updataVisible: false,
                selectArr: [],
                getGateWayList: [], //网关列表
                sels: [], //列表选中列
                listLoading: false,
                sels: [], //列表选中列
                inforList2: {},
                checkList: [],

                checkInfor: {
                    msgType: 0, //消息类型(0财务1租约2房源3服务4系统)
                    size: 10,
                    current: 1 //当前页数
                }, //条件查询
                addForm: { //备注操作
                    apartmentName: "",
                    linkman: "",
                    phone: "",
                    createTime: '',
                    comment: "",
                    remark: ""
                },
                updataForm: {},
                noRead: {},
                path: "ws://192.168.0.142:8082/park/ist?appId=" + sessionStorage.getItem('Authorization'),
                socket: ""
            }
        },
        methods: {
            init: function() {
                if (typeof(WebSocket) === "undefined") {
                    alert("您的浏览器不支持socket")
                } else {
                    // 实例化socket
                    this.socket = new WebSocket(this.path)
                        // 监听socket连接
                    this.socket.onopen = this.open
                        // 监听socket错误信息
                    this.socket.onerror = this.error
                        // 监听socket消息
                    this.socket.onmessage = this.getMessage
                }
            },
            open: function() {
                console.log("socket连接成功")
            },
            error: function() {
                console.log("连接错误")
            },
            getMessage: function(msg) {
                console.log(msg)
                this.inforList2 = JSON.parse(msg.data)
                this.open()
                console.log(this.inforList2)
            },
            send: function() {
                let params = "liyu"
                this.socket.send(params)
            },
            close: function() {
                console.log("socket已经关闭")
            },
            //未读条数提醒
            changeActive(val) {
                this.isActive = val　
                sosQuery(this.formSearch).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.inforList = res.data.data.records.filter((item) => {
                            return item
                        })
                        this.total = res.data.data.total
                    } else {
                        this.$message(res.data.msg);
                    }
                })　　　　
            },


            addShebei() { //显示添加设备弹框
                this.addORupdate = 0
                this.addForm = {}
                this.addFormVisible1 = true

            },
            handleSelectionChange(val, self) { //多选
                this.deleBatch = val
                console.log(this.deleBatch)
            },
            changeItem(index, row) { //修改
                this.addFormVisible = true
                this.addForm.apartmentName = row.apartmentName
                this.addForm.remark = row.remark
                this.addForm.linkman = row.linkman
                this.addForm.phone = row.phone
                this.addForm.createTime = row.createTime
                this.addForm.comment = row.comment
                this.addForm.reservationId = row.reservationId
            },
            updateShowBox(ids) { //报警
                let arrId = []
                if (ids) {
                    arrId.push(ids)
                } else {
                    if (this.deleBatch.length != 0) {
                        this.deleBatch.filter((item) => {
                            arrId.push(item.id)
                            return item
                        })
                    }
                }
                this.$confirm('确认受理案件吗？')
                    .then(_ => {
                        updateSosById(arrId).then((res) => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.$message('受理成功');
                                this.changeActive(1)
                            }
                        })
                    })
                    .catch(_ => {});
            },

            pushInfor() {
                let params = {
                    reservationId: this.addForm.reservationId,
                    remark: this.addForm.remark,
                }
                console.log(params)
                reservationRemark(params).then(res => {
                    console.log(res)
                    this.addFormVisible = false
                    if (res.data.code === 200) {
                        this.getList()
                    } else {
                        alert(res.data.msg)
                    }
                })
            },
            useqrcode() {
                //生成的二维码内容，可以添加变量
                　　　
                this.QueryDetail = "shdak";
                var canvas = document.getElementById('canvas')
                QRCode.toCanvas(canvas, this.QueryDetail, function(error) {
                    if (error) console.error(error)
                    console.log('success!');
                })
            },
            handleCurrentChange(val) {
                this.checkInfor.current = val
                this.getList(this.checkInfor.msgType)
            },
            changeHouseList(val) {
                let params = {
                    apartmentId: this.apartmentId,
                    current: val
                }
                console.log(params)
                assignList(params).then(res => {
                    console.log(res)
                    if (res.data.code === 200) {
                        this.houseAssignList = res.data.data.records
                    }
                })
            },
            open() {
                let html = '<div style="width:250px;">' +
                    '<div style="display:flex;align-items: center;justify-content: space-between;">' +
                    '<span>' + this.inforList2.type == 1 ? 'sos报警' : this.inforList2.type == 2 ? '未知' : '未知'; + '</span>' +
                '<span>' + this.inforList2.gmtCreate + '</span>' +
                    '</div>' +
                    '<div style="display:flex;align-items: center;justify-content: space-between;">' +
                    '<span>报警类型</span>' +
                    '<span>开始时间</span>' +
                    ' </div>' +
                    '<div style="margin-top:10px;display:flex;align-items: center;justify-content: space-around;">' +
                    '  <button size="small " style="border:0px;padding: 2px 8px;background: #1271b4;color: #fff;">查看详情</button>' +
                    ' <button size="small " style="border:0px;padding: 2px 8px;background: #1271b4;color: #fff;"></button>' +
                    '  <button size="small " style="border:0px;padding: 2px 8px;background: #1271b4;color: #fff;">处理</button>' +
                    '</div>' +
                    ' </div>'
                this.$notify({
                    title: '报警',
                    dangerouslyUseHTMLString: true,
                    duration: 0,
                    position: 'bottom-right',
                    message: html
                });

            },
            selsChange: function(sels) { // 当选择项发生变化时会触发该事件
                this.sels = sels.filter(function(sel) {
                    if (sel.isExist !== 1) {
                        return sel
                    }
                })
            }
        },
        mounted() {
            // this.useqrcode()
            // this.messageUnreadd()
            this.changeActive(1)

            /* this.open() */
            this.init()
        }
    }
</script>
<style>
    .tabsMenu .el-badge__content.is-fixed {
        position: absolute;
        top: 0;
        right: 28px;
    }
</style>

<style scoped>
    .equi {
        padding: 20px;
    }
    
    .gridContt {
        line-height: 30px;
        margin-top: 10px;
    }
    
    .title {
        color: #ff5600;
    }
    
    #canvas {
        width: 200px !important;
        height: auto!important;
    }
    
    .xinxi {
        display: block;
        margin: 0 auto;
    }
</style>