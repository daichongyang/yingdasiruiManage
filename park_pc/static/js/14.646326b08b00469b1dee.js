webpackJsonp([14],{"+QL2":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{billsItemDetail:"",headIcon:"",total:1,addFormVisible:!1,updataVisible:!1,listLoading:!1,sels:[],checkList:[],inforList:[{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"0.01",paymentType:"支付宝转账",billTime:"2019-12-31 17:48:58",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311749098633",picture:"",receiptRemark:"",leaseId:285,billsId:2596},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"2.00",paymentType:"支付宝转账",billTime:"2019-12-31 17:48:58",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311749098633",picture:"",receiptRemark:"",leaseId:285,billsId:2596},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"0.01",paymentType:"线上",billTime:"2019-12-31 17:41:32",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311747433892",picture:"",receiptRemark:"",leaseId:285,billsId:2595},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"0.01",paymentType:"现金",billTime:"2019-12-31 17:40:55",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311747006104",picture:"",receiptRemark:"",leaseId:285,billsId:2594},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"2.00",paymentType:"现金",billTime:"2019-12-31 17:40:55",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311747006104",picture:"",receiptRemark:"",leaseId:285,billsId:2594},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"0.01",paymentType:"线上",billTime:"2019-12-31 17:36:18",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311742447927",picture:"",receiptRemark:"",leaseId:285,billsId:2593},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"2.00",paymentType:"线上",billTime:"2019-12-31 17:36:18",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311742447927",picture:"",receiptRemark:"",leaseId:285,billsId:2593},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"2.00",paymentType:"线上",billTime:"2019-12-31 17:28:40",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311735034517",picture:"",receiptRemark:"",leaseId:285,billsId:2591},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"2.00",paymentType:"线上",billTime:"2019-12-31 17:28:40",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311735034517",picture:"",receiptRemark:"",leaseId:285,billsId:2592},{type:1,inOut:1,owner:"阮莎",billType:"游客流水",billsItem:"停车费",billsItemDetail:"停车费",amount:"0.01",paymentType:"线上",billTime:"2019-12-31 17:28:40",trader:null,officeName:"侠盗飞车",verifyStatus:0,receiptNumber:"ZY201912311735034517",picture:"",receiptRemark:"",leaseId:285,billsId:2591}],selectArr:[],checkInfor:{levelItem:0,levelGroup:0,levelCost:0,apartmentId:"",type:"0",current:1,size:10},addForm:{managerId:1,name:"",type:"",apartmentId:""},itemsele1:[],itemsele2:[],itemsele3:[],itemobj:{costId:0},infor:{},updataForm:{},pickerOptions0:{disabledDate:function(e){return e.getTime()>Date.now()-864e4}},detailInfor:{}}},methods:{changeSelect:function(e,t){var l=this,a={costId:e,level:t};console.log(a),itemSelect(a).then(function(a){console.log(a),200==a.data.code?2==t?(l.itemsele2=[],l.checkInfor.levelGroup=0,l.checkInfor.levelCost=0,l.itemsele2=a.data.data):3==t&&(l.itemsele3=[],l.checkInfor.levelCost=0,l.itemsele3=a.data.data,0==e&&(l.checkInfor.levelCost=0)):alert(a.data.msg)})},sverifybusine:function(){var e=this.sels;this.addFormVisible=!1,console.log(this.sels),businessverify(e).then(function(e){console.log(e),200===e.data.code||alert("核销失败")})},reloadCon:function(){location.reload()},addList:function(){this.addForm.apartmentId=this.checkInfor.apartmentId;var e=this.addForm;this.addFormVisible=!1,console.log(e),addProperty(e).then(function(e){console.log(e),200===e.data.code&&alert("添加成功")})},getApartmentList:function(){var e=this;selectApartment().then(function(t){console.log(t),e.selectArr=t.data.data,e.getList()})},changeStyle:function(){this.checkInfor.current=1,this.getList()},getList:function(){var e=this,t=this.checkInfor;console.log(t),businessList(t).then(function(t){console.log(t),200===t.data.code&&(e.infor=t.data.data.records[0]||{},0!==t.data.data.records.length?e.inforList=t.data.data.records[0].billVO.filter(function(e){return e.billsItemDetail&&(e.billsItemDetail=e.billsItemDetail.replace(/\_/g,"/")),0===e.inOut?e.inOut="出账":1===e.inOut&&(e.inOut="进账"),e.billTime=getDateArray(e.billTime)[9],e}):e.inforList=[],e.total=t.data.data.pages)})},changeItem:function(e,t){this.sels=[],this.addFormVisible=!0,this.detailInfor=t;var l={orderNumber:t.receiptNumber,type:t.type};this.sels.push(l),this.billsItemDetail=t.billsItemDetail.split("/")},goaccountDetail:function(e,t){1===t.type?this.$router.push({path:"/accountDetail",query:{leaseId:t.leaseId}}):2===t.type?this.$router.push({path:"/bookingList",query:{leaseId:t.leaseId}}):3===t.type&&this.$router.push({path:"/tallyConfig",query:{leaseId:t.leaseId}})},handleCurrentChange:function(e){this.checkInfor.current=e,this.getList()},selsChange:function(e){this.sels=[],console.log(e);var t=this;e.filter(function(e){if(1!==e.isExist){var l={orderNumber:e.receiptNumber,type:e.type};return t.sels.push(l),e}});console.log(this.sels)}},mounted:function(){this.inforList=this.inforList.filter(function(e){return e.billsItemDetail&&(e.billsItemDetail=e.billsItemDetail.replace(/\_/g,"/")),0===e.inOut?e.inOut="出账":1===e.inOut&&(e.inOut="进账"),e})}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"modlude"},[l("el-form",{staticClass:"gridContt",attrs:{inline:!0}},[l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{size:"small",label:"支付方式"}},[l("el-select",{attrs:{size:"small",placeholder:"输入支付方式"},model:{value:e.checkInfor.paymentType,callback:function(t){e.$set(e.checkInfor,"paymentType",t)},expression:"checkInfor.paymentType"}},[l("el-option",{attrs:{label:"线上",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"现金",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"支付宝转账",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"微信转账",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"银行转账 ",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"POS刷卡",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"其它",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"对私银行卡转账",value:"7"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:"进出账"}},[l("el-select",{attrs:{size:"small",placeholder:"输入进出账"},model:{value:e.checkInfor.inOut,callback:function(t){e.$set(e.checkInfor,"inOut",t)},expression:"checkInfor.inOut"}},[l("el-option",{attrs:{label:"出账",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"进账",value:"1"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:"编号"}},[l("el-input",{attrs:{placeholder:"输入编号",size:"small"},model:{value:e.checkInfor.receiptNumber,callback:function(t){e.$set(e.checkInfor,"receiptNumber",t)},expression:"checkInfor.receiptNumber"}})],1)],1),e._v(" "),l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{size:"small",label:"交易时间"}},[l("el-date-picker",{attrs:{type:"date","picker-options":e.pickerOptions0,placeholder:"开始日期"},model:{value:e.checkInfor.startTime,callback:function(t){e.$set(e.checkInfor,"startTime",t)},expression:"checkInfor.startTime"}})],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:"-"}},[l("el-date-picker",{attrs:{type:"date","picker-options":e.pickerOptions0,placeholder:"结束时间"},model:{value:e.checkInfor.endTime,callback:function(t){e.$set(e.checkInfor,"endTime",t)},expression:"checkInfor.endTime"}})],1)],1),e._v(" "),l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{size:"small",label:"核销时间"}},[l("el-date-picker",{attrs:{type:"date","value-format":"timestamp",placeholder:"开始日期"},model:{value:e.checkInfor.verifyEndTime,callback:function(t){e.$set(e.checkInfor,"verifyEndTime",t)},expression:"checkInfor.verifyEndTime"}})],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:"-"}},[l("el-date-picker",{attrs:{type:"date","value-format":"timestamp",placeholder:"结束时间"},model:{value:e.checkInfor.verifyStartTime,callback:function(t){e.$set(e.checkInfor,"verifyStartTime",t)},expression:"checkInfor.verifyStartTime"}})],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:"核销人员"}},[l("el-input",{attrs:{placeholder:"输入核销人员",size:"small"},model:{value:e.checkInfor.verify,callback:function(t){e.$set(e.checkInfor,"verify",t)},expression:"checkInfor.verify"}})],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:"是否核销"}},[l("el-select",{attrs:{size:"small",placeholder:"是否核销"},model:{value:e.checkInfor.verifyStatus,callback:function(t){e.$set(e.checkInfor,"verifyStatus",t)},expression:"checkInfor.verifyStatus"}},[l("el-option",{attrs:{label:"未核销",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"已核销",value:"1"}})],1)],1)],1)],1),e._v(" "),l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{size:"small",label:"交易项目"}},[l("el-select",{attrs:{size:"small",placeholder:"交易项目"},on:{change:function(t){return e.changeSelect(t,2)}},model:{value:e.checkInfor.levelItem,callback:function(t){e.$set(e.checkInfor,"levelItem",t)},expression:"checkInfor.levelItem"}},[l("el-option",{attrs:{label:"全部",value:0}}),e._v(" "),e._l(e.itemsele1,function(e){return l("el-option",{key:e.costId,attrs:{label:e.item,value:e.costId}})})],2)],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:""}},[l("el-select",{attrs:{size:"small",placeholder:"交易项目",disabled:0==e.checkInfor.levelItem},on:{change:function(t){return e.changeSelect(t,3)}},model:{value:e.checkInfor.levelGroup,callback:function(t){e.$set(e.checkInfor,"levelGroup",t)},expression:"checkInfor.levelGroup"}},[l("el-option",{attrs:{label:"全部",value:0}}),e._v(" "),e._l(e.itemsele2,function(e){return l("el-option",{key:e.costId,attrs:{label:e.item,value:e.costId}})})],2)],1),e._v(" "),l("el-form-item",{attrs:{size:"small",label:""}},[l("el-select",{attrs:{size:"small",placeholder:"交易项目",disabled:0==e.checkInfor.levelGroup},model:{value:e.checkInfor.levelCost,callback:function(t){e.$set(e.checkInfor,"levelCost",t)},expression:"checkInfor.levelCost"}},[l("el-option",{attrs:{label:"全部",value:0}}),e._v(" "),e._l(e.itemsele3,function(e){return l("el-option",{key:e.costId,attrs:{label:e.item,value:e.costId}})})],2)],1)],1),e._v(" "),l("el-form",{staticClass:"marginTop20",attrs:{inline:!0}},[l("el-form-item",{staticClass:"margin0"},[l("el-button",{attrs:{type:"primary",size:"medium"}},[e._v("报表导出")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.getList}},[e._v("查询")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.reloadCon}},[e._v("重置")])],1)],1),e._v(" "),e._m(0),e._v(" "),l("div",{staticClass:"radioBtns",staticStyle:{"margin-left":"10px"}},[l("el-radio",{attrs:{label:"0"},on:{change:e.changeStyle},model:{value:e.checkInfor.type,callback:function(t){e.$set(e.checkInfor,"type",t)},expression:"checkInfor.type"}},[l("span",{staticClass:"title"},[e._v("汇总")]),l("span",{staticClass:"gray"},[e._v("流水以原始进出账形式进行显示")])]),e._v(" "),l("el-radio",{attrs:{label:"1"},on:{change:e.changeStyle},model:{value:e.checkInfor.type,callback:function(t){e.$set(e.checkInfor,"type",t)},expression:"checkInfor.type"}},[l("span",{staticClass:"title"},[e._v("明细")]),l("span",{staticClass:"gray"},[e._v("流水以账单对应关系进行分项显示")])])],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.inforList,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[l("el-table-column",{staticClass:"ccc",attrs:{type:"selection",width:"55",label:"全选"}}),e._v(" "),l("el-table-column",{attrs:{prop:"inOut",label:"进出账"}}),e._v(" "),l("el-table-column",{attrs:{prop:"owner",label:"姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"billType",label:"类型"}}),e._v(" "),l("el-table-column",{attrs:{prop:"billsItem",label:"项目",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{prop:"amount",label:"金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"paymentType",label:"方式"}}),e._v(" "),l("el-table-column",{attrs:{prop:"billTime",label:"收支日期",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{prop:"trader",label:"交易人"}}),e._v(" "),l("el-table-column",{attrs:{prop:"verifyStatus",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0==t.row.verifyStatus?"未核销":"已核销"))]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"receiptNumber",label:"编号"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){return e.changeItem(t.$index,t.row,2)}}},[e._v("详情")]),e._v(" "),3!=t.row.type?l("el-button",{attrs:{size:"small"},on:{click:function(l){return e.goaccountDetail(t.$index,t.row,1)}}},[e._v("查看")]):e._e()]}}])})],1),e._v(" "),l("el-col",{staticClass:"paginationt",attrs:{span:24}},[l("el-pagination",{staticClass:"pagination",attrs:{layout:"prev, pager, next","page-size":10,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),l("el-button",{staticStyle:{"margin-left":"20px","margin-bottom":"20px"},attrs:{type:"primary"},on:{click:e.sverifybusine}},[e._v("批量核销")]),e._v(" "),l("el-dialog",{attrs:{title:"交易详情",visible:e.addFormVisible,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.addFormVisible=t}}},[l("span",{staticClass:"sNumber"},[e._v(e._s(e.detailInfor.receiptNumber))]),e._v(" "),l("el-row",{staticClass:"manageCash"},[l("el-col",{attrs:{span:12}},[l("span",{staticStyle:{"font-size":"24px",color:"#f56336"}},[e._v(e._s(e.detailInfor.amount))]),e._v(" "),l("br"),e._v(" "),l("span",[e._v(e._s(e.detailInfor.inOut)+"(元)")])]),e._v(" "),l("el-col",{attrs:{span:12}},[l("span",[e._v(e._s(e.detailInfor.billTime)+"  "+e._s(e.detailInfor.paymentType))]),e._v(" "),l("br"),e._v(" "),l("span",[e._v(e._s(e.detailInfor.owner))])])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("交易类型：")]),e._v(" "),l("el-col",{attrs:{span:20}},[e._v(e._s(e.detailInfor.billType))])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("交易项目：")]),e._v(" "),l("el-col",{attrs:{span:20}},e._l(e.billsItemDetail,function(t){return l("div",{key:t},[e._v(e._s(t))])}),0)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("交易人：")]),e._v(" "),l("el-col",{attrs:{span:20}},[e._v(e._s(e.detailInfor.tenant))])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("交易状态：")]),e._v(" "),l("el-col",{attrs:{span:20}},[e._v(e._s(e.detailInfor.verifyStatus))])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("凭证编号：")]),e._v(" "),l("el-col",{attrs:{span:20}},[e._v(e._s(e.detailInfor.receiptNumber))])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("凭证图片：")]),e._v(" "),l("el-col",{attrs:{span:20}},[l("img",{attrs:{src:e.detailInfor.picture,alt:""}})])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("备注：")]),e._v(" "),l("el-col",{attrs:{span:20}},[e._v(e._s(e.detailInfor.receiptRemark))])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[e._v("创建时间：")]),e._v(" "),l("el-col",{attrs:{span:20}},[e._v(e._s(e.detailInfor.creatTime))])],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[0==e.detailInfor.verifyStatus?l("el-button",{nativeOn:{click:function(t){return e.sverifybusine(t)}}},[e._v("核销")]):e._e(),e._v(" "),l("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"statistics"},[l("span",{staticClass:"s-inner"},[l("i"),e._v("\n        进出账合计\n        "),l("span",{staticClass:"num"},[e._v("352.52")]),e._v("\n        元\n        "),l("span",{staticClass:"gray"},[e._v("（542 笔，待核销107笔）")])]),e._v(" "),l("span",{staticClass:"s-inner"},[l("i"),e._v("\n        进账合计\n        "),l("span",{staticClass:"num"},[e._v("598.30")]),e._v("\n        元\n        "),l("span",{staticClass:"gray"},[e._v("（490 笔，待核销66笔）")])]),e._v(" "),l("span",{staticClass:"s-inner"},[l("i"),e._v("\n        出账合计\n        "),l("span",{staticClass:"num"},[e._v("-245.78")]),e._v("\n        元\n        "),l("span",{staticClass:"gray"},[e._v(" （52 笔，待核销41笔）")])])])}]};var s=l("VU/8")(a,i,!1,function(e){l("P3Rw"),l("aIxE")},"data-v-69ce201a",null);t.default=s.exports},P3Rw:function(e,t){},aIxE:function(e,t){}});
//# sourceMappingURL=14.646326b08b00469b1dee.js.map