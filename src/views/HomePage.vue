<template>
  <div class="page-home">
    <HeroSection />
    <ServicesSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
</script>

<style scoped>
.page-home {
  width: 100%;
}
</style>