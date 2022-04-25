// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// global registration of components
// import CookiesPolicy from './components/others/CookiesPolicy.vue'
// import TheFooter from './components/TheFooter.vue'
// import { Vue } from 'vue-class-component'

// App.component('NavBar', NavBar)
// App.component('CookiesPolicy', CookiesPolicy)
createApp(App).use(store).use(router).mount('#app')
