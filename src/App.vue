<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <component :is="currentPageComponent" />
    </main>
    <TheFooter />
  </div>
  <ScrollToTop footer-selector="footer" />
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import CDOPage from "@/views/CDOPage.vue";
import OOLPage from "@/views/OOLPage.vue";
import ResourcePage from "@/views/ResourcePage.vue";
import InstructionsPage from "@/views/InstructionsPage.vue";
import { initLenis, destroyLenis } from '@/composables/useAnimations';

const base = import.meta.env.BASE_URL

const pages = {
  '': HomePage,
  'index': HomePage,
  'about': AboutPage,
  'about/index': AboutPage,
  'about/cdo': CDOPage,
  'about/ool': OOLPage,
  'about/rood': ResourcePage,
  'instructions': InstructionsPage,
}

const currentPageComponent = computed(() => {
  const path = window.location.pathname
  let cleanPath = path.replace(base, '').replace(/\/$/, '')
  return pages[cleanPath] || HomePage
})

onMounted(() => {
  initLenis()
})

onUnmounted(() => {
  destroyLenis()
})
</script>

<style>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: clip;
}

main {
  flex: 1;
  padding-top: 48px;
}
@media (max-width: 1023px) {
  main {
    padding-top: 36px;
  }
}
@media (max-width: 767px) {
  main {
    padding-top: 36px;
  }
}

body.menu-open .scroll-to-top {
  display: none !important;
}
</style>