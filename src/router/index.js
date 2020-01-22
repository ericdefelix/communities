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
    path: '/category',
    name: 'productCategoryPage',
    component: () => import('../views/ProductCategory.vue')
  },
  {
    path: '/discussions',
    name: 'discussionsPage',
    component: () => import('../views/Discussions.vue')
  },
  {
    path: '/detail',
    name: 'articleDetailPage',
    component: () => import('../views/ArticleDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
