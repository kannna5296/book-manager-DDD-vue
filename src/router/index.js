import { createRouter, createWebHistory } from 'vue-router'
import BookDetail from '../components/BookDetail'
import BookList from '../components/BookList'

const routes = [
  {
    path: '/',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
