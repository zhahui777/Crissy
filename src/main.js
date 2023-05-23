import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import { IconPark } from '@/plugins/iconPark'

const app = createApp(App)

//创建pinia 示例
const pinia = createPinia();


IconPark(app)

app.use(router)
app.use(pinia)
app.mount('#app')
