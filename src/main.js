// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import { firebaseConfig } from '../config/firebase'

Vue.config.productionTip = false

// inicializa o firebase usando as configuraçoes em config/firebase
firebase.initializeApp(firebaseConfig)

// inicializa app apenas quando firebase estiver inicializado
firebase.auth().onAuthStateChanged(() => {
  // usa o meta.title definido no vue router como título da pagina
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
  })

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
})
