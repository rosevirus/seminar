import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import lodash from 'lodash'
import Global from './components/_global'
import { utils } from "@/mixins/util"

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype._ = lodash
Vue.mixin(utils)

export const EventBus = new Vue({
  methods: {

  }
})

Vue.prototype.EventBus = EventBus

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
