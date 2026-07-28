import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initSentry } from './plugins/sentry'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)

initSentry(app, router)

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
