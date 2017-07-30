import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    dogs: [],
    token: '',
    username: '',
    logedin: false
  },
  actions: {
    LOG_IN: function (context, details) {
      axios.post('http://localhost:3000/api/authenticate', {
        name: details.name,
        password: details.password
      })
        .then(response => {
          // JSON responses are automatically parsed.
          context.commit('SET_TOKEN', { token: response.data.token })
          context.commit('SET_USERNAME', { name: details.name })
          context.commit('SET_logedin', { toggle: true })
        }, (err) => {
          console.log(err)
        })
    },
    LOG_DOGS: function (context) {
      axios.get('http://localhost:3000/api/dogs', {
        headers: {'x-access-token': context.state.token}
      })
        .then(response => {
          // JSON responses are automatically parsed.
          context.commit('SET_DOGS', { dogs: response.data })
        }, (err) => {
          console.log(err)
        })
    }
  },

  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    SET_DOGS: (state, { dogs }) => {
      state.dogs = dogs
    },
    SET_TOKEN: (state, { token }) => {
      state.token = token
    },
    SET_USERNAME: (state, { name }) => {
      state.username = name
    },
    SET_logedin: (state, { toggle }) => {
      state.logedin = toggle
    }
  }
})
