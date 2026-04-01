<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <TheEpigraph text="СКИФ — Электронная образовательная среда вуза. Команда УЦОТ координирует разработку и внедрение электронного обучения в ДГТУ, обеспечивает технологический аудит проектов и аналитическое сопровождение учебного процесса."/>
      <CreatingCoursesSection />
      <GridDemo />
    </main>

    <TheFooter />
    <ScrollToTop footer-selector="footer" />
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import TheFooter from "./components/TheFooter.vue";
import TheEpigraph from "@/components/TheEpigraph.vue";
import CreatingCoursesSection from "@/components/CreatingCoursesSection.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import GridDemo from "@/components/GridDemo.vue";
</script>
