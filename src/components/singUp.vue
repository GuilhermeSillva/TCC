<template>
  <div>
    <h3>Criar uma conta</h3>
    <input type="text" v-model='email' placeholder="Email" required />
    <br />
    <input type="password" v-model='password' placeholder="Senha" required />
    <br />
    <button @click='singUp'>Criar conta</button>
    <p>
      Voltar para
      <router-link to="/">login</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'singUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    singUp: function () {
      let self = this
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Conta criada com sucesso')
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
