<template>
  <section class="modlude">
    <div class="nav_options" style="margin-bottom:20px;">
      <div class="nav_option" :class="{nav_option_active:isActive == 1}" @click="isActive=1,changeInfor(1)">
        <span>系统仓库</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 2}" @click="isActive=2,changeInfor(2)">
        <span>入库记录</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 3}" @click="isActive=3,changeInfor(3)">
        <span>出库记录</span>
      </div>
      <div class="nav_option" :class="{nav_option_active:isActive == 4}" @click="isActive=4,changeInfor(4)">
        <span>领用记录</span>
      </div>
    </div>
    <!-- 导航栏 -->
    <p class="margintop"></p>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" class="gridContt">
        <el-form :inline="true">
          <el-form-item size="small" label="物资编码">
            <el-input placeholder="输入编码" v-model="checkInfor.officeName" size='small'></el-input>
          </el-form-item>
          <el-form-item size="small" label="物资名称">
            <el-input placeholder="输入名称" v-model="checkInfor.name" size='small'></el-input>
          </el-form-item>
          <el-form-item size="small" label="领用人">
            <el-input placeholder="输入姓名" v-model="checkInfor.phone" size='small'></el-input>
          </el-form-item>
        <el-form-item size="small" label="领用时间">
            <el-date-picker
              v-model="checkInfor.liveStartTime"
              type="date"
              value-format="timestamp"
              placeholder="开始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item size="small" label="-">
            <el-date-picker
              v-model="checkInfor.liveEndTime	"
              type="date"
              value-format="timestamp"
              placeholder="结束时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item size="small" label="领用人联系方式">
            <el-input placeholder="领用人联系方式" v-model="checkInfor.nativePlace" size='small'></el-input>
          </el-form-item>
          <el-form-item size="small" label="移入仓库">
            <el-input placeholder="移入仓库" v-model="checkInfor.nativePlace" size='small'></el-input>
          </el-form-item>

        </el-form>
      </el-form>
        <el-form class="marginTop20" :inline="true">
          <el-form-item label="查询结果" class="margin0">
            <el-button type="primary" size='small'>报表导出</el-button>
            <el-button type="primary" size='small' @click="showTc">+新增领用</el-button>
            <el-button type="primary" size='small' @click="getList">查询</el-button>
            <el-button type="primary" size='small' @click="reloadCon">重置</el-button>
          </el-form-item>
        </el-form>
    </el-col>

    <!-- 列表部分 -->
    <el-table :data="inforList" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column class="ccc" type="selection" width="55" label="全选">
			</el-table-column>  
			<el-table-column prop="name" label="物资名称">
			</el-table-column>
			<el-table-column prop="sex" label="物资编码">
			</el-table-column>
			<el-table-column prop="duty" label="物资类型">
			</el-table-column>
			<el-table-column prop="department" label="领用人">
			</el-table-column>
			<el-table-column prop="isSplite" label="领用时间" width=200>
			</el-table-column>
			<el-table-column prop="temperature" label="单位">
			</el-table-column>
			<el-table-column prop="health" label="数量">
			</el-table-column>
			<el-table-column prop="isCross" label="移入仓库">
			</el-table-column>
			<el-table-column prop="isContact" label="状态">
			</el-table-column>

			<el-table-column label="操作" fixed="right" width=400>
				<template slot-scope="scope">
          <el-button size="small" >编辑</el-button>
          <el-button size="small" >备注</el-button>
          <!-- <el-button size="small" >{{scope.row.isContactt}}</el-button> -->
				</template>
			</el-table-column>
		</el-table>
    <!-- 批量删除，下标页码 -->
		<el-col :span="24" class="paginationt">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :page-count="total" class="pagination">
			</el-pagination>
		</el-col>
   <!-- 添加列表 -->
    <el-dialog title="添加公司" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form label-width="80px" ref="addForm">
        <el-form-item label="公司名称">
          <el-input v-model="addForm.name" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="addForm.address" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <!-- <el-form-item label="分店名称">
          <el-select size='small' v-model="addForm.officeId" placeholder="">
            <el-option v-for="item in selectOfficeList" :key="item.officeId" :label="item.name" :value="item.officeId"></el-option>
          </el-select>        
        </el-form-item> -->
        <el-form-item label="电话">
          <el-input v-model="addForm.phone" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="对私账户">
          <el-input v-model="addForm.privateAccount" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="对公账户">
          <el-input v-model="addForm.publicAccount" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="pushInfor">提交</el-button>
      </div>
    </el-dialog>
   <!-- 添加列表 -->
    <el-dialog title="修改公司" :visible.sync="addFormVisible1" :close-on-click-modal="false">
      <el-form label-width="80px" ref="addForm">
        <el-form-item label="地址">
          <el-input v-model="updataForm.address" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="分店名称">
          <el-select size='small' v-model="updataForm.officeId" placeholder="">
            <el-option v-for="item in selectOfficeList" :key="item.officeId" :label="item.name" :value="item.officeId"></el-option>
          </el-select>        
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="updataForm.phone" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input v-model="updataForm.name" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="私人账户">
          <el-input v-model="updataForm.privateAccount" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="对公账户">
          <el-input v-model="updataForm.publicAccount" auto-complete="off" style="width:220px;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible1 = false">取消</el-button>
        <el-button type="primary" @click.native="changeItem">提交</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
// import {getDateArray} from '../../util/util'
// import {getYqfkPerson, deptaddList, selectOffice,locationHouse,deptupdateList,deptdeleteList} from '../../api/api'
export default {
  data(){
    return{
      headIcon:'',
      isActive:1,
      remark:'',//修改备注
      total:1,
      selectArr:[],
      addFormVisible:false,
      addFormVisible1:false,
      updataVisible:false,
      listLoading:false,
      sels: [],//列表选中列
      locationHouseList:[],//区域层级列表
      selectOfficeList:[],//分店下拉列表
      temListtList:[],//房间模板列表
      checkList:[],
      houseAssign:{
        houseIds:[],//房间id
        officeId:''
      },
      inforList:[],
      inforList1:[
        {
          name:'口罩',
          sex:'2020021011',
          duty:'防疫物资',
          department:'刘梅',
          isSplite:'2020/02/10  14:20:12',
          temperature:'个',
          health:'130',
          isCross:'2号仓库',
          isContact:'审核通过/未领用',
          isContactt:"领用"
        },
        {
          name:'消毒水',
          sex:'2020021011',
          duty:'防疫物资',
          department:'刘梅',
          isSplite:'2020/02/10  14:20:12',
          temperature:'个',
          health:'30',
          isCross:'3号仓库',
          isContact:'未审核',
          isContactt:"审核通过"
        },
        {
          name:'一次性手套',
          sex:'2020021011',
          duty:'防疫物资',
          department:'刘梅',
          isSplite:'2020/02/10  14:20:12',
          temperature:'个',
          health:'10',
          isCross:'4号仓库',
          isContact:'审核通过/未领用',
          isContactt:"领用"
        }
      ],
      inforList2:[
        {
          name:'鼠标',
          sex:'20200351022',
          duty:'普通物资',
          department:'刘梅',
          isSplite:'2020/06/11  14:20:12',
          temperature:'个',
          health:'130',
          isCross:'2号仓库',
          isContact:'审核通过',
          isContactt:"领用"
        },
        {
          name:'电脑',
          sex:'2020021011',
          duty:'普通物资',
          department:'小夏',
          isSplite:'2020/06/11  15:00:12',
          temperature:'个',
          health:'30',
          isCross:'34号仓库',
          isContact:'未审核',
          isContactt:"审核通过"
        },
        {
          name:'一次性手套',
          sex:'2020021011',
          duty:'防疫物资',
          department:'小康',
          isSplite:'2020/06/11  14:20:12',
          temperature:'个',
          health:'10',
          isCross:'4号仓库',
          isContact:'未领用',
          isContactt:"领用"
        }
      ],
      inforList3:[
        {
          name:'办公桌',
          sex:'2020046891',
          duty:'普通物资',
          department:'辽联',
          isSplite:'2020/05/12  20:25:12',
          temperature:'个',
          health:'10',
          isCross:'3号仓库',
          isContact:'审核通过',
          isContactt:"领用"
        },
        {
          name:'消毒水',
          sex:'2020021011',
          duty:'防疫物资',
          department:'小戴',
          isSplite:'2020/06/20  17:44:02',
          temperature:'个',
          health:'30',
          isCross:'5号仓库',
          isContact:'未审核',
          isContactt:"审核通过"
        },
        {
          name:'椅子',
          sex:'2020071077',
          duty:'普通物资',
          department:'刘梅',
          isSplite:'2020/06/10  14:20:12',
          temperature:'个',
          health:'10',
          isCross:'4号仓库',
          isContact:'未领用',
          isContactt:"领用"
        }
      ],
      inforList4:[
        {
          name:'排插',
          sex:'2020022045',
          duty:'普通物资',
          department:'玲姐',
          isSplite:'2020/08/18  19:40:12',
          temperature:'个',
          health:'90',
          isCross:'2号仓库',
          isContact:'未领用',
          isContactt:"领用"
        },
        {
          name:'消毒水',
          sex:'2020021011',
          duty:'防疫物资',
          department:'玲姐',
          isSplite:'2020/08/18  14:20:12',
          temperature:'个',
          health:'30',
          isCross:'3号仓库',
          isContact:'未审核',
          isContactt:"审核通过"
        },
        {
          name:'一次性手套',
          sex:'2020021011',
          duty:'防疫物资',
          department:'刘梅',
          isSplite:'2020/08/18  14:20:12',
          temperature:'个',
          health:'10',
          isCross:'5号仓库',
          isContact:'审核通过',
          isContactt:"领用"
        }
      ],
      checkInfor:{
        current:1,
        size:10,
        type:1
      },//条件查询
      updataForm:{},
      addForm:{},
      params:{}
    }
  },
  methods:{
    changeInfor(index){
      if(index == 1){
        this.inforList = this.inforList1
      }else if(index==2){
        this.inforList = this.inforList2
      }else if(index==3){
        this.inforList = this.inforList3
      }else{
        this.inforList = this.inforList4
      }
    },
    reloadCon(){
      location.reload()
    },
    getList1(item){
      if(item == 1){
        this.$router.push({
          path:'./jcrManage'
        })
      }else if(item == 2){
        this.$router.push({
          path:'./txzsq'
        })
      }
    },
    changexianmu(officeId){
      this.houseAssign.officeId=officeId
    },
    getList(){//获取列表
      let params=this.checkInfor
      console.log(params)
      getYqfkPerson(params).then(res=>{
        console.log(res)
        // if(res.data.code===200){
        //   this.inforList=res.data.data.filter(function(item){
        //     if(item.isRent===0){
        //       item.isRentName='否'
        //     }else if(item.isRent===1){
        //       item.isRentName='是'
        //     }
        //     return item
        //   })
        //   this.total=res.data.data.pages
        // }
      })
    },
    changeItem(){//修改

      let params ={
        address:this.updataForm.address,
        name:this.updataForm.name,
        officeId:this.updataForm.officeId,
        phone:this.updataForm.phone,
        privateAccount:this.updataForm.privateAccount,
        publicAccount:this.updataForm.publicAccount,
      } 
      console.log(params)
      deptupdateList(params).then(res => {
        console.log(res)
        if(res.data.code == 200){
          this.getList();
        }else{
          alert(res.data.msg)
        }
      }).catch(err => {
          alert("网络请求失败")
        })
      this.addFormVisible1 = false

    },
    showTc(){
      // this.addFormVisible=true
    },
    pushInfor(){//添加
      if(!this.addForm.name){
        alert('请输入公司名称')
        return
      }
      let params=this.addForm
      console.log(params)
      deptaddList(params).then(res=>{
        console.log(res)
        this.addFormVisible=false
        if(res.data.code===200){
          this.getList()
        }else{
          alert(res.data.msg)
        }
      })
    },
    deleteInfor (row) { // 删除
      let params = row.officeId
      console.log(params)
      this.$confirm('确定要删除该条信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        deptdeleteList(params).then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.getList()
            this.$message({
              type: 'success',
              message: '操作成功'
            })
          } else {
            alert('删除失败')
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    handleCurrentChange(val){
      this.checkInfor.current = val;
			this.getList();
    },
    selsChange: function (sels) {// 当选择项发生变化时会触发该事件
      this.houseAssign.houseIds=[]
      console.log(sels)
      if(sels.length!==0){
        for(let i = 0 ; i < sels.length ; i++){
          this.houseAssign.houseIds.push(sels[i].houseId)
        }       
      }
      console.log( this.houseAssign.houseIds)
      this.sels=sels.filter(function (sel) {
        if(sel.isExist!==1){
            return sel
        }
      })
    } 
  },
  mounted(){
    this.inforList = this.inforList1
  }
}
</script>
<style scoped>
.gridContt{
  line-height:30px;
}

</style>


