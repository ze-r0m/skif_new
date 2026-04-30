<template>
  <div class="contact-card-small">
    <div class="contact-card-small__avatar">
      <img :src="avatar" :alt="fullName">
    </div>
    <div class="contact-card-small__content">
      <div class="contact-card-small__titles">
        <h4 class="contact-card-small__full-name text-h4">{{ fullName }}</h4>
        <p class="contact-card-small__post text-body-small">{{ post }}</p>
      </div>
      <div class="contact-card-small__footer">
        <a v-if="detailsLink" class="contact-icon-card-small__button btn-secondary text-button" :href="detailsLink" target="_blank">
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
  detailsLink: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.contact-card-small {
  background: #FFFFFF;
  border-radius: 32px;
  column-gap: 24px;
  display: flex;
  overflow: hidden;
  padding: 16px 24px 16px 16px;
}

.contact-card-small__avatar {
  border-radius: 18px;
  flex-shrink: 0;
  height: 156px;
  isolation: isolate;
  overflow: hidden;
  width: 120px;
}

.contact-card-small__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-card-small__content {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  row-gap: 24px;
}

.contact-card-small__titles {
  color: #38424F;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.contact-card-small__full-name {
  margin: 0;
}

.contact-card-small__post {
  margin: 0;
  color: #80849D;
}

.contact-card-small__footer {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  row-gap: 24px;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
}

.contact-icon-card-small__button,
.contact-icon-card-small__button a,
.contact-icon-card-small__button a:visited,
.contact-icon-card-small__button a:active,
.contact-icon-card-small__button a:focus {
  text-decoration: none;
  color: inherit;
  outline: none;
}

.contact-card-small__contact a,
.contact-card-small__contact span {
  color: #38424F !important;
  text-decoration: none !important;
  transition: color 0.35s ease;
}

.contact-icon-card-small__button:hover .btn-secondary__icon {
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
  color: #FFFFFF;
}

@media (max-width: 743px) {
  .contact-card-small {
    padding: 12px 16px 12px 12px;
  }

  .contact-card-small__avatar {
    height: 100px;
    width: 80px;
    border-radius: 14px;
  }

  .contact-card-small__content {
    row-gap: 16px;
  }

  .contact-card-small__titles {
    row-gap: 8px;
  }

  .contact-card-small__full-name {
    font-size: 16px;
  }
}
</style>