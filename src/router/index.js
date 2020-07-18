import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册
const Register = () =>import('../views/login/Register')
// 登录
const Login = () => import('../views/login/Login')
// 个人中心
const Userinfo = () =>import('../views/userinfo/Userinfo')
// 更改资料
const Edit = () =>import('../views/edituser/Edit')
// 首页
const Home = () => import('../views/home/Home')
// 首页的详情页
const hoemDetail = () =>import('../views/detail/hoemDetail')
// 管理导航栏
const Editcategory = () => import('../views/Editcategory')
Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/Home'
    },
    {
      path:'/Home',
      component:Home,
    },
    {
      path:'/hoemdetail/:id',
      component:hoemDetail
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/userinfo',
      component:Userinfo,
      meta:{
        istoken:true,
      }
    },
    {
      path:'/edit',
      component:Edit,
      meta:{
        istoken:true,
      }
    },
    {
      path:'/Editcategory',
      component:Editcategory
    }
]

const router = new VueRouter({
  routes,
})

  router.beforeEach((to, from, next) => {
    if(!localStorage.getItem('token')&&
       !localStorage.getItem('id')&&
       to.meta.istoken == true){
      return next('/login')
    }
      next()
  })
export default router
