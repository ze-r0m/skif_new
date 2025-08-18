<template>
  <section class="features-section">
    <div class="container">
      <div class="section__head">
        <h2>Наши системы</h2>
      </div>
      <p class="description-short">
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur dolor, doloribus error natus nulla odio omnis pariatur perspiciatis praesentium quas quidem quo reiciendis rem sequi sit sunt tempore veritatis!
        </strong>
      </p>
      <div class="features-grid">
        <div v-for="item in features" :key="item.heading" class="features-card">
          <div class="card-heading" v-html="item.heading"></div>
          <p class="card-text">{{ item.text }}</p>
          <AppButton
              class="skifs-btn"
              text="Перейти"
              :href="item.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from "@/components/AppButton.vue";

const features = ref([
  { heading: 'ДО<br>СКИФ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'https://do.skif.donstu.ru/' },
  { heading: 'СКИФ<br>ТЕСТ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'https://skif.donstu.ru/test/' },
  { heading: 'СКИФ<br>БИБЛИОТЕКА', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'https://de.donstu.ru/zaoch/organizations/1' },
  { heading: 'СКИФ<br>СПЕЦ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'https://skif.donstu.ru/spec/' },
  { heading: 'СКИФ<br>МЕЖДУНАРОДНЫЙ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'https://int.skif.donstu.ru/' },
  { heading: 'ПРОФ<br>СКИФ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'https://prof.skif.donstu.ru/' },

]);
</script>

<style scoped>
.features-section {
  padding: 60px 0;
  background-color: #f0f4f7;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.section__head {
  margin-bottom: 20px;
}

.section__head h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.description-short {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.features-card-link {
  text-decoration: none;
  color: inherit;
}

.features-card {
  background-color: #ffffff;
  border-radius: 32px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.features-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-heading {
  font-size: 1.7rem;
  font-weight: 700;
  color: #004a99;
  margin-bottom: 15px;
}

.card-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 25px;
  flex-grow: 1;
}

.skifs-btn {
  margin-top: auto;
  color: #333 !important;
}
.skifs-btn:hover{

  color: var(--text-contrast-color) !important;

}
</style>