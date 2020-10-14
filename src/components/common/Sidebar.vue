<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                //实时保
                {
                    icon: 'el-icon-lx-home',
                    index: '0',
                    title: '实时保', 
                    subs: [
                        {
                            index: 'SSBdataFiltering',
                            title: '数据筛选'
                        },
                        {
                            index: 'SSByxAdministration',
                            title: '营销管理中心'
                        },
                        {
                            index: 'SSBshAdministration',
                            title: '审核管理中心'
                        },
                        {
                            index: 'SSBkfAdministration',
                            title: '客服管理中心'
                        },
                        {
                            index: 'SSBjfProcessing',
                            title: '计费处理'
                        },
                    ]
                },
                //维权通
                {
                    icon: 'el-icon-lx-home',
                    index: '1',
                    title: '维权通',
                    subs: [
                        {
                            index: 'WQTdataFiltering',
                            title: '数据筛选'
                        },
                        {
                            index: 'WQTyxAdministration',
                            title: '营销管理中心'
                        },
                        {
                            index: 'WQTshAdministration',
                            title: '审核管理中心'
                        },
                        {
                            index: 'WQTkfAdministration',
                            title: '客服管理中心'
                        },
                    ]
                },
                //智慧315
                {
                    icon: 'el-icon-lx-home',
                    index: '2',
                    title: '智慧315',
                    subs: [
                        {
                            index: 'ytj',
                            title: '易调解'
                        },
                        
                    ]
                },
                //诚信通
                {
                    icon: 'el-icon-lx-home',
                    index: '3',
                    title: '诚信通',
                    subs: [
                        {
                            index: 'CXTdataFiltering',
                            title: '数据筛选'
                        },
                        {
                            index: 'CXTyxAdministration',
                            title: '营销管理中心'
                        },
                        {
                            index: 'CXTshAdministration',
                            title: '审核管理中心'
                        },
                        {
                            index: 'CXTkfAdministration',
                            title: '客服管理中心'
                        },
                    ]
                },
                //民企云
                {
                    icon: 'el-icon-lx-home',
                    index: '4',
                    title: '民企云',
                    subs: [
                        {
                            index: 'MQYdataFiltering',
                            title: '数据筛选'
                        },
                        {
                            index: 'MQYyxAdministration',
                            title: '营销管理中心'
                        },
                        {
                            index: 'MQYshAdministration',
                            title: '审核管理中心'
                        },
                        {
                            index: 'MQYkfAdministration',
                            title: '客服管理中心'
                        },
                    ]
                },
                //综合查询
                {
                    icon: 'el-icon-lx-home',
                    index: '5',
                    title: '综合查询',
                    subs: [
                        {
                            index: 'ZHCXcomplaintInquiry',
                            title: '客户单查询'
                        },
                        {
                            index: 'ZHCXdataQuery',
                            title: '有效数据查询'
                        },
                        {
                            index: 'ZHCXcustomerOrderInquiry',
                            title: '投诉查询'
                        },
                    ]
                },
                //资讯信息维护
                {
                    icon: 'el-icon-lx-home',
                    index: '6',
                    title: '资讯信息维护',
                    subs: [
                        {
                            index: 'ZXXXWHinformationMaintenance',
                            title: '资讯维护'
                        },
                        {
                            index: 'ZXXXWHinformationClassification',
                            title: '信息分类设置'
                        },
                        
                    ]
                },
                //数据筛选设置
                {
                    icon: 'el-icon-lx-home',
                    index: '7',
                    title: '数据筛选设置',
                    subs: [
                        {
                            index: 'SJSXSZblacklistSettings',
                            title: '黑名单设置'
                        },
                        {
                            index: 'SJSXSZkeywordSetting',
                            title: '关键字设置'
                        },
                        {
                            index: 'SJSXSZsegmentSetting',
                            title: '号段设置'
                        },
                    ]
                },
                //系统设置
                {
                    icon: 'el-icon-lx-home',
                    index: '8',
                    title: '系统设置',
                    subs: [
                        {
                            index: 'XTSZsystemSettings',
                            title: '用户设置'
                        },
                    ]
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
