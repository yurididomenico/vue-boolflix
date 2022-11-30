import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarPiena } from '@fortawesome/free-solid-svg-icons'

import { faStar as faStarVuota} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStarPiena, faStarVuota)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)











new Vue({
  render: h => h(App),

  
}).$mount('#app')
