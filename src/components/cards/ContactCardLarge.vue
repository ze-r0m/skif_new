<template>
  <div class="contact-card" data-animate="data-animate">
    <div class="contact-card__avatar">
      <img :src="avatar" :alt="fullName">
    </div>
    <div class="contact-card__content">
      <div class="contact-card__titles">
        <h3 class="contact-card__full-name text-h3">{{ fullName }}</h3>
        <p class="contact-card__post text-body">{{ post }}</p>
        <p v-if="additionalPost" class="contact-card__post text-body contact-card__post--additional">{{ additionalPost }}</p>
      </div>
      <div class="contact-card__contacts">
        <div class="contact-card__links">
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
            <svg class="_icon-arrow-right" width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z" fill="currentColor"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMessage from "@/components/icons/IconMessage.vue";

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
  background: #FFFFFF;
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
  border-bottom: 1px solid #D2DAE3;
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
  color: #38424F !important;
  text-decoration: none !important;
  transition: color 0.35s ease;
}

.contact-card__contact:hover a,
.contact-card__contact:hover span {
  color: #1370B9 !important;
}

.contact-card__contact:hover .contact-card__icon {
  color: #1370B9 !important;
}

.contact-card__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #1370B9;
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
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  transition: opacity 0.35s ease;
}

.contact-icon-card__button:hover .btn-secondary__icon {
  background: #0E468B;
}

.btn-secondary__label {
  white-space: nowrap;
}

.btn-secondary__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  padding: 4px;
  flex-shrink: 0;
  background: rgba(19, 112, 185, 1);
  transition: background 0.35s ease;
}

.btn-secondary__icon svg {
  width: 16px;
  height: 16px;
  color: rgba(255, 255, 255, 1);
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