<template>
  <section class="app-section _gutter-md">
    <div class="container">
      <div class="app-section text-content _center">
        <div class="grid">
          <div class="col-8">
            <div class="app-section__head">
              <h1 class="text-h1" data-animate="title">{{ title }}</h1>
            </div>
            <div class="text-content">
              <p class="text-body" style="margin-top: 0;" data-animate="text">{{ intro }}</p>
              <p class="text-body" data-animate="text">Основные направления работы {{ subtitle }}:</p>
              <FeatureList :items="features"/>
              <slot name="after-features" />
            </div>
          </div>
          <aside class="col-4">
            <div class="inner-wrapper-sticky">
              <ContactCardNoImage
                :phones="contactData.phones"
                :emails="contactData.emails"
                :addresses="contactData.addresses"
                :schedule="contactData.schedule"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureList from "@/components/FeatureList.vue";
import ContactCardNoImage from "@/components/cards/ContactCardNoImage.vue";

defineProps({
  title: { type: String, required: true },
  intro: { type: String, required: true },
  subtitle: { type: String, default: 'отдела' },
  features: { type: Array, required: true },
  contactData: { type: Object, required: true },
})
</script>

<style scoped>
.grid{
  gap: 88px;
}

@media (max-width: 1023px) {
  .grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .grid > .col-8 { order: 2; }
  .grid > .col-4 { order: 1; }
}
</style>
