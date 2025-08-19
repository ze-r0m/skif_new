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
/* =======================================================
   Стили для всех устройств (Mobile-first подход)
   ======================================================= */
.features-section {
  padding: 40px 0;
  background-color: #f0f4f7;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.section__head {
  margin-bottom: 16px;
}

.section__head h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
}

.description-short {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 24px;
}

/* Автоматическая адаптивная сетка
   - `repeat(auto-fit, ...)`: позволяет гриду автоматически создавать столько колонок, сколько помещается.
   - `minmax(300px, 1fr)`: каждая колонка должна быть минимум 300px, но может растягиваться, занимая равную долю (`1fr`).
   Это решает проблему с разной шириной на всех устройствах.
*/
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: stretch;
}

.features-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  min-height: 280px; /* Задаём минимальную высоту */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.features-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #004a99;
  margin-bottom: 10px;
  line-height: 1.3;
  overflow: hidden;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.skifs-btn {
  margin-top: auto;
  width: 100%;
  color: #333 !important;
}

.skifs-btn:hover {
  color: var(--text-contrast-color) !important;
}

/* =======================================================
   Медиа-запросы для стилизации на больших экранах
   ======================================================= */

@media (min-width: 768px) {
  .features-grid {
    gap: 24px;
  }

  .features-card {
    border-radius: 24px;
    padding: 30px;
  }

  .card-heading {
    font-size: 1.6rem;
  }
}

@media (min-width: 992px) {
  .features-section {
    padding: 60px 0;
  }

  .section__head {
    margin-bottom: 20px;
  }

  .section__head h2 {
    font-size: 2rem;
  }

  .description-short {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  .features-grid {
    gap: 30px;
  }

  .features-card {
    border-radius: 32px;
    padding: 40px;
  }

  .card-heading {
    font-size: 1.7rem;
    margin-bottom: 15px;
  }

  .card-text {
    font-size: 1rem;
    margin-bottom: 30px;
  }
}
</style>