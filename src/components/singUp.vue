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
          self.$router.replace('/')
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
  width: 10%;
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
