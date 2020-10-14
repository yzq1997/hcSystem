import request  from './request'

// // 查询省份和相关城市
 const GetArea = function (params) {
    return request({
        url: 'api/Area/GetArea',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}

 // 实时保数据筛选
 const GetSSBOriginalData = function (params) {
    return request({
        url: 'api/OriginalData/GetSSBOriginalData',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}

// 实时明细数据
 const GetSSBOriginalDataDts = function (params) {
    return request({
        url: 'api/OriginalData/GetSSBOriginalDataDts',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}

// 实时有效数据
 const GetSSBValidData = function (params) {
    return request({
        url: 'api/OriginalData/GetSSBValidData',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}

// 实时保失效数据
 const GetSSBNOVaildData = function (params) {
    return request({
        url: 'api/OriginalData/GetSSBNOVaildData',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}

//系统设置-用户设置请求用户数据
const GetData = function (params) {
    return request({
        url: 'api/User/GetUser',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}
//系统设置-用户设置删除用户
const DelUser = function (params) {
    return request({
        url: 'api/User/DelUser',
        method: 'post',
        data: params
    }).then(res => JSON.parse(res))
}



export const getapi={
    GetArea: GetArea,
    GetSSBOriginalData: GetSSBOriginalData,
    GetSSBOriginalDataDts: GetSSBOriginalDataDts,
    GetSSBValidData: GetSSBValidData,
    GetSSBNOVaildData: GetSSBNOVaildData,
    GetData:GetData,
    DelUser:DelUser,
}




 