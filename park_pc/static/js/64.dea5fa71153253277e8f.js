webpackJsonp([64],{"1XBR":function(t,e){},"94IY":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("prc4"),s=a("qKdJ"),r={data:function(){return{option1:[],formSearch:{current:1,size:10},formPush:{},formData:[],formUpdate:{},total:0,pages:0,addDialog:!1,updateDialog:!1,dataTree:[],defaultProps:{children:"children",label:"name"},defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"}}},methods:{getInit:function(){var t=this;Object(s._117)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtCreate&&(e.gmtCreate=t.$root.getDateArray(e.gmtCreate)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)});Object(s._64)({name:"",status:1}).then(function(e){console.log(e),200==e.data.code&&(t.dataTree=e.data.data)})},addList:function(){var t=this;this.formPush.orgId?this.formPush.name?Object(s._115)(this.formPush).then(function(e){console.log(e),200==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.getInit()):t.$message("添加失败"),t.addDialog=!1}):this.$message("请填写小区名称"):this.$message("请选择所属组织")},updateList:function(){var t=this;console.log(this.formUpdate),this.formUpdate.orgId?this.formUpdate.id?(Object(s._119)(this.formUpdate).then(function(e){console.log(e),200==e.data.code&&(t.$message({message:"修改成功",type:"warning"}),t.getInit())}),this.updateDialog=!1):this.$message("请填写小区名称"):this.$message("请选择所属组织")},deleInfor:function(t){var e=this,a=[];t&&a.push(t),this.$confirm("确认删除吗？").then(function(t){Object(s._116)(a).then(function(t){console.log(t),200==t.data.code&&(e.$message("删除成功"),e.getInit())})}).catch(function(t){})},handleCurrentPage:function(t){this.formSearch.current=t,this.getInit()},checkTreeInfor:function(t,e){e.checkedKeys.length>1?this.$message("只能选择一个组织"):(this.formPush.orgId=e.checkedKeys[0],this.formUpdate.orgId=e.checkedKeys[0])},updateShowBox:function(t){this.formUpdate={},this.updateDialog=!0,this.formUpdate.orgId=[t.orgId],this.formUpdate.id=t.id,console.log(this.formUpdate)},handleChange:function(t){var e=this;0!=t.length?(console.log(t),this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id):this.formSearch.orgId="",Object(s._117)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(t){return t.gmtCreate&&(t.gmtCreate=e.$root.getDateArray(t.gmtCreate)[9]),t}),e.total=t.data.data.total,e.pages=t.data.pages):e.$message(t.data.msg)})}},mounted:function(){this.getInit()},components:{paging:o.a}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"form_content"},[a("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:t.formSearch}},[a("el-form-item",{attrs:{label:"所属组织",size:"small"}},[a("el-cascader",{ref:"cascader",attrs:{options:t.dataTree,props:t.defaultProps2,clearable:""},on:{change:t.handleChange},model:{value:t.option1,callback:function(e){t.option1=e},expression:"option1"}})],1)],1),t._v(" "),a("el-form",{attrs:{inline:!0,model:t.formSearch}},[a("el-form-item",{attrs:{label:"小区名称",size:"small"}},[a("el-input",{attrs:{placeholder:"请输入小区名称"},model:{value:t.formSearch.name,callback:function(e){t.$set(t.formSearch,"name",e)},expression:"formSearch.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:t.getInit}},[t._v("查 询")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.addDialog=!0}}},[t._v("添 加")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.formData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"小区名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"orgName",label:"所属组织"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{aa:2==e.row.status,green:1==e.row.status,red:0==e.row.status}},[t._v("\n            "+t._s(0==e.row.status?"未通过":1==e.row.status?"正常":"冻结")+"\n          ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人员",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return t.updateShowBox(e.row)}}},[t._v("修 改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.deleInfor(e.row.id)}}},[t._v("删 除")])]}}])})],1),t._v(" "),a("paging",{attrs:{"get-total":t.total},on:{changePage:t.handleCurrentPage}}),t._v(" "),a("el-dialog",{attrs:{title:"新增",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("div",{staticClass:"cont_box_left"},[a("el-tree",{ref:"tree",attrs:{data:t.dataTree,"check-strictly":"","show-checkbox":"","node-key":"id","default-expand-all":"",props:t.defaultProps},on:{check:t.checkTreeInfor}})],1),t._v(" "),a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"formPush",attrs:{"label-position":"right","label-width":"80px",model:t.formPush}},[a("el-form-item",{attrs:{label:"小区名称"}},[a("el-input",{model:{value:t.formPush.name,callback:function(e){t.$set(t.formPush,"name",e)},expression:"formPush.name"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:t.addList}},[t._v("新 增")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"修改",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[a("div",{staticClass:"cont_box_left"},[t.updateDialog?a("el-tree",{ref:"tree",attrs:{data:t.dataTree,"check-strictly":"","show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":t.formUpdate.orgId,props:t.defaultProps},on:{check:t.checkTreeInfor}}):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(e){t.updateDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:t.updateList}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var l=a("VU/8")(r,n,!1,function(t){a("1XBR")},"data-v-2c2b5a70",null);e.default=l.exports}});
//# sourceMappingURL=64.dea5fa71153253277e8f.js.map