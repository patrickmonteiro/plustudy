<template>
  <q-page class="container q-pa-md">
    <div class="row gutter-lg">
      <div class="col">
        <q-input float-label="Login" v-model="email" />
      </div>
      <div class="col">
        <q-input float-label="Senha" v-model="senha" />
      </div>
      <div class="col-12">
        <q-btn color="primary" @click="login()" label="Logar" icon="lock" />
        <q-btn color="negative" @click="logout()" label="Deslogar" icon="lock" />
        <q-btn color="secondary" @click="getDados()" label="Recuperar dados api" icon="lock" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      email: 'rafaelbmd3@gmail.com',
      senha: 'secret'
    }
  },
  mounted () {
    console.log('token local storage', localStorage.getItem('TOKEN'))
  },
  methods: {
    login () {
      this.$axios.post('auth/login',
        {
          email: this.email,
          password: this.senha
        })
        .then((res) => {
          localStorage.setItem('TOKEN', res.data.access_token)
          this.$router.push('/sistema')
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    logout () {
      localStorage.removeItem('TOKEN')
    },
    getDados () {
      this.$axios.get('/subjects')
        // {headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` }})
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
