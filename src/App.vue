<template>
  <div id="app-wrapper">
    <TheHeader />
    <main>
      <HeroSection />

      <section class="news-section">
        <div class="container">
          <h2 class="section-title">Новости и события</h2>
          <div class="news-grid">
            <NewsCard v-for="item in newsList" :key="item.id" :news-item="item" />
          </div>
        </div>
      </section>

    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import NewsCard from './components/NewsCard.vue';
import TheFooter from './components/TheFooter.vue';

// Эмуляция данных, которые могли бы прийти с сервера
const newsList = ref([
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/400x200.png?text=DSTU+Event',
    date: '10 августа 2025',
    title: 'В ДГТУ стартовала приемная кампания 2025',
    excerpt: 'Опорный вуз Ростовской области открыл свои двери для абитуриентов...',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/400x200.png?text=Science+Lab',
    date: '08 августа 2025',
    title: 'Новая научная лаборатория по ИИ',
    excerpt: 'Состоялось открытие передового центра по изучению искусственного интеллекта.',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/400x200.png?text=Students',
    date: '05 августа 2025',
    title: 'Студенты ДГТУ победили на олимпиаде',
    excerpt: 'Команда программистов заняла первое место на всероссийском соревновании.',
  },
]);
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