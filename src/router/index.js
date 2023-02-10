import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: () => import(/* webpackChunkName: "client" */ '../views/homeView.vue')
  },
  {
    path: '/faire-une-demande',
    name: 'faireDemande',
    component: () => import(/* webpackChunkName: "client" */ '../views/makeRequestView.vue')
  },
  {
    path: '/suivre-ma-demande',
    name: 'suivreDemande',
    component: () => import(/* webpackChunkName: "client" */ '../views/trackingView.vue')
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import(/* webpackChunkName: "client" */ '../views/forumView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "client" */ '../views/contactView.vue')
  },
  {
    path: '/tableau-de-bord',
    name: 'tableauBord',
    component: () => import(/* webpackChunkName: "client" */ '../views/Dashboard/indexView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
