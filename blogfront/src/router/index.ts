import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '../views/IndexView.vue'
import OverView from '../views/OverView.vue'
import Hello from '../components/HelloWorld.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      redirect:'/overview',
      component: IndexView,
      children: [
        {
          path: 'overview',
          component: OverView,
        },
        {
          path: 'hello',
          component: Hello,
        }
      ],
    },
]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router