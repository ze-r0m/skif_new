<template>
  <section class="hero-section">
    <div class="container">
      <div class="banner-card">
        <div class="banner-card__content">
          <h1 class="banner-card-title">Управление цифровых образовательных технологий</h1>
          <p class="banner-card-text">
            Команда УЦОТ координирует разработку и внедрение электронного обучения в ДГТУ, обеспечивает технологический аудит проектов и аналитическое сопровождение учебного процесса.
            Мы интегрируем информационные системы университета для динамического управления образовательной средой, автоматизируя планирование, контроль и анализ вовлеченности, тестирования и МООК-курсов,
            а также мониторинг результатов обучения. Цифровые технологии обеспечивают эффективное планирование и использование аудиторий и ресурсов,
            учет занятости и расписаний, прогнозирование загрузки учебных помещений. Современные электронные образовательные технологии и программные решения позволяют создавать авторские курсы,
            аудио- и видеоматериалы, а также системы контроля и статистического анализа, обеспечивая качество образовательного процесса и удовлетворение потребностей студентов и преподавателей.
          </p>
          <div class="banner-card__footer">
            <a href="https://donstu.ru/university/struktura/priyemnaya-prorektora-po-strat-i-tsifrovomu-razvitiyu/upravleniye-tsifrovykh-obrazovatelnykh-tekhnologiy/">
              <MainButton text="Узнать больше" variant="light" />
            </a>

          </div>
        </div>

        <div class="banner-card__img">
        <img :src="edu_banner">

      </div>
      </div>
    </div>
    
    <!-- Демонстрация кнопок main типа -->
    <div class="container">
      <div class="buttons-demo">
        <h3>Кнопки Main типа - все состояния:</h3>
        
        <!-- Светлый фон -->
        <div class="demo-group">
          <h4>Для светлого фона:</h4>
          <div class="buttons-row">
            <MainButton text="Default" variant="dark" />
            <MainButton text="Hover" variant="dark" />
            <MainButton text="Pressed" variant="dark" />
            <MainButton text="Disabled" variant="dark" disabled />
          </div>
        </div>
        
        <!-- Темный фон -->
        <div class="demo-group dark-bg">
          <h4>Для темного фона:</h4>
          <div class="buttons-row">
            <MainButton text="Default" variant="light" />
            <MainButton text="Hover" variant="light" />
            <MainButton text="Pressed" variant="light" />
            <MainButton text="Disabled" variant="light" disabled />
          </div>
        </div>
      </div>
    </div>
<!--    <div class="container hero-grid">-->
<!--      &lt;!&ndash; Слайдер &ndash;&gt;-->
<!--      <div class="grid-item grid-slider">-->
<!--        <HeroSlider />-->
<!--      </div>-->

<!--      &lt;!&ndash; Мобильная пагинация &ndash;&gt;-->
<!--      <div class="swiper-pagination-mobile"></div>-->

<!--      &lt;!&ndash; Правая колонка с карточками &ndash;&gt;-->
<!--      <div class="hero-grid-right">-->
<!--        <a href="https://news.donstu.ru/">-->
<!--          <div class="card card-1">-->
<!--            <div class="card-content">-->
<!--              <h3 class="card-title">События ДГТУ</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
<!--        <a href="">-->
<!--          <div class="card card-2">-->
<!--            <div class="card-content">-->
<!--              <h3 class="card-title">Наши достижения</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
<!--        <a href="https://do.skif.donstu.ru/course/view.php?id=418">-->
<!--          <div class="card card-3">-->
<!--            <div class="card-content">-->
<!--              <h3 class="card-title">Инструкции по работе с&nbsp;системами</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
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
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.banner-card {
  background: linear-gradient(215deg, #0E468B 0%, #1370B9 100%, #1370B9 100%);
  color: #FFFFFF;
  padding: 56px;
  border-radius: 32px;

  position: relative;     /* как info-icon-card__body */
  overflow: hidden;
}
.banner-card__content{
  position: relative;
  z-index: 1;


  display: flex;
  flex-direction: column;
  row-gap: 40px;



  gap: 40px;
  max-width: 660px;
}
.banner-card__img {

  position: absolute;
  right: -50px;      /* как -2.4rem */
  bottom: 10px;
  z-index: 0;
  opacity: 0.25;     /* как в оригинале */

}

.banner-card__img img {
  width: 520px;      /* аналог 24rem */
  height: auto;
  max-width: none;
}

.banner-card-title{
  margin: 0;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -1.5px;
}

.banner-card-text {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
}



.buttons-demo {
  margin-top: 40px;
  padding: 32px;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.buttons-demo h3 {
  margin: 0 0 24px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #38424F;
  text-align: center;
}

.demo-group {
  margin-bottom: 32px;
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h4 {
  margin: 0 0 16px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #38424F;
}

.demo-group.dark-bg {
  padding: 24px;
  background: linear-gradient(215deg, #0E468B 0%, #1370B9 100%);
  border-radius: 12px;
}

.demo-group.dark-bg h4 {
  color: #FFFFFF;
}

.buttons-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-section {
    margin-top: 48px;
    padding-bottom: 28px;
  }
  
  .buttons-demo {
    margin-top: 60px;
  }
}

@media (max-width: 767px) {
  .buttons-row {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .main-button {
    width: 100%;
    max-width: 317px;
  }
}
</style>
