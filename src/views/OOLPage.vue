<template>
  <div class="page-logistics">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <DepartmentLayout
      title="Отдел сопровождения образовательной логистики"
      intro="ООЛ занимается сбором исходной информации, необходимой для создания проекта расписания учебных занятий. Отвечает за разработку и составление расписания для различных учебных групп, включая распределение учебных занятий и промежуточных аттестаций."
      :features="oolData.features"
      :contactData="oolData.contactData"
    >
      <template #after-features>
        <p class="text-body" data-animate="text">При внедрении образовательных траекторий отдел формирует расписание для обучающихся и направлений профессионального роста, обеспечивая логическую последовательность и взаимосвязи между различными модулями в расписании.</p>
      </template>
    </DepartmentLayout>

    <EmployeesSection :manager="oolData.manager" :employees="oolData.employees" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import DepartmentLayout from "@/components/DepartmentLayout.vue";
import EmployeesSection from "@/components/EmployeesSection.vue";
import { BASE_URL } from '@/config.js';
import { ool as oolData } from '@/data/departments.js';

const breadcrumbs = ref([
  { title: 'Главная', to: BASE_URL },
  { title: 'Об управлении', to: `${BASE_URL}about/` },
  { title: 'Отдел сопровождения образовательной логистики', to: null }
])

</script>

<style scoped></style>