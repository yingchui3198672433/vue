import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: ()=>import('@/views/Home/index')
    },
    {
      path:'/order',
      name:'Order',
      component: ()=>import('@/views/Order/index')
    },
    {
      path:'/search',
      name:'Search',
      component:()=>import('@/views/Search/index')
    },
    {
      path:'/task',
      name:'Task',
      component:()=>import('@/views/Task/index')
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('@/views/Login/index')
    },
    {
      path:'/detail/:type/:id',
      props:true,
      component: () =>import('@/views/Detail/index')
    }
  ]
})
