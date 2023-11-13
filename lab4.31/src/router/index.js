import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import DishList from '@/components/DishList.vue'
import DishesConfig from '@/components/DishesConfig.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/dishes',
    name: 'dishes',
    component: DishList
  },
  {
    path: "/dishes/:dishId?",
    name: "config",
    component: DishesConfig,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
