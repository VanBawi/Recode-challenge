import Vue from 'vue'
import App from './App'
  

// <!-- added import -->
import VueResource from 'vue-resource'

Vue.use(VueResource);

/* eslint-disable */


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

