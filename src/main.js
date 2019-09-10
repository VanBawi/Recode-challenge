import Vue from 'vue'
import App from './App'
  

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import { ImagePlugin } from 'bootstrap-vue'
Vue.use(ImagePlugin)

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

import { NavPlugin } from 'bootstrap-vue'
Vue.use(NavPlugin)
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// <!-- added import -->
import VueResource from 'vue-resource'

Vue.use(VueResource);

/* eslint-disable */


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

