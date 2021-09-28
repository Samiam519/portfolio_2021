import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // redirect first, used as default route, dont change
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: { slide: '0' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: { slide: '1' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { slide: '2' }
  },
  {
    path: '/maximus',
    name: 'maximus',
    component: () => import('@/views/Maximus.vue'),
    meta: { slide: '3' }
  },
  {
    path: '/dsa',
    name: 'dsa',
    component: () => import('@/views/DSA.vue'),
    meta: { slide: '4' }
  },
  {
    path: '/quidditch',
    name: 'quidditch',
    component: () => import('@/views/Quidditch.vue'),
    meta: { slide: '5' }
  },
  {
    path: '/accomplish',
    name: 'accomplish',
    component: () => import('@/views/Accomplish.vue'),
    meta: { slide: '6' }
  },
  {
    path: '/lunch-launch',
    name: 'lunch-launch',
    component: () => import('@/views/LunchLaunch.vue'),
    meta: { slide: '7' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
