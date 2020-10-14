<template>
    <div class="">
        <el-row style="margin-bottom:25px;margin-top:10px">
            <el-button type="primary" icon="el-icon-search" @click="searchlist">查询</el-button>
            <el-button type="success" icon="el-icon-download">导入</el-button>
            <el-button type="info" icon="el-icon-document">筛选</el-button>
            <el-button type="warning" icon="el-icon-edit">修改</el-button>
            <el-button type="danger" icon="el-icon-remove-outline">无效数据</el-button>
            <el-button type="danger" icon="el-icon-finished">标记为已使用</el-button>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
            <el-button type="danger" icon="el-icon-search">查看</el-button>
        </el-row> 
        <el-row>
            <el-col :span="9">
                <div class="demo-input-suffix">
                    属性方式：
                    <el-select @change="changecity" v-model="vprovince" placeholder="请选择">
                        <el-option
                        v-for="(item,index) in province"
                        :key="index"
                        :label="item.SA_Name"
                        :value="item.SA_Code">
                        </el-option>
                    </el-select>
                    <el-select v-model="vcity" placeholder="请选择" style="margin-left:20px">
                        <el-option
                        v-for="(item,index) in city"
                        :key="index"
                        :label="item.SA_Name"
                        :value="item.SA_Code">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="demo-input-suffix" id="ly">
                    提供来源：
                    <el-input v-model="inputvalue" placeholder="请输入来源"></el-input>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="demo-input-suffix">
                    提供时间：
                     <el-date-picker
                        v-model="value2"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        @change="getdate"
                        :picker-options="pickerOptions">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;margin-top:30px">
            <el-table-column
            type="index"
            width="50">
            </el-table-column>
            <el-table-column
            property="OD_Code"
            label="编码"
            width="120">
            </el-table-column>
            <el-table-column
            property="OD_Provider"
            label="提供来源"
            width="120">
            </el-table-column>
            <el-table-column
            property="OD_ProviderTime"
            label="提供时间">
            </el-table-column>
             <el-table-column
            property="OD_CityName"
            label="地区">
            </el-table-column>
             <el-table-column
            property="OD_TotalCount"
            label="数据总条数">
                <template slot-scope="scope">
                    <el-link @click="zxlist(scope.row.OD_Code,1)" type="primary">{{scope.row.OD_TotalCount}}</el-link>
                </template>
            </el-table-column>
             <el-table-column
            property="OD_ValidCount"
            label="有效条数">
                 <template slot-scope="scope">
                    <el-link @click="zxlist(scope.row.OD_Code,2)" type="primary">{{scope.row.OD_ValidCount}}</el-link>
                </template>
            </el-table-column>
             <el-table-column
            property="OD_NoValidCount"
            label="无效条数">
                 <template slot-scope="scope">
                    <el-link @click="zxlist(scope.row.OD_Code,3)" type="primary">{{scope.row.OD_NoValidCount}}</el-link>
                </template>
            </el-table-column>
             <el-table-column
            property="OD_AlreadyUse"
            label="营销成功">
            </el-table-column>
            <el-table-column
            prop="tag"
            label="状态">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.OD_State === '已使用' ? 'success' :(scope.row.OD_State === '已筛选' ? 'primary':'danger')"
                disable-transitions>{{scope.row.OD_State}}</el-tag>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            style='background-color:#fff'
            v-if="tableDataTotalCount>0"
            @size-change="handleSizeChange"
            @current-change="handleCurrent"
            :current-page="currentPage"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableDataTotalCount">
         </el-pagination>

        <el-dialog id="dialog" :title="title" :visible.sync="dialogTableVisible">
            <el-button class="export" type="success" icon="el-icon-upload2">导出</el-button>
            <el-table
                :data="tableData"
                height="500px"
                border
                style="width: 100%">
                <el-table-column
                type="index"
                width="50">
                </el-table-column>
                <el-table-column
                property="OD_Code"
                label="客户名称">
                </el-table-column>
                <el-table-column
                property="OD_Provider"
                label="座机号码">
                </el-table-column>
            </el-table>
            <el-pagination
                style='background-color:#fff'
                v-if="tableDataTotalCount>0"
                @size-change="handleSizeChange"
                @current-change="handleCurrent"
                :current-page="currentPage"
                :page-size="20"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableDataTotalCount">
             </el-pagination>
        </el-dialog>
    </div>
</template>

<script>
import {getapi} from '../../../utils/api'
import {formatDateTime} from '../../../utils/formatedate.js'
    export default {
        data(){
            return{
                province:[],
                city:[],
                vprovince:"",
                vcity:"",
                value2:"",
                begindate:"",
                enddate:"",
                inputvalue:"",
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                tableData:[],
                tableDataTotalCount:0,
                background:"#FFF",
                currentPage:1,
                searchp:{
                    Provider:this.inputvalue,
                    Province:this.vprovince,
                    City:this.vcity,
                    ProDateStart:this.begindate,
                    ProDateEnd:this.enddate,
                    PageIndex:1,
                    PageNum:20,
                },
                dialogTableVisible:false,
                title:"明细数据"
            } 
        },

        methods:{
            //获取省份
            getprovince:function(){
                var params={
                    SA_PCode:"D0000001",
                    SA_Kind:0
                }
                getapi.GetArea(params).then(res => {
                    this.province=res
                });
            },
            //获取城市
            changecity:function(e){
                this.vcity='';
                var params={
                    SA_PCode:e,
                    SA_Kind:1
                }
                getapi.GetArea(params).then(res => {
                    this.city=res
                });
            },
            //获取日期
            getdate:function(e){
                this.begindate=formatDateTime(e[0]);
                this.enddate=formatDateTime(e[1])
            },
            //查询数据
            searchlist:function(){
                getapi.GetSSBOriginalData(this.searchp).then(res=>{
                    console.log(JSON.parse(res.Data).Rows)
                    if(res.Status==200){
                        this.tableData=JSON.parse(res.Data).Rows;
                        this.tableDataTotalCount=JSON.parse(res.Data).TotalCount;
                    }
                })
            },
            
            handleSizeChange:function(e){
                this.searchp.PageNum=e;
                this.searchlist()
            },

            handleCurrent:function(e){
                 this.searchp.PageIndex=e;
                this.searchlist()
            },

            handleCurrentChange(val) {
                this.currentRow = val;
            },

            zxlist:function(e,num){
                if(num=2){
                    this.title="有效数据"
                }else if(num=3){
                    this.title="无效数据"
                }else{

                }
                this.dialogTableVisible=true
            }


        },

        mounted() {
            this.getprovince();
            this.searchlist();
        }
    }

</script>

<style lang="scss" scoped>
#ly .el-input{
    width: 82%
}
.el-table__body tr.current-row>td {
    background-color: #FCEF9A;
}
.box-card {
    width: 1480px;
  }
 .el-dialog >>> .el-dialog__body{
     padding-top: 0px !important;
 }
 .export{
     margin-bottom: 10px
 } 
</style>