<template>
  <div>
    <h3>Digite o email cadastrado!</h3>
    <input type="text" v-model="email" placeholder="Email" required />
    <br />
    <button @click="sendEmail">Enviar email</button>
    <br />
    <p>
      <router-link to="/">Voltar para login</router-link>
    </p>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    sendEmail: function () {
      let self = this
      firebase.auth().sendPasswordResetEmail(this.email)
        .then(link => {
          alert('Enviado com sucesso')
          self.$router.replace('/')
        })
        .catch(err => {
          alert(err.message)
        })
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
