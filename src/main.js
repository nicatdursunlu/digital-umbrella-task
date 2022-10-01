import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/assets/sass/main.scss'

export const eventBus = new Vue()

Vue.prototype.$eventBus = eventBus
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
