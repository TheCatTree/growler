import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
// var parse = require('csv-parse');
// var fs = require('fs');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    dogs: [],
    token: '',
    username: '',
    logedin: false,
    parks: {}
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
    },
    PARS_PARKS: function (context) {
      axios.get('http://localhost:3000/api/park', {
        headers: {'x-access-token': context.state.token}
      })
        .then(response => {
          // JSON responses are automatically parsed.
          context.commit('SET_PARKS', {parks: response.data})
        }, (err) => {
          console.log(err)
        })
    },
    GEO_CODEPARKS: function (context, parks) {
      for (var i = 0; i < parks.length; i++) {
        if (parks[i].location == null || (Object.keys(parks[i].location).length === 0 && parks[i].location.constructor === Object)) {
          // Geocode data add to park on api
          axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
              address: parks[i].name.split(' ').join('+'),
              bounds: '-41.3594,174.72061|-41.2702,174.86446',
              key: 'AIzaSyCJh0UaDeOTa6M-83TxC47I-CmJ4QPrhhc'
            }
          })
            .then(response => {
              parks[i].location = response.data.results.geometry.location
              // JSON responses are automatically parsed.
            }, (err) => {
              console.log(err)
            })
        }
      }
      context.commit('SET_PARKS', {parks: parks})
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
    },
    SET_PARKS: (state, { parks }) => {
      state.parks = parks
    }
  }
})
