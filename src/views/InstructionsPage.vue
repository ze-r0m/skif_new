<template>
  <div class="page-instructions">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="container app-section _center _gutter-md">
      <div class="app-section__head">
        <h1 class="text-h1">Инструкции</h1>
      </div>
      <div class="app-section__content text-content">
        <p class="text-body" style="margin-top: 0;">Здесь будут представлены инструкции по работе с системами СКИФ ДГТУ.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Инструкции', to: null }
])
</script>

<style scoped>
.page-instructions {
  width: 100%;
}

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
}
</style>