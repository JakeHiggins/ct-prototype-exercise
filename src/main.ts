import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const pinia = createPinia()
const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives
})

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
