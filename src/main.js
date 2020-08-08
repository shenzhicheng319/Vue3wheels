import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Contact from './views/Contact.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import IconDemo from './components/IconDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: 'switch', component: SwitchDemo },
        { path: 'icon', component: IconDemo },
        { path: 'button', component: ButtonDemo }
      ],
      redirect: '/doc/switch'
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
