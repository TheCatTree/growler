import Vue from 'vue'
import Router from 'vue-router'
// import the hello component
import Hello from '../components/Hello'
import About from '../components/About'
import Param from '../components/Param'
import weather from '../components/Weather'
import Dogs from '../components/Dogs'
import paramdetails from '../components/paramdetails'
import weatherdetails from '../components/weatherdetails'
import Login from '../components/Login'
import Map from '../components/map'

Vue.use(Router)
const routes = [
  // define the root url of the application.
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/param', component: Param },
  { path: '/weather', component: weather },
  { path: '/dogs', component: Dogs },
  { path: '/login', component: Login },
  { path: '/map', component: Map },
  { path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails' },
  { path: '/Weatherdetails/:city', component: weatherdetails, name: 'Weatherdetails' }
]
export default new Router({
  routes, // short for routes: routes
  mode: 'history'
})
