import Vue from 'vue'
import App from './App.vue'
import Mask from './lib/index.js'
Vue.use(Mask)
new Vue({
  el: '#app',
  render: h => h(App)
})
