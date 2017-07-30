<template>
  <div class="Login">
    <p v-if="logedin">You are Logedin</p>
    <p v-if="Notlogedin">
      Please login.
      <span>UserName</span>
      <input type="text" size="30" v-model="UserName" />
      <span>UserPassword</span>
      <input type="text" size="30" v-model="UserPassword" />
      <input type="button" value="Login" @click="LogIn()">
      <span>login in as uname: jay pword: jay</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Dogs',
    data () {
      return {
        UserName: '',
        UserPassword: ''
      }
    },
    computed: {
      logedin () {
        return this.$store.state.logedin
      },

      Notlogedin () {
        return !this.$store.state.logedin
      }
    },
    methods: {
      LogIn () {
        return this.$store.dispatch('LOG_IN', { name: this.UserName, password: this.UserPassword })
      }
    }
  }
</script>
