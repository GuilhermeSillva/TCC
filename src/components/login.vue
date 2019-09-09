<template>
  <div>
    <h3>Entre</h3>
    <input type="text" v-model='email' placeholder="Email" required />
    <br />
    <input type="password" v-model='password' placeholder="Senha" required />
    <br />
    <button @click='login'>Entrar</button>
    <p>
      Não possui conta?
      <router-link to="sing-up">Crie uma!</router-link>
    </p>
    <p>
      <router-link to="forgot-pass">Esqueci a senha!</router-link>
    </p>
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
input {
  border-radius: 25px;
  margin: 10px 0;
  width: 20%;
  cursor: pointer;
  line-height: 30px;
}
button {
  border-radius: 25px;
  margin-top: 20px;
  width: 200px;
  height: 28px;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}

</style>
