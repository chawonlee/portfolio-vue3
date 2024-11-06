import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/** ✏️ Vuetify Plugins (i18n, vuetify) */
import vuetifyPlugins from '@/plugin/vuetify'

const app = createApp(App)

app.use(vuetifyPlugins.i18n)
app.use(vuetifyPlugins.vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
