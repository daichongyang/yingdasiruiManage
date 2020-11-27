import axios from 'axios';

let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
}
const instance = axios.create({
        withCredentials: true
    })
    // 图片上传
export const uploadToRealPath = (params) => { return instance.post(`/park/park/upload/uploadfile`, params, config) }

export const login = (params) => { return axios.post('/park/anno/token', params) } //获取认证token
export const sysLogList = (params) => { return axios.post('/park/park/log/list/sys/page', params) } //查询系统日志分页列表
export const menuList = (params) => { return axios.post('/park/menu/tree', params) } //查询系统所有的菜单

export const orgTree = (params) => { return axios.post('/park/org/tree', params) } //查询所有组织列表
export const saveTree = (params) => { return axios.post('/park/org/tree/save', params) } //添加组织树
export const updateTree = (params) => { return axios.post('/park/org/tree/update', params) } //修改组织树
export const deleteTree = (params) => { return axios.post('/park/org/tree/delete', params) } //删除组织

export const xqList = (params) => { return axios.post('/park/park/xq/list/page', params) } //查询小区分页列表
export const xqAddList = (params) => { return axios.post('/park/park/xq/add', params) } //添加新小区
export const xqDeleteList = (params) => { return axios.post('/park/park/xq/delete', params) } //删除小区操作
export const xqUpdateList = (params) => { return axios.post('/park/park/xq/update', params) } //修改小区信息
export const xqSelectList = (params) => { return axios.post('/park/xq/list/select', params) } //查询小区列表

export const sectionList = (params) => { return axios.post('/park/park/section/list/page', params) } //查询区域分页列表
export const sectionAddList = (params) => { return axios.post('/park/park/section/add', params) } //添加区域
export const sectionDeleteList = (params) => { return axios.post('/park/park/section/delete', params) } //删除区域
export const sectionUpdateList = (params) => { return axios.post('/park/park/section/update', params) } //修改区域

export const houseaddList = (params) => { return axios.post('/park/park/house/add', params) } //添加房间
export const housedeleteList = (params) => { return axios.post('/park/park/house/delete', params) } //删除房间
export const houseList = (params) => { return axios.post('/park/park/house/list/page', params) } //查询房间分页列表
export const houseupdateList = (params) => { return axios.post('/park/park/house/update', params) } //修改房间

export const advertAddlist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/advert/advchant/addlist', params) } //添加广告信息
export const advertDeletelist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/advert/advchant/deletelist', params) } //删除广告信息
export const advertUpdatelist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/advert/advchant/updatelist', params) } //修改广告信息
export const advertList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/advert/advchant/list', params) } //获取所有广告（后台）

export const recommendList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/recommend/shop/getRecommend/ShopData', params) } //查询推荐商家列表
export const recommendaddList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/recommend/shop/getRecommend/add', params) } //添加推荐商家
export const recommenddeleteList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/recommend/shop/getRecommend/delete', params) } //删除推荐商家信息
export const recommendupdaList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/recommend/shop/getRecommend/upda', params) } //修改推荐商家

export const getAcDevlist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/getAcDevlist', params) } //门禁设备查询
export const addAcDevlist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/addAcDevlist', params) } //门禁设备添加
export const delAcDevlist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/delAcDevlist', params) } //删除门禁设备
export const updateDoorDev = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/updateDoorDev', params) } //更新设备信息

export const adduserhouselist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/house/user/add', params) } //添加房间用户
export const deleteuserhouselist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/house/user/delete', params) } //删除房间单个用户
export const userhouselist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/house/user/list/owner/page', params) } //查询房间业主/成员分页列表
export const updateuserhouselist = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/house/user/update', params) } //修改房间用户

export const getHwDevs = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/getHwDevs/' + params.xqId) } //获取霍尼门禁列表
export const openHwDev = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/openHwDev/' + params.account + "/" + params.xqId + "/" + params.id + "/" + params.name) } //霍尼门禁远程开门
export const remoteOpenDoor = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/remoteOpenDoor/' + params.account + "/" + params.devId) } //v远程开门
export const getAcDoorOperLog = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/getAcDoorOperLog', params) } //门禁日志查询
export const getStDevs = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/getStDevs', params) } //获取商汤人脸机列表
export const freshHwLevels = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/door/freshHwLevels/' + params) } //刷新霍尼门禁权限列表

export const getGatewaySetting = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/getGatewaySetting', params) } //获取voip线路
export const addGatewaySetting = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/addGatewaySetting', params) } //增加voip线路
export const delGatewaySetting = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/delGatewaySetting/' + params) } //删除voip线路
export const setHouseCallNum = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/setHouseCallNum/' + params) } //一键配置对讲号
export const updateCallState = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/updateCallState/' + params.id + '/' + params.callState) } //启用/停用区域对讲号
export const updateHouseCallState = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/updateHouseCallState/' + params.id + '/' + params.callState) } //启用/停用房间对讲号
export const updateSectionNo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/updateSectionNo/' + params.id + '/' + params.sectionNo) } //配置区域代号
export const setOneHouseCallNum = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/setOneHouseCallNum/' + params.id + '/' + params.callNum) } //配置房间对讲号
export const callHistory = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/callHistory', params) } //对讲日志
export const getSectionHouseList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/cloudCall/getSectionHouseList', params) } //对讲获取区域/房间列表

export const authAddManager = (params) => { return axios.post('/park/auth/manager/add', params) } //添加管理员
export const authDeleteManager = (params) => { return axios.post('/park/auth/manager/delete', params) } //删除管理员
export const authManagerList = (params) => { return axios.post('/park/auth/manager/list/page', params) } //查询管理员分页列表
export const authUpdateManager = (params) => { return axios.post('/park/auth/manager/update', params) } //修改管理员信息

export const getIntercomOpenLog = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getIntercomOpenLog', params) } //传统开门日志
export const getIntercomEmgLog = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getIntercomEmgLog', params) } //传统报警日志
export const getIntercomCallHistory = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getIntercomCallHistory', params) } //传统对讲日志
export const getIntercomDevSipInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getIntercomDevSipInfo', params) } //传统-主机/媒体实时状态
export const getIntercomSipInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getIntercomSipInfo', params) } //传统--媒体服务器账号
export const getIntercomDevInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getIntercomDevInfo', params) } //传统-主机账号
export const updateIntercomDevInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/updateIntercomDevInfo/' + params.id + '/' + params.mainphoneIp + '/' + params.transferIp + '/' + params.isEnable) } //传统-修改主机账号

export const getSiphostInfoList = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/getSiphostInfo', params) } //传统对讲获取媒体服务器参数
export const addSiphostInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/addSiphostInfo', params) } //传统对讲新增媒体服务器参数
export const updateSiphostInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/updateSiphostInfo', params) } //传统对讲修改媒体服务器参数
export const delSiphostInfo = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/interocm/delSiphostInfo/' + params.id) } //传统对讲删除媒体服务器参数

export const roletreeList = (params) => { return axios.post('/park/role/tree', params) } //查询系统角色树状列表
export const addroletreeList = (params) => { return axios.post('/park/role/add', params) } //添加角色
export const updateroletreeList = (params) => { return axios.post('/park/role/update', params) } //修改角色信息
export const deleteroletreeList = (params) => { return axios.post('/park/role/delete', params) } //删除角色
export const bindmenu = (params) => { return axios.post('/park/role/bind/menu', params) } //角色绑定菜单
export const bindmenuroleId = (roleId) => { return axios.post('/park/role/menu/' + roleId) } //管理员角色回显
export const managerrole = (managerId) => { return axios.post('/park/auth/manager/role/' + managerId) } //角色菜单回显
export const bindmanagerrole = (params) => { return axios.post('/park/auth/manager/bind/role', params) } //管理员绑定角色

export const getHardwareDevice = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/getHardwareDevice', params) } //获取iot网关列表
export const addHardwareDevice = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/addHardwareDevice', params) } //增加iot网关
export const updateHardwareDevice = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/updateHardwareDevice', params) } //更新iot网关
export const delHardwareDevice = (idStr) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/delHardwareDevice/' + idStr[0]) } //删除iot网关

export const getProjectParam = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/getProjectParam', params) } //获取iot网关工程参数列表
export const updateProjectParam = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/updateProjectParam', params) } //更新iot网关工程参数
export const addProjectParam = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/addProjectParam', params) } //增加iot网关工程参数
export const delProjectParam = (idStr) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/delProjectParam/' + idStr[0]) } //删除iot网关工程参数

export const getHdlGlobalParam = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/getHdlGlobalParam', params) } //获取hdl全局参数
export const addHdlGlobalParam = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/addHdlGlobalParam', params) } //增加hdl全局参数
export const updateHdlGlobalParam = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/updateHdlGlobalParam', params) } //更新hdl全局参数
export const delHdlGlobalParam = (idStr) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/delHdlGlobalParam/' + idStr[0]) } //删除hdl全局参数

export const getIotDetailData = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/iot/getIotDetailData/' + params.mainId + '/' + params.mainType) } //获取智能家庭数据
export const getOnePasscardDetail = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/getOnePasscardDetail/' + params.passcardId) } //获取单个用户通行证数据
export const getHousePasscard = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/getHousePasscard/' + params.houseId) } //获取某个房间通行证数据
export const housePasscardGetSectionHouse = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/getSectionHouse', params) } //获取区域/房间
export const getAcPasscardUsers = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/getAcPasscardUsers', params) } //获取业主成员列表
export const updateSectionHousePasscard = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/updateSectionHousePasscard', params) } //统一修改多个区域/多个房间通行证/多个用户通行证

export const exportTemplateHouse = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/export/template/house', params) } //导出房间模板
export const exportHouse = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/export/house', params) } //导出房间信息
export const importHouse = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/import/house/' + params.xqId + '/' + params.houseType) } //导入房间信息

export const temporaryPasscard = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/temporaryPasscard', params) } //临时授权/实体卡授权
export const restoreUsersPasscard = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/restoreUsersPasscard', params) } //一键还原用户通行证
export const recallCard = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/recallCard', params) } //回收卡片数据
export const getCardPasscardDetail = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/getCardPasscardDetail', params) } //获取卡片通行证数据
export const showPasscardRecords = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/showPasscardRecords', params) } //用户通行证/临时授权/实体卡授权记录查询
export const blackWhiteCards = (params) => { return axios.post('/intellmanagerV3.0/intellmanagerV3.0/housePasscard/blackWhiteCards', params) } //白名单/黑名单操作


export const getAdviceData = (params) => { return axios.post('/park/advice/pmOnlineApply/getAdviceData', params) } //查询投诉建议内容//查询投诉建议列表
export const addReply = (params) => { return axios.post('/park/advice/pmOnlineApply/addReply', params) } //统一回复投诉建议里面的回复（传id（数组多个）和reply回复内容 不能空）

export const getParklist = (params) => { return axios.post('/park/park/list/page', params) } //查询公园分页列表
export const addParklist = (params) => { return axios.post('/park/park/save', params) } //添加公园
export const updParklist = (params) => { return axios.post('/park/park/update', params) } //修改公园
export const delParklist = (params) => { return axios.post('/park/park/delete', params) } //修改公园


export const getTourist = (params) => { return axios.post('/park/tourist/list/page', params) } //查询景点分页列表
export const addTourist = (params) => { return axios.post('/park/tourist/save', params) } //添加景区
export const delTourist = (params) => { return axios.post('/park/tourist/delete', params) } //删除景区
export const updTourist = (params) => { return axios.post('/park/tourist/update', params) } //修改景区


export const getMessage = (params) => { return axios.post('/park/Message/getMessage', params) } //获取资讯
export const addMessage = (params) => { return axios.post('/park/Message/addMessage', params) } //发送或保存资讯
export const editMessage = (params) => { return axios.post('/park/Message/editMessage', params) } //编辑资讯(status=2的才可编辑)
export const delMessage = (params) => { return axios.post('/park/Message/delMessage/' + params) } //// 删除资讯(status=2的才可删除
export const getAllHouseUser = (params) => { return axios.post('/park/Message/getAllHouseUser', params) } //// 发送资讯时获取所有区域、房间、人员。设备则只选择devType=3 或者 5的门口机设备
export const recallMessage = (params) => { return axios.post('/park/Message/recallMessage/' + params) } // 撤回已发出的资讯(status=1的可以撤回)
export const sendMessage = (params) => { return axios.post('/park/Message/sendMessage/' + params) } // 立即发送已保存的资讯(即status=2的可以立即发送)
export const getOneHouseUser = (params) => { return axios.post('/park/Message/getOneHouseUser/' + params) } //获取单个房间的用户列表

export const getVillageAD = (params) => { return axios.post('/park/Message/getVillageAD', params) } //获取小区广告
export const saveVillage = (params) => { return axios.post('/park/Message/saveVillage', params) } //发送小区广告
export const deleteVillage = (params) => { return axios.post('/park/Message/deleteVillage/' + params) } //删除小区广告，通过id

export const toTenementAD = (params) => { return axios.post('/park/park/banner/list', params) } //轮播图列表
export const updatePicture = (params) => { return axios.post('/park/park/banner/update', params) } //修改轮播图

export const getPeriphery = (params) => { return axios.post('/park/periphery/list/page', params) } //查询公园周边分页列表
export const savePeriphery = (params) => { return axios.post('/park/periphery/save', params) } //添加公园周边
export const updPeriphery = (params) => { return axios.post('/park/periphery/update', params) } //修改公园周边
export const delPeriphery = (params) => { return axios.post('/park/periphery/delete', params) } //删除公园周边

export const getTraffic = (params) => { return axios.post('/park/Message/getTraffic', params) } //获取交通介绍
export const addTraffic = (params) => { return axios.post('/park/Message/addTraffic', params) } //增加交通介绍
export const delTraffic = (params) => { return axios.post('/park/Message/delTraffic/' + params) } //删除交通介绍

export const sosQuery = (params) => { return axios.post('/park/Message/sosQuery', params) } //web后台sos报警查询
export const updateSosById = (params) => { return axios.post('/park/Message/updateSosById/' + params) } //web后台sos报警状态更新,status=1的才可更新为正处理

export const selectUserAll = (params) => { return axios.post('/park/advice/User/selectAll', params) } //用户游客记录

export const Employeelist = (params) => { return axios.post('/park/employee/list/page', params) } //查询工作人员分页列表
export const Employeesave = (params) => { return axios.post('/park/employee/save', params) } //添加工作人员
export const Employeeupdate = (params) => { return axios.post('/park/employee/update', params) } //修改工作人员
export const Employeedelect = (params) => { return axios.post('/park/employee/delete', params) } //批量删除工作人员

export const Facilitieslist = (params) => { return axios.post('/park/facilities/list/page', params) } //查询智能设施分页列表
export const Facilitiessave = (params) => { return axios.post('/park/facilities/save', params) } //添加智能设施
export const Facilitiesupdate = (params) => { return axios.post('/park/facilities/update', params) } //修改智能设施
export const Facilitiesdelect = (params) => { return axios.post('/park/facilities/delete', params) } //删除智能设施

export const Wayplanupdate = (params) => { return axios.post('/park/way/plan/update', params) } //添加导航路线
export const Wayplansave = (params) => { return axios.post('/park/way/plan/save', params) } //添加导航路线
export const selectPlan = (params) => { return axios.post('/park/way/plan/select', params) } //查询导航路线
export const assetSelect = (params) => { return axios.post('/park/park/select/assets', params) } //公园内设施列表
export const classifylistone = (params) => { return axios.post('/park/assets/classify/list/select/one', params) } //查询公园资产归类一级下拉列表
export const classifylisttwo = (params) => { return axios.post('/park/assets/classify/list/select', params) } //查询公园资产归类二级下拉列表

export const classifyList = (params) => { return axios.post('/park/assets/classify/list/page', params) } //查询公园资产归类分页列表
export const addClassify = (params) => { return axios.post('/park/assets/classify/save', params) } //添加公园资产归类
export const deleteClassify = (params) => { return axios.post('/park/assets/classify/delete', params) } //删除公园资产归类
export const updateClassify = (params) => { return axios.post('/park/assets/classify/update', params) } //修改公园资产归类

export const recommendassetsList = (params) => { return axios.post('/park/park/recommend/recommend/assets', params) } //公园内设施推荐列表
export const recommendupdateList = (params) => { return axios.post('/park/park/recommend/recommend/update', params) } //修改推荐列表
export const recommendtype = (params) => { return axios.post('/park/park/recommend/recommend/type/select', params) } //推荐设施类型下拉列表
export const recommendfacility = (params) => { return axios.post('/park/park/recommend/recommend/facility/select/' + params.type) } //公园设施下拉列表(根据类型获取公园设施下拉列表)

export const addDevice = (params) => { return axios.post('/park/operation/addDevice', params) } //运维管理 增加设备
export const queryDevice = (params) => { return axios.post('/park/operation/queryDevice', params) } //运维管理 查询设备
export const delDevlist = (params) => { return axios.post('/park/operation/delDevlist', params) } //运维管理 删除设备
export const editDevice = (params) => { return axios.post('/park/operation/editDevice', params) } //运维管理 编辑设备

export const queryStaff = (params) => { return axios.post('/park/operation/queryStaff', params) } //运维管理 查询运维人员
export const editStaff = (params) => { return axios.post('/park/operation/editStaff', params) } //运维管理 编辑运维人员
export const addStaff = (params) => { return axios.post('/park/operation/addStaff', params) } //运维管理 增加运维人员
export const delStaff = (params) => { return axios.post('/park/operation/delStaff', params) } //运维管理 删除运维人员

export const getTask = (params) => { return axios.post('/park/patrol/getTask', params) } //获取运维任务列表
export const addTask = (params) => { return axios.post('/park/patrol/addTask', params) } //添加运维任务
export const editTask = (params) => { return axios.post('/park/patrol/editTask', params) } //编辑运维任务
export const pauseTask = (params) => { return axios.post('/park/patrol/pause/' + params.taskId) } //运维任务停用
export const allocatPatrolTask = (params) => { return axios.post('/park/patrol/allocatePatrolTask', params) } //手动分配运维任务给某人
export const getPatrolDetails = (params) => { return axios.post('/park/patrol/getPatrolDetails', params) } //后台调用：运维详情
export const getAvailableStaff = (params) => { return axios.post('/park/patrol/getAvailableStaff', params) } //获取任务可分配的运维人员列表

export const appointmentList = (params) => { return axios.post('/park/ap-appointment/list/page', params) } //查询景点无分页列表
export const appointmentAdd = (params) => { return axios.post('/park/ap-appointment/pointment/addData', params) } //添加可预约景点
export const appointmentListData = (params) => { return axios.post('/park/ap-appointment/pointment/listData', params) } //查询预约记录

export const jobgoesList = (params) => { return axios.post('/park/jobgoes/list/page', params) } //查询工作人员无分页列表
export const updatalarData = (params) => { return axios.post('/park/jobgoes/jobgoeslist/updatalarData', params) } //派单派工作人员
export const updaalltedata = (params) => { return axios.post('/park/jobgoes/jobgoeslist/updaalltedata', params) } //确定完成派单
export const numberAallocation = (params) => { return axios.post('/park/ap-appointment/pointment/numberAallocation', params) } //放号
export const delectAallocation = (params) => { return axios.post('/park/ap-appointment/pointment/delectAallocation', params) } //删除公园预约列表
export const onckieAallocation = (params) => { return axios.post('/park/ap-appointment/pointment/onckieAallocation', params) } //放号天