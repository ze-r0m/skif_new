<template>
  <div class="page-resource">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <DepartmentLayout
      title="Сектор ресурсного обеспечения образовательной деятельности"
      intro="Сектор ресурсного обеспечения образовательной деятельности (СРООД) отвечает за материально‑техническую и организационную поддержку учебного процесса в университете."
      subtitle="сектора"
      :features="resourceData.features"
      :contactData="resourceData.contactData"
    />

    <EmployeesSection :manager="resourceData.manager" :employees="resourceData.employees" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import DepartmentLayout from "@/components/DepartmentLayout.vue";
import EmployeesSection from "@/components/EmployeesSection.vue";
import { BASE_URL } from '@/config.js';
import { resource as resourceData } from '@/data/departments.js';

const breadcrumbs = ref([
  { title: 'Главная', to: BASE_URL },
  { title: 'Об управлении', to: `${BASE_URL}about/` },
  { title: 'Сектор ресурсного обеспечения', to: null }
])
</script>

<style scoped></style>