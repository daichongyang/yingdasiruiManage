webpackJsonp([16],{"3drp":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=n("bOdI"),o=n.n(s),i=n("qKdJ"),l={data:function(){var t;return t={isActive:1,total:1,inforList:[],formData1:[],pages:1,apartmentId:"",formSearch:{current:1,size:10},addORupdate:0,addFormVisible1:!1,addDialog:!1,selectArr:[],getGateWayList:[],sels:[],listLoading:!1},o()(t,"sels",[]),o()(t,"inforList2",{}),o()(t,"checkList",[]),o()(t,"checkInfor",{msgType:0,size:10,current:1}),o()(t,"addForm",{apartmentName:"",linkman:"",phone:"",createTime:"",comment:"",remark:""}),o()(t,"pushInfor",{}),o()(t,"noRead",{}),o()(t,"path","ws://192.168.0.142:8082/park/ist?appId="+sessionStorage.getItem("Authorization")),o()(t,"socket",""),t},methods:(a={getupdaalltedata:function(){var t=this,e=[];this.deleBatch.forEach(function(n){if(3!=n.status)return t.$message("只能勾选派单中的对象"),!1;e.push(n.id)}),0!=e.length&&Object(i._97)(e).then(function(e){console.log(e),200==e.data.code?(t.$message("操作成功"),t.getList()):t.$message("操作失败")})},getJobgoesList:function(t){var e=this;this.pushInfor.id=t,this.addDialog=!0;Object(i._58)({size:1,current:10}).then(function(t){console.log(t),200==t.data.code&&(e.formData1=t.data.data)})},addList:function(){var t=this;Object(i._100)(this.pushInfor).then(function(e){console.log(e),200==e.data.code?(t.$message("派单成功"),t.getList()):t.$message("派单失败")}),this.addDialog=!1},init:function(){"undefined"==typeof WebSocket?alert("您的浏览器不支持socket"):(this.socket=new WebSocket(this.path),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage)},open:function(){console.log("socket连接成功")},error:function(){console.log("连接错误")},getMessage:function(t){console.log(t),this.inforList2=JSON.parse(t.data),this.open(),console.log(this.inforList2)},send:function(){this.socket.send("liyu")},close:function(){console.log("socket已经关闭")},changeActive:function(t){this.isActive=t},getList:function(){var t=this;Object(i._90)(this.formSearch).then(function(e){console.log(e),200==e.data.code?(t.inforList=e.data.data.records.filter(function(t){return t}),t.total=e.data.data.total):t.$message(e.data.msg)})},handleSelectionChange:function(t,e){this.deleBatch=t,console.log(this.deleBatch)},updateShowBox:function(t){var e=this,n=[];t?n.push(t):0!=this.deleBatch.length&&this.deleBatch.filter(function(t){return n.push(t.id),t}),this.$confirm("确认受理案件吗？").then(function(t){Object(i._113)(n).then(function(t){console.log(t),200==t.data.code&&(e.$message("受理成功"),e.getList())})}).catch(function(t){})},useqrcode:function(){this.QueryDetail="shdak";var t=document.getElementById("canvas");QRCode.toCanvas(t,this.QueryDetail,function(t){t&&console.error(t),console.log("success!")})},handleCurrentChange:function(t){this.checkInfor.current=t,this.getList(this.checkInfor.msgType)},changeHouseList:function(t){var e=this,n={apartmentId:this.apartmentId,current:t};console.log(n),assignList(n).then(function(t){console.log(t),200===t.data.code&&(e.houseAssignList=t.data.data.records)})}},o()(a,"open",function(){var t='<div style="width:250px;"><div style="display:flex;align-items: center;justify-content: space-between;"><span>'+this.inforList2.type==1?"sos报警":(this.inforList2.type,"未知");this.inforList2.gmtCreate,this.$notify({title:"报警",dangerouslyUseHTMLString:!0,duration:0,position:"bottom-right",message:t})}),o()(a,"selsChange",function(t){this.sels=t.filter(function(t){if(1!==t.isExist)return t})}),a),mounted:function(){this.getList(),this.init()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modlude"},[n("div",{staticClass:"nav_options",staticStyle:{"margin-bottom":"20px"}},[n("div",{staticClass:"nav_option",class:{nav_option_active:1==t.isActive},on:{click:function(e){return t.changeActive(1)}}},[n("el-badge",{staticClass:"item",attrs:{value:t.noRead.financeNum,max:99}},[n("span",{staticClass:"txt"},[t._v("报警信息")])])],1),t._v(" "),n("div",{staticClass:"nav_option",class:{nav_option_active:2==t.isActive},on:{click:function(e){return t.changeActive(2)}}},[n("span",[t._v("公告通知")])]),t._v(" "),n("div",{staticClass:"nav_option",class:{nav_option_active:3==t.isActive},on:{click:function(e){return t.changeActive(3)}}},[n("span",[t._v("支付信息")])]),t._v(" "),n("div",{staticClass:"nav_option",class:{nav_option_active:4==t.isActive},on:{click:function(e){return t.changeActive(4)}}},[n("span",[t._v("服务信息")])])]),t._v(" "),1==t.isActive?n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.inforList,stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.gmtCreate?[t._v("\n            "+t._s(t.$root.getDateArray(e.row.gmtCreate)[9])+"\n            ")]:void 0}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"",label:"修改时间"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.gmtModified?[t._v("\n                "+t._s(t.$root.getDateArray(e.row.gmtModified)[9])+"\n            ")]:void 0}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"latitude",label:"纬度"}}),t._v(" "),n("el-table-column",{attrs:{prop:"longitude",label:"经度"}}),t._v(" "),n("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),n("el-table-column",{attrs:{prop:"score",label:"评论"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"报警人姓名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"报警人手机号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(1==e.row.status?"未处理":2==e.row.status?"处理中":3==e.row.status?"派单处理中":"处理完成")+"\n            ")]}}],null,!1,3906510753)}),t._v(" "),n("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(n){return t.updateShowBox(e.row.id)}}},[t._v("处理")]):t._e(),t._v(" "),2==e.row.status?n("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(n){return t.getJobgoesList(e.row.id)}}},[t._v("派单")]):t._e()]}}],null,!1,2359828528)})],1):t._e(),t._v(" "),n("el-col",{staticClass:"paginationt",attrs:{span:24}},[n("el-pagination",{staticClass:"pagination",attrs:{layout:"prev, pager, next","page-size":10,"page-count":t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),n("div",[1==t.isActive?n("el-button",{attrs:{type:"warning",size:"small"},on:{click:t.getupdaalltedata}},[t._v("确认完成")]):t._e()],1),t._v(" "),t._m(0),t._v(" "),n("el-dialog",{attrs:{title:"派单派工作人员",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[n("div",{staticClass:"cont_box_left"},[n("el-form",{attrs:{"label-position":"right","label-width":"110px"}},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.formData1,height:"300"}},[n("el-table-column",{attrs:{width:"55",label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-radio",{attrs:{label:e.row.id},model:{value:t.pushInfor.managerid,callback:function(e){t.$set(t.pushInfor,"managerid",e)},expression:"pushInfor.managerid"}},[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"电话号码"}}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"地址"}}),t._v(" "),n("el-table-column",{attrs:{prop:"",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                      "+t._s(1==e.row.sex?"男":2==e.row.sex?"女":"未知")+"\n                    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"",label:"是否离职"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                      "+t._s(1==e.row.sex?"是":"否")+"\n                    ")]}}])})],1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"medium "},on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{size:"medium "},on:{click:function(e){return t.addList()}}},[t._v("派单")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"query"}},[e("canvas",{attrs:{id:"canvas"}})])}]};var c=n("VU/8")(l,r,!1,function(t){n("l46J"),n("kvSA")},"data-v-5fc6594c",null);e.default=c.exports},kvSA:function(t,e){},l46J:function(t,e){}});
//# sourceMappingURL=16.661f15f4ad7b881ee880.js.map