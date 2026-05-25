import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import './assets/animations.css'
import { initAnimations } from './composables/useAnimations'

const app = createApp(App)

document.addEventListener('DOMContentLoaded', () => {
    initAnimations()
})

app.mount('#app')