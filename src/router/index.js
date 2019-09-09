import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import singUp from '@/components/singUp'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login,
      meta: {
        title: 'Entrar'
      }
    },
    {
      path: '/sing-up',
      name: 'singUp',
      component: singUp,
      meta: {
        title: 'Criar uma conta'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: 'home'
      }
    }
  ]
})
