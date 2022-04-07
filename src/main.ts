// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

// global registration of components
// import NavBar from './components/NavBar.vue'
// import TheFooter from './components/TheFooter.vue'
// import { Vue } from 'vue-class-component'

// App.component('NavBar', NavBar)
// App.component('TheFooter', TheFooter)
createApp(App).use(store).use(router).mount('#app')
