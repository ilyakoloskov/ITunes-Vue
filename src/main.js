import {createApp} from 'vue'
import App from './App'
import components from './components/UI'


import './sass/main.sass'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
app.mount('#app')

