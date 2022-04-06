import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css样式初始化文件
import 'normalize.css'
import './style/index.css'

createApp(App).use(store).use(router).mount('#app')
