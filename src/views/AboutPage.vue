<template>
  <div class="page-about">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="container app-section _center _gutter-md" id="block-about">
        <div class="app-section__head">
          <h1 class="text-h1" data-animate="title">Об управлении</h1>
        </div>
        <div class="app-section__content text-content">
          <p class="text-body" style="margin-top: 0" data-animate="text">Управление цифровых образовательных технологий Донского государственного технического университета обеспечивает системное внедрение и развитие современных цифровых решений в образовательный процесс вуза.</p>
          <p class="text-body" data-animate="text">Внедрение цифровой среды учебного процесса — одна из ключевых задач Управления цифровых образовательных технологий.</p>
          <p class="text-body" data-animate="text">Деятельностью управления является автоматизация и цифровизация образовательной деятельности, внедрение в учебный процесс ДГТУ цифровых образовательных технологий, в том числе электронного обучения и дистанционных образовательных технологий, которые направлены на повышение эффективности профессионального обучения и образовательной деятельности ДГТУ.
          </p>
        </div>
    </section>

    <section class="container app-section _gutter-sm">
    <BulletListSection
      title="Основные направления деятельности"
      :items="features"
    />
      </section>

    <section class="container app-section _gutter-sm">
      <div class="app-section__head">
        <h1 class="text-h1" data-animate>Структура управления</h1>
      </div>
      <div class="app-section__content">
        <div class="app-grid _columns-1-1">
          <div class="app-grid _columns-2-1" data-animate-group data-animate-stagger="0.08">
<ServiceCard
              title="Отдел сопровождения дистанционного образования (СДО)"
              description="Координация сопровождение и техническая поддержка пользователей на портале электронного обучения СКИФ ДГТУ"
              :link="`${BASE_URL}about/cdo/`"
              variant="gradient"
            />
            <ServiceCard
              title="Отдел сопровождения образовательной логистики (ООЛ)"
              description="Формирование расписания занятий по программам высшего образования"
              :link="`${BASE_URL}about/ool/`"
              variant="primary-light"
            />
            <ServiceCard
              class="_span-1"
              title="Сектор ресурсного обеспечения образовательной деятельности"
              description="Сбор и анализ данных об оснащенности аудиторного фонда, требуемом оборудовании и программном обеспечении"
              :link="`${BASE_URL}about/rood/`"
              variant="white"
            />
          </div>
</div>
      </div>
    </section>

    <EmployeesSection :manager="aboutData.manager" :employees="aboutData.employees" />

  </div>
</template>
<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import ServiceCard from "@/components/cards/ServiceCard.vue";
import BulletListSection from "@/components/BulletListSection.vue";
import EmployeesSection from "@/components/EmployeesSection.vue";
import { BASE_URL } from '@/config.js';
import { about as aboutData } from '@/data/departments.js';

const breadcrumbs = ref([
  { title: 'Главная', to: BASE_URL },
  { title: 'Об управлении', to: null }
])

const features = ref(aboutData.features)
</script>

<style scoped>
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

._span-1 {
  grid-column: 2 / 3;
}

@media (max-width: 743px) {
  ._columns-2-1 {
    display: flex;
    flex-direction: column;
  }
}
</style>