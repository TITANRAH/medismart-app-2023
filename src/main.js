import { createApp } from 'vue'
import './general.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'




createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
