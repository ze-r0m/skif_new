<template>
  <aside class="contact-card-no-image card" data-animate="slide" data-animate-slide-direction="bottom" data-animate-duration="0.20">
    <header class="contact-card-no-image__header">
      <h3 class="text-h3">{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
    </header>

    <div class="contact-card-no-image__contacts">
      <!-- Адреса (без ховера) -->
      <div v-for="(addr, index) in addresses" :key="'addr-'+index" class="contact-card-no-image__contact">
        <IconLocation class="contact-card-no-image__icon" />
        <span>{{ addr }}</span>
      </div>

      <!-- Почта (с ховером) -->
      <a v-for="email in emails" :key="email" class="contact-card-no-image__contact contact-card-no-image__contact--hover" :href="`mailto:${email}`">
        <IconMessage class="contact-card-no-image__icon" />
        <span>{{ email }}</span>
      </a>

      <!-- Телефоны (с ховером) -->
      <div v-for="(phone, index) in phones" :key="'phone-'+index" class="contact-card-no-image__contact contact-card-no-image__contact--hover">
        <IconPhone class="contact-card-no-image__icon" />
        <a :href="`tel:${phone.number}`">
          <span>{{ phone.number }}</span>
          <small v-if="phone.caption">{{ phone.caption }}</small>
        </a>
      </div>

      <!-- График работы (без ховера) -->
      <div v-if="schedule" class="contact-card-no-image__contact">
        <IconClock class="contact-card-no-image__icon" />
        <span>{{ schedule }}</span>
      </div>
    </div>

  </aside>
</template>

<script setup>
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMessage from "@/components/icons/IconMessage.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import IconClock from "@/components/icons/IconClock.vue";

defineProps({
  title: {
    type: String,
    default: 'Контакты'
  },
  subtitle: {
    type: String,
    default: ''
  },
  phones: {
    type: Array,
    default: () => []
  },
  emails: {
    type: Array,
    default: () => []
  },
  addresses: {
    type: Array,
    default: () => []
  },
  schedule: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.contact-card-no-image {;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  row-gap: 32px;

  background: var(--element-bg);
  border-radius: 32px;
  padding: 32px;
}

.contact-card-no-image__header h3 {
  margin: 0 0;
  color: var(--text-color);
}

.contact-card-no-image__header p {
  margin: 0;
  color: var(--text-2-color);
}

.contact-card-no-image__header {
  padding-bottom: 45px;
  border-bottom: 1px solid var(--border-color);
}

.contact-card-no-image__contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-card-no-image__contact {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.contact-card-no-image__contact a,
.contact-card-no-image__contact span {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.35s ease;
}

.contact-card-no-image__contact a {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-card-no-image__contact small {
  color: var(--text-2-color);
  font-size: 12px;
  line-height: 16px;
}

.contact-card-no-image__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--text-link-color);
  margin-top: -2px;
}

.contact-card-no-image__contact--hover:hover a,
.contact-card-no-image__contact--hover:hover span,
a.contact-card-no-image__contact--hover:hover {
  color: var(--text-link-color);
}

.contact-card-no-image__contact--hover:hover .contact-card-no-image__icon {
  color: var(--text-link-color);
}

@media (max-width: 1023px) {
  .contact-card-no-image {
    padding: 24px;
    gap: 24px;
    margin-bottom: 56px;
  }

  .contact-card-no-image__contact a {
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
  }
  .contact-card-no-image__header{
    padding-bottom: 37px;
  }

}

@media (max-width: 743px) {
  .contact-card-no-image {
    padding: 20px;
    border-radius: 24px;
  }

  .contact-card-no-image__icon {
    width: 20px;
    height: 20px;
  }

  .contact-card-no-image__contact{
    font-size: 14px;
  }

  .contact-card-no-image__icon {
    margin-top: 0;
  }

}
</style>
