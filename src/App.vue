<template>
  <div id="app">
    <!-- the router outlet, where all matched components would ber viewed -->
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <router-link v-bind:to="'/param'">Param Link</router-link>
    <router-link v-bind:to="'/weather'">Weather Link</router-link>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      return this.$store.commit('increment')
    },
    decrement () {
      return this.$store.commit('decrement')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
