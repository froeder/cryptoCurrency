// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// router setup
import routes from './routes/routes'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'
import firebase from 'firebase'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

import Chartist from 'chartist'

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
})

var config = {
  apiKey: 'AIzaSyBXCJ1YBq1o9iIJ_mE3mfZetwG3ZwqGLYE',
  authDomain: 'cryp-currency.firebaseapp.com',
  databaseURL: 'https://cryp-currency.firebaseio.com',
  projectId: 'cryp-currency',
  storageBucket: 'cryp-currency.appspot.com',
  messagingSenderId: '947292049486'
}
firebase.initializeApp(config)

Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
