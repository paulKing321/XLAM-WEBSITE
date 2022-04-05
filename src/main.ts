import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

// global registration of components
import NavBar from './components/NavBar.vue'
import TheFooter from './components/TheFooter.vue'

Vue.component('NavBar', NavBar)
Vue.component('TheFooter', TheFooter)
createApp(App).use(store).use(router).mount('#app')
