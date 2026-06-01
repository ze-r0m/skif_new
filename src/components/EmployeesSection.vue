<template>
  <section class="container app-section _gutter-sm">
    <div class="app-section__head">
      <h2 class="text-h1" data-animate>Сотрудники</h2>
    </div>
    <div class="app-section__content">
      <div class="employees-section">
        <ContactCardLarge
          :fullName="manager.fullName"
          :avatar="manager.avatar"
          :post="manager.post"
          :additionalPost="manager.additionalPost"
          :phone="manager.phone"
          :email="manager.email"
          :detailsLink="manager.detailsLink"
        />
        <div v-if="employees.length" class="employees-grid">
          <ContactCard
            v-for="employee in employees"
            :key="employee.fullName"
            :fullName="employee.fullName"
            :avatar="employee.avatar"
            :post="employee.post"
            :detailsLink="employee.detailsLink"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactCard from "@/components/cards/ContactCard.vue";
import ContactCardLarge from "@/components/cards/ContactCardLarge.vue";

defineProps({
  manager: { type: Object, required: true },
  employees: { type: Array, default: () => [] }
})
</script>

<style scoped>
.employees-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.employees-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 1023px) {
  .employees-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
}
</style>
