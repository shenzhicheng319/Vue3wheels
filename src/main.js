import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import Contect from './views/Contect.vue';

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contect',
      component: Contect
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
