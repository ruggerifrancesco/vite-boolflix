/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

// Font Awesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// Font Awesome Component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Specific Icon
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

// Add Icons mto library core
library.add(faStar, farStar)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
