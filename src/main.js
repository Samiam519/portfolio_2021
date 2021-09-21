import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import BulmaTheme from '@/assets/dist_theme.css'
import 'animate.css'
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
  faCheck,
  faCheckCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faCaretUp,
  faExclamationCircle,
  faVolumeUp, faVolumeMute
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faCaretUp, faExclamationCircle, faVolumeUp, faVolumeMute);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})
Vue.use(BulmaTheme)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
