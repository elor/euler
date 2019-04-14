import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import Problem from '@/components/Problem'

Vue.config.productionTip = false

Vue.component('problem', Problem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
