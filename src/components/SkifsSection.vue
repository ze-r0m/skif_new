<template>
  <section class="features-section">
    <div class="container features-grid">
      <a v-for="item in features" :key="item.heading" :href="item.link" class="features-card-link">
        <div class="features-card">
          <div class="card-heading" v-html="item.heading"></div>
          <p class="card-text">{{ item.text }}</p>
<!--          <AppButton hover-inverted></AppButton>-->
          <AppButton class="skifs-btn" >
              :showArrow="true"
          >
            Перейти
          </AppButton>
        </div>
      </a>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from "@/components/AppButton.vue";


const features = ref([
  { heading: 'СКИФ<br>ТЕСТ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: '#' },
  { heading: 'ДО<br>СКИФ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: '#' },
  { heading: 'СКИФ<br>СПЕЦ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: '#' },
  { heading: 'СКИФ<br>ЗАОЧНЫЙ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: '#' },
  { heading: 'СКИФ<br>БИБЛИОТЕКА', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: '#' },
  { heading: 'СКИФ<br>МЕЖДУНАРОДНЫЙ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: '#' }
]);
</script>

<style scoped>
.features-section {
  padding: 80px 0;
  background-color: #f0f4f7;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.features-card-link {
  text-decoration: none;
  color: inherit;
}

.features-card {
  background-color: #e9edf2;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.features-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-heading { /* Обновленный класс */
  font-size: 2rem; /* Сделал шрифт чуть меньше, чтобы он лучше подходил для текста */
  font-weight: 700;
  color: #004a99;
  margin-bottom: 20px;
}

.card-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}
.skifs-btn{
  color: #333 !important;
}
</style>