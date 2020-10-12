<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline" label-width="80px">
      <el-form-item label="岗位" size="small">
        <el-input v-model="formSearch.job" placeholder="请输入岗位"></el-input>
      </el-form-item>
      <el-form-item label="姓名" size="small">
        <el-input v-model="formSearch.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" size="small">
        <el-input v-model="formSearch.phone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="性别" size="small">
        <el-select v-model="formSearch.sex" placeholder="请选择性别">
          <el-option label="男" :value="0"></el-option>
          <el-option label="女" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否离职" size="small">
        <el-select v-model="formSearch.isLeave" placeholder="请选择是否离职">
          <el-option label="否" :value="0"></el-option>
          <el-option label="是" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="getInit">查 询</el-button>
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
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="电话号码"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
       <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="isLeave" label="是否离职">
            <template slot-scope="scope">
                {{scope.row.isLeave==0?"否":scope.row.isLeave==是?"女":"未知"}}
                </template>
</el-table-column>
<el-table-column prop="photo" label="头像" width="100">
    <template slot-scope="scope">
                <el-image style="width: 70px; height: 70px" :src="scope.row.photo" fit="cover"></el-image>
                </template>
</el-table-column>
<el-table-column prop="remark" label="备注"></el-table-column>
<el-table-column prop="sex" label="性别">
    <template slot-scope="scope">
                    {{scope.row.sex==0?"男":scope.row.sex==1?"女":"未知"}}
                </template>
</el-table-column>
<el-table-column label="操作" fixed="right" width=350>
    <template slot-scope="scope">
            <el-button type="warning" size="small" @click="updateShowBox(scope.row),detailsDialog = true">修 改</el-button>
            <el-button type="danger" size="small" @click="deleInfor(scope.row.id)">删 除</el-button>
            <el-button type="primary" size="small" @click="updateShowBox(scope.row),detailsDialog=false">查看详情</el-button>

          </template>
</el-table-column>
</el-table>
<paging @changePage=handleCurrentPage :get-total='total'></paging>

<!-- 添加 -->
<el-dialog title="新增" :visible.sync="addDialog">
    <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules" ref='addList'>
            <el-form-item label="年龄">
                <el-input v-model="formPush.age"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="formPush.address"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formPush.email"></el-input>
            </el-form-item>
            <el-form-item label="头像" size="small">
                <el-upload class="avatar-uploader" :action="uploadToRealPath" :show-file-list="false" :on-success="handleAvatarSuccess">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="formPush.remark"></el-input>
            </el-form-item>
            <el-form-item label="性别" size="small">
                <el-select v-model="formPush.sex" placeholder="请选择性别">
                    <el-option label="男" :value="1"></el-option>
                    <el-option label="女" :value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="身份证">
                <el-input v-model="formPush.identityCard"></el-input>
            </el-form-item>
            <el-form-item label="岗位" :rows="3">
                <el-input v-model="formPush.job"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="formPush.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="formPush.phone"></el-input>
            </el-form-item>
            <el-form-item label="是否离职" size="small">
                <el-select v-model="formPush.isLeave" placeholder="请选择是否离职">
                    <el-option label="否" :value="0"></el-option>
                    <el-option label="是" :value="1"></el-option>
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
            <el-form-item label="性别" size="small">
                <el-select v-model="formUpdate.sex" placeholder="请选择性别">
                    <el-option label="男" :value="1"></el-option>
                    <el-option label="女" :value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="formUpdate.age"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="formUpdate.address"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formUpdate.email"></el-input>
            </el-form-item>
            <el-form-item label="头像" size="small">
                <el-upload class="avatar-uploader" :action="uploadToRealPath" :show-file-list="false" :on-success="handleAvatarSuccess1">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="formUpdate.remark"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
                <el-input v-model="formUpdate.identityCard"></el-input>
            </el-form-item>
            <el-form-item label="岗位" :rows="3">
                <el-input v-model="formUpdate.job"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="formUpdate.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="formUpdate.phone"></el-input>
            </el-form-item>

            <el-table-column prop="isLeave" label="性别">
                <template slot-scope="scope">
                      {{scope.row.isLeave==0?"否":scope.row.isLeave==1?"是":"未知"}}
                    </template>
            </el-table-column>

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
    import {
        Employeelist,
        Employeesave,
        Employeeupdate,
        Employeedelect
    } from '../../url/api';
    export default {
        data() {
            return {
                imageUrl: '',
                allSelect: [],
                option1: [],
                deleBatch: [],
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
                }, //表单提交
                formData: [], //数据
                formData1: [], //数据
                formUpdate: {}, //修改表单
                total: 0, //数据总数
                total1: 0, //数据总数
                pages: 0, //页面总数
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
                        this.pages = res.data.pages
                    } else {
                        this.$message(res.data.msg);
                    }
                })
            },
            handleCurrentPage1(val) { //页码房间列表
                this.formSearch1.current = val
                this.gethouseLIst()
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
                this.formPush.photo = res.data[0]
                console.log(this.formPush.photo + "hhh")
            },
            handleAvatarSuccess1(res, file) {
                console.log(res, file)
                this.imageUrl = URL.createObjectURL(file.raw);
                this.formUpdate.photo = res.data[0]
                console.log(this.formUpdate.photo)
            },
            getlist() {
                Employeelist(this.formSearch).then((res) => {
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

            },
            addList(addList) { //添加

                this.$refs[addList].validate((valid) => {
                    if (valid) {

                        Employeesave(this.formPush).then((res) => {
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
                Employeeupdate(this.formUpdate).then((res) => {
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
                        Employeedelect(arrId).then((res) => {
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
                this.getInit()

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
                    id: item.id,
                    address: item.address,
                    age: item.age,
                    email: item.email,
                    identityCard: item.identityCard,
                    job: item.job,
                    isLeave: item.isLeave,
                    name: item.name,
                    phone: item.phone,
                    photo: item.photo,
                    remark: item.remark,
                    sex: item.sex
                }
                this.imageUrl = item.photo
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
                Employeelist(this.formSearch).then((res) => {
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
</style>