import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import singUp from '@/components/singUp'

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
    }
  ]
})
