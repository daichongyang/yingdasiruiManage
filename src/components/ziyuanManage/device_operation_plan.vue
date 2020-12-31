<template>
  <section class="modlude">
    <!-- <el-form :inline="true" :model="formSearch" class="form_inline" label-width="80px">

      <el-form-item label="公园名称" size="small">
        <el-input v-model="formSearch.name" placeholder="请输入房间名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button size="small" @click="getInit">查 询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="showAdd">添 加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="danger" @click="deleInfor(false)">批量删除</el-button>
      </el-form-item>
    </el-form> -->
    <searchModule  @muchDeleteType="getMuchDeleteType" @searchInfor="getSearchInfor" @addTotrue="getAddTotrue" :formSearch="formSearch" :formItems="formItems" :showAddBtn="showAddBtn" :showDelBtn="showDelBtn"></searchModule>
    <el-table ref="multipleTable" :data="formData" style="width: 100%" stripe @select="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name"label="名称"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="content" label="维修内容" v-if="yunweitype == 3"></el-table-column>
      <el-table-column prop="duration" label="间隔时间" v-if="yunweitype == 1||yunweitype == 4"></el-table-column>
      <el-table-column prop="numStaff" label="运维人数"></el-table-column>
      <el-table-column prop="type" label="任务类型">
        <template slot-scope="scope">
          {{scope.row.type==1?"设备运维任务":scope.row.type==2?"手动运维计划":scope.row.type==3?"报修工单":scope.row.type==4?"巡查计划":'报警处理'}}
        </template>
      </el-table-column>

      <el-table-column prop="durationType" label="循环类型" v-if="yunweitype == 1||yunweitype == 4">
        <template slot-scope="scope" v-if="scope.row.durationType">
          {{scope.row.durationType==1?"小时":scope.row.durationType==2?"天":scope.row.durationType==3?"月":"年"}}
        </template>
      </el-table-column>
      <el-table-column prop="patrolDate" label="运维开始时间" v-if="yunweitype == 1||yunweitype == 4">
        <template slot-scope="scope" v-if="scope.row.patrolDate">
          {{$root.getDateArray(Number(scope.row.patrolDate))[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="startTime" label="开始时间" v-if="yunweitype == 2||yunweitype == 3||yunweitype == 5">
        <template slot-scope="scope" v-if="scope.row.startTime">
          {{$root.getDateArray(Number(scope.row.startTime))[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="endTime" label="结束时间" v-if="yunweitype == 2||yunweitype == 3||yunweitype == 5">
        <template slot-scope="scope" v-if="scope.row.endTime">
          {{$root.getDateArray(Number(scope.row.endTime))[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="gmtModified" label="修改时间">
        <template slot-scope="scope" v-if="scope.row.gmtModified">
          {{$root.getDateArray(Number(scope.row.gmtModified))[9]}}
        </template>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="创建时间">
        <template slot-scope="scope" v-if="scope.row.gmtCreate">
          {{$root.getDateArray(scope.row.gmtCreate)[9]}}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width=180>
				<template slot-scope="scope">
        <el-dropdown>
          <el-button size="small">
            更多操作<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updateShowBox(scope.row),updateDialog = true">修 改</el-dropdown-item>
            <el-dropdown-item @click.native="deleInfor(scope.row.id)">停 用</el-dropdown-item>
            <!-- <el-dropdown-item @click.native="getOperationConfirm(scope.row)">人员接单</el-dropdown-item> -->
            <el-dropdown-item @click.native="formSearch1.infoId=scope.row.id,taskDialog=true,getGetAvailableStaff()">手动分配任务</el-dropdown-item>
            <el-dropdown-item @click.native="getGetPatrolDetails(scope.row.id),detailsDialog=true">查看详情</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
				</template>
			</el-table-column>
    </el-table>
    <paging @changePage = handleCurrentPage :get-total='total'></paging>
    <!-- 添加 -->
    <el-dialog title="增加运维人员" :visible.sync="addDialog">
      <div class="cont_box_left">
        <el-form label-position="right" label-width="110px" :model="formPush" :rules="rules"  ref='addList'>
          <el-form-item label="名称" prop="name">
           <el-input v-model="formPush.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="formPush.phone"></el-input>
          </el-form-item>
          <!-- <el-form-item label="任务类型">
            <el-select v-model="yunweitype" @change="changeType">
              <el-option label="设备运维任务" :value="1"></el-option>
              <el-option label="手动运维计划" :value="2"></el-option>
              <el-option label="维修工单" :value="3"></el-option>
              <el-option label="巡查任务" :value="4"></el-option>
              <el-option label="报警受理" :value="5"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="设备" v-if="yunweitype == 1||yunweitype == 2||yunweitype == 3">
            <el-input v-model="devNames" :disabled="true"></el-input>
            <el-button size="mini" @click="shebeiDialog = true">选 择</el-button>
            <!-- <el-input v-model="formPush.devIds"></el-input> -->
          </el-form-item>
          <el-form-item label="运维人员" v-if="yunweitype == 2||yunweitype == 4||yunweitype == 5">
            <el-input v-model="reyuanNames"></el-input>
            <el-button size="mini" @click="renyuanDialog = true">选 择</el-button>
          </el-form-item>
          <el-form-item label="运维人员人数" v-if="yunweitype == 1">
            <el-input v-model="formPush.numStaff"></el-input>
          </el-form-item>
          <el-form-item label="地图点位" v-if="yunweitype == 4">
            <el-input v-model="mapOpints"></el-input>
            <el-button size="mini" @click="mapDialog = true">选 择</el-button>
          </el-form-item>
          <el-form-item label="报警人姓名" v-if="yunweitype == 5">
            <el-input v-model="baojingName"></el-input>
            <el-button size="mini" @click="getsosQuery(),baojingDialog = true">选 择</el-button>
          </el-form-item>
          <el-form-item label="运维任务时间" v-if="yunweitype == 1||yunweitype == 4">
            <el-date-picker
              v-model="formPush.patrolDate"
              type="datetime"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="循环间隔时间" v-if="yunweitype == 1||yunweitype == 4">
            <el-input v-model="formPush.duration	"></el-input>
          </el-form-item>
          <el-form-item label="循环类型" v-if="yunweitype == 1||yunweitype == 4">
            <el-select v-model="formPush.durationType">
              <el-option label="小时" :value="1"></el-option>
              <el-option label="天" :value="2"></el-option>
              <el-option label="月" :value="3"></el-option>
              <el-option label="年" :value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="维修描述" v-if="yunweitype == 3">
            <el-input v-model="formPush.content" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          </el-form-item>
          <el-form-item label="开始时间" v-if="yunweitype == 2||yunweitype == 3||yunweitype == 5">
            <el-date-picker
              v-model="formPush.startTime"
              type="datetime"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间" v-if="yunweitype == 2||yunweitype == 3||yunweitype == 5">
            <el-date-picker
              v-model="formPush.endTime"
              type="datetime"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="图片" v-if="yunweitype == 3">
            <el-upload
              :action="uploadToRealPath"
              list-type="picture-card"
              :headers='headers'
              :on-success="handlepicsSuccess"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium " @click="addDialog = false">取 消</el-button>
        <el-button size="medium " @click="addList('addList')">新 增</el-button>
      </div>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog title="修改" :visible.sync="updateDialog">
      <div class="cont_box_left">
        <el-form label-position="right" :rules="rules" label-width="110px" :model="formUpdate" ref='formUpdate'>
         <el-form-item label="名称" prop="name">
           <el-input v-model="formUpdate.name"></el-input>
          </el-form-item>
          <!-- <el-form-item label="手机号" prop="phone">
            <el-input v-model="formUpdate.phone"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="任务类型">
            <el-select v-model="yunweitype">
              <el-option label="设备运维任务" :value="1"></el-option>
              <el-option label="手动运维计划" :value="2"></el-option>
              <el-option label="维修工单" :value="3"></el-option>
              <el-option label="巡查任务" :value="4"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="设备" v-if="yunweitype == 1||yunweitype == 2||yunweitype == 3">
            <el-input v-model="devNames"></el-input>
            <el-button size="mini" @click="shebeiDialog = true">选 择</el-button>
          </el-form-item>
          <el-form-item label="运维人员" v-if="yunweitype == 2||yunweitype == 4||yunweitype == 5">
            <el-input v-model="reyuanNames"></el-input>
            <el-button size="mini" @click="renyuanDialog = true">选 择</el-button>
          </el-form-item>
          <el-form-item label="报警人姓名" v-if="yunweitype == 5">
            <el-input v-model="baojingName"></el-input>
            <el-button size="mini" @click="getsosQuery(),baojingDialog = true">选 择</el-button>
          </el-form-item>
          <el-form-item label="运维人员人数" v-if="yunweitype == 1">
            <el-input v-model="formUpdate.numStaff"></el-input>
          </el-form-item>
          <el-form-item label="运维任务时间" v-if="yunweitype == 1||yunweitype == 4">
            <el-date-picker
              v-model="formUpdate.patrolDate"
              type="datetime"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="循环间隔时间" v-if="yunweitype == 1||yunweitype == 4">
            <el-input v-model="formUpdate.duration	"></el-input>
          </el-form-item>
          <el-form-item label="循环类型" v-if="yunweitype == 1||yunweitype == 4">
            <el-select v-model="formUpdate.durationType">
              <el-option label="小时" :value="1"></el-option>
              <el-option label="天" :value="2"></el-option>
              <el-option label="月" :value="3"></el-option>
              <el-option label="年" :value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="维修描述" v-if="yunweitype == 3">
            <el-input v-model="formUpdate.content" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          </el-form-item>
          <el-form-item label="开始时间" v-if="yunweitype == 2||yunweitype == 3||yunweitype == 5">
            <el-date-picker
              v-model="formUpdate.startTime"
              type="datetime"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间" v-if="yunweitype == 2||yunweitype == 3||yunweitype == 5">
            <el-date-picker
              v-model="formUpdate.endTime"
              type="datetime"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="图片" v-if="yunweitype == 3">
          <el-upload
            :action="uploadToRealPath"
            list-type="picture-card"
            :headers='headers'
            :on-success="handlepicsSuccess"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="updateDialog = false">取 消</el-button>
        <el-button size="medium" @click="updateList('formUpdate')">确定</el-button>
      </div>
    </el-dialog>
    <!-- 详情 -->
    <el-dialog title="详情" :visible.sync="detailsDialog">
      <div class="cont_box_left">
        <el-table ref="multipleTable" :data="formData2" style="width: 100%">
          <el-table-column prop="taskName"label="名称"></el-table-column>
          <el-table-column prop="infoStatus"label="任务状态">
            <template slot-scope="scope">
              {{scope.row.infoStatus==1?"待确认接单":scope.row.infoStatus==2?"已接单":scope.row.infoStatus==3?"完成":'已取消'}}
            </template>
          </el-table-column>
          <el-table-column prop="isExpired"label="是否已过期">
            <template slot-scope="scope">
              {{scope.row.isExpired==1?"是":'否'}}
            </template>
          </el-table-column>
          <el-table-column prop="isDel"label="是否已删除">
            <template slot-scope="scope">
              {{scope.row.isDel==1?"是":'否'}}
            </template>
          </el-table-column>
          <el-table-column prop="type" label="任务类型">
            <template slot-scope="scope">
              {{scope.row.type==1?"设备运维任务":scope.row.type==2?"手动运维计划":scope.row.type==3?"报修工单":scope.row.type==4?"不接单":'已完成'}}
            </template>
          </el-table-column>
          <el-table-column prop="type" label="任务类型">
            <template slot-scope="scope">
              {{scope.row.type==1?"待接单":scope.row.type==2?"已接单":scope.row.type==3?"已取消":scope.row.type==4?"巡查计划":scope.row.type==5?"报警处理":'其它'}}
            </template>
          </el-table-column>
          <el-table-column prop="devNames1" label="设备列表" v-if="yunweitype==1||yunweitype==2"></el-table-column>
          <el-table-column prop="address" label="任务地址" v-if="yunweitype==4"></el-table-column>
          <el-table-column prop="pics1" label="报修工单照片" v-if="yunweitype==3"></el-table-column>
          <el-table-column prop="points1" label="巡查点位" v-if="yunweitype==4"></el-table-column>
          <el-table-column prop="staffs1" label="处理人员"></el-table-column>
          <el-table-column prop="offList1" label="运维人员请假情况" v-if="yunweitype==1"></el-table-column>
          <el-table-column prop="outcome1" label="运维检查结果"></el-table-column>
          <el-table-column prop="gmtModified" label="修改时间">
            <template slot-scope="scope" v-if="scope.row.gmtModified">
              {{$root.getDateArray(Number(scope.row.gmtModified))[9]}}
            </template>
          </el-table-column>

          <el-table-column prop="startTime" label="任务开始" v-if="yunweitype==2||yunweitype==3||yunweitype==5">
            <template slot-scope="scope" v-if="scope.row.startTime">
              {{$root.getDateArray(Number(scope.row.startTime))[9]}}
            </template>
          </el-table-column>
          <el-table-column prop="endTime" label="任务结束" v-if="yunweitype==2||yunweitype==3||yunweitype==5">
            <template slot-scope="scope" v-if="scope.row.endTime">
              {{$root.getDateArray(Number(scope.row.endTime))[9]}}
            </template>
          </el-table-column>
          <el-table-column prop="gmtCreate" label="创建时间">
            <template slot-scope="scope" v-if="scope.row.gmtCreate">
              {{$root.getDateArray(Number(scope.row.gmtCreate))[9]}}
            </template>
          </el-table-column>
        </el-table>
        <paging2 @changePage = handleCurrentPage2 :get-total='total2'></paging2>
      </div>
    </el-dialog>
    <!-- 报警 -->
    <el-dialog title="报警" :visible.sync="baojingDialog">
      <div class="cont_box_left">
        <el-table :data="formData3" style="width: 100% height:300px;">
          <el-table-column prop="" label="编号">
              <template slot-scope="scope">
                <el-radio @change="baojingName=scope.row.nickname" v-model="formPush.alarmId" :label="scope.row.id">{{scope.row.id}}</el-radio>
              </template>
          </el-table-column>
          <el-table-column prop="" label="创建时间">
              <template slot-scope="scope" v-if="scope.row.gmtCreate">
              {{$root.getDateArray(scope.row.gmtCreate)[9]}}
              </template>
          </el-table-column>
          <el-table-column prop="" label="修改时间">
              <template slot-scope="scope" v-if="scope.row.gmtModified">
                  {{$root.getDateArray(scope.row.gmtModified)[9]}}
              </template>
          </el-table-column>
          <el-table-column prop="latitude" label="纬度"></el-table-column>
          <el-table-column prop="longitude" label="经度"></el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column prop="score" label="评论"></el-table-column>
          <el-table-column prop="nickname" label="报警人姓名"></el-table-column>

          <el-table-column prop="phone" label="报警人手机号"></el-table-column>
          <el-table-column prop="status" label="状态">
              <template slot-scope="scope">
                  {{scope.row.status==1?"未处理":scope.row.status==2?"处理中":scope.row.status==3?"派单处理中":"处理完成"}}
              </template>
          </el-table-column>
        </el-table>
        <paging3 @changePage = handleCurrentPage3 :get-total='total3'></paging3>
      </div>
    </el-dialog>
    <!-- 手动分配运维任务给某人 -->
    <el-dialog title="手动分配运维任务" :visible.sync="taskDialog">
      <div class="cont_box_left">
        <el-table ref="multipleTable" :data="formData1" style="width: 100%" stripe @select="handleSelectionChange1">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name"label="名称"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="content" label="维修内容"></el-table-column>
          <el-table-column prop="duration" label="间隔时间"></el-table-column>
          <el-table-column prop="numStaff" label="运维人数"></el-table-column>
          <el-table-column prop="type" label="任务类型">
            <template slot-scope="scope">
              {{scope.row.type==1?"设备运维任务":scope.row.type==2?"手动运维计划":"巡查任务"}}
            </template>
          </el-table-column>

          <el-table-column prop="durationType" label="循环类型">
            <template slot-scope="scope">
              {{scope.row.durationType==1?"小时":scope.row.durationType==2?"天":scope.row.durationType==3?"月":"年"}}
            </template>
          </el-table-column>
          <el-table-column prop="gmtModified" label="修改时间">
            <template slot-scope="scope" v-if="scope.row.gmtModified">
              {{$root.getDateArray(Number(scope.row.gmtModified))[9]}}
            </template>
          </el-table-column>
          <el-table-column prop="gmtCreate" label="创建时间">
            <template slot-scope="scope" v-if="scope.row.gmtCreate">
              {{$root.getDateArray(scope.row.gmtCreate)[9]}}
            </template>
          </el-table-column>
        </el-table>
        <paging1 @changePage = handleCurrentPage1 :get-total='total1'></paging1>
        <el-button size="small" type="primary" @click="getAllocatPatrolTask">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 运维人员 -->
    <el-dialog title="运维人员" :visible.sync="renyuanDialog">
      <div class="cont_box_left">
        <deviceOperationAdd @getRenyuanIds="getRenyuanIds" :showBtnFather="3" ></deviceOperationAdd>
      </div>
    </el-dialog>
    <!-- 运维设备 -->
    <el-dialog title="运维设备" :visible.sync="shebeiDialog">
      <div class="cont_box_left">
        <deviceOperationManagement @getDevIds="getDevIds" :showBtnFather="3" ></deviceOperationManagement>
      </div>
    </el-dialog>
    <!-- 地图 -->
    <el-dialog title="地图" :visible.sync="mapDialog">
      <div class="cont_box_left">
        <mapPoints @mapOpintsArr="mapOpintsArr" ></mapPoints>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import paging from '../paging'
import paging1 from '../paging'
import paging2 from '../paging'
import paging3 from '../paging'
import searchModule from '../searchModule'
import mapPoints from './mapPoints'
import deviceOperationAdd from './device_operation_add'
import deviceOperationManagement from './device_operation_management'
import { sosQuery,getTask,addTask,editTask,pauseTask,allocatPatrolTask,getPatrolDetails,operationConfirm,getAvailableStaff} from '../../url/api.js';
export default {
  data(){
    return{
      uploadToRealPath:'/park/upload/file/upload',
      headers:{
        Authorization:sessionStorage.getItem('Authorization'),
        token:sessionStorage.getItem('token')
      },
      imageUrl:'',
      yunweitype:1,
      baojingName:'', 
      showBtnFather:3,
      baojingDialog:false,
      mapDialog:false,
      shebeiDialog:false,
      detailsDialog:false,
      showAddBtn:true,//显示添加按钮
      showDelBtn:false,//显示批量删除按钮
      renyuanDialog:false,
      formItems:{//搜索模块label
        formItemsArr:[
          {
            name:'创建时间',
            filed:"startTime",
            type:'datePicker'
          },
          {
            name:'姓名',
            filed:"name",
            type:'text'
          },
          {
            name:'是否已删除',
            filed:"isDel",
            type:'radio',
            options:[
              {
                label:"",
                name:"全部"
              },
              {
                label:1,
                name:"是"
              },
              {
                label:0,
                name:'否'
              }
            ]
          },
          // {
          //   name:'任务类型',
          //   filed:"type",
          //   options:[
          //     {
          //       label:'设备运维任务',
          //       value:1
          //     },
          //     {
          //       label:'手动运维计划',
          //       value:2
          //     },
          //     {
          //       label:'报修工单',
          //       value:3
          //     },
          //     {
          //       label:'巡查任务',
          //       value:4
          //     },
          //     {
          //       label:'报警受理',
          //       value:5
          //     },
          //   ],
          //   type:'select'
          // }
        ],
        labelWidth:'90px'
      },
      deleBatch:[],
      mapOpints:'',
      deleBatch1:[],
      formSearch:{//查询条件
        current:1,
        type:1,
        size: 10
      },
      formSearch1:{//查询条件
        current:1,
        size: 10
      },
      formSearch2:{//查询条件
        current:1,
        size: 10
      },
      formSearch3:{//查询条件
        current:1,
        size: 10
      },
      formPush:{//信息提交
        type:1
      },//表单提交
      formData: [],//数据
      formData1: [],//数据
      formData2: [],//数据
      formData3: [],//数据
      formUpdate:{},//修改表单
      total: 0,//数据总数
      total1: 0,//数据总数
      total2: 0,//数据总数
      total3: 0,//数据总数
      addDialog:false,
      updateDialog:false,
      rules: {
        name:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        department:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        address:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        idNumber:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        phone:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        title:[{ required: true, message: '该项不能为空',trigger: 'blur'}],
        type:[{ required: true, message: '该项不能为空',trigger: 'change'}],
      },
      infoId:'',
      markerObj:'',
      reyuanNames:'',
      devNames:'',
      offList	:'',
      outcome:'',
      pics:'',
      point:'',
      staffs:'',
      taskDialog:false
    }
  },
  methods:{
    // getOperationConfirm(){//运维人员接单
    //   this.$confirm('确定要该人员接单吗？')
    //   .then(_ => {
    //     let params = {
    //       infoId:row.id,
    //       phone:row.phone,
    //     }
    //     operationConfirm(params).then(res=>{
    //       console.log(res)
    //       if(res.data.code == 200){
    //         this.$message('操作成功');
    //       }
    //     })
    //   })
    //   .catch(_ => {});

    // },
    getsosQuery(){
      let params = this.formSearch3
      sosQuery(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.formData3=res.data.data.records
          this.total3=res.data.data.total
        }
      })
    },
    changeType(val){//改变任务类型
      console.log(val)
      this.formPush={}
      this.yunweitype=val
    },
    getGetAvailableStaff(){//获取任务可分配的运维人员列表
      let params = this.formSearch1
      getAvailableStaff(params).then(res=>{

        if(res.data.code == 200){
          this.formData1 = res.data.data.records
          this.total1 = res.data.data.total
        }
      })
    },
    mapOpintsArr(val){//地图点位信息
      this.mapOpints=''
      this.formPush.points = val
      if(val.length!=0){
        val.forEach(item=>{
          this.mapOpints = item.name+","+this.mapOpints
        })
      }
      this.mapDialog=false
    },
    getGetPatrolDetails(id){//后台调用：运维详情
    console.log(id)
      this.formSearch2.taskId = id
      let params = this.formSearch2
      getPatrolDetails(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.formData2 = res.data.data.records.filter(item=>{
            if(item.devices){
              item.devNames1 = ''
              item.devices.forEach(ii=>{
                item.devNames1 = ii.name+"/"+item.devNames1
              })
            }
            if(item.offList){
              item.offList1 = ''
              item.offList.forEach(ii=>{
                item.offList1 = ii.name+"/"+item.offList1
              })            }
            if(item.outcome){
              item.outcome1 = ''
              item.outcome.forEach(ii=>{
                item.outcome1 = ii.name+"/"+item.outcome1
              })    
            }
            if(item.pics){
              item.pics1 = ''
              item.pics.forEach(ii=>{
                item.pics1 = ii.name+"/"+item.pics1
              })    
            }
            if(item.point){
              item.point1 = ''
              item.point.forEach(ii=>{
                item.point1 = ii.name+"/"+item.point1
              })    
            }
            if(item.staffs){
              item.staffs1 = ''
              item.staffs.forEach(ii=>{
                item.staffs1 = ii.name+"/"+item.staffs1
              })  
            }
            return item
          })
          this.total2 = res.data.data.total
        }
        
      })
    },
    getAllocatPatrolTask(){//手动分配运维任务给某人
      if(this.deleBatch1.length!=0){
        let staffs = []
        this.deleBatch1.forEach((item)=>{
          staffs.push(item.id)
        })
        let params = {
          infoId:this.formSearch1.infoId,
          staffs:staffs
        }
        allocatPatrolTask(params).then(res=>{
          console.log(res)
          if(res.data.code==200){
            this.$message("操作成功")
            this.taskDialog = false
          }else{
            this.$message("操作失败")
          }
        })
      }

    },
    getRenyuanIds(val){//运维人员
      console.log(val)
      this.renyuanDialog=false
      if(val.length!=0){
        this.formPush.staffs=[]
        this.formUpdate.staffs=[]
        this.reyuanNames=''
        val.forEach((item)=>{
          this.formPush.staffs.push(item.id)
          this.formUpdate.staffs.push(item.id)
          this.reyuanNames = item.name+","+this.reyuanNames
        })
      }
    },
    getDevIds(val){//运维设备
      console.log(val)
      this.shebeiDialog = false
      if(val.length!=0){
        this.formPush.devIds=[]
        this.formUpdate.devIds=[]
        this.devNames=''
        val.forEach((item)=>{
          this.formPush.devIds.push(item.id)
          this.formUpdate.devIds.push(item.id)
          this.devNames = item.name+","+this.devNames
        })
      }
    },
    getlist(){
      getTask(this.formSearch).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.formData = res.data.data.records.filter((item)=>{
            return item
          })
          this.total = res.data.data.total
        }else{
          this.$message(res.data.msg);
        }
      })
    },
    getInit(){//初始化列表
      this.getlist()

    },
    addList(addList){//添加

      this.$refs[addList].validate((valid) => {
        if (valid) {
          addTask(this.formPush).then((res)=>{
            console.log(res)
            if(res.data.code == 200){
              this.getlist()
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }else{
              this.$message('添加失败')
            }
          })
          this.addDialog = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    updateList(formUpdate){//修改
      console.log(this.formUpdate)
      this.$refs[formUpdate].validate((valid) => {
        if (valid) {
          editTask(this.formUpdate).then((res)=>{
            console.log(res)
            if(res.data.code == 200){
              this.$message({
                message: '修改成功',
                type: 'warning'
              });
              this.getlist()
            }
          })
          this.updateDialog = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    deleInfor(ids){//删除
      let arrId = []
      if(ids){
        arrId.push(ids)
      }
      if(this.deleBatch.length!=0){
        this.deleBatch.filter((item)=>{
          arrId.push(item.id)
          return item
        })
      }
      let params = {
        taskId :ids
      }
      this.$confirm('确认停用运维任务吗？')
      .then(_ => {
        pauseTask(params).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.$message('操作成功');
            this.getlist()
          }
        })
      })
      .catch(_ => {});
    },

    handleSelectionChange(val,self) {//多选
      this.deleBatch = val
    },
    handleSelectionChange1(val,self) {//多选
      this.deleBatch1 = val
    },
    handleCurrentPage(val){//页码改变
      this.formSearch.current=val
      this.getlist()
    },
    handleCurrentPage1(val){//页码改变
      this.formSearch1.current=val
      this.getGetAvailableStaff()
    },
    handleCurrentPage2(val){//页码改变
      this.formSearch2.current=val
      this.getGetPatrolDetails(this.formSearch2.taskId)
    },
    handleCurrentPage3(val){//页码改变
      this.formSearch3.current=val
      this.getsosQuery()
    },
    updateShowBox(item){//修改东西弹窗
    console.log(item)
      let devList=item.devList
      let staffs = item.staffs
      this.formUpdate = {
        duration:item.duration,
        taskId:item.id,
        durationType:item.durationType,
        endTime:item.endTime,
        numStaff:item.numStaff,
        patrolDate:item.patrolDate,
        startTime:item.startTime,
        name:item.name,
        alarmId:item.alarmId,
        // type:item.type,
      }
      this.yunweitype = item.type
      this.formUpdate.staffs=[]
      this.formUpdate.devIds=[]
      if(staffs){
        this.reyuanNames=''
        staffs.forEach((item)=>{
          this.formUpdate.staffs.push(item.id)
          this.reyuanNames = item.name+","+this.reyuanNames
        })
      }
      if(devList){
        this.devNames=''
        devList.forEach((item)=>{
          this.formUpdate.devIds.push(item.id)
          this.devNames = item.name+","+this.devNames
        }) 
      }
    },

    getMuchDeleteType(val){//从模块中执行删除功能
      this.deleInfor(val)
    },
    getAddTotrue(val){//从模块中执行添加弹框功能
      this.addDialog=val
      this.reyuanNames = ''
      this.devNames = ''
      this.mapOpints = ''
      // if(this.markerObj){
      //   this.markerObj.setMap(null)
      // }
      
    },
    getSearchInfor(val){//从模块中执行查询功能
      this.formSearch=val
      this.getlist()
    },
    handlepicsSuccess(response,file,fileList){
      console.log(file,fileList)
      this.formPush.pics=[]
      fileList.forEach(item=>{
        this.formPush.pics.push(item.response.data[0])
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.formPush.pics=[]
      fileList.forEach(item=>{
        this.formPush.pics.push(item.response.data[0])
      })
    },
  },
  mounted(){
    this.getInit()
    // this.initAmap()
  },
  components:{
    paging,
    paging1,
    paging2,
    paging3,
    searchModule,
    mapPoints,
    deviceOperationAdd,
    deviceOperationManagement
  }
}
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .cont_box{
    width:100%;
    display: flex;
  }
  .cont_box_left,.cont_box_right{
    flex:1;
    background: transparent ;
    padding:10px;
  }
  .cont_box_left{
    margin-right:10px;
  }
  .margin10{
    margin-bottom:10px;
  }
  .marginRight{
    margin-bottom:10px;
    border-bottom: 1px solid #eee;
  }
  .cont_box_right .el-form-item{
    margin-bottom:20px;
  }
</style>
