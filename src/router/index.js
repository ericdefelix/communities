import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home
  },
  {
    path: '/topiccatalog',
    name: 'topicCatalogPage',
    component: () => import('../views/Topics.vue')
  },
  {
    path: '/discussions',
    name: 'discussionsPage',
    component: () => import('../views/Discussions.vue')
  },
  {
    path: '/article',
    name: 'articleDetailPage',
    component: () => import('../views/ArticleDetail.vue')
  },
  {
    path: '/topicdetail',
    name: 'topicDetailPage',
    component: () => import('../views/TopicDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
