<template>
  <div class="page-about">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="app-section _gutter-md">
      <div class="container">
        <div class="app-section__head">
          <h1 class="text-h1">Об управлении</h1>
        </div>
      </div>
    </section>

    <section class="container app-section _center" id="block-about">
      <div class="app-section__content text-content">
        <p class="text-body">Управление цифровых образовательных технологий (УЦОТ) координирует внедрение электронного обучения в Донском государственном техническом университете, обеспечивает автоматизацию учёта успеваемости, формирование расписаний и создание электронных курсов.</p>
        <p class="text-body">УЦОТ объединяет три отдела, каждый из которых выполняет важную функцию в образовательном процессе.</p>
        <p class="text-body">Подробнее о каждом отделе можно узнать, кликнув на кнопки ниже:</p>
      </div>
    </section>

    <section class="container app-section _gutter-sm">
      <div class="app-section__content">
        <div class="app-grid _columns-1-1">
          <div class="app-grid _columns-2-1">
            <ServiceCard
              title="Отдел сопровождения дистанционного образования"
              description="Координация и сопровождение дистанционных образовательных программ"
              link="/about/department"
              variant="primary"
            />
            <ServiceCard
              title="Отдел сопровождения образовательной логистики"
              description="Планирование и организация учебного процесса"
              link="/about/logistics"
              variant="white"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import ServiceCard from "@/components/ServiceCard.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Об управлении', to: null }
])
</script>

<style scoped>
.app-section {
  margin-bottom: 80px;
}

.app-section__head {
  margin-top: 0;
  margin-bottom: 40px;
}

.app-section__head h1 {
  margin: 0;
}

.app-grid {
  display: grid;
  gap: 20px;
}

._columns-1-1 {
  grid-template-columns: 1fr;
}

._columns-2-1 {
  grid-template-columns: repeat(2, 1fr);
}

._columns-3-1 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }
}

@media (max-width: 743px) {
  .app-section {
    margin-bottom: 40px;
  }

  .app-section__head {
    margin-bottom: 24px;
  }

  ._columns-2-1,
  ._columns-3-1 {
    grid-template-columns: 1fr;
  }
}
</style>