import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import BulmaTheme from '@/assets/dist_theme.css'
import 'animate.css'
import router from "@/router";

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub, faGitlab, faBehance, faDeviantart } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, faTwitter, faLinkedin, faGithub, faGitlab, faBehance, faDeviantart);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas",
    customIconPacks: {
        fas: {
            sizes: {
                default: "lg",
                "is-small": "1x",
                "is-medium": "2x",
                "is-large": "3x"
            },
            iconPrefix: ""
        }
    }
})
Vue.use(BulmaTheme)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
