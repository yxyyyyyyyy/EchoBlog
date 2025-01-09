import { createApp } from 'vue'
import App from './App.vue'
// 引入全局方法
import '@yike-design/ui/es/index.less'
import './style.less'
// 全局注入 icon
import Icon from '@yike-design/ui/es/components/svg-icon'
import { YkMessage, YkNotification } from '@yike-design/ui'
import router from './router'
const app = createApp(App)
app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage
createApp(App).use(router).use(Icon).mount('#app')
