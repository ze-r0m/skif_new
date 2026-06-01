<template>
  <div class="contact-card" data-animate="data-animate">
    <div class="contact-card__avatar" data-animate="slide" data-animate-slide-direction="right">
      <img :src="avatar" :alt="fullName">
    </div>
    <div class="contact-card__content">
      <div class="contact-card__titles">
        <h3 class="contact-card__full-name text-h3" data-animate="slide" data-animate-slide-direction="right">{{ fullName }}</h3>
        <p class="contact-card__post text-body" data-animate="slide" data-animate-slide-direction="right">{{ post }}</p>
        <p v-if="additionalPost" class="contact-card__post text-body contact-card__post--additional" data-animate="slide" data-animate-slide-direction="right">{{ additionalPost }}</p>
      </div>
      <div class="contact-card__contacts">
        <div class="contact-card__links" data-animate="slide" data-animate-slide-direction="right">
          <span v-if="phone" class="contact-card__contact text-body-desktop">
            <IconPhone class="contact-card__icon"></IconPhone>
            <a :href="`tel:${phone}`">{{ phone }}</a>
          </span>
          <a v-if="email" class="contact-card__contact text-body-desktop" :href="`mailto:${email}`">
            <IconMessage class="contact-card__icon"></IconMessage>
            <span>{{ email }}</span>
          </a>
        </div>
        <div class="contact-card__socials">
        </div>
      </div>

      <div class="contact-icon-card__footer">
        <a :href="detailsLink" class="contact-icon-card__button btn-secondary text-button" target="_blank">
          <span class="btn-secondary__label">Подробнее</span>
          <span class="btn-secondary__icon">
            <IconArrowRight />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMessage from "@/components/icons/IconMessage.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

const props = defineProps({
  fullName: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  additionalPost: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  detailsLink: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.contact-card {
  background: var(--element-bg);
  border-radius: 32px;
  -moz-column-gap: 32px;
  column-gap: 32px;
  display: flex;
  overflow: hidden;
  padding: 16px 32px 16px 16px;
}

.contact-card__avatar {
  border-radius: 18px;
  flex-shrink: 0;
  isolation: isolate;
  min-height: 320px;
  overflow: hidden;
  width: 320px;
}

.contact-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 0;
  row-gap: 32px;
}

.contact-card__titles {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  color: var(--text-color);
}

.contact-card__full-name {
  margin: 0;
  color: inherit;
}

.contact-card__post{
  margin: 0;
  color: var(--text-2-color);
}

.contact-card__contacts {
  border-bottom: 1px solid var(--border-color);
  display: flex;
  gap: 32px 4px;
  margin-top: auto;
  padding-bottom: 32px;
}

.contact-card__links {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;
  margin-bottom: -16px;
}

.contact-card__links > * {
  margin-bottom: 16px;
  width: 50%;
}

.contact-card__contact {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-bottom: 12px;
}

.contact-card__contact a,
.contact-card__contact span {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.35s ease;
}

.contact-card__contact:hover a,
.contact-card__contact:hover span {
  color: var(--text-link-color);
}

.contact-card__contact:hover .contact-card__icon {
  color: var(--text-link-color);
}

.contact-card__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--text-link-color);
}

.contact-icon-card__footer {
  margin-top: 0;
}

.contact-icon-card__button,
.contact-icon-card__button a,
.contact-icon-card__button a:visited,
.contact-icon-card__button a:active,
.contact-icon-card__button a:focus {
  text-decoration: none;
  color: inherit;
  outline: none;
}

.contact-icon-card__button {
  transition: opacity 0.35s ease;
}

.contact-icon-card__button:hover .btn-secondary__icon {
  background: var(--app-contrast-2);
}

.btn-secondary__icon {
  background: var(--text-link-color);
  transition: background 0.35s ease;
}

.btn-secondary__icon :deep(svg) {
  color: var(--text-contrast-color);
}

@media (max-width: 1023px) {
  .contact-card {
    flex-direction: column;
    padding: 12px 12px 24px;
    row-gap: 24px;
  }

  .contact-card__avatar {
    height: 600px;
    width: 100%;
  }

  .contact-card__content {
    padding: 0 12px;
    row-gap: 24px;
  }

  .contact-card__post{
    margin: 0;
  }
  .contact-card__titles {
    row-gap: 12px;
  }

  .contact-card__links {
    flex-direction: column;
    padding-bottom: 49px;

  }
  .contact-card__contacts{
    padding: 0;
  }

  .contact-card__links {
    margin-bottom: 0;
  }

  .contact-card__links>:last-child {
    margin-bottom: 0;
  }

  .contact-icon-card__footer
  {
    align-items: flex-start;
    flex-direction: column;
    row-gap: 24px;
  }
  .btn-secondary__label {
    gap: 8px;
  }
}

@media (max-width: 743px) {
  .contact-card {
    padding: 12px 12px 24px;
  }

  .contact-card__avatar {
    height: 200px;
  }

  .contact-card__icon{
    width: 20px;
    height: 20px;
  }

  .contact-card__contact{
    font-size: 14px;
  }

  .btn-secondary__icon {
    width: 20px;
    height: 20px;
  }

  .icon-text svg, .link svg {
    height: 20px;
    width: 20px;
  }

}
</style>