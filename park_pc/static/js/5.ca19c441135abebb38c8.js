webpackJsonp([5,52,69,76],{"2fnN":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("prc4"),l=a("qKdJ"),r={data:function(){return{option1:[],formSearch:{current:1,size:10},formPush:{},formData:[],formUpdate:{},total:0,pages:0,addDialog:!1,updateDialog:!1,dataTree:[],defaultProps:{children:"children",label:"label"},defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"}}},methods:{getInit:function(){var e=this;Object(l._94)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(t){return t.gmtCreate&&(t.gmtCreate=e.$root.getDateArray(t.gmtCreate)[9]),t}),e.total=t.data.data.total,e.pages=t.data.pages):e.$message(t.data.msg)});Object(l._46)({label:"",status:1}).then(function(t){console.log(t),200==t.data.code&&(e.dataTree=t.data.data)})},addList:function(){var e=this;this.formPush.orgId?this.formPush.name?Object(l._92)(this.formPush).then(function(t){console.log(t),200==t.data.code?(e.$message({message:"添加成功",type:"success"}),e.getInit()):e.$message("添加失败"),e.addDialog=!1}):this.$message("请填写小区名称"):this.$message("请选择所属组织")},updateList:function(){var e=this;console.log(this.formUpdate),this.formUpdate.orgId?this.formUpdate.id?(Object(l._96)(this.formUpdate).then(function(t){console.log(t),200==t.data.code&&(e.$message({message:"修改成功",type:"warning"}),e.getInit())}),this.updateDialog=!1):this.$message("请填写小区名称"):this.$message("请选择所属组织")},deleInfor:function(e){var t=this,a=[];e&&a.push(e),this.$confirm("确认删除吗？").then(function(e){Object(l._93)(a).then(function(e){console.log(e),200==e.data.code&&(t.$message("删除成功"),t.getInit())})}).catch(function(e){})},handleCurrentPage:function(e){this.formSearch.current=e,this.getInit()},checkTreeInfor:function(e,t){t.checkedKeys.length>1?this.$message("只能选择一个组织"):(this.formPush.orgId=t.checkedKeys[0],this.formUpdate.orgId=t.checkedKeys[0])},updateShowBox:function(e){this.formUpdate={},this.updateDialog=!0,this.formUpdate.orgId=[e.orgId],this.formUpdate.id=e.id,console.log(this.formUpdate)},handleChange:function(e){var t=this;0!=e.length?(console.log(e),this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id):this.formSearch.orgId="",Object(l._94)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtCreate&&(e.gmtCreate=t.$root.getDateArray(e.gmtCreate)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})}},mounted:function(){this.getInit()},components:{paging:o.a}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"所属组织",size:"small"}},[a("el-cascader",{ref:"cascader",attrs:{options:e.dataTree,props:e.defaultProps2,clearable:""},on:{change:e.handleChange},model:{value:e.option1,callback:function(t){e.option1=t},expression:"option1"}})],1)],1),e._v(" "),a("el-form",{attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"小区名称",size:"small"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formSearch.name,callback:function(t){e.$set(e.formSearch,"name",t)},expression:"formSearch.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:e.getInit}},[e._v("查 询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.addDialog=!0}}},[e._v("添 加")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.formData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"小区名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orgName",label:"所属组织"}}),e._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人员",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return e.updateShowBox(t.row)}}},[e._v("修 改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleInfor(t.row.id)}}},[e._v("删 除")])]}}])})],1),e._v(" "),a("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-tree",{ref:"tree",attrs:{data:e.dataTree,"check-strictly":"","show-checkbox":"","node-key":"id","default-expand-all":"",props:e.defaultProps},on:{check:e.checkTreeInfor}})],1),e._v(" "),a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"formPush",attrs:{"label-position":"right","label-width":"80px",model:e.formPush}},[a("el-form-item",{attrs:{label:"小区名称"}},[a("el-input",{model:{value:e.formPush.name,callback:function(t){e.$set(e.formPush,"name",t)},expression:"formPush.name"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:e.addList}},[e._v("新 增")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[a("div",{staticClass:"cont_box_left"},[e.updateDialog?a("el-tree",{ref:"tree",attrs:{data:e.dataTree,"check-strictly":"","show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.formUpdate.orgId,props:e.defaultProps},on:{check:e.checkTreeInfor}}):e._e()],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:e.updateList}},[e._v("确定")])],1)])],1)},staticRenderFns:[]};var s=a("VU/8")(r,i,!1,function(e){a("cKyq")},"data-v-4a2b149c",null);t.default=s.exports},"8LFv":function(e,t){},YSQf:function(e,t){},cKyq:function(e,t){},dYNt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var l=a("VU/8")({},o,!1,function(e){a("eor5")},null,null);t.default=l.exports},eor5:function(e,t){},hS1J:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("wPfR"),l=a("2fnN"),r=a("dYNt"),i={data:function(){return{isActive:1}},methods:{},mounted:function(){},components:{onlineshopadvert:o.default,onlineshopinfo:l.default,onlineshopintrdouce:r.default}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"nav_options"},[a("div",{staticClass:"nav_option",class:{nav_option_active:1==e.isActive},on:{click:function(t){e.isActive=1}}},[a("span",[e._v("商家信息管理")])]),e._v(" "),a("div",{staticClass:"nav_option",class:{nav_option_active:2==e.isActive},on:{click:function(t){e.isActive=2}}},[a("span",[e._v("推荐商家管理")])]),e._v(" "),a("div",{staticClass:"nav_option",class:{nav_option_active:3==e.isActive},on:{click:function(t){e.isActive=3}}},[a("span",[e._v("商家广告管理")])])]),e._v(" "),a("div",{staticClass:"modoule_online"},[1==e.isActive?a("onlineshopadvert"):2==e.isActive?a("onlineshopintrdouce"):a("onlineshopinfo")],1)])},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(e){a("8LFv")},"data-v-c27be5e2",null);t.default=n.exports},wPfR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("prc4"),l=a("qKdJ"),r={data:function(){return{option1:[],dialogImageUrl:"",picDialog:!1,xqTree:[],formSearch:{xqId:"",current:1,size:10},formPush:{mapPicture:"abc"},formData:[],formUpdate:{},total:0,pages:0,addDialog:!1,updateDialog:!1,dataTree:[],defaultProps:{children:"children",label:"label"},rules:{xqId:[{required:!0,message:"该项不能为空"}],advertType:[{required:!0,message:"该项不能为空",trigger:"change"}]},defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"}}},methods:{getlist:function(){var e=this;Object(l.z)(this.formSearch).then(function(t){console.log(t),200==t.data.code&&(e.formData=t.data.data.records.filter(function(t){return t.gmtModified&&(t.gmtModified=e.$root.getDateArray(t.gmtModified)[9]),t}),e.total=t.data.total,e.pages=t.data.pages)})},getInit:function(){var e=this;Object(l._95)({}).then(function(t){console.log(t),200==t.data.code&&(e.xqTree=t.data.data,e.formSearch.xqId=e.xqTree[0].id||"",e.getlist())})},addList:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(l.x)(t.formPush).then(function(e){console.log(e),200==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.getlist()):t.$message("添加失败")}),t.addDialog=!1})},updateList:function(){var e=this;console.log(this.formUpdate),this.formUpdate.orgId?this.formUpdate.id?(Object(l.A)(this.formUpdate).then(function(t){console.log(t),200==t.data.code&&(e.$message({message:"修改成功",type:"warning"}),e.getlist())}),this.updateDialog=!1):this.$message("请填写小区名称"):this.$message("请选择所属组织")},deleInfor:function(e){var t=this,a=[];e&&a.push(e),this.$confirm("确认删除吗？").then(function(e){Object(l.y)(a).then(function(e){console.log(e),200==e.data.code&&(t.$message("删除成功"),t.getlist())})}).catch(function(e){})},handleCurrentPage:function(e){this.formSearch.current=e,this.getlist()},updateShowBox:function(e){this.formUpdate={},this.updateDialog=!0,this.formUpdate.orgId=[e.orgId],this.formUpdate.id=e.id,console.log(this.formUpdate)},handlePicRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.picDialog=!0}},mounted:function(){this.getInit()},components:{paging:o.a}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:e.formSearch}}),e._v(" "),a("el-form",{attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"商家名称",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入商家名称"},model:{value:e.formSearch.areaName,callback:function(t){e.$set(e.formSearch,"areaName",t)},expression:"formSearch.areaName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择小区",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formSearch.xqId,callback:function(t){e.$set(e.formSearch,"xqId",t)},expression:"formSearch.xqId"}},e._l(e.xqTree,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"广告类型",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择广告类型"},model:{value:e.formSearch.advertType,callback:function(t){e.$set(e.formSearch,"advertType",t)},expression:"formSearch.advertType"}},[a("el-option",{attrs:{label:"只有图片",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"图片带超连接",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"图片带详情介绍",value:"3"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:e.getlist}},[e._v("查 询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.addDialog=!0}}},[e._v("添 加")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.formData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"小区名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orgName",label:"所属组织"}}),e._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人员",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return e.updateShowBox(t.row)}}},[e._v("修 改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleInfor(t.row.id)}}},[e._v("删 除")])]}}])})],1),e._v(" "),a("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"addList",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.formPush}},[a("el-form-item",{attrs:{label:"广告类型",size:"small",prop:"advertType"}},[a("el-select",{attrs:{placeholder:"请选择广告类型"},model:{value:e.formPush.advertType,callback:function(t){e.$set(e.formPush,"advertType",t)},expression:"formPush.advertType"}},[a("el-option",{attrs:{label:"只有图片",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"图片带超连接",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"图片带详情介绍",value:"3"}})],1)],1),e._v(" "),2==e.formPush.advertType?a("el-form-item",{attrs:{label:"网址链接"}},[a("el-input",{model:{value:e.formPush.url,callback:function(t){e.$set(e.formPush,"url",t)},expression:"formPush.url"}})],1):e._e(),e._v(" "),3==e.formPush.advertType?a("el-form-item",{attrs:{label:"商家名称"}},[a("el-input",{model:{value:e.formPush.areaName,callback:function(t){e.$set(e.formPush,"areaName",t)},expression:"formPush.areaName"}})],1):e._e(),e._v(" "),3==e.formPush.advertType?a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{model:{value:e.formPush.phone,callback:function(t){e.$set(e.formPush,"phone",t)},expression:"formPush.phone"}})],1):e._e(),e._v(" "),3==e.formPush.advertType?a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.formPush.address,callback:function(t){e.$set(e.formPush,"address",t)},expression:"formPush.address"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"选择小区",size:"small",prop:"xqId"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formPush.xqId,callback:function(t){e.$set(e.formPush,"xqId",t)},expression:"formPush.xqId"}},e._l(e.xqTree,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),3==e.formPush.advertType?a("el-form-item",{attrs:{label:"简介"}},[a("el-input",{model:{value:e.formPush.intro,callback:function(t){e.$set(e.formPush,"intro",t)},expression:"formPush.intro"}})],1):e._e(),e._v(" "),3==e.formPush.advertType?a("el-form-item",{attrs:{label:"简介图片"}},[a("el-upload",{attrs:{action:"/intellmanagerV3.0/intellmanagerV3.0/upload/uploadfile","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handlePicRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.picDialog},on:{"update:visible":function(t){e.picDialog=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1):e._e()],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addList("addList")}}},[e._v("新 增")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"addList",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.formUpdate}},[a("el-form-item",{attrs:{label:"商家名称"}},[a("el-input",{model:{value:e.formUpdate.areaName,callback:function(t){e.$set(e.formUpdate,"areaName",t)},expression:"formUpdate.areaName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{model:{value:e.formUpdate.phone,callback:function(t){e.$set(e.formUpdate,"phone",t)},expression:"formUpdate.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.formUpdate.address,callback:function(t){e.$set(e.formUpdate,"address",t)},expression:"formUpdate.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择小区",size:"small",prop:"xqId"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formUpdate.xqId,callback:function(t){e.$set(e.formUpdate,"xqId",t)},expression:"formUpdate.xqId"}},e._l(e.xqTree,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"广告类型",size:"small",prop:"advertType"}},[a("el-select",{attrs:{placeholder:"请选择广告类型"},model:{value:e.formUpdate.advertType,callback:function(t){e.$set(e.formUpdate,"advertType",t)},expression:"formUpdate.advertType"}},[a("el-option",{attrs:{label:"只有图片",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"图片带超连接",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"图片带详情介绍",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"简介"}},[a("el-input",{model:{value:e.formUpdate.intro,callback:function(t){e.$set(e.formUpdate,"intro",t)},expression:"formUpdate.intro"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"简介图片"}},[a("el-upload",{attrs:{action:"/intellmanagerV3.0/intellmanagerV3.0/upload/uploadfile","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handlePicRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.picDialog},on:{"update:visible":function(t){e.picDialog=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:e.updateList}},[e._v("确定")])],1)])],1)},staticRenderFns:[]};var s=a("VU/8")(r,i,!1,function(e){a("YSQf")},"data-v-2359d7bb",null);t.default=s.exports}});
//# sourceMappingURL=5.ca19c441135abebb38c8.js.map