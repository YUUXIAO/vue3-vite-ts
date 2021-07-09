import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store'
import router from './router'

import '@/styles/css/iconfont.css'
import '@/styles/css/common.css'

import { asyncComponent, setupElement } from '@/plugins'

const app = createApp(App)

asyncComponent(app) // 注册全局自定义组件
setupElement(app) // 注册引入Element-plus

app.use(store, key).use(router).mount('#app')
