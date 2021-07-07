import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import BulmaTheme from '@/assets/dist_theme.css'

Vue.use(Buefy)
Vue.use(BulmaTheme)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
