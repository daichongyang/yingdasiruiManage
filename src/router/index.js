import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const login = () =>
    import ('@/components/login');
const home = () =>
    import ('@/components/home');
const index = () =>
    import ('@/components/index');
const formApart = () =>
    import ('@/components/form_apart');

// 用户中心
const manager_org = () =>
    import ('@/components/manager/manager_org');
const manager_station = () =>
    import ('@/components/manager/manager_station');
const manager_manager = () =>
    import ('@/components/manager/manager_manager');
// 右侧下拉部分
const personalCenter = () =>
    import ('@/components/extraOptions/personalCenter');
const messageCenter = () =>
    import ('@/components/extraOptions/messageCenter');
const middleMoudle = () =>
    import ('@/components/extraOptions/middleMoudle');
const payConfiguration = () =>
    import ('@/components/extraOptions/payConfiguration');

// 系统配置
const sys_log = () =>
    import ('@/components/sysManage/sys_log');
const auth_role = () =>
    import ('@/components/sysManage/sys_role');
const auth_manager = () =>
    import ('@/components/sysManage/sys_manager');

// 基础配置
const xq_info = () =>
    import ('@/components/configuration/xq_info');
const base_section = () =>
    import ('@/components/configuration/base_section');
const base_house = () =>
    import ('@/components/configuration/base_house');
// 在线生活
const online_merchat = () =>
    import ('@/components/onlineLife/online_merchat');
const online_shop_info = () =>
    import ('@/components/onlineLife/online_shop_info');
const online_shop_intrdouce = () =>
    import ('@/components/onlineLife/online_shop_intrdouce');
const online_shop_advert = () =>
    import ('@/components/onlineLife/online_shop_advert');

// 云门禁
const acs_dev1 = () =>
    import ('@/components/yunmenjin/acs_dev1');
const acs_dev = () =>
    import ('@/components/yunmenjin/acs_dev');
const deviceInfor = () =>
    import ('@/components/yunmenjin/deviceInfor');
const addAndUpdate = () =>
    import ('@/components/yunmenjin/addAndUpdate');
const acs_door_open = () =>
    import ('@/components/yunmenjin/acs_door_open');
const acs_auth_inout_log = () =>
    import ('@/components/yunmenjin/acs_auth_inout_log');
const acs_auth_init = () =>
    import ('@/components/yunmenjin/acs_auth_init');
const acs_auth_user = () =>
    import ('@/components/yunmenjin/acs_auth_user');
const acs_auth_temp = () =>
    import ('@/components/yunmenjin/acs_auth_temp');
const acs_auth_entity = () =>
    import ('@/components/yunmenjin/acs_auth_entity');
const acs_auth_temp_log = () =>
    import ('@/components/yunmenjin/acs_auth_temp_log');

// 管家中心
const house_user_seneschal_owner = () =>
    import ('@/components/yezhuManage/house_user_seneschal_owner');
const house_user_seneschal_sub = () =>
    import ('@/components/yezhuManage/house_user_seneschal_sub');
const house_user_householder_owner = () =>
    import ('@/components/yezhuManage/house_user_householder_owner');
const house_user_householder_sub = () =>
    import ('@/components/yezhuManage/house_user_householder_sub');

// 对讲
const intercom_line_config = () =>
    import ('@/components/duijiang/intercom_line_config');
const intercom_number_config = () =>
    import ('@/components/duijiang/intercom_number_config');
const intercom_log = () =>
    import ('@/components/duijiang/intercom_log');

// 传统对讲
const intercom_tradition_door_log = () =>
    import ('@/components/duijiang/intercom_tradition_door_log');
const intercom_tradition_alarm_log = () =>
    import ('@/components/duijiang/intercom_tradition_alarm_log');
const intercom_tradition_call_log = () =>
    import ('@/components/duijiang/intercom_tradition_call_log');
const intercom_tradition_server_monitor = () =>
    import ('@/components/duijiang/intercom_tradition_server_monitor');
const intercom_tradition_server_accout = () =>
    import ('@/components/duijiang/intercom_tradition_server_accout');
const intercom_tradition_host = () =>
    import ('@/components/duijiang/intercom_tradition_host');
const intercom_tradition_server = () =>
    import ('@/components/duijiang/intercom_tradition_server');

// 云智能系统
const iot_project_cofig = () =>
    import ('@/components/yunzhineng/iot_project_cofig');
const iot_depot = () =>
    import ('@/components/yunzhineng/iot_depot');
const iot_global_cofig = () =>
    import ('@/components/yunzhineng/iot_global_cofig');
const iot_smart_home = () =>
    import ('@/components/yunzhineng/iot_smart_home');

const resource_management = () =>
    import ('@/components/wzlcjl');
const cggl = () =>
    import ('@/components/cggl');
const service_inspection = () =>
    import ('@/components/fangwuxuncha2');
const addFangwuxuncha = () =>
    import ('@/components/addFangwuxuncha');
const dcjl = () =>
    import ('@/components/dcjl');
const auth_sys_log = () =>
    import ('@/components/xtrz');
const ggtz = () =>
    import ('@/components/ggtz');
const ggtz2 = () =>
    import ('@/components/ggtz2');
const service_repair = () =>
    import ('@/components/bxby');
const cggl_tuxing = () =>
    import ('@/components/cggl_tuxing');
const facility_light = () =>
    import ('@/components/znzm');
const zhbb = () =>
    import ('@/components/zhbb');
const dbsx = () =>
    import ('@/components/dbsx');
const facility_park = () =>
    import ('@/components/zntc');
const facility_camera = () =>
    import ('@/components/spjk');
const facility_irrigation = () =>
    import ('@/components/spjk');
const facility_hydrology = () =>
    import ('@/components/swjc');
const ips_broadcast = () =>
    import ('@/components/guangbo');
const service_inspection_log = () =>
    import ('@/components/fangwuxuncha1');
const fangwuxunchaDetaul = () =>
    import ('@/components/fangwuxunchaDetaul');
const fwxcPhone = () =>
    import ('@/components/fwxcPhone');
const fwxcErr = () =>
    import ('@/components/fwxcErr');
const finance_statements = () =>
    import ('@/components/lsmx');
//园区场馆-公园管理
const park_management = () =>
    import ('@/components/gongyuanjieshao/gongyuanjieshao');
//园区场馆-景点管理
const park_tourist = () =>
    import ('@/components/gongyuanjieshao/gongyuanremenjingdian');
//周边介绍
const service_periphery_presentation = () =>
    import ('@/components/gongyuanjieshao/zhoubianjieshao');

const service_advice = () =>
    import ('@/components/property/property_complaint_suggestion');
//信息发布通知
const ips_information = () =>
    import ('@/components/xinxifabu/ips_property');
//通讯
const ips_notice = () =>
    import ('@/components/xinxifabu/ips_device_advertising');
//交通介绍
const service_traffic = () =>
    import ('@/components/xinxifabu/jiaotongjieshao');
//游客管理
const personnel_tourist = () =>
    import ('@/components/renyuanguanli/youkeguanli');
//工作人员管理
const personnel_work = () =>
    import ('@/components/renyuanguanli/gongzuorenyuan');
//路线导航
const park_way_plan = () =>
    import ('@/components/gongyuanjieshao/luxiandaohang');
//智能设备查询
const resource_device_management = () =>
    import ('@/components/zhinengshebei');
//资产归类
const configPeizhi = () =>
    import ('@/components/extraOptions/configPeizhi');
//app广告
const ips_app_banner = () =>
    import ('@/components/xinxifabu/ips_app_banner');

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: login
        }, {
            path: '/',
            name: '',
            component: home,
            children: [{
                    path: '/index',
                    name: 'index',
                    component: index,
                },

                {
                    path: '/formApart',
                    name: '',
                    component: formApart,
                    children: [{
                            path: '/acs_dev',
                            name: '初始化设备',
                            component: acs_dev,
                            meta: {
                                id: 15
                            }
                        },
                        {
                            path: '/configPeizhi',
                            name: '资产归类',
                            component: configPeizhi,
                        },
                        {
                            path: '/service_inspection_log',
                            name: '巡查记录',
                            component: service_inspection_log,
                        },
                        {
                            path: '/park_way_plan',
                            name: '路线导航',
                            component: park_way_plan,
                        },
                        {
                            path: '/resource_device_management',
                            name: '智能设备查询',
                            component: resource_device_management,
                        },
                        {
                            path: '/fangwuxunchaDetaul',
                            name: '巡查记录详情',
                            component: fangwuxunchaDetaul,
                        },

                        {
                            path: '/ips_information',
                            name: '通讯',
                            component: ips_information,
                        },
                        {
                            path: '/ips_app_banner',
                            name: 'app广告',
                            component: ips_app_banner,
                        },
                        {
                            path: '/service_traffic',
                            name: '交通介绍',
                            component: service_traffic,
                        },
                        {
                            path: '/personnel_tourist',
                            name: '游客管理',
                            component: personnel_tourist,
                        },
                        {
                            path: '/facility_irrigation',
                            name: '森林防空检测',
                            component: facility_irrigation,
                        },

                        {
                            path: '/personnel_work',
                            name: '工作人员管理',
                            component: personnel_work,
                        },
                        {
                            path: '/ips_notice',
                            name: '通知',
                            component: ips_notice,
                        },

                        {
                            path: '/fwxcPhone',
                            name: '照片及电子签名凭证',
                            component: fwxcPhone,
                        },
                        {
                            path: '/fwxcErr',
                            name: '异常处理进度',
                            component: fwxcErr,
                        },
                        {
                            path: '/service_advice',
                            name: '投诉建议',
                            component: service_advice,
                        },
                        {
                            path: '/dbsx',
                            name: '待办事项',
                            component: dbsx,
                        },
                        {
                            path: '/facility_camera',
                            name: '视频监控',
                            component: facility_camera,
                        },
                        {
                            path: '/facility_hydrology',
                            name: '水文监测',
                            component: facility_hydrology,
                        },
                        {
                            path: '/ips_broadcast',
                            name: '广播',
                            component: ips_broadcast,
                        },
                        {
                            path: '/ggtz2',
                            name: '广告发布',
                            component: ggtz2,
                        },
                        {
                            path: '/finance_statements',
                            name: '流水明细',
                            component: finance_statements,
                        },
                        {
                            path: '/service_repair',
                            name: '报修',
                            component: service_repair,
                        },
                        {
                            path: '/cggl_tuxing',
                            name: '场馆管理',
                            component: cggl_tuxing,
                        },
                        {
                            path: '/facility_park',
                            name: '智能停车',
                            component: facility_park,
                        },
                        {
                            path: '/zhbb',
                            name: '综合报表',
                            component: zhbb,
                        },
                        {
                            path: '/facility_light',
                            name: '智能照明',
                            component: facility_light,
                        },
                        {
                            path: '/cggl',
                            name: '场馆管理',
                            component: cggl,
                        },
                        {
                            path: '/auth_sys_log',
                            name: '系统日志',
                            component: auth_sys_log,
                        },
                        {
                            path: '/ggtz',
                            name: '公告通知',
                            component: ggtz,
                        },
                        {
                            path: '/dcjl',
                            name: '导出记录',
                            component: dcjl,
                        },
                        {
                            path: '/addFangwuxuncha',
                            name: '新增巡查任务',
                            component: addFangwuxuncha,
                        },
                        {
                            path: '/service_inspection',
                            name: '巡查任务',
                            component: service_inspection,
                        },
                        {
                            path: '/resource_management',
                            name: '资源管理',
                            component: resource_management,
                        },
                        {
                            path: '/park_management',
                            name: '公园介绍',
                            component: park_management,
                        },
                        {
                            path: '/park_tourist',
                            name: '公园热门景点介绍',
                            component: park_tourist,
                        },
                        {
                            path: '/service_periphery_presentation',
                            name: '周边介绍',
                            component: service_periphery_presentation,
                        },
                        {
                            path: '/acs_dev1',
                            name: '可选设备',
                            component: acs_dev1,
                            meta: {
                                id: 15
                            }
                        },
                        {
                            path: '/acs_auth_init',
                            name: '初始化权限',
                            component: acs_auth_init,
                            meta: {
                                id: 18
                            }
                        },
                        {
                            path: '/acs_auth_user',
                            name: '业主成员权限',
                            component: acs_auth_user,
                            meta: {
                                id: 19
                            }
                        },
                        {
                            path: '/acs_auth_temp',
                            name: "临时授权",
                            component: acs_auth_temp,
                            meta: {
                                id: 25
                            }
                        },
                        {
                            path: '/acs_auth_entity',
                            name: "实体卡授权",
                            component: acs_auth_entity,
                            meta: {
                                id: 27
                            }
                        },
                        {
                            path: '/acs_auth_temp_log',
                            name: "授权查看",
                            component: acs_auth_temp_log,
                            meta: {
                                id: 27
                            }
                        },
                        {
                            path: '/iot_smart_home',
                            name: '智能家庭',
                            component: iot_smart_home,
                            meta: {
                                id: 56
                            }
                        },
                        {
                            path: '/iot_global_cofig',
                            name: '全局参数',
                            component: iot_global_cofig,
                            meta: {
                                id: 55
                            }
                        },
                        {
                            path: '/iot_depot',
                            name: '硬件入库',
                            component: iot_depot,
                            meta: {
                                id: 61
                            }
                        },
                        {
                            path: '/iot_project_cofig',
                            name: '工程参数',
                            component: iot_project_cofig,
                            meta: {
                                id: 54
                            }
                        },
                        {
                            path: '/auth_role',
                            name: '角色管理',
                            component: auth_role,
                            meta: {
                                id: 50
                            }
                        },
                        {
                            path: '/intercom_tradition_host',
                            name: '主机参数',
                            component: intercom_tradition_host,
                            meta: {
                                id: 33
                            }
                        },
                        {
                            path: '/intercom_tradition_server',
                            name: '媒体服务器参数',
                            component: intercom_tradition_server,
                            meta: {
                                id: 34
                            }
                        },
                        {
                            path: '/intercom_tradition_server_accout',
                            name: '媒体服务器账号',
                            component: intercom_tradition_server_accout,
                            meta: {
                                id: 35
                            }
                        },
                        {
                            path: '/intercom_tradition_server_monitor',
                            name: '主机状态实时监控',
                            component: intercom_tradition_server_monitor,
                            meta: {
                                id: 36
                            }
                        },
                        {
                            path: '/intercom_tradition_alarm_log',
                            name: '报警日志',
                            component: intercom_tradition_alarm_log,
                            meta: {
                                id: 38
                            }
                        },
                        {
                            path: '/intercom_tradition_call_log',
                            name: '通话日志',
                            component: intercom_tradition_call_log,
                            meta: {
                                id: 37
                            }
                        },
                        {
                            path: '/intercom_tradition_door_log',
                            name: '开门日志',
                            component: intercom_tradition_door_log,
                            meta: {
                                id: 39
                            }
                        },
                        {
                            path: '/sys_log',
                            name: '系统日志',
                            component: sys_log,
                            meta: {
                                id: 51
                            }
                        },
                        {
                            path: '/auth_manager',
                            name: '管理员管理',
                            component: auth_manager,
                            meta: {
                                id: 49
                            }
                        },
                        {
                            path: '/intercom_log',
                            name: '对讲日志',
                            component: intercom_log,
                            meta: {
                                id: 40
                            }
                        },
                        {
                            path: '/intercom_number_config',
                            name: '对讲号配置',
                            component: intercom_number_config,
                            meta: {
                                id: 30
                            }
                        },
                        {
                            path: '/intercom_line_config',
                            name: '线路配置',
                            component: intercom_line_config,
                            meta: {
                                id: 41
                            }
                        },
                        {
                            path: '/acs_door_open',
                            name: '远程开门',
                            component: acs_door_open,
                            meta: {
                                id: 16
                            }
                        },
                        {
                            path: '/acs_auth_inout_log',
                            name: '门禁日志',
                            component: acs_auth_inout_log,
                            meta: {
                                id: 28
                            }
                        },
                        {
                            path: '/house_user_householder_owner',
                            name: '工作人员',
                            component: house_user_householder_owner,
                            meta: {
                                id: 46
                            }
                        },
                        {
                            path: '/house_user_householder_sub',
                            name: '游客信息',
                            component: house_user_householder_sub,
                            meta: {
                                id: 47
                            }
                        },
                        {
                            path: '/house_user_seneschal_owner',
                            name: '物业主管',
                            component: house_user_seneschal_owner,
                            meta: {
                                id: 43
                            }
                        },
                        {
                            path: '/house_user_seneschal_sub',
                            name: '物业成员',
                            component: house_user_seneschal_sub,
                            meta: {
                                id: 44
                            }
                        },
                        {
                            path: '/addAndUpdate',
                            name: '云门禁添加和修改',
                            component: addAndUpdate,
                        },
                        {
                            path: '/manager_org',
                            name: '组织管理',
                            component: manager_org,
                            meta: {
                                id: 2
                            }
                        },
                        {
                            path: '/deviceInfor',
                            name: 'ncu设备',
                            component: deviceInfor,
                        },
                        {
                            path: '/manager_station',
                            name: '岗位管理',
                            component: manager_station,
                            meta: {
                                id: 3
                            }
                        },
                        {
                            path: '/manager_manager',
                            name: '用户管理',
                            component: manager_manager,
                            meta: {
                                id: 4
                            }
                        },
                        {
                            path: '/personalCenter',
                            name: '个人中心',
                            component: personalCenter,
                        },
                        {
                            path: '/messageCenter',
                            name: '消息中心',
                            component: messageCenter,
                        },
                        {
                            path: '/xq_info',
                            name: '小区管理',
                            component: xq_info,
                            meta: {
                                id: 8
                            }
                        },
                        {
                            path: '/base_house',
                            name: '房号管理',
                            component: base_house,
                            meta: {
                                id: 7
                            }
                        },
                        {
                            path: '/base_section',
                            name: '区域管理',
                            component: base_section,
                            meta: {
                                id: 6
                            }
                        },
                        {
                            path: '/online_merchat',
                            name: '入住商家管理',
                            component: online_merchat,
                            meta: {
                                id: 10
                            }
                        },
                        {
                            path: '/online_shop_info',
                            name: '商家信息管理',
                            component: online_shop_info,
                            meta: {
                                id: 11
                            }
                        },
                        {
                            path: '/online_shop_intrdouce',
                            name: '推荐商家管理',
                            component: online_shop_intrdouce,
                            meta: {
                                id: 12
                            }
                        },
                        {
                            path: '/online_shop_advert',
                            name: '商家广告管理',
                            component: online_shop_advert,
                            meta: {
                                id: 13
                            }
                        },
                        {
                            path: '/middleMoudle',
                            name: '',
                            component: middleMoudle,
                            children: [{
                                path: '/payConfiguration',
                                name: '支付配置',
                                component: payConfiguration,
                            }, ]
                        },

                    ]
                }

            ]
        }

    ]
})