import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '../views/IndexView.vue'
import OverView from '../views/OverView.vue'
// import Hello from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/overview',
    component: IndexView,
    children: [
      {
        path: 'overview',
        component: OverView,
      },
      {
        path: 'localfile',
        component: () => import('../views/FileLoad.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/ArticleView.vue'),
      },
      {
        path: 'diary',
        component: () => import('../views/DiaryView.vue'),
      },
      {
        path: 'gallery',
        component: () => import('../views/Gallery.vue'),
      },
    ],
  },
  {
    path: '/editgallery',
    component: () => import('../views/EditGallery.vue'),
  },
  {
    path: '/editarticle',
    component: () => import('../views/wangEditor.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router