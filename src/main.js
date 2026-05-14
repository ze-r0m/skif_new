import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import './assets/animations.css'
import { initAnimations } from './composables/useAnimations'

const app = createApp(App)
app.use(router)

document.addEventListener('DOMContentLoaded', () => {
    initAnimations()
})

document.addEventListener('astro:after-swap', () => {
    initAnimations()
})

app.mount('#app')