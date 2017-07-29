<template>
  <div class="weather">
    <input type="text" size="30" v-model="UserInput" />
    <input type="button" value="Go to route" @click="GoToRoute()">
  </div>
</template>

<script>
  export default {
    name: 'Weather',
    data () {
      return {
        UserInput: ''
      }
    },
    methods: {
      GoToRoute: function () {
        this.$router.push({name: 'Weatherdetails', params: {city: this.UserInput}})
      }
    }
  }
</script>
