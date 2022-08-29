import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import init from './init'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(init)

app.mount('#app')
