import axios from 'axios';
import route from '../router';
const request = axios.create();

// 添加响应拦截器
request.interceptors.request.use( (config)=> {
    // 在发送请求之前做些什么
    return {
            ...config,
            headers:{
                ...config.headers,
                token:window.localStorage.getItem('token')
            }
    }
  },  (error) =>{
    // 对请求错误做些什么
    return Promise.reject(error);
  });

request.interceptors.response.use( (response)=> {
    // 对响应数据做点什么
    return response;
  },  (error)=> {
    // 对响应错误做点什么
    console.log(error)
    const status=error.response.status;
    if(status>400){
        switch (status) {
            case 401:
                route.push('/login')
                break;
            case 404:
                console.log('页面丢失')
                break;
            case 405:
                console.log('该用户没有权限')
                break;
            case 422:
                console.log('用户名密码输入有误')
            default:
                console.log('网络链接失败')
        }
    }
    return Promise.reject(error);
});

export default {
   get(url,data){
    return  request.get(url,{
            params:data
        })
    },
    post(url,data){
        return  request.post(url,data)
    }
}