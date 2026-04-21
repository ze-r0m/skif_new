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
}

@media (max-width: 743px) {
  main {
    margin-top: 32px;
  }
}
</style>