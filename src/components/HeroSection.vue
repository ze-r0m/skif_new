<template>
  <section class="hero-section">
    <div class="container">
      <div class="banner-card">
        <div class="banner-card__content">
          <h1 class="banner-card-title">Управление цифровых образовательных технологий</h1>
          <p class="banner-card-text">
            Управление цифровых образовательных технологий координирует внедрение электронного обучения в ДГТУ, обеспечивая на базе единой информационной системы автоматизацию планирования,
            контроль успеваемости и аналитическое сопровождение учебного процесса. Деятельность управления направлена на эффективное использование аудиторного фонда и ресурсов университета,
            включая формирование расписания и прогнозирование загрузки помещений, а также на создание современных электронных курсов и программных решений для повышения качества образования.
          </p>
          <div class="banner-card__footer">
            <MainButton 
              text="Узнать больше" 
              variant="light"
              href="https://donstu.ru/university/struktura/priyemnaya-prorektora-po-strat-i-tsifrovomu-razvitiyu/upravleniye-tsifrovykh-obrazovatelnykh-tekhnologiy/"
            />
          </div>
        </div>

        <div class="banner-card__img">
          <img :src="edu_banner" alt="Образовательные технологии">
        </div>
      </div>
    </div>




<!--    <h1>СКИФ — Электронная образовательная<br>среда вуза</h1>-->

    <!-- Демонстрация кнопок main типа -->
<!--    <div class="container">-->
<!--      <div class="buttons-demo">-->
<!--        <h3>Кнопки Main типа - все состояния:</h3>-->

<!--        &lt;!&ndash; Светлый фон &ndash;&gt;-->
<!--        <div class="demo-group">-->
<!--          <h4>Для светлого фона:</h4>-->
<!--          <div class="buttons-row">-->
<!--            <MainButton text="Default" variant="dark" />-->
<!--            <MainButton text="Hover" variant="dark" />-->
<!--            <MainButton text="Pressed" variant="dark" />-->
<!--            <MainButton text="Disabled" variant="dark" disabled />-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Темный фон &ndash;&gt;-->
<!--        <div class="demo-group dark-bg">-->
<!--          <h4>Для темного фона:</h4>-->
<!--          <div class="buttons-row">-->
<!--            <MainButton text="Default" variant="light" />-->
<!--            <MainButton text="Hover" variant="light" />-->
<!--            <MainButton text="Pressed" variant="light" />-->
<!--            <MainButton text="Disabled" variant="light" disabled />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>


<script setup>
import HeroSlider from "./HeroSlider.vue";
import edu_banner from '@/assets/edu_banner.png';
import MainButton from "./MainButton.vue";
</script>

<style scoped>
/* =======================================================
   Mobile-first (2 колонки, container 351px, padding 12px)
   Базовые стили для всех устройств
   ======================================================= */
.hero-section {
  margin-top: 0;
  padding-bottom: 0;
}

.banner-card {
  background: linear-gradient(215deg, #0E468B 0%, #1370B9 100%, #1370B9 100%);
  color: #FFFFFF;
  padding: 24px;
  padding-bottom: 40px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  min-height: 280px;
}

.banner-card__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
}

.banner-card__img {
  position: absolute;
  right: -20px;
  bottom: -10px;
  z-index: 0;
  opacity: 0.15;
}

.banner-card__img img {
  width: 140px;
  height: auto;
  max-width: none;
}

.banner-card-title {
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -1px;
}

.banner-card-text {
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.24px;
}

.banner-card__footer {
  margin-top: 8px;
}

/* Buttons demo */
.buttons-demo {
  margin-top: 32px;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.buttons-demo h3 {
  margin: 0 0 20px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #38424F;
  text-align: center;
}

.demo-group {
  margin-bottom: 24px;
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h4 {
  margin: 0 0 12px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #38424F;
}

.demo-group.dark-bg {
  padding: 20px;
  background: linear-gradient(215deg, #0E468B 0%, #1370B9 100%);
  border-radius: 12px;
}

.demo-group.dark-bg h4 {
  color: #FFFFFF;
}

.buttons-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

/* Mobile: кнопки в колонку */
@media (max-width: 743px) {
  .buttons-row {
    flex-direction: column;
    align-items: flex-start;
  }


}

/* =======================================================
   Tablet (8 колонок, container 680px, padding 32px)
   Брейкпоинт: 744px - 1023px
   ======================================================= */
@media (min-width: 744px) and (max-width: 1023px) {
  .hero-section {
    margin-top: 40px;
    padding-bottom: 20px;
  }

  .banner-card {
    padding: 32px;
    border-radius: 24px;
    min-height: 320px;
  }

  .banner-card__content {
    gap: 24px;
    max-width: 480px;
  }

  .banner-card__img {
    right: -30px;
    bottom: 0;
  }

  .banner-card__img img {
    width: 220px;
  }

  .banner-card-title {
    font-size: 32px;
    line-height: 40px;
  }

  .banner-card-text {
    font-size: 14px;
    line-height: 22px;
  }

  .buttons-demo {
    margin-top: 48px;
    padding: 28px;
  }

  .buttons-demo h3 {
    font-size: 18px;
  }

  .buttons-row {
    gap: 14px;
  }
}

/* =======================================================
   Desktop (12 колонок, container 1328px, padding 56px)
   Брейкпоинт: от 1024px
   ======================================================= */
@media (min-width: 1024px) {
  .hero-section {
    margin-top: 48px;
    padding-bottom: 0;
  }

  .banner-card {
    padding: 56px;
    border-radius: 32px;
    min-height: 400px;
  }

  .banner-card__content {
    gap: 40px;
    max-width: 660px;
  }

  .banner-card__img {
    right: -50px;
    bottom: 10px;
  }

  .banner-card__img img {
    width: 520px;
  }

  .banner-card-title {
    font-size: 44px;
    line-height: 52px;
  }

  .banner-card-text {
    font-size: 16px;
    line-height: 24px;
  }

  .buttons-demo {
    margin-top: 60px;
    padding: 32px;
  }

  .buttons-demo h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .buttons-row {
    gap: 16px;
  }
}
</style>
