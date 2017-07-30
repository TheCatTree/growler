<template>
  <div class="Login">
    <p v-if="logedin">You are Logedin</p>
    <p v-if="Notlogedin">
      Please login.
      <input type="text" size="30" v-model="UserName" />
      <input type="text" size="30" v-model="UserPassword" />
      <input type="button" value="Login" @click="LogIn()">
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
