<template>
    <div style="width:100%">
        <!-- 头部 -->
        <el-row>
            <el-button type="primary">查询</el-button>
            <el-button type="warning">查看</el-button>
        </el-row>

        <!-- 筛选条件 -->
        <div>
            <!-- 第一行 -->
            <div class="oneRow">
                <span class="name">客户名称:</span>
                <el-input class="input" v-model="inputName" placeholder="请输入客户名称" clearable></el-input>
                <span class="name">联系人:</span>
                <el-input class="input" v-model="inputMan" placeholder="请输入联系人" clearable></el-input>
                <span class="name">联系电话:</span>
                <el-input class="input" v-model="inputPhone" placeholder="请输入联系电话" clearable></el-input>
                <span class="name">地区:</span>
                <el-select
                    class="downBox input"
                    v-model="valueProvince"
                    @change="changeProvince"
                    placeholder="请选择"
                >
                    <el-option v-for="item in options" :key="item.SA_Code" :value="item.SA_Name"></el-option>
                </el-select>
                <el-select
                    class="downBox input"
                    v-model="valueCity"
                    @change="changeCity"
                    placeholder="请选择"
                >
                    <el-option
                        v-for="item in optionsCity"
                        :key="item.SA_Code"
                        :value="item.SA_Name"
                    ></el-option>
                </el-select>
            </div>
            <!-- 第二行 -->
            <div class="twoRow">
                <span class="name">客户状态:</span>
                <el-select class="dd" v-model="value1" multiple placeholder="请选择">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>

<script>
import { getapi } from '../../../utils/api.js';
export default {
    data() {
        return {
            inputName: '', //客户名称
            inputMan: '', //联系人
            inputPhone: '', //联系电话
            valueProvince: '全国', //省份下拉框值
            valueCity: '全部', //城市下拉框值
            options: [], //省份下拉框内容
            optionsCity: [], //城市下拉内容
            SA_Code: 0, //城市编码
            value1: [],
            options1: [  //客户状态
                {
                    value: '已审',
                },
                {
                    value: '退订',
                },
                {
                    value: '退费',
                },
            ],
        };
    },
    methods: {
        //获取省份
        getprovince: function(Province) {
            var params = {
                SA_PCode: Province,
                SA_Kind: 0
            };
            getapi.GetArea(params).then(res => {
                this.options = res;
            });
        },

        //点击省份下拉框
        changeProvince(v) {
            this.valueCity = '全部';
            this.options.map(item => {
                if (item.SA_Name == v) {
                    this.SA_Code = item.SA_Code;
                }
            });
            var paramsCity = {
                SA_PCode: this.SA_Code,
                SA_Kind: 1
            };
            getapi.GetArea(paramsCity).then(res => {
                this.optionsCity = res;
            });
        },

        //点击城市下拉框
        changeCity(v) {
            console.log(this.valueProvince);
            console.log(this.valueCity);
            // console.log(v);
        }
    },
    created() {
        this.getprovince('D0000001');
    }
};
</script>

<style lang="scss" scoped>
.input {
    width: 200px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 20px;
}
.twoRow{
    margin-top: 20px;
}
.dd{
    width: 300px;
    margin-left: 10px;
}
</style>