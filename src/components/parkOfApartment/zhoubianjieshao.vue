<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline" label-width="80px">
      <el-form-item label="周边名称" size="small">
        <el-input v-model="formSearch.name" placeholder="请输入公园周边名称"></el-input>
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
    </el-form>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @select="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
   <!--   <el-table-column prop="businessHours" label="营业时间"></el-table-column> -->
      <el-table-column prop="businessHours" label="营业时间">
        <template slot-scope="scope" v-if="scope.row.businessHours">
          {{$root.getDateArray(Number(scope.row.businessHours))[9]}}
        </template>
    </el-table-column>
    <el-table-column prop="contactNumber" label="联系电话"></el-table-column>
    <!--    <el-table-column prop="coverImg"label="公园封面图片"></el-table-column>
        <el-table-column prop="coverVideo"label="宣传视频"></el-table-column> -->
    <el-table-column prop="creator" label="创建者"></el-table-column>
    <el-table-column prop="description" label="描述"></el-table-column>
    <el-table-column prop="gmtCreate" label="创建时间">
        <template slot-scope="scope" v-if="scope.row.gmtCreate">
            {{$root.getDateArray(scope.row.gmtCreate)[9]}}
        </template>
    </el-table-column>
    <el-table-column prop="gmtModified" label="修改时间">
        <template slot-scope="scope" v-if="scope.row.gmtModified">
        {{$root.getDateArray(scope.row.gmtModified)[9]}}
        </template>
    </el-table-column>
    <el-table-column prop="id" label="公园id"></el-table-column>
    <!--  <el-table-column prop="intro"label="简介"></el-table-column> -->
    <el-table-column prop="label" label="标签"></el-table-column>
    <el-table-column prop="name" label="公园名称"></el-table-column>
    <el-table-column prop="updator" label="更新者"></el-table-column>
    <el-table-column label="操作" fixed="right" width=250>
        <template slot-scope="scope">
            <el-button type="warning" size="small" @click="updateShowBox(scope.row),detailsDialog = true">修 改</el-button>
            <el-button type="danger" size="small" @click="deleInfor(scope.row.id)">删 除</el-button>
            <el-button type="primary" size="small" @click="updateShowBox(scope.row),detailsDialog=false">查看详情</el-button>
        </template>
    </el-table-column>
</el-table>
<!-- <div class="pagination">
      <span class="total">总条数：{{total}} 条</span>
      <el-pagination
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        @current-change="handleCurrentPage"
        :page-size="10"
        :pager-count="5"
        :total="total">
      </el-pagination>
    </div> -->
<paging @changePage='handleCurrentPage' :get-total='total'></paging>

<!-- 添加 -->
<el-dialog title="新增" :visible.sync="addDialog">
    <div class="cont_box_left">

        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules" ref='addList'>
            <div id="container"></div>
            <el-form-item label="公园名称" prop="name">
                <el-input v-model="formPush.name"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="formPush.address"></el-input>
            </el-form-item>
            <el-form-item label="营业时间">
                <el-date-picker v-model="formPush.businessHours" type="datetime" value-format="timestamp" placeholder="营业时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="客服电话">
                <el-input v-model="formPush.contactNumber"></el-input>
            </el-form-item>
            <!-- <el-form-item label="家园号">
            <el-input v-model="formPush.ubicellJyh"></el-input>
          </el-form-item> -->
            <el-form-item label="所属归类" size="small">
                <el-select v-model="formPush.assetsClassifyId" placeholder="请选择分类">
                    <el-option v-for="item in typeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="公园封面图片" size="small">
                <el-upload class="avatar-uploader" :action="uploadToRealPath" :show-file-list="false" :on-success="handleAvatarSuccess">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="宣传视频" size="small">
                <el-upload ref="addUpdata" class="avatar-uploader" :action="uploadToRealPath" :headers='headers' :on-success="handleAvatarSuccess1" :on-remove="handleRemove">
                    <video v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="formPush.description" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            </el-form-item>
            <el-form-item label="简介" :rows="3">
                <el-input v-model="formPush.intro" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-input v-model="formPush.label"></el-input>
            </el-form-item>
            <el-form-item label="经度">
                <el-input v-model.number="formPush.longitude"></el-input>
            </el-form-item>
            <el-form-item label="维度">
                <el-input v-model.number="formPush.latitude"></el-input>
            </el-form-item>
            <!-- <el-form-item label="选择小区" size="small" prop="xqId">
            <el-select v-model="formPush.xqId" placeholder="请选择小区">
              <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item> -->


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
            <div id="container1"></div>
            <el-form-item label="公园名称" prop="name">
                <el-input v-model="formUpdate.name"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="formUpdate.address"></el-input>
            </el-form-item>
            <el-form-item label="营业时间">
                <el-date-picker v-model="formUpdate.businessHours" type="datetime" value-format="timestamp" placeholder="营业时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="客服电话">
                <el-input v-model="formUpdate.contactNumber"></el-input>
            </el-form-item>
            <el-form-item label="公园封面图片" size="small" prop="coverImg">
                <el-upload class="avatar-uploader" :action="uploadToRealPath" :show-file-list="false" :on-success="handleAvatarSuccess">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="所属归类" size="small">
                <el-select v-model="formUpdate.assetsClassifyId" placeholder="请选择分类">
                    <el-option v-for="item in typeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="宣传视频" size="small" prop="coverVideo">
                <el-upload ref="addUpdata" class="avatar-uploader" :action="uploadToRealPath" :headers='headers' :on-success="handleAvatarSuccess1" :on-remove="handleRemove">
                    <video v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="formUpdate.description" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            </el-form-item>
            <el-form-item label="公园id">
                <el-input v-model="formUpdate.id"></el-input>
            </el-form-item>
            <el-form-item label="简介" :rows="2">
                <el-input v-model="formUpdate.intro" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-input v-model="formUpdate.label"></el-input>
            </el-form-item>
            <el-form-item label="纬度" prop="latitude">
                <el-input v-model="formUpdate.latitude"></el-input>
            </el-form-item>
            <el-form-item label="经度" prop="longitude">
                <el-input v-model="formUpdate.longitude"></el-input>
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
    import TMap from '../../assets/js/initmap.js'

    import {
        getPeriphery,
        savePeriphery,
        updPeriphery,
        delPeriphery,
        classifylisttwo
    } from '../../url/api';
    export default {
        data() {
            return {
                imageUrl: '',
                allSelect: [],
                mapObj: '',
                deleBatch: [],
                typeList: [],
                isGetFather: false, //是否选中
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
                    latitude: "",
                    longitude: ""
                }, 
                formData: [], //数据
                formData1: [], //数据
                formUpdate: {}, //修改表单
                total: 0, //数据总数
                total1: 0, //数据总数
                addDialog: false,
                updateDialog: false,
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
                xqTree: [], //小区列表
                rules: {

                    name: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    coverImg: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                    coverVideo: [{
                        required: true,
                        message: '该项不能为空',
                        trigger: 'change'
                    }],
                },
            }
        },
        methods: {
            initTmap(containerId) {
                let container = containerId||'container1'
                if(this.mapObj){
                    console.log("地图已存在")
                    this.mapObj.destroy()
                }
                let address = "";
                let that = this;
                TMap.init().then((TMap) => {
                    var center = new TMap.LatLng(22.831779, 114.980945);
                    //初始化地图
                    var map = new TMap.Map(container, {
                        rotation: 20, //设置地图旋转角度
                        pitch: 0, //设置俯仰角度（0~45）
                        zoom: 17, //设置地图缩放级别
                        center: center //设置地图中心点坐标
                    });
                    that.mapObj=map
                    TMap.ImageTileLayer.createCustomLayer({
                        layerId: '5f6b13185922',
                        // layerId: '5f5f2ad23757',
                        map: map
                    }).then(customLayer => {
                        if (customLayer) { // 成功创建个性化图层

                        } else {
                            // 创建失败，请查看控制台错误信息
                            console.log('fail');
                        }
                    });
                    map.on('click',  function(e)  {
                        console.log(e)

                        that.formPush.latitude = e.latLng.getLat();
                        that.formPush.longitude = e.latLng.getLng();
                        that.formUpdate.latitude = e.latLng.getLat();
                        that.formUpdate.longitude = e.latLng.getLng();
                        console.log(e.latLng.getLng() +  ','  +  e.latLng.getLat())          
                    });  
                })

            },
            gethouseLIst() {
                houseList(this.formSearch1).then((res) => { //房间列表
                    console.log(res)
                    if (res.data.code == 200) {
                        this.formData1 = res.data.data.records.filter((item) => {
                            if (item.gmtModified) {
                                item.gmtModified = this.$root.getDateArray(item.gmtModified)[9]
                            }
                            return item
                        })
                        this.total1 = res.data.data.total
                    } else {
                        this.$message(res.data.msg);
                    }
                })
            },
            handleCurrentPage1(val) { //页码房间列表
                this.formSearch1.current = val
                this.gethouseLIst()
            },
            showAdd() {
                this.addDialog = true
                this.initTmap('container')
                
            },
            onChange(file, fileList) {
                console.log(file, fileList)
                this.dialogImageUrl = URL.createObjectURL(file.raw);
                this.fileList = fileList
            },
            handleRemove(file, fileList) {
                console.log(res, file)
                this.imageUrl = URL.createObjectURL(file.raw);
                this.formPush.coverImg = res.data[0]
            },
            handleAvatarSuccess(res, file) {
                console.log(res, file)
                this.imageUrl = URL.createObjectURL(file.raw);
                this.formPush.coverImg = res.data[0]
            },
            handleAvatarSuccess1(res, file) {
                console.log(res, file)
                this.pictrueNum++;
                this.formPush.coverVideo = res.data[0]

            },
            getlist() {
                getPeriphery(this.formSearch).then((res) => {
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
                classifylisttwo({}).then((res) => { //查询公园资产归类二级下拉列表
                    console.log(res)
                    if (res.data.code == 200) {
                        this.typeList = res.data.data
                    }
                })
            },
            addList(addList) { //添加

                this.$refs[addList].validate((valid) => {
                    if (valid) {

                        savePeriphery(this.formPush).then((res) => {
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
                updPeriphery(this.formUpdate).then((res) => {
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
                        delPeriphery(arrId).then((res) => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.$message('删除成功');
                                this.getInit()
                            }
                        })
                    })
                    .catch(_ => {});
            },
            toggleSelection(rows) { //回显
                console.log(rows, this.formData)
                if (rows) {
                    let objs = []
                    for (let i = 0; i < rows.length; i++) {
                        console.log(this.formData.find(item => item.id == rows[i].id))
                        if (this.formData.find(item => item.id == rows[i].id)) {

                            objs.push(this.formData[0])
                        }
                    }
                    console.log(objs)
                    console.log(objs[0] == this.formData[0])
                    objs.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },

            handleSelectionChange(val, self) { //多选
                this.deleBatch = val
                let obj = {}
                let aa = val.find(item => item.id == self.id)
                console.log(aa)
                if (aa) {
                    this.allSelect = [...this.allSelect, ...val]
                    this.allSelect = this.allSelect.reduce((cur, next) => {
                        obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
                        return cur;
                    }, [])
                } else {
                    this.allSelect = this.allSelect.filter((item) => {
                        return item.id != self.id
                    })
                }
                console.log(this.allSelect)
                    // this.deleBatch = this.allSelect
                    // console.log(this.deleBatch)
            },
            handleCurrentPage(val) { //页码改变
                this.formSearch.current = val
                this.getlist()

            },
            checkTreeInfor(data, ev) { //监听树状图勾选
                // console.log(ev);
                if (ev.checkedKeys.length > 1) {
                    this.$message('只能选择一个组织');
                } else {
                    this.formPush.orgId = ev.checkedKeys[0]
                    this.formUpdate.orgId = ev.checkedKeys[0]
                }
            },
            updateShowBox(item) { //修改东西弹窗
                this.formUpdate = {
                    address: item.address,
                    name: item.name,
                    id: item.id,
                    businessHours: item.businessHours,
                    assetsClassifyId: item.assetsClassifyId,
                    contactNumber: item.contactNumber,
                    coverImg: item.coverImg,
                    coverVideo: item.coverVideo,
                    description: item.description,
                    longitude: item.longitude,
                    latitude: item.latitude,
                    intro: item.intro,
                    label: item.label
                }
                this.initTmap()
                this.imageUrl = item.shopImage
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


            handleChange(value) {
                if (value.length != 0) {
                    console.log(value)
                    this.formSearch.orgId = this.$refs.cascader.getCheckedNodes()[0].data.id
                } else {
                    this.formSearch.orgId = ''
                }
                getPeriphery(this.formSearch).then((res) => {
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
            }
        },
        mounted() {
            this.getInit()
        },
        components: {
            paging
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
    
    .cont_box {
        width: 100%;
        display: flex;
    }
    
    .cont_box_left,
    .cont_box_right {
        flex: 1;
        background: transparent;
        padding: 10px;
    }
    
    .cont_box_left {
        margin-right: 10px;
    }
    
    .margin10 {
        margin-bottom: 10px;
    }
    
    .marginRight {
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    
    .cont_box_right .el-form-item {
        margin-bottom: 20px;
    }
    
    #container {
        width: 100%;
        height: 200px;
    }
</style>