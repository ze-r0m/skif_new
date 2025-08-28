<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <!-- Слайдер -->
      <div class="grid-item grid-slider">
        <HeroSlider />
      </div>

      <!-- Мобильная пагинация -->
      <div class="swiper-pagination-mobile"></div>

      <!-- Правая колонка с карточками -->
      <div class="hero-grid-right">
        <a href="https://news.donstu.ru/">
          <div class="card card-1">
            <div class="card-content">
              <h3 class="card-title">События ДГТУ</h3>
            </div>
          </div>
        </a>
        <a href="">
          <div class="card card-2">
            <div class="card-content">
              <h3 class="card-title">Наши достижения</h3>
            </div>
          </div>
        </a>
        <a href="https://do.skif.donstu.ru/course/view.php?id=418">
          <div class="card card-3">
            <div class="card-content">
              <h3 class="card-title">Инструкции по работе с&nbsp;системами</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSlider from "./HeroSlider.vue";
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  padding: 24px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.hero-grid a {
  text-decoration: none;
}

.grid-slider {
  position: relative;
  min-height: 20rem;
  border-radius: 12px;
  overflow: hidden;
  min-width: 0;
}

.hero-grid-right {
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
}

/* карточки */
.hero-grid-right .card {
  position: relative;       /* чтобы ::before был внутри карточки */
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  box-sizing: border-box;
  min-height: 10rem;
}

/* затемнение */
.hero-grid-right .card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0.3;
  transition: opacity 0.35s ease;
  z-index: 1;
}

/* контент над затемнением */
.hero-grid-right .card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
}

.card-title {
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 700;
  margin: 0;
}

.card-content h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
}

/* hover — уменьшение затемнения */
.hero-grid-right .card:hover::before {
  opacity: 0;
}

/* фоновые картинки */
.card-1 {
  background: url("../assets/fasad.jpg") center/cover no-repeat;
}

.card-2 {
  background: url("../assets/achievements.png") center/cover no-repeat;
}

.card-3 {
  background: url("../assets/instructions.jpg") center/cover no-repeat;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 28px 0;
  }

  .hero-grid {
    grid-template-columns: 2fr 1fr;
    align-items: stretch;
    height: 600px;
  }

  .grid-slider {
    border-radius: 32px;
    min-height: 0;
    height: 100%;
  }

  .hero-grid-right {
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
  }

  .hero-grid-right .card {
    border-radius: 32px;
    height: 100%;
  }
}
</style>
