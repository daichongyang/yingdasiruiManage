webpackJsonp([67],{"2zSh":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("prc4"),r=a("qKdJ"),i={data:function(){return{option1:[],deleBatch:[],pname:"",isGetFather:!1,fatherId:0,formSearch:{current:1,pid:0,size:10},fatherName:[{id:0,name:"首级"}],formPush:{},formData:[],formUpdate:{},total:0,pages:0,addDialog:!1,updateDialog:!1,zuzhiTree:[],xqTree:[],dataTree:[],defaultProps:{children:"children",label:"label"},defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"},rules:{name:[{required:!0,message:"该项不能为空"}],xqId:[{required:!0,message:"该项不能为空",trigger:"change"}]}}},methods:{getInit:function(){var e=this;Object(r._81)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(t){return t.gmtModified&&(t.gmtModified=e.$root.getDateArray(t.gmtModified)[9]),t}),e.total=t.data.data.total,e.pages=t.data.pages):e.$message(t.data.msg)});Object(r._118)({}).then(function(t){console.log(t),200==t.data.code&&(e.xqTree=t.data.data,e.formSearch.xqId=e.xqTree[0].id)});Object(r._64)({name:"",status:1}).then(function(t){console.log(t),200==t.data.code&&(e.zuzhiTree=t.data.data)})},addList:function(e){var t=this;this.formPush.pid=this.formSearch.pid,console.log(this.formSearch.pid),this.formSearch.pid,this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(r._79)(t.formPush).then(function(e){console.log(e),200==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.getInit()):t.$message("添加失败")}),t.addDialog=!1})},updateList:function(){var e=this;console.log(this.formUpdate),Object(r._82)(this.formUpdate).then(function(t){console.log(t),200==t.data.code&&(e.$message({message:"修改成功",type:"warning"}),e.getInit())}),this.updateDialog=!1},deleInfor:function(e){var t=this,a=[];e&&a.push(e),0!=this.deleBatch.length&&this.deleBatch.filter(function(e){return a.push(e.id),e}),this.$confirm("确认删除吗？").then(function(e){Object(r._80)(a).then(function(e){console.log(e),200==e.data.code&&(t.$message("删除成功"),t.getInit())})}).catch(function(e){})},handleCurrentPage:function(e){this.formSearch.current=e,this.getInit()},checkTreeInfor:function(e,t){t.checkedKeys.length>1?this.$message("只能选择一个组织"):(this.formPush.xqId=t.checkedKeys[0],this.formUpdate.xqId=t.checkedKeys[0])},updateShowBox:function(e){this.isGetFather||(e.pname?this.pname=e.pname:this.pname=e.name);var t={id:e.id,name:e.name,pid:this.formUpdate.pid||e.pid,remark:e.remark};this.updateDialog=!0,this.formUpdate=t},zuzhiChange:function(e){var t=this;0!=e.length?(console.log(e),this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id):this.formSearch.orgId="",Object(r._81)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtCreate&&(e.gmtCreate=t.$root.getDateArray(e.gmtCreate)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})},handleSelectionChange:function(e){console.log(e),this.deleBatch=e},handleclick:function(e){var t=this;this.fatherName=this.fatherName.filter(function(t){return t.id!=e.id}),this.fatherName.push(e),this.formSearch.pid=e.id,console.log(this.fatherName,e),Object(r._81)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtModified&&(e.gmtModified=t.$root.getDateArray(e.gmtModified)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})},clickmbx:function(e){var t=this;console.log(e),this.formSearch.pid=e,Object(r._81)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtModified&&(e.gmtModified=t.$root.getDateArray(e.gmtModified)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})}},mounted:function(){this.getInit()},components:{paging:o.a}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"form_content"},[a("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"所属组织",size:"small"}},[a("el-cascader",{ref:"cascader",attrs:{options:e.zuzhiTree,props:e.defaultProps2,clearable:""},on:{change:e.zuzhiChange},model:{value:e.option1,callback:function(t){e.option1=t},expression:"option1"}})],1)],1),e._v(" "),a("el-form",{attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"选择小区",size:"small",prop:"xqId"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formSearch.xqId,callback:function(t){e.$set(e.formSearch,"xqId",t)},expression:"formSearch.xqId"}},e._l(e.xqTree,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:e.getInit}},[e._v("查 询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.addDialog=!0}}},[e._v("添 加")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.deleInfor(!1)}}},[e._v("批量删除")])],1)],1),e._v(" "),a("div",{staticClass:"show_father"},[a("div",{staticClass:"show_father_box"},e._l(e.fatherName,function(t,o){return a("div",{key:o,staticStyle:{cursor:"pointer"},on:{click:function(a){return e.clickmbx(t.id)}}},[a("span",[e._v(e._s(t.name)+" ")]),e._v(" "),o!=e.fatherName.length-1?a("span",{staticStyle:{"margin-right":"10px"}},[e._v(" → ")]):e._e()])}),0),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.fatherName=[{id:0,name:"首级"}],e.clickmbx(0)}}},[e._v("清楚记录")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.formData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"区域"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.handleclick(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pname",label:"父级区域",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"xqName",label:"所属小区",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return e.updateShowBox(t.row)}}},[e._v("修 改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleInfor(t.row.id)}}},[e._v("删 除")])]}}])})],1),e._v(" "),a("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"addList",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.formPush}},[a("el-form-item",{attrs:{label:"区域名称",prop:"name"}},[a("el-input",{model:{value:e.formPush.name,callback:function(t){e.$set(e.formPush,"name",t)},expression:"formPush.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.formPush.remark,callback:function(t){e.$set(e.formPush,"remark",t)},expression:"formPush.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择小区",size:"small",prop:"xqId"}},[a("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formPush.xqId,callback:function(t){e.$set(e.formPush,"xqId",t)},expression:"formPush.xqId"}},e._l(e.xqTree,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addList("addList")}}},[e._v("新 增")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[a("div",{staticClass:"cont_box_right"},[a("el-form",{ref:"addList",attrs:{"label-position":"right",rules:e.rules,"label-width":"100px",model:e.formUpdate}},[a("el-form-item",{attrs:{label:"区域名称",prop:"name"}},[a("el-input",{model:{value:e.formUpdate.name,callback:function(t){e.$set(e.formUpdate,"name",t)},expression:"formUpdate.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.formUpdate.remark,callback:function(t){e.$set(e.formUpdate,"remark",t)},expression:"formUpdate.remark"}})],1)],1),e._v(" "),a("el-form",{attrs:{"label-position":"right","label-width":"100px",model:e.formUpdate}},[a("el-form-item",{attrs:{label:"当前选中父级",prop:"name"}},[a("span",{staticStyle:{color:"#a1d6f4"}},[e._v(e._s(e.pname)+" "),a("span",{staticStyle:{"font-size":"12px"}},[e._v("（修改父级需要在父级处先勾选）")])])])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:e.updateList}},[e._v("确定")])],1)])],1)},staticRenderFns:[]};var n=a("VU/8")(i,l,!1,function(e){a("tfwF")},"data-v-27d89672",null);t.default=n.exports},tfwF:function(e,t){}});
//# sourceMappingURL=67.60c38356076ed8236893.js.map