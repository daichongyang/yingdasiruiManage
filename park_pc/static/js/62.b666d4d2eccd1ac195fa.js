webpackJsonp([62],{"0DaS":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("fl5R"),s=o("prc4"),r=o("qKdJ"),i=new Date((new Date).toLocaleDateString()).getTime(),n=new Date((new Date).toLocaleDateString()).getTime()+864e5-1,l={data:function(){return{devListt:"",devList:[],huixianSelect:[],option1:[],xqId:"",pushSelect:0,isApplyToUser:!1,memberNodesInfor:{memberNodes:[{chailder:[{startTime:i,endTime:n,week:""}]}]},ownerNodesInfor:{ownerNodes:[{chailder:[{startTime:i,endTime:n,week:""}]}]},deleBatch:[],formSearch:{current:1,pid:0,size:10},fatherName:[{id:0,name:"首级"}],formPush:{applyType:1,startTime:i,ownerDurationType:1,memberDurationType:1,applyHouseType:1,ownerNodes:[],isApplyToUser:0,memberNodes:[]},formData:[],formUpdate:{},total:0,pages:0,addDialog:!1,updateDialog:!1,zuzhiTree:[],xqTree:[],dataTree:[],defaultProps:{children:"children",label:"name"},defaultProps2:{children:"children",label:"name",value:"id",expandTrigger:"hover"},rules:{name:[{required:!0,message:"该项不能为空"}],xqId:[{required:!0,message:"该项不能为空",trigger:"blur"}],startTime:[{required:!0,message:"该项不能为空",trigger:"blur"}],endTime:[{required:!0,message:"该项不能为空",trigger:"blur"}],applyType:[{required:!0,message:"该项不能为空",trigger:"blur"}]}}},methods:{nextt:function(){var e=this;this.updateDialog=!0,this.$nextTick(function(){e.xqId=e.formPush.xqId,e.devList=e.formPush.devList,console.log(e.formPush.devList)})},getInit:function(){var e=this;Object(r._37)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(t){return t.gmtModified&&(t.gmtModified=e.$root.getDateArray(t.gmtModified)[9]),t}),e.total=t.data.data.total,e.pages=t.data.pages):e.$message(t.data.msg)});Object(r._95)({}).then(function(t){console.log(t),200==t.data.code&&(e.xqTree=t.data.data,e.formSearch.xqId=e.xqTree[0].id||"")});Object(r._46)({name:"",status:1}).then(function(t){console.log(t),200==t.data.code&&(e.zuzhiTree=t.data.data)})},addList:function(e){var t=this;if(this.devListt){if(this.formPush.ownerNodes=[],this.formPush.memberNodes=[],1==this.formPush.applyType&&(this.memberNodesInfor.memberNodes=this.ownerNodesInfor.ownerNodes,this.formPush.memberDurationType=this.formPush.ownerDurationType),0!=this.ownerNodesInfor.ownerNodes.length)for(var o=0;o<this.ownerNodesInfor.ownerNodes.length;o++)if(0!=this.ownerNodesInfor.ownerNodes[o].chailder.length)for(var a=0;a<this.ownerNodesInfor.ownerNodes[o].chailder.length;a++)console.log(this.ownerNodesInfor.ownerNodes[o].chailder),this.formPush.ownerNodes.push(this.ownerNodesInfor.ownerNodes[o].chailder[a]);if(0!=this.memberNodesInfor.memberNodes.length)for(var s=0;s<this.memberNodesInfor.memberNodes.length;s++)if(0!=this.memberNodesInfor.memberNodes[s].chailder.length)for(var i=0;i<this.memberNodesInfor.memberNodes[s].chailder.length;i++)this.formPush.memberNodes.push(this.memberNodesInfor.memberNodes[s].chailder[i]);this.isApplyToUser?this.formPush.isApplyToUser=1:this.formPush.isApplyToUser=2,console.log(this.formPush),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(r._84)(t.formPush).then(function(e){console.log(e),200==e.data.code?(t.$message({message:"授权成功",type:"success"}),t.getInit()):t.$message("授权失败")}),t.addDialog=!1})}else this.$message("请选择设备")},selected:function(e){var t=this;this.pushSelect=0,0!=e.length&&(this.formPush.devList=[],this.devListt="",e=e.filter(function(e){var o={devSn:e.devSn||"",devType:e.devType||"",doorkeySign:e.doorkeySign||"",id:e.id||"",name:e.name||"",ncuSn:e.ncuSn||"",viceDevice:e.viceDevice||""};return t.formPush.devList.push(o),t.devListt=t.devListt+e.name+"，",e}),this.devListt=this.devListt.substring(0,this.devListt.length-1)),console.log(e),this.updateDialog=!1},changeItem:function(e){if(console.log(e),1==e||2==e)this.ownerNodesInfor.ownerNodes=[{chailder:[{startTime:i,endTime:n,week:""}]}];else{this.ownerNodesInfor.ownerNodes=[];for(var t=0;t<7;t++){var o={chailder:[{startTime:i,endTime:n,week:t+1}]};this.ownerNodesInfor.ownerNodes.push(o)}}},changeItem2:function(e){if(1==e||2==e)this.memberNodesInfor.memberNodes=[{chailder:[{startTime:i,endTime:n,week:""}]}];else{this.memberNodesInfor.memberNodes=[];for(var t=0;t<7;t++){var o={chailder:[{startTime:i,endTime:n,week:""}]};this.memberNodesInfor.memberNodes.push(o)}}},addItem:function(e){var t={startTime:i,endTime:n,week:3==this.formPush.ownerDurationType?e+1:""};this.ownerNodesInfor.ownerNodes[e].chailder.push(t)},addItem2:function(e){var t={startTime:i,endTime:n,week:3==this.formPush.memberDurationType?e+1:""};this.memberNodesInfor.memberNodes[e].chailder.push(t)},delItem:function(e,t){this.ownerNodesInfor.ownerNodes[t].chailder=this.ownerNodesInfor.ownerNodes[t].chailder.filter(function(t){return t!=e})},delItem2:function(e,t){this.memberNodesInfor.memberNodes[t].chailder=this.memberNodesInfor.memberNodes[t].chailder.filter(function(t){return t!=e})},deleInfor:function(e){var t=this,o=[];e&&o.push(e),0!=this.deleBatch.length&&this.deleBatch.filter(function(e){return o.push(e.id),e}),this.$confirm("确认删除吗？").then(function(e){Object(r._59)(o).then(function(e){console.log(e),200==e.data.code&&(t.$message("删除成功"),t.getInit())})}).catch(function(e){})},handleCurrentPage:function(e){this.formSearch.current=e,this.getInit()},updateShowBox:function(e){var t=this;if(console.log(this.deleBatch),this.devListt="",this.formPush.devList=[],this.formPush.sectionIds=[],this.formPush.houseIds=[],e)return this.deleBatch=[],console.log(e),1==e.type?this.formPush.sectionIds=[e.id]:2==e.type&&(this.formPush.houseIds=[e.id]),this.formPush.xqId=e.xqId,this.deleBatch.push(e),void(this.addDialog=!0);0!=this.deleBatch.length?(this.deleBatch.filter(function(e){console.log(t.deleBatch.find(function(t){return t.xqId==e.xqId}));for(var o=0;o<t.deleBatch.length;o++)if(t.deleBatch[o].xqId==e.xqId&&t.deleBatch[o].id!=e.id)return void t.$message("请选择小区相同的区域");return 1==e.type?t.formPush.sectionIds.push(e.id):2==e.type&&t.formPush.houseIds.push(e.id),e}),this.formPush.xqId=this.deleBatch[0].xqId,this.addDialog=!0):this.$message("请选择配置对象")},updateShowBox1:function(e){var t=this;this.devListt="";var o={houseId:e.id};Object(r._15)(o).then(function(e){console.log(e),200==e.data.code?(e.data.data&&(t.formPush=e.data.data,t.formPush.devList=t.formPush.devList.filter(function(e){return t.devListt=t.devListt+e.name+"，",e})),t.devListt=t.devListt.substring(0,t.devListt.length-1)):t.$message(e.data.msg),t.addDialog=!0})},zuzhiChange:function(e){var t=this;0!=e.length?(console.log(e),this.formSearch.orgId=this.$refs.cascader.getCheckedNodes()[0].data.id):this.formSearch.orgId="",Object(r._37)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtCreate&&(e.gmtCreate=t.$root.getDateArray(e.gmtCreate)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})},handleSelectionChange:function(e){this.deleBatch=e,console.log(this.deleBatch)},handleclick:function(e){var t=this;this.fatherName=this.fatherName.filter(function(t){return t.id!=e.id}),this.fatherName.push(e),this.formSearch.pid=e.id,console.log(this.fatherName,e),Object(r._37)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtModified&&(e.gmtModified=t.$root.getDateArray(e.gmtModified)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})},clickmbx:function(e){var t=this;console.log(e),this.formSearch.pid=e,Object(r._37)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.formData=e.data.data.records.filter(function(e){return e.gmtModified&&(e.gmtModified=t.$root.getDateArray(e.gmtModified)[9]),e}),t.total=e.data.data.total,t.pages=e.data.pages):t.$message(e.data.msg)})}},mounted:function(){this.getInit()},components:{acsdev:a.default,paging:s.a}},d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"form_content"},[o("el-form",{staticClass:"form_inline",attrs:{inline:!0,model:e.formSearch}},[o("el-form-item",{attrs:{label:"所属组织",size:"small"}},[o("el-cascader",{ref:"cascader",attrs:{options:e.zuzhiTree,props:e.defaultProps2,clearable:""},on:{change:e.zuzhiChange},model:{value:e.option1,callback:function(t){e.option1=t},expression:"option1"}})],1)],1),e._v(" "),o("el-form",{attrs:{inline:!0,model:e.formSearch}},[o("el-form-item",{attrs:{label:"选择小区",size:"small",prop:"xqId"}},[o("el-select",{attrs:{placeholder:"请选择小区"},model:{value:e.formSearch.xqId,callback:function(t){e.$set(e.formSearch,"xqId",t)},expression:"formSearch.xqId"}},e._l(e.xqTree,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{size:"small"},on:{click:e.getInit}},[e._v("查 询")])],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.deleInfor(!1)}}},[e._v("批量删除")])],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return e.updateShowBox(!1)}}},[e._v("一键统一分配")])],1)],1),e._v(" "),o("div",{staticClass:"show_father"},[o("div",{staticClass:"show_father_box"},e._l(e.fatherName,function(t,a){return o("div",{key:a,staticStyle:{cursor:"pointer"},on:{click:function(o){return e.clickmbx(t.id)}}},[o("span",[e._v(e._s(t.name)+" ")]),e._v(" "),a!=e.fatherName.length-1?o("span",{staticStyle:{"margin-right":"10px"}},[e._v(" → ")]):e._e()])}),0),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:function(t){e.fatherName=[{id:0,name:"首级"}],e.clickmbx(0)}}},[e._v("清楚记录")])],1),e._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.formData},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),o("el-table-column",{attrs:{prop:"name",label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?o("div",{staticStyle:{cursor:"pointer"},on:{click:function(o){return e.handleclick(t.row)}}},[e._v(e._s(t.row.name))]):o("div",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(1==t.row.type?"区域":"房间")+"\n        ")]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?o("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(o){return e.updateShowBox(t.row)}}},[e._v("统一分配")]):o("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(o){return e.updateShowBox1(t.row)}}},[e._v("修改权限")])]}}])})],1),e._v(" "),o("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),o("el-dialog",{attrs:{title:"统一分配",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[o("div",{staticClass:"cont_box_right"},[o("el-form",{ref:"addList",attrs:{"label-position":"right",rules:e.rules,"label-width":"160px",model:e.formPush}},[o("el-form-item",{attrs:{label:"有效开始时间",size:"small",prop:"startTime"}},[o("el-date-picker",{attrs:{type:"date","value-format":"timestamp",placeholder:"开始时间"},model:{value:e.formPush.startTime,callback:function(t){e.$set(e.formPush,"startTime",t)},expression:"formPush.startTime"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"有效结束时间",size:"small",prop:"endTime"}},[o("el-date-picker",{attrs:{type:"date","value-format":"timestamp",placeholder:"结束时间"},model:{value:e.formPush.endTime,callback:function(t){e.$set(e.formPush,"endTime",t)},expression:"formPush.endTime"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"门禁设备"}},[o("el-input",{staticStyle:{width:"300px"},attrs:{disabled:!0,type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:""},model:{value:e.devListt,callback:function(t){e.devListt=t},expression:"devListt"}}),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.nextt}},[e._v("选 择")])],1),e._v(" "),o("el-form-item",{attrs:{label:"有效时段控制分配类型",size:"small"}},[o("el-select",{model:{value:e.formPush.applyType,callback:function(t){e.$set(e.formPush,"applyType",t)},expression:"formPush.applyType"}},[o("el-option",{attrs:{label:"业主/成员统一分配",value:1}}),e._v(" "),o("el-option",{attrs:{label:"业主/成员各自分配",value:2}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:1==e.formPush.applyType?"有效时段控制类型":"业主有效时段控制类型",size:"small"}},[o("el-select",{on:{change:e.changeItem},model:{value:e.formPush.ownerDurationType,callback:function(t){e.$set(e.formPush,"ownerDurationType",t)},expression:"formPush.ownerDurationType"}},[o("el-option",{attrs:{label:"每天",value:1}}),e._v(" "),o("el-option",{attrs:{label:"工作日",value:2}}),e._v(" "),o("el-option",{attrs:{label:"自定义",value:3}})],1)],1),e._v(" "),e._l(e.ownerNodesInfor.ownerNodes,function(t,a){return o("section",{key:a},[o("el-form-item",{attrs:{label:1==e.formPush.ownerDurationType?"每天":2==e.formPush.ownerDurationType?"工作日":0==a?"星期一":1==a?"星期二":2==a?"星期三":3==a?"星期四":4==a?"星期五":5==a?"星期六":"星期天",size:"small"}},[o("el-button",{attrs:{size:"small"},on:{click:function(t){return e.addItem(a)}}},[e._v("添 加")])],1),e._v(" "),e._l(t.chailder,function(t,s){return o("el-form-item",{key:s,attrs:{size:"small"}},[o("div",[o("span",{staticStyle:{color:"#a1d6f4"}},[e._v("有效时间：")]),e._v(" "),o("el-time-picker",{attrs:{"value-format":"timestamp",placeholder:"开始时间"},model:{value:t.startTime,callback:function(o){e.$set(t,"startTime",o)},expression:"item.startTime"}}),e._v(" "),o("span",{staticStyle:{color:"#a1d6f4"}},[e._v(" - ")]),e._v(" "),o("el-time-picker",{attrs:{"value-format":"timestamp",placeholder:"结束时间"},model:{value:t.endTime,callback:function(o){e.$set(t,"endTime",o)},expression:"item.endTime"}}),e._v(" "),o("span",{staticStyle:{color:"#a1d6f4"}},[e._v("\n                  设备控制类型: 网络开门\n                ")]),e._v(" "),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.delItem(t,a)}}},[e._v("删 除")])],1)])})],2)}),e._v(" "),2==e.formPush.applyType?o("section",[o("el-form-item",{attrs:{label:"成员有效时段控制类型",size:"small"}},[o("el-select",{on:{change:e.changeItem2},model:{value:e.formPush.memberDurationType,callback:function(t){e.$set(e.formPush,"memberDurationType",t)},expression:"formPush.memberDurationType"}},[o("el-option",{attrs:{label:"每天",value:1}}),e._v(" "),o("el-option",{attrs:{label:"工作日",value:2}}),e._v(" "),o("el-option",{attrs:{label:"自定义",value:3}})],1)],1),e._v(" "),e._l(e.memberNodesInfor.memberNodes,function(t,a){return o("section",{key:a},[o("el-form-item",{attrs:{label:1==e.formPush.memberDurationType?"每天":2==e.formPush.memberDurationType?"工作日":0==a?"星期一":1==a?"星期二":2==a?"星期三":3==a?"星期四":4==a?"星期五":5==a?"星期六":"星期天",size:"small"}},[o("el-button",{attrs:{size:"small"},on:{click:function(t){return e.addItem2(a)}}},[e._v("添 加")])],1),e._v(" "),e._l(t.chailder,function(t,s){return o("el-form-item",{key:s,attrs:{size:"small"}},[o("div",[o("span",{staticStyle:{color:"#a1d6f4"}},[e._v("有效时间：")]),e._v(" "),o("el-time-picker",{attrs:{"value-format":"timestamp",placeholder:"开始时间"},model:{value:t.startTime,callback:function(o){e.$set(t,"startTime",o)},expression:"item.startTime"}}),e._v(" "),o("span",{staticStyle:{color:"#a1d6f4"}},[e._v(" - ")]),e._v(" "),o("el-time-picker",{attrs:{"value-format":"timestamp",placeholder:"结束时间"},model:{value:t.endTime,callback:function(o){e.$set(t,"endTime",o)},expression:"item.endTime"}}),e._v(" "),o("span",{staticStyle:{color:"#a1d6f4"}},[e._v("\n                    设备控制类型: 网络开门\n                  ")]),e._v(" "),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.delItem2(t,a)}}},[e._v("删 除")])],1)])})],2)})],2):e._e(),e._v(" "),o("el-form-item",{attrs:{label:"保存选项"}},[o("el-radio",{attrs:{label:1},model:{value:e.formPush.applyHouseType,callback:function(t){e.$set(e.formPush,"applyHouseType",t)},expression:"formPush.applyHouseType"}},[e._v("应用到一级房间")]),e._v(" "),o("el-radio",{attrs:{label:2},model:{value:e.formPush.applyHouseType,callback:function(t){e.$set(e.formPush,"applyHouseType",t)},expression:"formPush.applyHouseType"}},[e._v("应用到所有子级房间")])],1),e._v(" "),o("el-form-item",{attrs:{label:""}},[o("el-checkbox",{model:{value:e.isApplyToUser,callback:function(t){e.isApplyToUser=t},expression:"isApplyToUser"}},[e._v("应用到房间现有用户")])],1)],2)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addList("addList")}}},[e._v("确 定")]),e._v(" "),o("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")])],1)]),e._v(" "),o("el-dialog",{attrs:{title:"选择设备",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[o("div",{staticClass:"cont_box_right"},[o("acsdev",{attrs:{"xq-id":e.xqId,"push-select":e.pushSelect,"huixian-select":e.devList},on:{selected:e.selected}})],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"medium"},on:{click:function(t){e.pushSelect=1,e.updateDialog=!1}}},[e._v("确 定")]),e._v(" "),o("el-button",{attrs:{size:"medium"},on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var m=o("VU/8")(l,d,!1,function(e){o("lIZr")},"data-v-2be2d3dc",null);t.default=m.exports},lIZr:function(e,t){}});
//# sourceMappingURL=62.b666d4d2eccd1ac195fa.js.map