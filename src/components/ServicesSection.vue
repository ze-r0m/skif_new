<template>
  <section class="services-section" id="services">
    <div class="container">
      <div class="services-section__header">
        <h2 class="services-section__title text-h2" data-animate>Управлением координируется <br> электронная образовательная среда вуза — СКИФ</h2>
      </div>

      <div class="services-section__grid" data-animate-group data-animate-stagger="0.08">
        <div
          v-for="(row, ri) in serviceRows"
          :key="ri"
          class="services-section__row"
          data-animate
        >
          <div
            v-for="(service, si) in row"
            :key="ri + '-' + si"
            :class="getServiceGridClass(service)"
            data-animate="data-animate"
          >
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :link="service.link"
              :variant="service.variant"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import ServiceCard from './cards/ServiceCard.vue';
import { serviceLinks } from '@/data/navigation.js';

const services = ref([
  {
    title: 'ДО СКИФ',
    description: 'Система для дистанционного обучения и электронных курсов. Позволяет студентам и преподавателям участвовать в онлайн-занятиях, использовать актуальные учебные материалы и контролировать прогресс.',
    link: serviceLinks[0].href,
    variant: 'primary',
    width: 'col-6'
  },
  {
    title: 'СКИФ ТЕСТ',
    description: 'Система для проведения массового тестирования студентов, дней навигации, анкетирования и государственных итоговых аттестаций.',
    link: serviceLinks[1].href,
    variant: 'white',
    width: 'col-6'
  },
  {
    title: 'СКИФ БИБЛИОТЕКА',
    description: 'Система для обеспечения материалами заочной формы обучения. Содержит учебные пособия, методические указания, конспекты лекций по всем формам обучения.',
    link: serviceLinks[2].href,
    variant: 'white',
    width: 'col-8'
  },
  {
    title: 'СКИФ СПЕЦ',
    description: 'Система для проведения вступительных испытаний абитуриентов, конкурсов, олимпиад и разовых мероприятий. Обеспечивает организацию учета пользователей совместно с приемной комиссией вуза.',
    link: serviceLinks[3].href,
    variant: 'gradient',
    width: 'col-4'
  },
  {
    title: 'СКИФ МЕЖДУНАРОДНЫЙ',
    description: 'Система для факультета «Международный» и подфакультетов. Позволяет вести специализированные курсы и обеспечивает смешанную авторизацию пользователей с интеграцией в единую цифровую среду.',
    link: serviceLinks[4].href,
    variant: 'primary-light',
    width: 'col-6'
  },
  {
    title: 'ПРОФ СКИФ',
    description: 'Система для программ профессионального обучения.',
    link: serviceLinks[5].href,
    variant: 'white',
    width: 'col-6'
  }
]);

const serviceRows = computed(() => {
  const rows = []
  let currentRow = []
  let currentWidth = 0

  for (const service of services.value) {
    const w = parseInt(service.width.replace('col-', ''))
    if (currentWidth + w > 12 && currentRow.length > 0) {
      rows.push(currentRow)
      currentRow = []
      currentWidth = 0
    }
    currentRow.push(service)
    currentWidth += w
  }
  if (currentRow.length > 0) {
    rows.push(currentRow)
  }
  return rows
})

const getServiceGridClass = (service) => {
  return [
    service.width,
    'col-md-4',
    'col-sm-2'
  ];
};
</script>

<style scoped>
/* =======================================================
   Desktop styles
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

.services-section__grid {
  display: flex;
  flex-direction: column;
}

.services-section__row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.services-section__row + .services-section__row {
  margin-top: 20px;
}

/* =======================================================
   Tablet (744px - 1023px) — stack vertically
   ======================================================= */
@media (min-width: 744px) and (max-width: 1023px) {
  .services-section {
    padding: 0 0 40px 0;
  }

  .services-section__header {
    margin-bottom: 24px;
  }

  .services-section__row {
    grid-template-columns: 1fr;
  }

  .services-section__row [class*="col-"],
  .services-section__row [class*="col-md-"],
  .services-section__row [class*="col-sm-"] {
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

  .services-section__row {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .services-section__row + .services-section__row {
    margin-top: 12px;
  }
}
</style>
