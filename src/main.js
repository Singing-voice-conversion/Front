import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // export 시킬 때 이름을 설정하면 파일이름이 아니라 export 이름으로 import를 시킬 수 있음.

const app = createApp(App)

app.use(router)

app.mount('#app')
