webpackJsonp([84],{SKDY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("prc4"),r=a("qKdJ"),o={data:function(){return{option1:[],xqTree:[],isAddorUpdate:1,formSearch:{current:1,size:10},formData:[],formUpdate:{},total:0,pages:0,addDialog:!1,formPush:{},dataTree:[],defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"},rules:{name:[{required:!0,message:"该项不能为空"}],xqId:[{required:!0,message:"该项不能为空",trigger:"change"}]}}},methods:{getlist:function(){var e=this;Object(r._26)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(t){return t.gmtCreate&&(t.gmtCreate=e.$root.getDateArray(t.gmtCreate)[9]),t}),e.total=t.data.data.total):e.$message(t.data.msg)})},getInit:function(){var e=this;this.getlist(),Object(r._118)({}).then(function(t){console.log(t),200==t.data.code&&(e.xqTree=t.data.data)});Object(r._64)({name:"",status:1}).then(function(t){console.log(t),200==t.data.code&&(e.dataTree=t.data.data)})},handleChange:function(e){0!=e.length?(console.log(e),this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id):this.formSearch.orgId=""},addList:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(r.m)(t.formPush).then(function(e){console.log(e),200==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.getList()):t.$message("添加失败:"+e.data.msg)}),t.addDialog=!1})},updateList:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(r._111)(t.formPush).then(function(e){console.log(e),200==e.data.code&&(t.$message({message:"修改成功",type:"warning"}),t.getInit())})})},checkInfor:function(e,t){console.log(t),this.delTree=t.checkedKeys},deleInfor:function(){var e=this;this.$confirm("确认删除吗？").then(function(t){Object(r.X)(e.delTree).then(function(t){console.log(t),200==t.data.code&&(e.$message("删除成功"),e.getInit())})}).catch(function(e){})},handleCurrentPage:function(e){this.formSearch.current=e,this.getList()}},mounted:function(){this.getInit()},components:{paging:l.a}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"modlude"},[a("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"所属组织",size:"small"}},[a("el-cascader",{ref:"cascader",attrs:{options:e.dataTree,props:e.defaultProps2,clearable:""},on:{change:e.handleChange},model:{value:e.option1,callback:function(t){e.option1=t},expression:"option1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择小区",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formSearch.xqId,callback:function(t){e.$set(e.formSearch,"xqId",t)},expression:"formSearch.xqId"}},e._l(e.xqTree,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否启用",size:"small"}},[a("el-select",{model:{value:e.formSearch.isOn,callback:function(t){e.$set(e.formSearch,"isOn",t)},expression:"formSearch.isOn"}},[a("el-option",{attrs:{label:"启用",value:1}}),e._v(" "),a("el-option",{attrs:{label:"禁止",value:0}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"线路名称",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入线路名称"},model:{value:e.formSearch.name,callback:function(t){e.$set(e.formSearch,"name",t)},expression:"formSearch.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.formSearch.addr,callback:function(t){e.$set(e.formSearch,"addr",t)},expression:"formSearch.addr"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账号",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.formSearch.username,callback:function(t){e.$set(e.formSearch,"username",t)},expression:"formSearch.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"外显号码",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入外显号码"},model:{value:e.formSearch.number,callback:function(t){e.$set(e.formSearch,"number",t)},expression:"formSearch.number"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.formSearch.password,callback:function(t){e.$set(e.formSearch,"password",t)},expression:"formSearch.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"号码前缀",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入号码前缀"},model:{value:e.formSearch.prefix,callback:function(t){e.$set(e.formSearch,"prefix",t)},expression:"formSearch.prefix"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium "},on:{click:e.getlist}},[e._v("查 询")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!0}}},[e._v("新 增")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.formData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"设备名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"devStatus",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return e.deleInfor(t.row)}}},[e._v("远程开门")])]}}])})],1),e._v(" "),a("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"addList",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.formPush}},[a("el-form-item",{attrs:{label:"选择小区",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formPush.xqId,callback:function(t){e.$set(e.formPush,"xqId",t)},expression:"formPush.xqId"}},e._l(e.xqTree,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否启用",size:"small"}},[a("el-select",{model:{value:e.formPush.isOn,callback:function(t){e.$set(e.formPush,"isOn",t)},expression:"formPush.isOn"}},[a("el-option",{attrs:{label:"启用",value:1}}),e._v(" "),a("el-option",{attrs:{label:"禁止",value:0}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"线路名称",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入线路名称"},model:{value:e.formPush.name,callback:function(t){e.$set(e.formPush,"name",t)},expression:"formPush.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.formPush.addr,callback:function(t){e.$set(e.formPush,"addr",t)},expression:"formPush.addr"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账号",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.formPush.username,callback:function(t){e.$set(e.formPush,"username",t)},expression:"formPush.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"外显号码",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入外显号码"},model:{value:e.formPush.number,callback:function(t){e.$set(e.formPush,"number",t)},expression:"formPush.number"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.formPush.password,callback:function(t){e.$set(e.formPush,"password",t)},expression:"formPush.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"号码前缀",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入号码前缀"},model:{value:e.formPush.prefix,callback:function(t){e.$set(e.formPush,"prefix",t)},expression:"formPush.prefix"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addList("addList")}}},[e._v("新 增")])],1)])],1)},staticRenderFns:[]};var n=a("VU/8")(o,s,!1,function(e){a("hwTR")},"data-v-08a9ef86",null);t.default=n.exports},hwTR:function(e,t){}});
//# sourceMappingURL=84.493e03fa0e7e7f27c96d.js.map