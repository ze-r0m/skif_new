<template>
  <div class="page-department">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <DepartmentLayout
      title="Отдел сопровождения дистанционного образования"
      intro="Отдел СДО выполняет ряд ключевых функций, направленных на поддержку и развитие электронного обучения в ДГТУ. Он обеспечивает консультационную поддержку по использованию дистанционных технологий и внедрению электронного обучения, а также оказывает техническую и методическую помощь преподавателям в создании курсов электронного обучения, включая открытые онлайн-курсы."
      :features="cdoData.features"
      :contactData="cdoData.contactData"
    >
      <template #after-features>
        <p class="text-body" data-animate="text">Отдел проводит техническую экспертизу контента и помогает кафедрам и авторам в разработке электронных учебно-методических изданий на портале электронного обучения ДГТУ.</p>
      </template>
    </DepartmentLayout>

    <EmployeesSection :manager="cdoData.manager" :employees="cdoData.employees" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import DepartmentLayout from "@/components/DepartmentLayout.vue";
import EmployeesSection from "@/components/EmployeesSection.vue";
import { BASE_URL } from '@/config.js';
import { cdo as cdoData } from '@/data/departments.js';

const breadcrumbs = ref([
  { title: 'Главная', to: BASE_URL },
  { title: 'Об управлении', to: `${BASE_URL}about/` },
  { title: 'Отдел сопровождения дистанционного образования', to: null }
])
</script>

<style scoped></style>