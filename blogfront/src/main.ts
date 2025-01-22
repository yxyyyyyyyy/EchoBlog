import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 引入全局方法
import '@yike-design/ui/es/index.less'
import './style.less'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 全局注入 icon
import Icon from '@yike-design/ui/es/components/svg-icon'
import { YkMessage, YkNotification } from '@yike-design/ui'
import router from './router'
const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage
createApp(App).use(router).use(Icon).use(pinia).use(ElementPlus).mount('#app')
