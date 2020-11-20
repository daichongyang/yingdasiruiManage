<template>
  <section>
    <div id="container"></div>
    <el-form label-position="right" label-width="110px" class="mapForm">
      <el-form-item label="名称">
      </el-form-item>
      <el-form-item label="" v-for="(item,index) in formPush" :key="index">
        <el-input v-model="item.name"></el-input>
        <el-button size="small" @click="removeMarker(item.latitude,index)">删除</el-button>
      </el-form-item>
    </el-form>
    <div class="mapSave">
      <el-button size="small" type="primary" @click="savePoints">保存</el-button>
    </div>
  </section>
</template>

<script>
import TMap from '../../assets/js/initmap'
export default {
  props:['opintsArr'],
  data(){
    return{
      mapObj:'',//地图对象
      markerObj:'',//点位
      formPush:[

      ],
      geometries:[]
    }
  },
  watch:{
    opintsArr(val){
      console.log(val)
      if(val){
        this.formPush = val
        this.geometries = []
        val.forEach(item=>{
          let obj = {
            position:new TMap.LatLng(item.latitude, item.longitude)
          }
          this.geometries.push(obj)
        })
        this.initTmap()
      }
    }
  },
  methods:{
    initTmap(){
      let _this = this;
      TMap.init().then((TMap)=>{
        var center = new TMap.LatLng(22.831779, 114.980945);
        //初始化地图
        var map = new TMap.Map("container", {
          rotation: 20, //设置地图旋转角度
          pitch: 0, //设置俯仰角度（0~45）
          zoom: 17, //设置地图缩放级别
          center: center //设置地图中心点坐标
        });
        TMap.ImageTileLayer.createCustomLayer({
          layerId: '5f6b13185922',
          // layerId: '5f5f2ad23757',
          map: map
        }).then(customLayer => {
          if (customLayer) {// 成功创建个性化图层
  
          } else {
            // 创建失败，请查看控制台错误信息
            console.log('fail');
          }
        });
        _this.mapObj = map
        var markerLayer = new TMap.MultiMarker({
            id: 'marker-layer',
            map: map,
            geometries:_this.geometries
        });
        _this.markerObj = markerLayer
        map.on('click', function(e) {
          console.log(e)
          let obj = {
              name:'',
              latitude:"",
              longitude:"",
            }
          obj.latitude= e.latLng.getLat();
          obj.longitude = e.latLng.getLng();
          _this.formPush.push(obj)
          markerLayer.add({
            id:obj.latitude,
            position: e.latLng
          }); 
          console.log(e.latLng.getLng()+ ',' + e.latLng.getLat())
         });
      })
    },
    removeMarker(id,index){
      this.markerObj.remove(id)
      this.formPush.splice(index,1)
      console.log(this.formPush)
    },
    savePoints(){//保存点位
      console.log(this.formPush)
      this.$emit("mapOpintsArr",this.formPush)
    }
  },
  mounted(){
    if(!this.opintsArr){
        this.initTmap()
    }

  }
}
</script>

<style scoped>
  #container{
    width:100%;
    height:400px;
  }
  .mapSave{
    text-align: center;
  }
</style>