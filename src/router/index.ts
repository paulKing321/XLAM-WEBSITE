import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OurServices.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: () => import(/* webpackChunkName: "about" */ '../views/FAQs.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import(/* webpackChunkName: "about" */ '../views/OurTestimonials.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
