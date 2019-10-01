<template>
  <div class="login container">
    <div class="left-side">
      <h3>Entre</h3>
      <input type="text" v-model='email' class="form-input" placeholder="Email" required />
      <br />
      <input type="password" v-model='password' class="form-input" placeholder="Senha" required />
      <br />
      <button @click='login' class="btn btn-primary">Entrar</button>
      <p>
        Não possui conta?
        <router-link to="sing-up">Crie uma!</router-link>
      </p>
      <p>
        <router-link to="forgot-pass">Esqueci a senha!</router-link>
      </p>
    </div>
    <div class="right-side" style="width:70%">
      <img src="../assets/img/handshake.jpg" alt="Aperto de mão">
    </div>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let self = this
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          self.$router.replace('home')
        },
        function (err) {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/libs.css');
@import url('../assets/css/style.css');
</style>
