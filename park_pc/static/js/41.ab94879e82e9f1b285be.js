webpackJsonp([41],{EIdi:function(t,e){},f70J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{total:1,isDel:0,canchoe:0,allmoney:0,allmoney2:0,checked:!0,tuifan:!1,tuifan2:!1,tuifan3:!1,tuifan4:!1,tuifan5:!1,cost:"",other1:[],updataVisible:!1,selectArr:[],listLoading:!1,sels:[],checkList:[],inforList:[{houseName:"教育路巡查",tenant:"九耀坊巷005号-九耀坊巷006号-......",phone:"周一/周三/周五 循环",startEnd:"16：30-11：30",rentCost:"2019.12.02",xcy:"李本本，张慧慧",contractTypeName:"启用中",status:0,fbr:"杨经理",rwlx:"月度任务"},{houseName:"北京街道巡查",tenant:"009号-012号-013号-015号......",phone:"2019.12.04",startEnd:"16：30-11：30",rentCost:"未巡查",xcy:"刘小小，周粥",contractTypeName:"启用中",status:0,fbr:"杨经理",rwlx:"月度任务"}],inforList1:[{houseName:"教育路巡查",tenant:"九耀坊巷005号-九耀坊巷006号-......",phone:"周一/周三/周五 循环",startEnd:"16：30-11：30",rentCost:"2019.12.02",xcy:"李本本，张慧慧",contractTypeName:"启用中",status:0,fbr:"杨经理",rwlx:"月度任务"},{houseName:"北京街道巡查",tenant:"009号-012号-013号-015号......",phone:"2019.12.04",startEnd:"16：30-11：30",rentCost:"未巡查",xcy:"刘小小，周粥",contractTypeName:"启用中",status:0,fbr:"杨经理",rwlx:"月度任务"}],checkInfor:{status:0,size:10,current:1},addForm:{usableTime:new Date,costVos:[],badDebtCost:0},indexArr:[],indexArr1:[],houseTemplate:{items:[]},houseTemplate1:{items:[]},houseTemplate2:{items:[]},leaseId:"",sureTF:{costVos:[],leaseId:"",isSend:1},billsConfi:[]}},methods:{getList:function(t){this.checkInfor.status=t,1==t?(this.inforList[0].contractTypeName="停用",this.inforList[1].contractTypeName="过期",this.inforList[1].phone="2019.11.27",this.inforList[1].status=1):1==t?(this.inforList[0].contractTypeName="启用中",this.inforList[1].contractTypeName="启用中",this.inforList[1].phone="2019.12.04",this.inforList[1].status=0):this.inforList[1].status=2},goPage2:function(){this.$router.push({path:"./fangwuxuncha1"})},goRenterRegister:function(){this.$router.push({path:"./addFangwuxuncha"})}},mounted:function(){}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"nav_options"},[a("div",{staticClass:"nav_option",class:{nav_option_active:0==t.checkInfor.status},on:{click:function(e){t.checkInfor.status=0}}},[a("span",[t._v("当前巡查任务")])]),t._v(" "),a("div",{staticClass:"nav_option",class:{nav_option_active:1==t.checkInfor.status},on:{click:function(e){t.checkInfor.status=1}}},[a("span",[t._v("历史巡查任务")])]),t._v(" "),a("div",{staticClass:"nav_option",class:{nav_option_active:2==t.checkInfor.status},on:{click:function(e){t.checkInfor.status=2}}},[a("span",[t._v("收到的巡查任务")])])]),t._v(" "),a("div",{staticClass:"equi"},[a("el-form",{staticClass:"gridContt",attrs:{inline:!0}},[a("el-form",{attrs:{inline:!0}},[2!=t.checkInfor.status?a("el-form-item",{staticClass:"getNm",attrs:{label:"巡查员名称"}},[a("el-input",{attrs:{placeholder:"输入巡查员姓名",size:"small"},model:{value:t.checkInfor.houseName,callback:function(e){t.$set(t.checkInfor,"houseName",e)},expression:"checkInfor.houseName"}})],1):t._e(),t._v(" "),2!=t.checkInfor.status?a("el-form-item",{attrs:{label:"电话号码"}},[a("el-input",{attrs:{placeholder:"输入电话号码",size:"small"},model:{value:t.checkInfor.tenant,callback:function(e){t.$set(t.checkInfor,"tenant",e)},expression:"checkInfor.tenant"}})],1):t._e(),t._v(" "),2==t.checkInfor.status?a("el-form-item",{attrs:{label:"巡查任务"}},[a("el-input",{attrs:{placeholder:"输入巡查任务",size:"small"},model:{value:t.checkInfor.cc,callback:function(e){t.$set(t.checkInfor,"cc",e)},expression:"checkInfor.cc"}})],1):t._e(),t._v(" "),a("el-form-item",{staticClass:"margin0",attrs:{label:"巡查点"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"路",size:"small"}}),t._v("\n          -\n          "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"街",size:"small"}}),t._v("\n          -\n          "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"巷",size:"small"}}),t._v("\n          -\n          "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"号",size:"small"}}),t._v("\n          -\n          "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"之",size:"small"}})],1),t._v(" "),2!=t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"承租人"}},[a("el-input",{attrs:{placeholder:"输入承租人姓名",size:"small"},model:{value:t.checkInfor.creatorName,callback:function(e){t.$set(t.checkInfor,"creatorName",e)},expression:"checkInfor.creatorName"}})],1):t._e(),t._v(" "),2==t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"任务类型"}},[a("el-input",{attrs:{placeholder:"输入任务类型",size:"small"},model:{value:t.checkInfor.bb,callback:function(e){t.$set(t.checkInfor,"bb",e)},expression:"checkInfor.bb"}})],1):t._e(),t._v(" "),2==t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"发布人"}},[a("el-input",{attrs:{placeholder:"输入发布人",size:"small"},model:{value:t.checkInfor.aa,callback:function(e){t.$set(t.checkInfor,"aa",e)},expression:"checkInfor.aa"}})],1):t._e(),t._v(" "),2!=t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"承租人联系方式"}},[a("el-input",{attrs:{placeholder:"输入承租人联系方式",size:"small"},model:{value:t.checkInfor.creatorName,callback:function(e){t.$set(t.checkInfor,"creatorName",e)},expression:"checkInfor.creatorName"}})],1):t._e(),t._v(" "),2!=t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"楼宇档案码"}},[a("el-input",{attrs:{placeholder:"输入数字",size:"small"},model:{value:t.checkInfor.creatorName,callback:function(e){t.$set(t.checkInfor,"creatorName",e)},expression:"checkInfor.creatorName"}})],1):t._e(),t._v(" "),2!=t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"旧门牌"}},[a("el-input",{attrs:{placeholder:"输入数字",size:"small"},model:{value:t.checkInfor.creatorName,callback:function(e){t.$set(t.checkInfor,"creatorName",e)},expression:"checkInfor.creatorName"}})],1):t._e(),t._v(" "),a("el-form",[2!=t.checkInfor.status?a("el-form-item",{staticClass:"margin0",attrs:{label:"状态"}},[a("el-radio-group",{staticClass:"width333",model:{value:t.checkInfor.leaseStatus,callback:function(e){t.$set(t.checkInfor,"leaseStatus",e)},expression:"checkInfor.leaseStatus"}},[a("el-radio",{attrs:{label:"1"}},[t._v("启用中 ")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("停用 ")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("过期 ")])],1)],1):t._e()],1),t._v(" "),a("el-form",[a("el-form-item",{attrs:{size:"small",label:"时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"开始日期"},model:{value:t.checkInfor.startTime,callback:function(e){t.$set(t.checkInfor,"startTime",e)},expression:"checkInfor.startTime"}})],1),t._v(" "),a("el-form-item",{attrs:{size:"small",label:"至"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"结束时间"},model:{value:t.checkInfor.endTime,callback:function(e){t.$set(t.checkInfor,"endTime",e)},expression:"checkInfor.endTime"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.getList(t.checkInfor.status),t.checkInfor.current=1,t.isDel=t.checkInfor.isDel}}},[t._v("查询")])],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){}}},[t._v("重置")])],1)],1),t._v(" "),a("el-form",{staticStyle:{"margin-top":"20px"},attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"medium"},on:{click:t.goRenterRegister}},[t._v("新增巡查任务")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"show",rawName:"v-show",value:2!=t.checkInfor.status,expression:"checkInfor.status!=2  "}],staticStyle:{width:"100%"},attrs:{data:t.inforList}},[a("el-table-column",{attrs:{prop:"houseName",label:"巡查任务"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tenant",label:"路线",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"日期",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"startEnd",label:"时间段"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rentCost",label:"最近巡查时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"xcy",label:"巡查员"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contractTypeName",label:"状态"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row.status?a("el-button",{attrs:{size:"small"}},[t._v("停用")]):t._e(),t._v(" "),1!=e.row.status?a("el-button",{attrs:{size:"small"}},[t._v("修改")]):t._e(),t._v(" "),a("el-button",{attrs:{size:"small"}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:t.goPage2}},[t._v("巡查记录")])]}}])})],1),t._v(" "),a("el-table",{directives:[{name:"show",rawName:"v-show",value:2==t.checkInfor.status,expression:"checkInfor.status==2"}],staticStyle:{width:"100%"},attrs:{data:t.inforList1}},[a("el-table-column",{attrs:{prop:"houseName",label:"巡查任务"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tenant",label:"路线",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rwlx",label:"任务类型",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rentCost",label:"最近巡查时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fbr",label:"发布人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contractTypeName",label:"状态"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row.status?a("el-button",{attrs:{size:"small"}},[t._v("停用")]):t._e(),t._v(" "),1!=e.row.status?a("el-button",{attrs:{size:"small"}},[t._v("修改")]):t._e(),t._v(" "),a("el-button",{attrs:{size:"small"}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:t.goPage2}},[t._v("巡查记录")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"paginationt",attrs:{span:24}},[a("el-pagination",{staticClass:"pagination",attrs:{layout:"prev, pager, next","page-size":10,"page-count":t.total},on:{"current-change":function(t){}}})],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(s,l,!1,function(t){a("EIdi")},"data-v-74150d50",null);e.default=r.exports}});
//# sourceMappingURL=41.ab94879e82e9f1b285be.js.map