import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import LogInView from '/src/views/LogInView.vue'

import Top100View from '/src/views/Top100View.vue'
import TrainingView from '/src/views/TrainingView.vue'
import SynthesisView from '/src/views/SynthesisView.vue'

import TrainingCreateView from '/src/views/TrainingCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    },
    {
      path: '/top100',
      name: 'top100',
      component: Top100View
    },
    {
      path: '/training',
      name: 'training',
      component: TrainingView
    },
    {
      path: '/synthesis',
      name: 'synthesis',
      component: SynthesisView
    },
    {
      path: '/training/create',
      name: 'trainingCreate',
      component: TrainingCreateView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
