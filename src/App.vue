<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <HeroSection />
      <TeamSection id="about" />
      <TheEpigraph text="LMS Moodle используется в различных направлениях работы ВУЗа: работа с абитуриентами, приемная комиссия, дни навигации, входной контроль знаний, образовательный процесс,
       ГИА."/>

      <SkifsSection id="systems" />
      <CreatingCoursesSection  />
    </main>

    <TheFooter />
    <ScrollToTop footer-selector="footer" />
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import SkifsSection from "@/components/SkifsSection.vue";
import TheFooter from "./components/TheFooter.vue";
import TheEpigraph from "@/components/TheEpigraph.vue";
import CreatingCoursesSection from "@/components/CreatingCoursesSection.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
</script>

<style>
/* Глобальные стили */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
@import url('https://globalfonts.pro/font/nekst');

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #f9f9f9;
}

</style>