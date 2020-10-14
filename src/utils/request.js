import axios from "axios";
import { Message, Loading  } from "element-ui";
import qs from "qs";
/****** 创建axios实例 ******/
const request = axios.create({
    baseURL: "http://192.168.1.110:8019/",  // api的base_url
    timeout: 5000  // 请求超时时间
});


/****** request拦截器==>对请求参数做处理 ******/
request.interceptors.request.use(config => {
    config.method === 'post'
        ? config.data = qs.stringify({ ...config.data })
        : config.params = { ...config.params };
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config;
}, error => {  //请求错误处理
        Message({
            message: error,
            type: 'warning'
        });
    Promise.reject(error)
});


// 相应处理
request.interceptors.response.use(
    response => {  //成功请求到数据
        if (response.data.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    },
    error => {  //响应错误处理
        console.log(JSON.stringify(error));

        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '404'
            : '网络异常，请重试';
        Message({
            message: text,
            type: 'warning'
        });

        return Promise.reject(error)
    }
);
export default request;