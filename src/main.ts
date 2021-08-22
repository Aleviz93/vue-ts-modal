import { createApp } from 'vue'
import App from './components/layout/default.vue'
import appIniter from './main-modules'
import router from './router'
import '@/assets/styles/common.scss'
 
const app = createApp(App)

appIniter.init(app)

app.use(router)
app.mount('#app')
