import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@yike-design/ui/es/index.less'
// 引入全局方法
import { YkMessage, YkNotification } from '@yike-design/ui'
import router from './router'   
const app = createApp(App)
app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage
createApp(App).use(router).mount('#app')
