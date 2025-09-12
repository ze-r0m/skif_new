<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <HeroSection />
      <TeamSection id="about" />
      <TheEpigraph text="Системы СКИФ на базе исходного кода LMS Moodle используются в различных направлениях работы ВУЗа: работа с абитуриентами, приемная комиссия, дни навигации, входной контроль знаний, образовательный процесс,
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
