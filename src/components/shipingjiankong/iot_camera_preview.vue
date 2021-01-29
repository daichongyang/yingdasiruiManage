<template>
  <section class="modlude">
    <el-form :inline="true" :model="formSearch" class="form_inline">
      <el-form-item>
        <el-button size="small" @click="changeGG(1)">单宫格</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="changeGG(4)">四宫格</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="changeGG(9)">九宫格</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="changeGG(16)">十六宫格</el-button>
      </el-form-item>
      <el-form-item label="选择小区" size="small">
        <el-select v-model="formSearch.xqId" placeholder="请选择小区">
          <el-option v-for="item in xqTree" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备编号" size="small">
        <el-input v-model="formSearch.devicecode" placeholder="请输入设备编号"></el-input>
      </el-form-item>
      <el-form-item label="单元序号" size="small">
        <el-input v-model="formSearch.unitSeq" placeholder="请输入单元序号"></el-input>
      </el-form-item>
      <el-form-item label="通道序号" size="small">
        <el-input v-model="formSearch.chnSeq" placeholder="请输入通道序号"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" size="small">
          <el-date-picker v-model="formSearch.beginTime" type="datetime" value-format="timestamp" placeholder="开始时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" size="small">
          <el-date-picker v-model="formSearch.endTime" type="datetime" value-format="timestamp" placeholder="结束时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="录像来源" size="small">
        <el-select v-model="formSearch.recordSource" placeholder="请选择录像来源" @change="getRecordSourcechange">
          <el-option label="设备" :value="2"></el-option>
          <el-option label="中心" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="录像类型" size="small">
        <el-select v-model="formSearch.recordType" placeholder="请选择录像类型">
          <el-option label="全部" :value="0"></el-option>
          <el-option label="普通录像" :value="1"></el-option>
          <el-option label="报警录像" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="码流类型" size="small">
        <el-select v-model="formSearch.streamType" placeholder="请选择码流类型">
          <el-option label="主码流" :value="1"></el-option>
          <el-option label="副码流" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item>
        <el-button size="small" @click="getgetHLSUrl">播放</el-button>
      </el-form-item> -->
      <el-form-item>
        <el-button size="small" @click="getinitDevices">初始化设备</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="getdssDevInfo">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="clearAll">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="gg_cont">
      <div class="gg_box gg_box4">
        <div v-show="item.paused" :class="[ggNum==4?'gg_box_item4':ggNum==1?'gg_box_item1':ggNum==9?'gg_box_item9':'gg_box_item16','gg_box_item']" v-for="(item,index) in videoList" :key="index">
          <video :id="'my_video_'+index" class="video-js vjs-default-skin gg_box_item_video" controls preload="../../assets/img/bofan.png" autoplay='true'>
              <source :src="item.url" type="application/x-mpegURL"/>
          </video>
          <button @click="closeClickVideo(item,index)" class="videoCloseBtn">关闭</button>
        </div>
      <!-- <video id="myvviddasdadeo" class="video-js vjs-default-skin box" controls preload="auto">
        <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="application/x-mpegURL"/>
      </video> -->
      </div>
      <div class="gg_right">
        <div style="margin-bottom:20px;">
          <span>设备列表：</span>
        </div>
        <el-tree
          class="treee"
          :data="data"
          node-key="splitId"
          @node-click="getVideo"
          :props="defaultProps">
        </el-tree>
        <!-- <el-tree
          class="treee"
          :data="data"
          show-checkbox
          node-key="splitId"
          @check='getVideo'
          @node-click=""
          :props="defaultProps">
        </el-tree> -->
      </div>
    </div>

    </div>
  </section>
</template>

<script>
import { xqSelectList,dssDevInfo,getHLSUrl,initDevices } from '../../url/api';
import videojs from 'video.js'
import 'videojs-contrib-hls'
export default {
  data(){
    return{
      ggNum:4,
      defaultProps: {
        children: 'devType',
        label: 'name',
        id:'splitId'
      },
      xqTree:[],
      videoNum:0,//播放器个数
      videoNumStatu:true,//控制播放器数量增加
      formSearch:{
        recordSource:2,
        recordType:0,
        streamType:1,
      },
      ggObj:[
        {
          url:new Date().getTime()
        }
      ],
      data:[
        {
          label:'摄像机',
          children:[
            {
              name:'IPC1',
              liveUrl:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
            },
            {
              name:'IPC2',
              liveUrl:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
            },
            {
              name:'IPC3',
              liveUrl:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
            },

          ]
        },
      ],
      data1:[
        {
          label:'摄像机',
          children:[
            {
              name:'IPC1',
              liveUrl:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
            },
            {
              name:'IPC2',
              liveUrl:'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8',
            },
            {
              name:'IPC3',
              liveUrl:'http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8',
            },

          ]
        },
      ],
      videojsObj:null,
      liveUrl:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
      videoList:[
      ],
      extraVideoList:[],
      checkedData:[],
      hLSUrlInfor:[],
      myVideo:[],
      closedVideo:[],//储存删除后的视频
    }
  },
  methods:{
    closeClickVideo(row,index){//关闭指定视频
      this.videoList[index].paused=false;
      this.myVideo[index].pause()
    },
    clearAll(){//清空所有视屏
      this.myVideo.forEach((item,index)=>{
        this.myVideo[index].dispose()
      })
      this.videoList = []
      this.getVideoList()
    },
    getinitDevices(){//设备初始化
      initDevices().then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.getdssDevInfo(liveUrl)
        }
      })
    },
    getgetHLSUrl(){//开始播放列表
      // this.videoList=[]
      // this.data1[0].children.forEach(item=>{
      //   let obj = {
      //     url:item.liveUrl,
      //     paused:true,
      //   }
      //   this.videoList.push(obj)
      // })
      // this.playVideo()
      // dasdjasdjalsjdlsjdklasjdlkajskldjaklsdjklajdkla
      let params = this.hLSUrlInfor
      getHLSUrl(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          // res.data.data.forEach((item,index)=>{
          //   let obj = {
          //     url:item,
          //     paused:true,
          //   }
          //   this.videoList[index].url=item
          //   this.videoList[index].paused=true

          //   this.$nextTick(()=>{
          //     this.myVideo[index].src([
          //     {type: 'application/x-mpegURL', src: item}
          //     ])
          //     this.myVideo[index].play()
          //   })
          //   // this.extraVideoList.push(obj)
          // })
          if(this.videoList.find(item=>{return item.paused==false})){
            for (let index = 0; index < this.videoList.length; index++) {
              if(!this.videoList[index].paused){
                this.videoList[index].url=res.data.data[0]
                this.$nextTick(()=>{
                  console.log(res.data.data[0])
                  this.myVideo[index].src([
                  {type: 'application/x-mpegURL', src: res.data.data[0]}
                  ])
                  this.myVideo[index].play()
                })
                this.videoList[index].paused=true
                return
              }
            }
          }else{
            this.videoList[0].url=res.data.data[0]
            this.myVideo[index].src([
            {type: 'application/x-mpegURL', src: res.data.data[0]}
            ])
            this.myVideo[index].play()
          }
          console.log(this.videoList)
          // this.playVideo()
        }
      })
    },
    getRecordSourcechange(val){//录像来源
      if(val==3){
        this.formSearch.recordType = 0
      }
    },
    playVideo(){
      // console.log(this.myVideo)
      if(this.myVideo.length!=0){
        this.myVideo.forEach((item,index)=>{
          this.myVideo[index].dispose()
        })
      }
      this.myVideo = []
      console.log(this.videoList)
      this.$nextTick(() => {
        this.videoList=this.extraVideoList
        this.videoList.forEach((item,index)=>{
          console.log(item,index)
          this.myVideo[index] = videojs("my_video_"+index,
              function() {
              this.play();
          });
        })

      });
      
    },
    getVideo(val,valList){//勾选
      console.log(val,valList)
      if(!val.devType){
        this.hLSUrlInfor = []
        let obj = {
          devicecode:val.code,
          unitSeq:val.unitSeq,
          chnSeq:val.channelSeq,
          recordSource:this.formSearch.recordSource,
          recordType:this.formSearch.recordType,
          streamType:this.formSearch.streamType,
          // beginTime:item.id,
          // endTime:item.id,
        }
        this.hLSUrlInfor.push(obj)
        this.getgetHLSUrl()
      }
      // this.hLSUrlInfor = []
      // valList.checkedNodes.forEach(item=>{
      //   if(!item.devType){
      //     let obj = {
      //       devicecode:item.code,
      //       unitSeq:item.unitSeq,
      //       chnSeq:item.channelSeq,
      //       recordSource:this.formSearch.recordSource,
      //       recordType:this.formSearch.recordType,
      //       streamType:this.formSearch.streamType,
      //       // beginTime:item.id,
      //       // endTime:item.id,
      //     }
      //     this.hLSUrlInfor.push(obj)
      //   }
      // })
     
    },
    changeGG(num){
      this.ggNum = num
    },
    getdssDevInfo(){//获取设备列表
      let params = this.formSearch
      let obj
      dssDevInfo(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          
          this.data = res.data.data.filter(item=>{
            if(item.devType){
              item.devType.forEach(ii=>{
                ii.name = ii.name+"单元"
              })
            }
            return item
          })

        }
      })
    },
    getVideoList(){//创建播放器
      let num = 16
      for (let index = 0; index < num; index++) {
        let obj = {
          url:'',
          paused:false,
        }
        this.videoList.push(obj)
        
      }
      console.log(this.videoList)
      setTimeout(()=>{
        this.videoList.forEach((item,index)=>{
          this.$nextTick(()=>{
            this.myVideo[index] = videojs("my_video_"+index,
                function() {
                this.play();
            });
          })
        })
      },1000)
    }
  },
  mounted(){
    this.getVideoList()
    // this.playVideo1()
    this.getdssDevInfo()
  }
}
</script>

<style scoped>
.box {
    width: 400px;
    height: 300px;
    border: 20px solid;
}
  .gg_cont{
    display: flex;
  }
  .gg_right{
    margin-left:20px;
    flex: 1;
  }
  .gg_box{
    /* display: flex; */
    height:650px;
    width:1400px;
    border:1px solid #a1d6f4;
    overflow: hidden;
    overflow-y:auto;
  }
  .gg_box_item{
    display: inline-block;
    box-sizing: border-box;
    border:1px solid black;
    position:relative;
  }
  .videoCloseBtn{
    position:absolute;
    top:5%;
    right:5%;
    font-size:12px;
    border:1px solid #a1d6f4;
    color:#a1d6f4;
    background:rgba(0, 0, 0, 0);
    padding:2px 10px;
    cursor: pointer;
    z-index: 100;
  }
  .gg_box_item1{
    width:100%;
    height:650px;
  }
  .gg_box_item4{
    width:50%;
    height:325px;
  }
  .gg_box_item9{
    width:33.33%;
    height:216.64px;
  }
  .gg_box_item16{
    width:25%;
    height:162.5px;
  }
  .img_gg{
    position: absolute;
    top:50%;
    left:50%;
    width:100px;
    margin-top:-50px;
    margin-left:-50px;
    cursor: pointer;
  }
  .treee{
    height:650px;
    overflow: hidden;
    overflow-y:auto;
  }
  .posit{
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:20px;
  }
  .gg_box_item_video{
    width:100%;
    height:100%;
  }
</style>