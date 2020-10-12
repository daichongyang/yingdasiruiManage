export default {
    init: function() {
        const key = '3d91b12e02a16d16835c072cea02aadb'
        const apiVersion = '1.4.15'
            // const timestamp = new Date().getTime()
        const AMapURL = 'https://webapi.amap.com/maps?v=' + apiVersion + '&key=' + key + '&plugin=AMap.Walking&callback=onAMapCallback&plugin=AMap.Walking'
        const AMapURL1 = '//a.amap.com/jsapi_demos/static/demo-center/model/js/three.js'
        return new Promise((resolve, reject) => {      
            var  script  =  document.createElement("script");            
            script.type  =  "text/javascript";            
            script.src  =  "https://map.qq.com/api/gljs?v=1.exp&key=CGABZ-3AN3O-I77WS-SGE22-NM6YF-ATBPN&callback=onTMapCallback";            
            document.body.appendChild(script);             // 等待页面加载完毕回调
                        
            window.onTMapCallback  =   function()  {                
                resolve(TMap)                
                console.log(resolve)            
            }
        })
    },
        AmapInit:   function()  {        
        const  key  =  '3d91b12e02a16d16835c072cea02aadb'        
        const  apiVersion  =  '1.4.15'             // const timestamp = new Date().getTime()
                    
        const  AMapURL  =  'https://webapi.amap.com/maps?v='  +  apiVersion  +  '&key='  +  key  +  '&callback=onAMapCallback'        
        const  AMapURL1  =  '//a.amap.com/jsapi_demos/static/demo-center/model/js/three.js'        
        return  new  Promise((resolve,  reject)  =>  {             // 插入script脚本
                        
            let  scriptNode  =  document.createElement('script')            
            scriptNode.setAttribute('type',  'text/javascript')            
            scriptNode.setAttribute('src',  AMapURL)

                        
            let  scriptNode1  =  document.createElement('script')            
            scriptNode1.setAttribute('type',  'text/javascript')            
            scriptNode1.setAttribute('src',  AMapURL1)

                         document.body.appendChild(scriptNode)            
            document.body.appendChild(scriptNode1)

                         // 等待页面加载完毕回调
                         window.onAMapCallback  =   function()  {                
                resolve(AMap)                
                console.log('map初始化成功')            
            }        
        })    
    }
}