import Vue from 'vue'
import VueRouter from 'vue-router'

const Register = () =>import('../views/login/Register')
const Login = () => import('../views/login/Login')
const Userinfo = () =>import('../views/userinfo/Userinfo')
const Edit = () =>import('../views/edituser/Edit')
Vue.use(VueRouter)

  const routes = [
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
