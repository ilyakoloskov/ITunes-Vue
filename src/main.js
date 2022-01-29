import {createApp} from 'vue'
import App from './App'
import store from './store'

import './sass/main.sass'


createApp(App)
    .use(store) 
    .mount('#app')

