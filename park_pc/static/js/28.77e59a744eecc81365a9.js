webpackJsonp([28],{"/DJS":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("mvHQ"),i=s.n(r),a=s("qKdJ"),o={data:function(){return{min:0,nowName:"",pName:"",sortValue:"",abbreviation:"",description:"",inputNumber:0,changeHandle:1,formSearch:{name:"",status:1},formPush:{sortValue:0,status:!0},defaultProps:{children:"children",label:"name"},dataTree:[],filterText:"",rules:{parentId:[{required:!0,message:"该项不能为空"}],name:[{required:!0,message:"该项不能为空"}]},delTree:[]}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{showupdata:function(){this.changeHandle=0,this.inputNumber=this.formPush.sortValue||0,this.formPush.name=this.nowName,this.formPush.parentName=this.pName,this.formPush.abbreviation=this.abbreviation,this.formPush.description=this.description,this.inputNumber=this.formPush.sortValue=this.sortValue},showAdd:function(){this.formPush.parentId||0==this.formPush.parentId||this.$message("请先选择组织"),this.formPush.parentName||(this.formPush.parentName=this.nowName),this.formPush.parentName=this.nowName,this.formPush.name="",this.formPush.abbreviation="",this.formPush.description="",this.formPush.children?this.formPush.sortValue=this.inputNumber=this.formPush.children.length:this.formPush.sortValue=this.inputNumber=0,this.changeHandle=1},getInit:function(){var e=this;Object(a._64)(this.formSearch).then(function(t){console.log(t),200==t.data.code&&(e.dataTree=t.data.data)})},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},treeClick:function(e){this.formPush=JSON.parse(i()(e)),this.nowName=this.formPush.name,this.pName=this.formPush.parentName,this.sortValue=this.formPush.sortValue,this.abbreviation=this.formPush.abbreviation,this.description=this.formPush.description,this.formPush.parentName||(this.formPush.parentName=this.formPush.name),1==this.changeHandle?(this.formPush.name="",this.formPush.parentName=this.nowName,this.formPush.abbreviation="",this.formPush.description="",this.formPush.children?this.formPush.sortValue=this.inputNumber=this.formPush.children.length:this.formPush.sortValue=0):(console.log(this.sortValue),this.formPush.children?(this.inputNumber=this.sortValue,this.formPush.parentName=this.pName,this.formPush.abbreviation=this.abbreviation,this.formPush.description=this.description):(this.inputNumber=this.sortValue,this.formPush.sortValue=this.sortValue)),console.log(e)},addTree:function(e){var t=this;this.formPush?this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var s={name:t.formPush.name,parentId:t.formPush.id,abbreviation:t.formPush.abbreviation,description:t.formPush.description,status:t.formPush.status,sortValue:t.formPush.sortValue};Object(a._77)(s).then(function(e){console.log(e),200==e.data.code&&(t.$message({message:"添加成功",type:"success"}),t.getInit())})}):this.$message("请先选择组织")},upTree:function(e){var t=this,s=JSON.parse(i()(this.formPush));delete s.children,delete s.parentName,console.log(s),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(a._111)(s).then(function(e){console.log(e),200==e.data.code&&(t.$message({message:"修改成功",type:"warning"}),t.getInit())})})},checkInfor:function(e,t){console.log(t),this.delTree=t.checkedKeys,this.delTree&&(this.formPush.parentId=this.delTree[0])},deleInfor:function(){var e=this;this.$confirm("确认删除吗？").then(function(t){Object(a._10)(e.delTree).then(function(t){console.log(t),200==t.data.code&&(e.$message("删除成功"),e.getInit())})}).catch(function(e){})}},mounted:function(){this.getInit()}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",{staticClass:"cont_box"},[s("div",{staticClass:"cont_box_left"},[s("el-form",{staticClass:"margin10",attrs:{inline:!0,model:e.formSearch}},[s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{placeholder:"搜索部门名称"},model:{value:e.formSearch.name,callback:function(t){e.$set(e.formSearch,"name",t)},expression:"formSearch.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-button",{on:{click:e.getInit}},[e._v("查询")])],1),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-button",{attrs:{type:"primary"},on:{click:e.showAdd}},[e._v("添加")])],1),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-button",{attrs:{type:"warning"},on:{click:e.showupdata}},[e._v("修改")])],1),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-button",{attrs:{type:"danger"},on:{click:e.deleInfor}},[e._v("删除")])],1)],1),e._v(" "),s("el-tree",{ref:"tree",attrs:{data:e.dataTree,"show-checkbox":"","default-expand-all":"","node-key":"id",props:e.defaultProps,"filter-node-method":e.filterNode},on:{"node-click":e.treeClick,check:e.checkInfor}})],1),e._v(" "),s("div",{staticClass:"cont_box_right"},[s("el-form",{staticClass:"marginRight",attrs:{inline:!0,model:e.formSearch}},[s("el-form-item",{staticStyle:{margin:"0px"},attrs:{label:1==e.changeHandle?"新增":"修改"}})],1),e._v(" "),s("el-form",{ref:"formPush",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.formPush}},[s("el-form-item",{attrs:{label:"上级",prop:"parentId"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.formPush.parentName,callback:function(t){e.$set(e.formPush,"parentName",t)},expression:"formPush.parentName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"名称",prop:"name"}},[s("el-input",{model:{value:e.formPush.name,callback:function(t){e.$set(e.formPush,"name",t)},expression:"formPush.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"简称"}},[s("el-input",{model:{value:e.formPush.abbreviation,callback:function(t){e.$set(e.formPush,"abbreviation",t)},expression:"formPush.abbreviation"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"描述"}},[s("el-input",{model:{value:e.formPush.description,callback:function(t){e.$set(e.formPush,"description",t)},expression:"formPush.description"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"状态"}},[s("el-radio-group",{model:{value:e.formPush.status,callback:function(t){e.$set(e.formPush,"status",t)},expression:"formPush.status"}},[s("el-radio",{attrs:{label:!0}},[e._v("启用")]),e._v(" "),s("el-radio",{attrs:{label:!1}},[e._v("禁止")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"排序"}},[s("el-input-number",{attrs:{disabled:1==this.changeHandle,min:e.min,max:e.inputNumber},model:{value:e.formPush.sortValue,callback:function(t){e.$set(e.formPush,"sortValue",t)},expression:"formPush.sortValue"}})],1),e._v(" "),s("el-form-item",[1==e.changeHandle?s("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addTree("formPush")}}},[e._v("新增")]):s("el-button",{attrs:{size:"medium ",type:"warning"},on:{click:function(t){return e.upTree("formPush")}}},[e._v("修改")])],1)],1)],1)])])},staticRenderFns:[]};var l=s("VU/8")(o,n,!1,function(e){s("CzFH")},"data-v-d39b00a0",null);t.default=l.exports},CzFH:function(e,t){}});
//# sourceMappingURL=28.77e59a744eecc81365a9.js.map