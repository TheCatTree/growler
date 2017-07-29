import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    dogs: [],
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImRvZ3MiOiJpbml0IiwiZmxhZ2dlZF9kb2dzIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJuYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7ImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiZG9ncyI6dHJ1ZSwiZmxhZ2dlZF9kb2dzIjp0cnVlLCJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCJdfX0sImlzTmV3IjpmYWxzZSwiX21heExpc3RlbmVycyI6MCwiX2RvYyI6eyJkb2dzIjpbXSwiZmxhZ2dlZF9kb2dzIjpbXSwiX192IjowLCJuYW1lIjoiamF5IiwicGFzc3dvcmQiOiJqYXkiLCJfaWQiOiI1OTdjOTcxZjU1ZjJmYzAwMDAwMDAwMDEifSwiX3ByZXMiOnsic2F2ZSI6W251bGwsbnVsbCxudWxsXX0sIl9wb3N0cyI6eyJzYXZlIjpbXX0sImlhdCI6MTUwMTMzNzQ4OCwiZXhwIjoxNTAxNDIzODg4fQ.8X9KRMrrJLKfDG8H32ipuq5_Q2pA-qnfw3eaYh1HbG4'
  },
  actions: {
    LOAD_DOGS: function (context) {
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
    }
  }
})
