<template>
  <div>
    <h3>Bem Vindo!</h3>
    <button @click='logout'>Sair</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 25px;
  margin-top: 20px;
  width: 200px;
  height: 28px;
  cursor: pointer;
}

</style>
