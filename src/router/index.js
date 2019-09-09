import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import login from '@/components/login'
import singUp from '@/components/singUp'
import home from '@/components/home'
import forgotPass from '@/components/forgotPass'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Login',
      component: login,
      meta: {
        title: 'Entrar'
      }
    },
    {
      path: '/forgot-pass',
      name: 'forgotPass',
      component: forgotPass,
      meta: {
        title: 'Esqueci minha Senha'
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
        title: 'home',
        // necessita autenticaçao para ir pra /home
        requiresAuth: true
      }
    }
  ]
})

// firebase retorna curretnUser para buscar o usuario logado, caso retorne null não há usuarios logados

router.beforeEach((to, form, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
