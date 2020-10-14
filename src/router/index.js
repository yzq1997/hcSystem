import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '全国支撑平台' },
            children: [
                //实时保
                {
                    path: '/SSBdataFiltering',
                    component: () => import('../components/page/ssb/DataFiltering.vue'),
                    meta: { title: '数据筛选' }
                },
                {
                    path: '/SSByxAdministration',
                    component: () => import('../components/page/ssb/yxAdministration.vue'),
                    meta: { title: '营销管理中心' }
                },
                {
                    path: '/SSBshAdministration',
                    component: () => import('../components/page/ssb/shAdministration.vue'),
                    meta: { title: '审核管理中心' }
                },
                {
                    path: '/SSBkfAdministration',
                    component: () => import('../components/page/ssb/kfAdministration.vue'),
                    meta: { title: '客服管理中心' }
                },
                {
                    path: '/SSBjfProcessing',
                    component: () => import('../components/page/ssb/jfProcessing.vue'),
                    meta: { title: '计费处理' }
                },
                //维权通
                {
                    path: '/WQTdataFiltering',
                    component: () => import('../components/page/wqt/DataFiltering.vue'),
                    meta: { title: '数据筛选' }
                },
                {
                    path: '/WQTyxAdministration',
                    component: () => import('../components/page/wqt/yxAdministration.vue'),
                    meta: { title: '营销管理中心' }
                },
                {
                    path: '/WQTshAdministration',
                    component: () => import('../components/page/wqt/shAdministration.vue'),
                    meta: { title: '审核管理中心' }
                },
                {
                    path: '/WQTkfAdministration',
                    component: () => import('../components/page/wqt/kfAdministration.vue'),
                    meta: { title: '客服管理中心' }
                },
                //智慧315
                {
                    path: '/ytj',
                    component: () => import('../components/page/zh315/ytj.vue'),
                    meta: { title: '数据筛选' }
                },
                //诚信通
                {
                    path: '/CXTdataFiltering',
                    component: () => import('../components/page/wqt/DataFiltering.vue'),
                    meta: { title: '数据筛选' }
                },
                {
                    path: '/CXTyxAdministration',
                    component: () => import('../components/page/wqt/yxAdministration.vue'),
                    meta: { title: '营销管理中心' }
                },
                {
                    path: '/CXTshAdministration',
                    component: () => import('../components/page/wqt/shAdministration.vue'),
                    meta: { title: '审核管理中心' }
                },
                {
                    path: '/CXTkfAdministration',
                    component: () => import('../components/page/wqt/kfAdministration.vue'),
                    meta: { title: '客服管理中心' }
                },
                //民企云
                {
                    path: '/MQYdataFiltering',
                    component: () => import('../components/page/mqy/DataFiltering.vue'),
                    meta: { title: '数据筛选' }
                },
                {
                    path: '/MQYyxAdministration',
                    component: () => import('../components/page/mqy/yxAdministration.vue'),
                    meta: { title: '营销管理中心' }
                },
                {
                    path: '/MQYshAdministration',
                    component: () => import('../components/page/mqy/shAdministration.vue'),
                    meta: { title: '审核管理中心' }
                },
                {
                    path: '/MQYkfAdministration',
                    component: () => import('../components/page/mqy/kfAdministration.vue'),
                    meta: { title: '客服管理中心' }
                },
                //综合查询
                {
                    path: '/ZHCXcomplaintInquiry',
                    component: () => import('../components/page/zhcx/complaintInquiry.vue'),
                    meta: { title: '客户单查询' }
                },
                {
                    path: '/ZHCXdataQuery',
                    component: () => import('../components/page/zhcx/dataQuery.vue'),
                    meta: { title: '有效数据查询' }
                },
                {
                    path: '/ZHCXcustomerOrderInquiry',
                    component: () => import('../components/page/zhcx/customerOrderInquiry.vue'),
                    meta: { title: '投诉查询' }
                },
                //资讯信息维护
                {
                    path: '/ZXXXWHinformationMaintenance',
                    component: () => import('../components/page/zxxxwh/informationMaintenance.vue'),
                    meta: { title: '资讯维护' }
                },
                {
                    path: '/ZXXXWHinformationClassification',
                    component: () => import('../components/page/zxxxwh/informationClassification.vue'),
                    meta: { title: '信息分类设置' }
                },
                //数据筛选设置
                {
                    path: '/SJSXSZblacklistSettings',
                    component: () => import('../components/page/sjsxsz/blacklistSettings.vue'),
                    meta: { title: '黑名单设置' }
                },
                {
                    path: '/SJSXSZkeywordSetting',
                    component: () => import('../components/page/sjsxsz/keywordSetting.vue'),
                    meta: { title: '关键字设置' }
                },
                {
                    path: '/SJSXSZsegmentSetting',
                    component: () => import('../components/page/sjsxsz/segmentSetting.vue'),
                    meta: { title: '号段设置' }
                },
                //系统设置
                {
                    path: '/XTSZsystemSettings',
                    component: () => import('../components/page/xtsz/systemSettings.vue'),
                    meta: { title: '用户设置' }
                },
                


            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        
    ]
});
