import { createApp } from 'vue'
import './general.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
