import Vue from 'vue'
import App from './App.vue'

import '~/assets/main.css'

import clipboard from '~/directive/clipboard/index.js'
Vue.directive('clipboard', clipboard)
import highlight from '~/directive/highlight/index.js'
Vue.directive('highlightjs', highlight)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
