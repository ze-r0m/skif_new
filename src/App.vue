<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
    <ScrollToTop footer-selector="footer" />
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
</script>

<style>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
</style>