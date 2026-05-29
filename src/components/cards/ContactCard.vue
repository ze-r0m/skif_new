<template>
  <div class="contact-card-small" data-animate="data-animate">
    <div class="contact-card-small__avatar" data-animate="slide" data-animate-slide-direction="right">
      <img :src="avatar" :alt="fullName">
    </div>
    <div class="contact-card-small__content">
      <div class="contact-card-small__titles">
        <h4 class="contact-card-small__full-name text-h4" data-animate="slide" data-animate-slide-direction="right">{{ fullName }}</h4>
        <p class="contact-card-small__post text-body-small" data-animate="slide" data-animate-slide-direction="right">{{ post }}</p>
      </div>
      <div class="contact-card-small__footer">
        <a v-if="detailsLink" class="contact-icon-card-small__button btn-secondary text-button" :href="detailsLink" target="_blank">
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

.btn-secondary__icon {
  background: rgba(19, 112, 185, 1);
  transition: background 0.35s ease;
}

.btn-secondary__icon :deep(svg) {
  color: #FFFFFF;
}

@media (max-width: 1023px) {
  .contact-card-small {
    -moz-column-gap: 20px;
    column-gap: 20px;
    padding: 12px;
  }

  .contact-card-small__avatar {
    height: 117px;
    width: 90px;
  }

  .contact-card-small__content {
    padding: 0;
    row-gap: 24px;
  }

  .contact-card-small__titles {
    row-gap: 12px;
  }
}

@media (max-width: 743px) {
  .contact-card-small {
    padding: 12px 16px 12px 12px;
  }

  .contact-card-small__avatar {
    height: 100px;
    width: 80px;
  }

  .contact-card-small__content {
    row-gap: 16px;
  }

  .contact-card-small__full-name {
    font-size: 16px;
  }
  .btn-secondary__icon {
    width: 20px;
    height: 20px;
  }

  .btn-secondary__icon :deep(svg) {
    width: 12px;
    height: 12px;
  }

}
</style>