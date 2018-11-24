import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/dashboard', name: 'dashboard', component: () => import( './views/Dashboard.vue') },
    { path: '/account', name: 'account', component: () => import( './views/Account.vue') },
    { path: '/board', name: 'board', component: () => import( './views/Board.vue') }
  ]
})
