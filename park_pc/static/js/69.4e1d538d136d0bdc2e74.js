webpackJsonp([69],{"j7d+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Gu7T"),l=a.n(o),r=a("prc4"),s=a("qKdJ"),i={data:function(){return{imageUrl:"",videoUrl:"",allSelect:[],option1:[],deleBatch:[],isGetFather:!1,formSearch:{current:1,size:10},formSearch1:{type:2,current:1,size:10},formPush:{},formData:[],formData1:[],formUpdate:{},total:0,total1:0,pages:0,addDialog:!1,updateDialog:!1,dataTree:[],uploadToRealPath:"/park/upload/file/upload",defaultProps:{children:"children",label:"label"},defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"},headers:{Authorization:sessionStorage.getItem("Authorization"),token:sessionStorage.getItem("token")},xqTree:[],rules:{name:[{required:!0,message:"该项不能为空",trigger:"change"}],coverImg:[{required:!0,message:"该项不能为空",trigger:"change"}],coverVideo:[{required:!0,message:"该项不能为空",trigger:"change"}]}}},methods:{onChange:function(e,t){console.log(e,t),this.dialogImageUrl=URL.createObjectURL(e.raw),this.fileList=t},handleRemove:function(e,t){console.log(res,e),this.imageUrl=URL.createObjectURL(e.raw),this.formPush.coverImg=res.data[0]},handleAvatarSuccess:function(e,t){console.log(e,t),this.imageUrl=URL.createObjectURL(t.raw),this.formPush.coverImg=e.data[0],console.log(this.formPush.imageUrl)},handleAvatarSuccess1:function(e,t){console.log(e,t),this.formPush.coverVideo=e.data[0],this.videoUrl=URL.createObjectURL(t.raw),console.log(this.formPush.coverVideo)},getlist:function(){var e=this;Object(s._84)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(e){return e}),e.total=t.data.data.total):e.$message(t.data.msg)})},getInit:function(){this.getlist()},addList:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(s.q)(t.formPush).then(function(e){console.log(e),200==e.data.code?(t.getlist(),t.$message({message:"添加成功",type:"success"})):t.$message("添加失败")}),t.addDialog=!1})},updateList:function(){var e=this;console.log(this.formUpdate),Object(s._93)(this.formUpdate).then(function(t){console.log(t),200==t.data.code&&(e.$message({message:"修改成功",type:"warning"}),e.getInit())}),this.updateDialog=!1},deleInfor:function(e){var t=this,a=[];e&&a.push(e),0!=this.deleBatch.length&&this.deleBatch.filter(function(e){return a.push(e.id),e}),this.$confirm("确认删除吗？").then(function(e){Object(s._1)(a).then(function(e){console.log(e),200==e.data.code&&(t.$message("删除成功"),t.getInit())})}).catch(function(e){})},toggleSelection:function(e){var t=this;if(console.log(e,this.formData),e){for(var a=[],o=function(o){console.log(t.formData.find(function(t){return t.id==e[o].id})),t.formData.find(function(t){return t.id==e[o].id})&&a.push(t.formData[0])},l=0;l<e.length;l++)o(l);console.log(a),console.log(a[0]==this.formData[0]),a.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)})}else this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e,t){this.deleBatch=e;var a={},o=e.find(function(e){return e.id==t.id});console.log(o),o?(this.allSelect=[].concat(l()(this.allSelect),l()(e)),this.allSelect=this.allSelect.reduce(function(e,t){return!a[t.id]&&(a[t.id]=e.push(t)),e},[])):this.allSelect=this.allSelect.filter(function(e){return e.id!=t.id}),console.log(this.allSelect)},handleCurrentPage:function(e){this.formSearch.current=e,this.getInit()},checkTreeInfor:function(e,t){t.checkedKeys.length>1?this.$message("只能选择一个组织"):(this.formPush.orgId=t.checkedKeys[0],this.formUpdate.orgId=t.checkedKeys[0])},updateShowBox:function(e){var t=this;this.formUpdate={address:e.address,name:e.name,id:e.id,businessHours:e.businessHours,contactNumber:e.contactNumber,coverImg:e.coverImg,coverVideo:e.coverVideo,description:e.description,intro:e.intro,label:e.label},this.imageUrl=e.shopImage,this.updateDialog=!0,e.picture&&e.picture.split(",").forEach(function(e){var a={url:e};e&&t.fileList.push(a)}),console.log(this.formUpdate,this.fileList)},handleChange:function(e){var t=this;0!=e.length?(console.log(e),this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id):this.formSearch.orgId="",Object(s._84)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e}),t.total=e.data.data.total):t.$message(e.data.msg)})}},mounted:function(){this.getInit()},components:{paging:r.a}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"modlude"},[a("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:e.formSearch,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户昵称",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入用户昵称"},model:{value:e.formSearch.nickName,callback:function(t){e.$set(e.formSearch,"nickName",t)},expression:"formSearch.nickName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.formSearch.phone,callback:function(t){e.$set(e.formSearch,"phone",t)},expression:"formSearch.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.formSearch.sex,callback:function(t){e.$set(e.formSearch,"sex",t)},expression:"formSearch.sex"}},[a("el-option",{attrs:{label:"男",value:0}}),e._v(" "),a("el-option",{attrs:{label:"女",value:1}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"注册时间",size:"small"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"注册时间"},model:{value:e.formSearch.gmtCreate,callback:function(t){e.$set(e.formSearch,"gmtCreate",t)},expression:"formSearch.gmtCreate"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:e.getInit}},[e._v("查 询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.addDialog=!0}}},[e._v("添 加")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.deleInfor(!1)}}},[e._v("批量删除")])],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.formData,stripe:""},on:{select:e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickName",label:"用户昵称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"headImg",label:"头像",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"70px",height:"70px"},attrs:{src:e.row.headImg,fit:"cover"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t\t\t\t"+e._s(0==t.row.sex?"男":1==t.row.sex?"女":"")+"\n\t\t\t\t")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"注册时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtCreate?[e._v("\n          "+e._s(e.$root.getDateArray(t.row.gmtCreate)[9])+"\n        ")]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"Timepark",label:"入园时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.Timepark?[e._v("\n       "+e._s(e.$root.getDateArray(t.row.Timepark)[9])+"\n     ")]:void 0}}],null,!0)})],1),e._v(" "),a("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"110px",model:e.formPush,rules:e.rules}},[a("el-form-item",{attrs:{label:"公园名称",prop:"name"}},[a("el-input",{model:{value:e.formPush.name,callback:function(t){e.$set(e.formPush,"name",t)},expression:"formPush.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.formPush.address,callback:function(t){e.$set(e.formPush,"address",t)},expression:"formPush.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"营业时间"},model:{value:e.formPush.businessHours,callback:function(t){e.$set(e.formPush,"businessHours",t)},expression:"formPush.businessHours"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客服电话"}},[a("el-input",{model:{value:e.formPush.contactNumber,callback:function(t){e.$set(e.formPush,"contactNumber",t)},expression:"formPush.contactNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公园封面图片",size:"small",prop:"coverImg"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadToRealPath,"show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"宣传视频",size:"small",prop:"coverVideo"}},[a("el-upload",{ref:"addUpdata",staticClass:"avatar-uploader",attrs:{action:e.uploadToRealPath,headers:e.headers,"on-success":e.handleAvatarSuccess1,"on-remove":e.handleRemove}},[e.videoUrl?a("video",{staticClass:"avatar",attrs:{src:e.videoUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:e.formPush.description,callback:function(t){e.$set(e.formPush,"description",t)},expression:"formPush.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"简介",rows:3}},[a("el-input",{model:{value:e.formPush.intro,callback:function(t){e.$set(e.formPush,"intro",t)},expression:"formPush.intro"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{model:{value:e.formPush.label,callback:function(t){e.$set(e.formPush,"label",t)},expression:"formPush.label"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addList("addList")}}},[e._v("新 增")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-form",{ref:"formUpdate",attrs:{"label-position":"right",rules:e.rules,"label-width":"110px",model:e.formUpdate}},[a("el-form-item",{attrs:{label:"公园名称",prop:"name"}},[a("el-input",{model:{value:e.formUpdate.name,callback:function(t){e.$set(e.formUpdate,"name",t)},expression:"formUpdate.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.formUpdate.address,callback:function(t){e.$set(e.formUpdate,"address",t)},expression:"formUpdate.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"营业时间"},model:{value:e.formUpdate.businessHours,callback:function(t){e.$set(e.formUpdate,"businessHours",t)},expression:"formUpdate.businessHours"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客服电话"}},[a("el-input",{model:{value:e.formUpdate.contactNumber,callback:function(t){e.$set(e.formUpdate,"contactNumber",t)},expression:"formUpdate.contactNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公园封面图片",size:"small",prop:"coverImg"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadToRealPath,"show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"宣传视频",size:"small",prop:"coverVideo"}},[a("el-upload",{ref:"addUpdata",staticClass:"avatar-uploader",attrs:{action:e.uploadToRealPath,headers:e.headers,"on-success":e.handleAvatarSuccess1,"on-remove":e.handleRemove}},[e.videoUrl?a("video",{staticClass:"avatar",attrs:{src:e.videoUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:e.formUpdate.description,callback:function(t){e.$set(e.formUpdate,"description",t)},expression:"formUpdate.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公园id"}},[a("el-input",{model:{value:e.formUpdate.id,callback:function(t){e.$set(e.formUpdate,"id",t)},expression:"formUpdate.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"简介",rows:2}},[a("el-input",{model:{value:e.formUpdate.intro,callback:function(t){e.$set(e.formUpdate,"intro",t)},expression:"formUpdate.intro"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{model:{value:e.formUpdate.label,callback:function(t){e.$set(e.formUpdate,"label",t)},expression:"formUpdate.label"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:e.updateList}},[e._v("确定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(i,n,!1,function(e){a("pV9Y")},"data-v-258bfd06",null);t.default=c.exports},pV9Y:function(e,t){}});
//# sourceMappingURL=69.4e1d538d136d0bdc2e74.js.map