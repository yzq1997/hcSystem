<template>
    <div style="width:100%">
        <!-- 头部 -->
        <el-row>
            <el-button type="primary" @click="query()">查询</el-button>
            <el-button type="success" @click="dialogVisibleSave = true">新建</el-button>
            <el-button type="warning" @click="modify()">修改</el-button>
            <el-button type="danger" @click="deleteUser()">删除</el-button>
        </el-row>

        <!-- 新建用户弹框 -->
        <el-dialog
            title="新增用户信息"
            :visible.sync="dialogVisibleSave"
            width="50%"
            :before-close="handleCloseSave"
        >
            <el-button type="primary" @click="saveData()">保存</el-button>
            <div class="newDataBox">
                <div class="leftNewDataBox">
                    <div class="smallBox">
                        <div class="TKspan">
                            用户名
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputUserName" placeholder="请输入用户名"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            密码
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputPassword" placeholder="请输入密码"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            姓名
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputName" placeholder="请输入姓名"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">性别</div>
                        <el-select v-model="valueSex" placeholder="请选择" class="TKinput">
                            <el-option v-for="item in sex" :key="item.value" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">年龄</div>
                        <el-input class="TKinput" v-model="inputAge" placeholder="请输入年龄"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            手机号码
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputPhone" placeholder="请输入手机号码"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">职务</div>
                        <el-input class="TKinput" v-model="inputPost" placeholder="请输入职务"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">入职时间</div>
                        <div class="block">
                            <el-date-picker
                                class="TKinput"
                                v-model="entryTime"
                                type="date"
                                placeholder="选择日期"
                            ></el-date-picker>
                        </div>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            工作地点
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputPlace" placeholder="请输入工作地点"></el-input>
                    </div>
                </div>
                <div class="rightNewDataBox">
                    <el-tree
                        :data="data1"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :props="defaultProps"
                    ></el-tree>
                </div>
            </div>
        </el-dialog>

        <!-- 修改用户弹窗 -->
        <el-dialog
            title="修改用户信息"
            :visible.sync="dialogVisibleModify"
            width="50%"
            :before-close="handleCloseModify"
        >
            <el-button type="primary" @click="modifyData()">保存</el-button>
            <div class="modifyData">
                <div class="leftNewDataBox">
                    <div class="smallBox">
                        <div class="TKspan">
                            用户名
                            <span>*</span>
                        </div>
                        <el-input
                            class="TKinput"
                            v-model="inputUserNameModify"
                            placeholder="请输入用户名"
                        ></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            密码
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputPasswordModify" placeholder="请输入密码"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            姓名
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputNameModify" placeholder="请输入姓名"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">性别</div>
                        <el-select v-model="valueSexModify" placeholder="请选择" class="TKinput">
                            <el-option v-for="item in sex" :key="item.value" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">年龄</div>
                        <el-input class="TKinput" v-model="inputAgeModify" placeholder="请输入年龄"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            手机号码
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputPhoneModify" placeholder="请输入手机号码"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">职务</div>
                        <el-input class="TKinput" v-model="inputPostModify" placeholder="请输入职务"></el-input>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">入职时间</div>
                        <div class="block">
                            <el-date-picker
                                class="TKinput"
                                v-model="entryTime"
                                type="date"
                                placeholder="选择日期"
                            ></el-date-picker>
                        </div>
                    </div>
                    <div class="smallBox">
                        <div class="TKspan">
                            工作地点
                            <span>*</span>
                        </div>
                        <el-input class="TKinput" v-model="inputPlaceModify" placeholder="请输入工作地点"></el-input>
                    </div>
                </div>
                <div class="rightNewDataBox">
                    <el-tree
                        :data="data1"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :props="defaultProps"
                    ></el-tree>
                </div>
            </div>
        </el-dialog>

        <!-- 输入框 -->
        <div class="inputBox">
            <span class="name">请输入姓名:</span>
            <el-input class="input" placeholder="请输入姓名" v-model="input" clearable></el-input>
            <span class="place">工作地点:</span>
            <el-select class="downBox" v-model="value" @change="changeCity" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :value="item.value"></el-option>
            </el-select>
        </div>

        <!-- 表格 -->
        <div style="width:100%;margin-top:20px">
            <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%"
            >
                <el-table-column property="User_LoginName" label="姓名"></el-table-column>
                <el-table-column property="User_Name" label="用户名"></el-table-column>
                <el-table-column property="User_Sex" label="性别"></el-table-column>
                <el-table-column property="User_Place" label="工作地点"></el-table-column>
                <el-table-column property="User_Age" label="年龄"></el-table-column>
                <el-table-column property="User_Phone" label="手机号码"></el-table-column>
                <el-table-column property="User_Post" label="职务"></el-table-column>
                <el-table-column property="User_EntryDate" label="入职时间"></el-table-column>
            </el-table>
        </div>

        <!-- 分页器 -->
        <div class="block">
            <!-- <span class="demonstration">完整功能</span> -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrent"
                :current-page="currentPage"
                :page-sizes="[20]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="TotalCount"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import { getapi } from '../../../utils/api.js';
export default {
    data() {
        return {
            input: '', //姓名输入框内容
            options: [
                //下拉框内容
                {
                    value: '全部'
                },
                {
                    value: '本部'
                },
                {
                    value: '南京'
                },
                {
                    value: '山东'
                },
                {
                    value: '苏州'
                },
                {
                    value: '徐庄'
                }
            ],
            value: '全部', //下拉框默认值
            tableData: [], //页面数据
            currentRow: null, //被点击的那一行数据
            currentPage: 1, //默认分页器在第一页
            currentPageNew: 0, //当前页
            TotalCount: 0, //页面总共数据条数
            dialogVisibleSave: false, //新建用户弹框是否出现
            dialogVisibleModify: false, //修改用户弹框是否出现
            sex: [
                {
                    value: '男'
                },
                {
                    value: '女'
                }
            ],
            valueSex: '男', //新建用户默认男
            entryTime: '', //入职时间
            inputUserName: '', //用户名
            inputPassword: '', //密码
            inputName: '', //姓名
            inputAge: '', //年龄
            inputPhone: '', //手机号码
            inputPost: '', //职务
            inputPlace: '', //工作地点
            data1: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            inputUserNameModify: '', //修改用户名
            inputPasswordModify: '', //修改密码
            inputNameModify: '', //修改姓名
            valueSexModify: '男', //修改用户默认男
            inputAgeModify: '', //修改年龄
            inputPhoneModify: '', //修改手机号码
            inputPostModify: '', //修改职务
            entryTimeModify: '', //修改入职时间
            inputPlaceModify: '' //修改工作地点
        };
    },
    methods: {
        //点击查询按钮
        query() {
            let tempValue = this.value;
            if (this.value == '全部') {
                tempValue = '';
            }
            this.getData(tempValue, this.input, 1);
        },

        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },

        //点击下拉菜单
        changeCity(v) {
            // console.log(v);
        },

        //点击每一行
        handleCurrentChange(val) {
            // console.log(val);
            this.currentRow = val;
            if (val !== null) {
                this.inputUserNameModify = val.User_Name; //用户名
                this.inputPasswordModify = val.User_Password; //密码
                this.inputNameModify = val.User_LoginName; //姓名
                this.valueSexModify = val.User_Sex; //性别
                this.inputAgeModify = val.User_Age; //年龄
                this.inputPhoneModify = val.User_Phone; //手机号码
                this.inputPostModify = val.User_Post; //职务
                this.entryTimeModify = val.User_EntryDate; //入职时间
                this.inputPlaceModify = val.User_Place; //工作地点
            }
        },

        //点击多少条/页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },

        //点击下一页或者哪一页
        handleCurrent(val) {
            // console.log(`当前页: ${val}`);
            this.currentPageNew = val;
            let tempValue = this.value;
            if (this.value == '全部') {
                tempValue = '';
            }
            this.getData(tempValue, this.input, val);
        },

        //请求数据
        getData(Place, Name, Val) {
            let that = this;
            let params = {
                place: Place,
                name: Name,
                PageIndex: Val,
                PageNum: 20
            };
            getapi.GetData(params).then(res => {
                // console.log(JSON.parse(res.Data));
                that.tableData = JSON.parse(res.Data).Rows;
                that.TotalCount = JSON.parse(res.Data).TotalCount;
            });
        },

        //关闭新建页面
        handleCloseSave(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },

        //保存新建用户的信息
        saveData() {
            // console.log(this.inputUserName);
            // console.log(this.inputPassword);
            // console.log(this.inputName);
            // console.log(this.valueSex);
            // console.log(this.entryTime);
            // console.log(this.inputAge);
            // console.log(this.inputPhone);
            // console.log(this.inputPost);
            // console.log(this.inputPlace);
            this.$confirm('是否确定保存此条用户信息?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
            })
                .then(() => {
                    this.dialogVisibleSave = false;
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    });
                })
                .catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     // message: '已取消删除'
                    // });
                });
        },

        //打开修改用户信息页面
        modify() {
            // console.log(this.currentRow);
            if (this.currentRow == null) {
                this.$alert('请选择要修改的用户！', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        // this.$message({
                        //     type: 'info',
                        //     message: `action: ${action}`
                        // });
                    }
                });
            } else {
                console.log(this.currentRow);
                this.dialogVisibleModify = true;
            }
        },
        //关闭修改页面
        handleCloseModify(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },

        //保存修改用户的信息
        modifyData() {},

        //删除用户
        deleteUser() {
            if (this.currentRow == null) {
                this.$alert('请选择要删除的用户！', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {}
                });
            } else {
                // console.log(this.currentRow);
                this.$alert('确定要删除该用户么？', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        var params = {
                            code: this.currentRow.User_Code
                        };
                        getapi.DelUser(params).then(res => {
                            // console.log(res);
                            this.getData('', '', this.currentPageNew);
                        });
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                });
            }
        }
    },
    created() {
        this.getData('', '', 1);
    }
};
</script>

<style scoped>
.input {
    width: 200px;
    margin-top: 20px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.input,
.downBox {
    margin-left: 20px;
}
.place {
    margin-left: 50px;
}
.el-dialog__body {
    padding: 0;
}
.smallBox {
    display: flex;
    margin-top: 20px;
}
.TKspan {
    width: 100px;
}
.TKspan span {
    color: red;
}
.TKinput {
    width: 250px;
}
.rightNewDataBox {
    width: 40%;
}
.newDataBox,
.modifyData {
    display: flex;
    justify-content: space-between;
}
</style>