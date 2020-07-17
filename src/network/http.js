import axios from 'axios'
import router from '../router'
  const http = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api'
  }) 

    // 2.axios的拦截器
    http.interceptors.request.use(config => {
      config.headers.Authorization = 'Bearer '+localStorage.getItem('token')
      return config 
    }, err => {
      return err
    })
    // 2.2.响应拦截
    http.interceptors.response.use(res => {
      return res  
    }, err => {
      // if(err.response.status === 500){
      //   router.push('/login')
      // }
      console.dir(err);
      return err
    })
  export default http