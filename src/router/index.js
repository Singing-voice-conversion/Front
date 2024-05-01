import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import LogInView from '/src/views/LogInView.vue'

// nav 메뉴들
import Top100View from '/src/views/Top100View.vue'
import TrainingView from '/src/views/TrainingView.vue'
import SynthesisView from '/src/views/SynthesisView.vue'

// 소베너
import LikedSongView from '/src/views/LikedSongView.vue'
import SynthesizedSongView from '/src/views/SynthesizedSongView.vue'
import TrainedVoiceView from '/src/views/TrainedVoiceView.vue'

// 훈련, 추론 페이지
import TrainingCreateView from '/src/views/TrainingCreateView.vue'
import SynthesisCreateStep1View from '/src/views/SynthesisCreateStep1View.vue'
import SynthesisCreateStep2View from '/src/views/SynthesisCreateStep2View.vue'

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
    },
    {
      path: '/synthesis/create/step1',
      name: 'synthesisCreateStep1',
      component: SynthesisCreateStep1View
    },
    {
      path: '/synthesis/create/step2',
      name: 'synthesisCreateStep2',
      component: SynthesisCreateStep2View
    },
    {
      path: '/likedSong',
      name: 'likedSong',
      component: LikedSongView
    },
    {
      path: '/synthesizedSong',
      name: 'synthesizedSong',
      component: SynthesizedSongView
    },
    {
      path: '/trainedVoice',
      name: 'trainedVoice',
      component: TrainedVoiceView
    }

    
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
