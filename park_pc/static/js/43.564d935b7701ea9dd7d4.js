webpackJsonp([43],{YuYm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{headIcon:"",isActive:1,remark:"",total:1,selectArr:[],addFormVisible:!1,addFormVisible1:!1,updataVisible:!1,listLoading:!1,sels:[],locationHouseList:[],selectOfficeList:[],temListtList:[],checkList:[],houseAssign:{houseIds:[],officeId:""},inforList:[{name:"英达斯瑞公园总人员报表",sex:"2020.06.12 12:12:10",duty:"李经理",department:"总经理",isSplite:"010101",temperature:"个",health:"130",isCross:"2号仓库",isContact:"审核通过/未领用",isContactt:"领用"},{name:"英达斯瑞公园总人员报表",sex:"2020.06.12 12:12:10",duty:"李经理",department:"总经理",isSplite:"010101",temperature:"个",health:"30",isCross:"3号仓库",isContact:"未审核",isContactt:"审核通过"},{name:"英达斯瑞公园总人员报表",sex:"2020.06.12 12:12:10",duty:"李经理",department:"总经理",isSplite:"010101",temperature:"个",health:"10",isCross:"4号仓库",isContact:"审核通过/未领用",isContactt:"领用"}],checkInfor:{current:1,size:10,type:1},updataForm:{},addForm:{},params:{}}},methods:{reloadCon:function(){location.reload()},getList1:function(e){1==e?this.$router.push({path:"./jcrManage"}):2==e&&this.$router.push({path:"./txzsq"})},changexianmu:function(e){this.houseAssign.officeId=e},getList:function(){var e=this.checkInfor;console.log(e),getYqfkPerson(e).then(function(e){console.log(e)})},changeItem:function(){var e=this,t={address:this.updataForm.address,name:this.updataForm.name,officeId:this.updataForm.officeId,phone:this.updataForm.phone,privateAccount:this.updataForm.privateAccount,publicAccount:this.updataForm.publicAccount};console.log(t),deptupdateList(t).then(function(t){console.log(t),200==t.data.code?e.getList():alert(t.data.msg)}).catch(function(e){alert("网络请求失败")}),this.addFormVisible1=!1},showTc:function(){},pushInfor:function(){var e=this;if(this.addForm.name){var t=this.addForm;console.log(t),deptaddList(t).then(function(t){console.log(t),e.addFormVisible=!1,200===t.data.code?e.getList():alert(t.data.msg)})}else alert("请输入公司名称")},deleteInfor:function(e){var t=this,a=e.officeId;console.log(a),this.$confirm("确定要删除该条信息吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then(function(){deptdeleteList(a).then(function(e){console.log(e),200===e.data.code?(t.getList(),t.$message({type:"success",message:"操作成功"})):alert("删除失败")})}).catch(function(){t.$message({type:"info",message:"已取消"})})},handleCurrentChange:function(e){this.checkInfor.current=e,this.getList()},selsChange:function(e){if(this.houseAssign.houseIds=[],console.log(e),0!==e.length)for(var t=0;t<e.length;t++)this.houseAssign.houseIds.push(e[t].houseId);console.log(this.houseAssign.houseIds),this.sels=e.filter(function(e){if(1!==e.isExist)return e})}},mounted:function(){this.getList()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"modlude"},[a("p",{staticClass:"margintop"}),e._v(" "),a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{staticClass:"gridContt",attrs:{inline:!0}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{size:"small",label:"下载类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.checkInfor.value,callback:function(t){e.$set(e.checkInfor,"value",t)},expression:"checkInfor.value"}},[a("el-option",{attrs:{label:"类型1",value:1}}),e._v(" "),a("el-option",{attrs:{label:"类型2",value:2}})],1)],1),e._v(" "),a("el-form-item",{attrs:{size:"small",label:"导出类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.checkInfor.value1,callback:function(t){e.$set(e.checkInfor,"value1",t)},expression:"checkInfor.value1"}},[a("el-option",{attrs:{label:"类型1",value:1}}),e._v(" "),a("el-option",{attrs:{label:"类型2",value:2}})],1)],1),e._v(" "),a("el-form-item",{attrs:{size:"small",label:"导出时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"timestamp",placeholder:"开始日期"},model:{value:e.checkInfor.liveStartTime,callback:function(t){e.$set(e.checkInfor,"liveStartTime",t)},expression:"checkInfor.liveStartTime"}})],1),e._v(" "),a("el-form-item",{attrs:{size:"small",label:"-"}},[a("el-date-picker",{attrs:{type:"date","value-format":"timestamp",placeholder:"结束时间"},model:{value:e.checkInfor.liveEndTime,callback:function(t){e.$set(e.checkInfor,"liveEndTime",t)},expression:"checkInfor.liveEndTime\t"}})],1),e._v(" "),a("el-form-item",{attrs:{size:"small",label:"操作人员"}},[a("el-input",{attrs:{placeholder:"操作人员",size:"small"},model:{value:e.checkInfor.nativePlace,callback:function(t){e.$set(e.checkInfor,"nativePlace",t)},expression:"checkInfor.nativePlace"}})],1),e._v(" "),a("el-form-item",{attrs:{size:"small",label:"操作人员角色"}},[a("el-input",{attrs:{placeholder:"操作人员角色",size:"small"},model:{value:e.checkInfor.nativePlace,callback:function(t){e.$set(e.checkInfor,"nativePlace",t)},expression:"checkInfor.nativePlace"}})],1)],1)],1),e._v(" "),a("el-form",{staticClass:"marginTop20",attrs:{inline:!0}},[a("el-form-item",{staticClass:"margin0",attrs:{label:"查询结果"}},[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("报表导出")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.getList}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.reloadCon}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.inforList,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{staticClass:"ccc",attrs:{type:"selection",width:"55",label:"全选"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"内容"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"导出时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"duty",label:"操作人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department",label:"操作人角色"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{size:"small"}},[e._v("下载")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"paginationt",attrs:{span:24}},[a("el-pagination",{staticClass:"pagination",attrs:{layout:"prev, pager, next","page-size":10,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(e){a("fBZB")},"data-v-6f68a1cd",null);t.default=o.exports},fBZB:function(e,t){}});
//# sourceMappingURL=43.564d935b7701ea9dd7d4.js.map