import Vue from 'vue'
import VueRouter from 'vue-router'
import LytAuth from '../layouts/LytAuth.vue'
import Login from '../views/login/Login.vue'
import ForgotPassword from '../views/login/ForgotPassword.vue'
import ResetPassword from '../views/login/ResetPassword.vue'
import SetInitialPassword from '../views/login/SetInitialPassword.vue'
import SignUp from '../views/login/SignUp.vue'
import index from '../store/index'
import Home from '../views/home/Home.vue'
import PerfilView from '../views/home/PerfilView.vue'
import AddBook from '../views/home/AddBook.vue'
import MyBook from '../views/home/MyBook.vue'
import LytSPA from '../layouts/LytSPA.vue'
import NavBar from '../layouts/shared/NavBar.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    component: LytAuth,
    children:[
      {
        name: 'login',
        path: '/login',
        components:{
          allLog: Login
        }        
      },
      {
        name: 'ForgotPassword',
        path: '/forgot-password',
        components:{
          allLog: ForgotPassword
        }
      },
      {
        name: 'ResetPassword',
        path: '/reset-password',
        components:{
          allLog: ResetPassword
        }
      },
      {
        name: 'SetInitialPassword',
        path: '/set-initial-password',
        components:{
          allLog: SetInitialPassword
        }
      },
      {
        name: 'SignUp',
        path: '/sign-up',
        components:{
          allLog: SignUp
        },
      },
      {
        name: 'about', 
        path: '',
        components:{
          allLog: About
        }
      }
    ]
  },
  
  {
    path: '/NavBar',
    name: 'barra-perfil',
    component: NavBar
  },
  
  {
    path: '/',
    //name: 'LytSPA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "LytSPA" */ '../layouts/LytSPA.vue'),
    component: LytSPA,
    meta: {requireAuth: true},
    children:[
      {
        name: 'home',
        path: '/home',
        components:{
          allPages: Home
        }    
      },
      {
        name: 'PerfilView',
        path: '/perfil',
        //component:() => import(/* webpackChunkName: "PerfilView" */ '../views/home/PerfilView.vue'),
        components:{
          allPages: PerfilView
        }   
      },
      {
        name: 'AddBook',
        path: '/add-book',
        component:() => import(/* webpackChunkName: "AddBook" */ '../views/home/AddBook.vue'),
        components:{
          allPages: AddBook
        }  
      },
      {
        name: 'MyBook',
        path: '/my-book',
        component:() => import(/* webpackChunkName: "MyBook" */ '../views/home/MyBook.vue'),
        components:{
          allPages: MyBook
        }   
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const routeProtect = to.matched.some(record=> record.meta.requireAuth);
  if(routeProtect && index.state.token ===''){
    next({name: 'login'});
  }else{
    next();
  }

})

export default router
