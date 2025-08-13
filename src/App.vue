<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <HeroSection />
      <TeamSection />
      <SkifsSection />

    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import TeamSection from "@/components/TeamSection.vue";
import SkifsSection from "@/components/SkifsSection.vue";
import TheFooter from './components/TheFooter.vue';




</script>

<style>
/* Глобальные стили */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #f9f9f9;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Стили для секций */
.news-section {
  padding: 80px 0;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #004a8f;
  margin-bottom: 40px;
  text-align: center;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}
</style>