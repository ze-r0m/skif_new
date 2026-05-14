<template>
  <section class="services-section" id="services">
    <div class="container">
      <div class="services-section__header">
        <h2 class="services-section__title text-h2">Управлением координируется <br> электронная образовательная среда вуза — СКИФ</h2>
      </div>

      <div class="grid">
        <div :class="getServiceGridClass(index)" v-for="(service, index) in services" :key="index">
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :link="service.link"
            :variant="service.variant"
            data-animate="data-animate"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ServiceCard from './cards/ServiceCard.vue';

const services = ref([
  {
    title: 'ДО СКИФ',
    description: 'Система для дистанционного обучения и электронных курсов. Позволяет студентам и преподавателям участвовать в онлайн-занятиях, использовать актуальные учебные материалы и контролировать прогресс.',
    link: 'https://do.skif.donstu.ru/',
    variant: 'primary',
    width: 'col-6'
  },
  {
    title: 'СКИФ ТЕСТ',
    description: 'Система для проведения массового тестирования студентов, дней навигации, анкетирования и государственных итоговых аттестаций.',
    link: 'https://skif.donstu.ru/test/',
    variant: 'white',
    width: 'col-6'
  },
  {
    title: 'СКИФ БИБЛИОТЕКА',
    description: 'Система для обеспечения материалами заочной формы обучения. Содержит учебные пособия, методические указания, конспекты лекций по всем формам обучения.',
    link: 'https://de.donstu.ru/zaoch/organizations/1',
    variant: 'white',
    width: 'col-8'
  },
  {
    title: 'СКИФ СПЕЦ',
    description: 'Система для проведения вступительных испытаний абитуриентов, конкурсов, олимпиад и разовых мероприятий. Обеспечивает организацию учета пользователей совместно с приемной комиссией вуза.',
    link: 'https://skif.donstu.ru/spec/',
    variant: 'gradient',
    width: 'col-4'
  },
  {
    title: 'СКИФ МЕЖДУНАРОДНЫЙ',
    description: 'Система для факультета «Международный» и подфакультетов. Позволяет вести специализированные курсы и обеспечивает смешанную авторизацию пользователей с интеграцией в единую цифровую среду.',
    link: 'https://int.skif.donstu.ru/',
    variant: 'primary-light',
    width: 'col-6'
  },
  {
    title: 'ПРОФ СКИФ',
    description: 'Система для программ профессионального обучения.',
    link: 'https://prof.skif.donstu.ru/',
    variant: 'white',
    width: 'col-6'
  }
]);

const getServiceGridClass = (index) => {
  const service = services.value[index];
  return [
    service.width,
    'col-md-4',
    'col-sm-2'
  ];
};
</script>

<style scoped>
/* =======================================================
   Desktop styles (по макету Figma)
   ======================================================= */
.services-section {
  padding: 0 0 40px 0;
  background-color: transparent;
}

.services-section__header {
  margin-bottom: 32px;
}

.services-section__title {
  margin: 0;
}

/* =======================================================
   Tablet (744px - 1023px)
   ======================================================= */
@media (min-width: 744px) and (max-width: 1023px) {
  .services-section {
    padding: 0 0 40px 0;
  }

  .services-section__header {
    margin-bottom: 24px;
  }
  .services-section .grid {
    grid-template-columns: 1fr;
  }

  .services-section [class*="col-"],
  .services-section [class*="col-md-"],
  .services-section [class*="col-sm-"] {
    grid-column: 1 / -1;
  }
}

/* =======================================================
   Mobile (до 743px)
   ======================================================= */
@media (max-width: 743px) {
  .services-section {
    padding: 0 0 40px 0;
  }

  .services-section__header {
    margin-bottom: 24px;
  }


}
</style>
