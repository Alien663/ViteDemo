import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus, { locale: zhTw })
    .mount('#app')
