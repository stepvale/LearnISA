import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import boostrap-vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import my custom css
// import '/mystyles.css' from './mystyles'
import('./mystyles.css')


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// store.commit('increment');
// console.log(store.state.magic_number);
