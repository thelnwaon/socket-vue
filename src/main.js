import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost'
})
)
new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
