webpackJsonp([61],{"C/fM":function(e,t){},"I/0w":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("prc4"),l=a("sSIQ"),n=a("f9k7"),r=a("R8Or"),i=a("rCn5"),s=a("qKdJ"),u={data:function(){return{uploadToRealPath:"/park/upload/file/upload",headers:{Authorization:sessionStorage.getItem("Authorization"),token:sessionStorage.getItem("token")},imageUrl:"",yunweitype:6,baojingName:"",showBtnFather:3,baojingDialog:!1,mapDialog:!1,shebeiDialog:!1,detailsDialog:!1,showAddBtn:!0,showDelBtn:!1,renyuanDialog:!1,formItems:{formItemsArr:[{name:"创建时间",filed:"startTime",type:"datePicker"},{name:"名称",filed:"name",type:"text"},{name:"是否已删除",filed:"isDel",type:"radio",options:[{label:"",name:"全部"},{label:1,name:"是"},{label:0,name:"否"}]}],labelWidth:"90px"},deleBatch:[],mapOpints:"",deleBatch1:[],formSearch:{current:1,type:6,size:10},formSearch1:{current:1,size:10},formSearch2:{current:1,size:10},formSearch3:{current:1,size:10},formPush:{type:6},formData:[],formData1:[],formData2:[],formData3:[],formUpdate:{},total:0,total1:0,total2:0,total3:0,addDialog:!1,updateDialog:!1,rules:{name:[{required:!0,message:"该项不能为空",trigger:"blur"}],department:[{required:!0,message:"该项不能为空",trigger:"blur"}],address:[{required:!0,message:"该项不能为空",trigger:"blur"}],idNumber:[{required:!0,message:"该项不能为空",trigger:"blur"}],phone:[{required:!0,message:"该项不能为空",trigger:"blur"}],title:[{required:!0,message:"该项不能为空",trigger:"blur"}],type:[{required:!0,message:"该项不能为空",trigger:"change"}]},infoId:"",markerObj:"",reyuanNames:"",devNames:"",offList:"",outcome:"",pics:"",point:"",staffs:"",taskDialog:!1}},methods:{getsosQuery:function(){var e=this,t=this.formSearch3;Object(s._90)(t).then(function(t){console.log(t),200==t.data.code&&(e.formData3=t.data.data.records,e.total3=t.data.data.total)})},changeType:function(e){console.log(e),this.formPush={},this.yunweitype=e},getGetAvailableStaff:function(){var e=this,t=this.formSearch1;Object(s._24)(t).then(function(t){200==t.data.code&&(e.formData1=t.data.data.records,e.total1=t.data.data.total)})},mapOpintsArr:function(e){var t=this;this.mapOpints="",this.formPush.points=e,0!=e.length&&e.forEach(function(e){t.mapOpints=e.name+","+t.mapOpints}),this.mapDialog=!1},getGetPatrolDetails:function(e){var t=this;console.log(e),this.formSearch2.taskId=e;var a=this.formSearch2;Object(s._42)(a).then(function(e){console.log(e),200==e.data.code&&(t.formData2=e.data.data.records.filter(function(e){return e.devices&&(e.devNames1="",e.devices.forEach(function(t){e.devNames1=t.name+"/"+e.devNames1})),e.offList&&(e.offList1="",e.offList.forEach(function(t){e.offList1=t.name+"/"+e.offList1})),e.outcome&&(e.outcome1="",e.outcome.forEach(function(t){e.outcome1=t.name+"/"+e.outcome1})),e.pics&&(e.pics1="",e.pics.forEach(function(t){e.pics1=t.name+"/"+e.pics1})),e.point&&(e.point1="",e.point.forEach(function(t){e.point1=t.name+"/"+e.point1})),e.staffs&&(e.staffs1="",e.staffs.forEach(function(t){e.staffs1=t.name+"/"+e.staffs1})),e}),t.total2=e.data.data.total)})},getAllocatPatrolTask:function(){var e=this;if(0!=this.deleBatch1.length){var t=[];this.deleBatch1.forEach(function(e){t.push(e.id)});var a={infoId:this.formSearch1.infoId,staffs:t};Object(s.E)(a).then(function(t){console.log(t),200==t.data.code?(e.$message("操作成功"),e.taskDialog=!1):e.$message("操作失败")})}},getRenyuanIds:function(e){var t=this;console.log(e),this.renyuanDialog=!1,0!=e.length&&(this.formPush.staffs=[],this.formUpdate.staffs=[],this.reyuanNames="",e.forEach(function(e){t.formPush.staffs.push(e.id),t.formUpdate.staffs.push(e.id),t.reyuanNames=e.name+","+t.reyuanNames}))},getDevIds:function(e){var t=this;console.log(e),this.shebeiDialog=!1,0!=e.length&&(this.formPush.devIds=[],this.formUpdate.devIds=[],this.devNames="",e.forEach(function(e){t.formPush.devIds.push(e.id),t.formUpdate.devIds.push(e.id),t.devNames=e.name+","+t.devNames}))},getlist:function(){var e=this;Object(s._48)(this.formSearch).then(function(t){console.log(t),200==t.data.code?(e.formData=t.data.data.records.filter(function(e){return e}),e.total=t.data.data.total):e.$message(t.data.msg)})},getInit:function(){this.getlist()},addList:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(s.v)(t.formPush).then(function(e){console.log(e),200==e.data.code?(t.getlist(),t.$message({message:"添加成功",type:"success"})):t.$message("添加失败")}),t.addDialog=!1})},updateList:function(e){var t=this;console.log(this.formUpdate),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(s._17)(t.formUpdate).then(function(e){console.log(e),200==e.data.code&&(t.$message({message:"修改成功",type:"warning"}),t.getlist())}),t.updateDialog=!1})},deleInfor:function(e){var t=this,a=[];e&&a.push(e),0!=this.deleBatch.length&&this.deleBatch.filter(function(e){return a.push(e.id),e});var o={taskId:e};this.$confirm("确认停用运维任务吗？").then(function(e){Object(s._66)(o).then(function(e){console.log(e),200==e.data.code&&(t.$message("操作成功"),t.getlist())})}).catch(function(e){})},handleSelectionChange:function(e,t){this.deleBatch=e},handleSelectionChange1:function(e,t){this.deleBatch1=e},handleCurrentPage:function(e){this.formSearch.current=e,this.getlist()},handleCurrentPage1:function(e){this.formSearch1.current=e,this.getGetAvailableStaff()},handleCurrentPage2:function(e){this.formSearch2.current=e,this.getGetPatrolDetails(this.formSearch2.taskId)},handleCurrentPage3:function(e){this.formSearch3.current=e,this.getsosQuery()},updateShowBox:function(e){var t=this;console.log(e);var a=e.devList,o=e.staffs;this.formUpdate={duration:e.duration,taskId:e.id,durationType:e.durationType,endTime:e.endTime,numStaff:e.numStaff,patrolDate:e.patrolDate,startTime:e.startTime,name:e.name,alarmId:e.alarmId},this.yunweitype=e.type,this.formUpdate.staffs=[],this.formUpdate.devIds=[],o&&(this.reyuanNames="",o.forEach(function(e){t.formUpdate.staffs.push(e.id),t.reyuanNames=e.name+","+t.reyuanNames})),a&&(this.devNames="",a.forEach(function(e){t.formUpdate.devIds.push(e.id),t.devNames=e.name+","+t.devNames}))},getMuchDeleteType:function(e){this.deleInfor(e)},getAddTotrue:function(e){this.addDialog=e,this.reyuanNames="",this.devNames="",this.mapOpints=""},getSearchInfor:function(e){this.formSearch=e,this.getlist()},handlepicsSuccess:function(e,t,a){var o=this;console.log(t,a),this.formPush.pics=[],a.forEach(function(e){o.formPush.pics.push(e.response.data[0])})},handleRemove:function(e,t){var a=this;console.log(e,t),this.formPush.pics=[],t.forEach(function(e){a.formPush.pics.push(e.response.data[0])})}},mounted:function(){this.getInit()},components:{paging:o.a,paging1:o.a,paging2:o.a,paging3:o.a,searchModule:l.a,mapPoints:n.default,deviceOperationAdd:r.default,deviceOperationManagement:i.default}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"modlude"},[a("searchModule",{attrs:{formSearch:e.formSearch,formItems:e.formItems,showAddBtn:e.showAddBtn,showDelBtn:e.showDelBtn},on:{muchDeleteType:e.getMuchDeleteType,searchInfor:e.getSearchInfor,addTotrue:e.getAddTotrue}}),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.formData,stripe:""},on:{select:e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e._v(" "),3==e.yunweitype?a("el-table-column",{attrs:{prop:"content",label:"维修内容"}}):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-table-column",{attrs:{prop:"duration",label:"间隔时间"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"numStaff",label:"运维人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"任务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(1==t.row.type?"设备运维任务":2==t.row.type?"手动运维计划":3==t.row.type?"报修工单":4==t.row.type?"巡查计划":5==t.row.type?"报警处理":"其它类型")+"\n        ")]}}])}),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-table-column",{attrs:{prop:"durationType",label:"循环类型"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.durationType?[e._v("\n          "+e._s(1==t.row.durationType?"小时":2==t.row.durationType?"天":3==t.row.durationType?"月":"年")+"\n        ")]:void 0}}],null,!0)}):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-table-column",{attrs:{prop:"patrolDate",label:"运维开始时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.patrolDate?[e._v("\n          "+e._s(e.$root.getDateArray(Number(t.row.patrolDate))[9])+"\n        ")]:void 0}}],null,!0)}):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-table-column",{attrs:{prop:"startTime",label:"开始时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.startTime?[e._v("\n          "+e._s(e.$root.getDateArray(Number(t.row.startTime))[9])+"\n        ")]:void 0}}],null,!0)}):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-table-column",{attrs:{prop:"endTime",label:"结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.endTime?[e._v("\n          "+e._s(e.$root.getDateArray(Number(t.row.endTime))[9])+"\n        ")]:void 0}}],null,!0)}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"修改时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtModified?[e._v("\n          "+e._s(e.$root.getDateArray(Number(t.row.gmtModified))[9])+"\n        ")]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtCreate?[e._v("\n          "+e._s(e.$root.getDateArray(t.row.gmtCreate)[9])+"\n        ")]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{size:"small"}},[e._v("\n            更多操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){e.updateShowBox(t.row),e.updateDialog=!0}}},[e._v("修 改")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){return e.deleInfor(t.row.id)}}},[e._v("停 用")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){e.formSearch1.infoId=t.row.id,e.taskDialog=!0,e.getGetAvailableStaff()}}},[e._v("手动分配任务")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){e.getGetPatrolDetails(t.row.id),e.detailsDialog=!0}}},[e._v("查看详情")])],1)],1)]}}])})],1),e._v(" "),a("paging",{attrs:{"get-total":e.total},on:{changePage:e.handleCurrentPage}}),e._v(" "),a("el-dialog",{attrs:{title:"增加",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"110px",model:e.formPush,rules:e.rules}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.formPush.name,callback:function(t){e.$set(e.formPush,"name",t)},expression:"formPush.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{model:{value:e.formPush.phone,callback:function(t){e.$set(e.formPush,"phone",t)},expression:"formPush.phone"}})],1),e._v(" "),1==e.yunweitype||2==e.yunweitype||3==e.yunweitype?a("el-form-item",{attrs:{label:"设备"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.devNames,callback:function(t){e.devNames=t},expression:"devNames"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.shebeiDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),2==e.yunweitype||4==e.yunweitype||5==e.yunweitype?a("el-form-item",{attrs:{label:"运维人员"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.reyuanNames,callback:function(t){e.reyuanNames=t},expression:"reyuanNames"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.renyuanDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),1==e.yunweitype?a("el-form-item",{attrs:{label:"运维人员人数"}},[a("el-input",{model:{value:e.formPush.numStaff,callback:function(t){e.$set(e.formPush,"numStaff",t)},expression:"formPush.numStaff"}})],1):e._e(),e._v(" "),4==e.yunweitype?a("el-form-item",{attrs:{label:"地图点位"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.mapOpints,callback:function(t){e.mapOpints=t},expression:"mapOpints"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.mapDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),5==e.yunweitype?a("el-form-item",{attrs:{label:"报警人姓名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.baojingName,callback:function(t){e.baojingName=t},expression:"baojingName"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.getsosQuery(),e.baojingDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-form-item",{attrs:{label:"运维任务时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formPush.patrolDate,callback:function(t){e.$set(e.formPush,"patrolDate",t)},expression:"formPush.patrolDate"}})],1):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-form-item",{attrs:{label:"循环间隔时间"}},[a("el-input",{model:{value:e.formPush.duration,callback:function(t){e.$set(e.formPush,"duration",t)},expression:"formPush.duration\t"}})],1):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-form-item",{attrs:{label:"循环类型"}},[a("el-select",{model:{value:e.formPush.durationType,callback:function(t){e.$set(e.formPush,"durationType",t)},expression:"formPush.durationType"}},[a("el-option",{attrs:{label:"小时",value:1}}),e._v(" "),a("el-option",{attrs:{label:"天",value:2}}),e._v(" "),a("el-option",{attrs:{label:"月",value:3}}),e._v(" "),a("el-option",{attrs:{label:"年",value:4}})],1)],1):e._e(),e._v(" "),3==e.yunweitype?a("el-form-item",{attrs:{label:"维修描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formPush.content,callback:function(t){e.$set(e.formPush,"content",t)},expression:"formPush.content"}})],1):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-form-item",{attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formPush.startTime,callback:function(t){e.$set(e.formPush,"startTime",t)},expression:"formPush.startTime"}})],1):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-form-item",{attrs:{label:"结束时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formPush.endTime,callback:function(t){e.$set(e.formPush,"endTime",t)},expression:"formPush.endTime"}})],1):e._e(),e._v(" "),3==e.yunweitype?a("el-form-item",{attrs:{label:"图片"}},[a("el-upload",{attrs:{action:e.uploadToRealPath,"list-type":"picture-card",headers:e.headers,"on-success":e.handlepicsSuccess,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})])],1):e._e()],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium "},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium "},on:{click:function(t){return e.addList("addList")}}},[e._v("新 增")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-form",{ref:"formUpdate",attrs:{"label-position":"right",rules:e.rules,"label-width":"110px",model:e.formUpdate}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.formUpdate.name,callback:function(t){e.$set(e.formUpdate,"name",t)},expression:"formUpdate.name"}})],1),e._v(" "),1==e.yunweitype||2==e.yunweitype||3==e.yunweitype?a("el-form-item",{attrs:{label:"设备"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.devNames,callback:function(t){e.devNames=t},expression:"devNames"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.shebeiDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),2==e.yunweitype||4==e.yunweitype||5==e.yunweitype?a("el-form-item",{attrs:{label:"运维人员"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.reyuanNames,callback:function(t){e.reyuanNames=t},expression:"reyuanNames"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.renyuanDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),5==e.yunweitype?a("el-form-item",{attrs:{label:"报警人姓名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.baojingName,callback:function(t){e.baojingName=t},expression:"baojingName"}}),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.getsosQuery(),e.baojingDialog=!0}}},[e._v("选 择")])],1):e._e(),e._v(" "),1==e.yunweitype?a("el-form-item",{attrs:{label:"运维人员人数"}},[a("el-input",{model:{value:e.formUpdate.numStaff,callback:function(t){e.$set(e.formUpdate,"numStaff",t)},expression:"formUpdate.numStaff"}})],1):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-form-item",{attrs:{label:"运维任务时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formUpdate.patrolDate,callback:function(t){e.$set(e.formUpdate,"patrolDate",t)},expression:"formUpdate.patrolDate"}})],1):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-form-item",{attrs:{label:"循环间隔时间"}},[a("el-input",{model:{value:e.formUpdate.duration,callback:function(t){e.$set(e.formUpdate,"duration",t)},expression:"formUpdate.duration\t"}})],1):e._e(),e._v(" "),1==e.yunweitype||4==e.yunweitype?a("el-form-item",{attrs:{label:"循环类型"}},[a("el-select",{model:{value:e.formUpdate.durationType,callback:function(t){e.$set(e.formUpdate,"durationType",t)},expression:"formUpdate.durationType"}},[a("el-option",{attrs:{label:"小时",value:1}}),e._v(" "),a("el-option",{attrs:{label:"天",value:2}}),e._v(" "),a("el-option",{attrs:{label:"月",value:3}}),e._v(" "),a("el-option",{attrs:{label:"年",value:4}})],1)],1):e._e(),e._v(" "),3==e.yunweitype?a("el-form-item",{attrs:{label:"维修描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formUpdate.content,callback:function(t){e.$set(e.formUpdate,"content",t)},expression:"formUpdate.content"}})],1):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-form-item",{attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formUpdate.startTime,callback:function(t){e.$set(e.formUpdate,"startTime",t)},expression:"formUpdate.startTime"}})],1):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-form-item",{attrs:{label:"结束时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formUpdate.endTime,callback:function(t){e.$set(e.formUpdate,"endTime",t)},expression:"formUpdate.endTime"}})],1):e._e(),e._v(" "),3==e.yunweitype?a("el-form-item",{attrs:{label:"图片"}},[a("el-upload",{attrs:{action:e.uploadToRealPath,"list-type":"picture-card",headers:e.headers,"on-success":e.handlepicsSuccess,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})])],1):e._e()],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.updateList("formUpdate")}}},[e._v("确定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"详情",visible:e.detailsDialog},on:{"update:visible":function(t){e.detailsDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.formData2}},[a("el-table-column",{attrs:{prop:"taskName",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"infoStatus",label:"任务状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.infoStatus?"待确认接单":2==t.row.infoStatus?"已接单":3==t.row.infoStatus?"完成":"已取消")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isExpired",label:"是否已过期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.isExpired?"是":"否")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isDel",label:"是否已删除"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.isDel?"是":"否")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"任务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.type?"设备运维任务":2==t.row.type?"手动运维计划":3==t.row.type?"报修工单":4==t.row.type?"不接单":"已完成")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"任务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.type?"待接单":2==t.row.type?"已接单":3==t.row.type?"已取消":4==t.row.type?"巡查计划":5==t.row.type?"报警处理":"其它")+"\n            ")]}}])}),e._v(" "),1==e.yunweitype||2==e.yunweitype?a("el-table-column",{attrs:{prop:"devNames1",label:"设备列表"}}):e._e(),e._v(" "),4==e.yunweitype?a("el-table-column",{attrs:{prop:"address",label:"任务地址"}}):e._e(),e._v(" "),3==e.yunweitype?a("el-table-column",{attrs:{prop:"pics1",label:"报修工单照片"}}):e._e(),e._v(" "),4==e.yunweitype?a("el-table-column",{attrs:{prop:"points1",label:"巡查点位"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"staffs1",label:"处理人员"}}),e._v(" "),1==e.yunweitype?a("el-table-column",{attrs:{prop:"offList1",label:"运维人员请假情况"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"outcome1",label:"运维检查结果"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"修改时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtModified?[e._v("\n              "+e._s(e.$root.getDateArray(Number(t.row.gmtModified))[9])+"\n            ")]:void 0}}],null,!0)}),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-table-column",{attrs:{prop:"startTime",label:"任务开始"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.startTime?[e._v("\n              "+e._s(e.$root.getDateArray(Number(t.row.startTime))[9])+"\n            ")]:void 0}}],null,!0)}):e._e(),e._v(" "),2==e.yunweitype||3==e.yunweitype||5==e.yunweitype?a("el-table-column",{attrs:{prop:"endTime",label:"任务结束"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.endTime?[e._v("\n              "+e._s(e.$root.getDateArray(Number(t.row.endTime))[9])+"\n            ")]:void 0}}],null,!0)}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtCreate?[e._v("\n              "+e._s(e.$root.getDateArray(Number(t.row.gmtCreate))[9])+"\n            ")]:void 0}}],null,!0)})],1),e._v(" "),a("paging2",{attrs:{"get-total":e.total2},on:{changePage:e.handleCurrentPage2}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"报警",visible:e.baojingDialog},on:{"update:visible":function(t){e.baojingDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-table",{staticStyle:{width:"100% height:300px"},attrs:{data:e.formData3}},[a("el-table-column",{attrs:{prop:"",label:"编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.row.id},on:{change:function(a){e.baojingName=t.row.nickname}},model:{value:e.formPush.alarmId,callback:function(t){e.$set(e.formPush,"alarmId",t)},expression:"formPush.alarmId"}},[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtCreate?[e._v("\n              "+e._s(e.$root.getDateArray(t.row.gmtCreate)[9])+"\n              ")]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"修改时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtModified?[e._v("\n                  "+e._s(e.$root.getDateArray(t.row.gmtModified)[9])+"\n              ")]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"latitude",label:"纬度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"longitude",label:"经度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"评论"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"报警人姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"报警人手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                  "+e._s(1==t.row.status?"未处理":2==t.row.status?"处理中":3==t.row.status?"派单处理中":"处理完成")+"\n              ")]}}])})],1),e._v(" "),a("paging3",{attrs:{"get-total":e.total3},on:{changePage:e.handleCurrentPage3}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"手动分配运维任务",visible:e.taskDialog},on:{"update:visible":function(t){e.taskDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.formData1,stripe:""},on:{select:e.handleSelectionChange1}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content",label:"维修内容"}}),e._v(" "),a("el-table-column",{attrs:{prop:"duration",label:"间隔时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"numStaff",label:"运维人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"任务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.type?"设备运维任务":2==t.row.type?"手动运维计划":"巡查任务")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"durationType",label:"循环类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(1==t.row.durationType?"小时":2==t.row.durationType?"天":3==t.row.durationType?"月":"年")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"修改时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtModified?[e._v("\n              "+e._s(e.$root.getDateArray(Number(t.row.gmtModified))[9])+"\n            ")]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.gmtCreate?[e._v("\n              "+e._s(e.$root.getDateArray(t.row.gmtCreate)[9])+"\n            ")]:void 0}}],null,!0)})],1),e._v(" "),a("paging1",{attrs:{"get-total":e.total1},on:{changePage:e.handleCurrentPage1}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.getAllocatPatrolTask}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"运维人员",visible:e.renyuanDialog},on:{"update:visible":function(t){e.renyuanDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("deviceOperationAdd",{attrs:{showBtnFather:3},on:{getRenyuanIds:e.getRenyuanIds}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"运维设备",visible:e.shebeiDialog},on:{"update:visible":function(t){e.shebeiDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("deviceOperationManagement",{attrs:{showBtnFather:3},on:{getDevIds:e.getDevIds}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"地图",visible:e.mapDialog},on:{"update:visible":function(t){e.mapDialog=t}}},[a("div",{staticClass:"cont_box_left"},[a("mapPoints",{on:{mapOpintsArr:e.mapOpintsArr}})],1)])],1)},staticRenderFns:[]};var m=a("VU/8")(u,d,!1,function(e){a("C/fM")},"data-v-49adf97c",null);t.default=m.exports}});
//# sourceMappingURL=61.6e7132264ed27627c449.js.map