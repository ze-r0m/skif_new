<template>
  <div class="breadcrumbs-wrapper">
    <!-- Desktop version -->
    <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumbs__item"
        :class="{ 'breadcrumbs__item--current': !item.to }"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <router-link
          v-if="item.to"
          class="breadcrumbs__item-link"
          :to="item.to"
          itemprop="item"
        >
          <IconHome v-if="index === 0" />
          <span v-else class="text-body">{{ item.title }}</span>
          <meta itemprop="position" :content="index + 1">
        </router-link>
        <span v-else class="breadcrumbs__item-text text-body">
          {{ item.title }}
          <meta itemprop="position" :content="index + 1">
        </span>
      </li>
    </ol>
    
    <!-- Mobile version: show only previous page link with back arrow -->
    <ol v-if="items.length >= 2" class="breadcrumbs breadcrumbs--mobile" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        class="breadcrumbs__item"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <router-link
          class="breadcrumbs__item-link"
          :to="items[items.length - 2].to"
          itemprop="item"
        >
          <svg class="breadcrumbs__arrow text-body" width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z" fill="#80889D"/>
          </svg>
          <IconHome v-if="items.length === 2" />
          <span v-else class="breadcrumbs__item-text text-body-small">{{ items[items.length - 2].title }}</span>
          <meta itemprop="position" :content="items.length - 1">
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script setup>
import IconHome from "@/components/icons/IconHome.vue";

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  column-gap: 16px;
  row-gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0 0 48px;
  flex-wrap: wrap;
}

ol.breadcrumbs {
  margin: 0 0 48px;
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.breadcrumbs__item:not(:last-child)::after {
  content: '';
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 33 33' fill='none'%3E%3Cpath d='M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z' fill='%2380889D'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
}

.breadcrumbs__item-link {
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #80889D;
}

.breadcrumbs__item-link::before {
  background-color: #80889D;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  opacity: 0;
  position: absolute;
  transition: opacity .35s ease;
  width: 100%;
}

.breadcrumbs__item-link:hover::before {
  opacity: 1;
}

.breadcrumbs__item-link :deep(svg) {
  width: 20px;
  height: 20px;
}

.breadcrumbs__item-text {
  color: #C7C9CF;
}

.breadcrumbs__item--current .breadcrumbs__item-link {
  color: #C7C9CF;
}

.breadcrumbs__item--current .breadcrumbs__item-link::before {
  display: none;
}

.breadcrumbs__item:last-child .breadcrumbs__item-link {
  color: #C7C9CF;
}

.breadcrumbs__item:last-child .breadcrumbs__item-link::before {
  display: none;
}

.breadcrumbs-wrapper {
  position: relative;
}

.breadcrumbs {
  display: flex;
}

.breadcrumbs--mobile {
  display: none;
}

@media (max-width: 1023px) {
  .breadcrumbs {
    display: none;
  }

  ol.breadcrumbs {
    margin: 0 0 40px;
  }
  
  .breadcrumbs--mobile {
    display: flex;
    margin: 0 0 40px;
  }
  
  .breadcrumbs--mobile .breadcrumbs__item {
    display: flex;
  }

  .breadcrumbs__item-link{
    color: #80889D;
  }
  .breadcrumbs--mobile .breadcrumbs__item-link {
    gap: 16px;
    color: #80889D;
    display: flex;
    align-items: center;
  }
  
  .breadcrumbs--mobile .breadcrumbs__arrow {
    order: -1;
    transform: rotate(180deg);
    flex-shrink: 0;
    fill: #80889D;
    opacity: 0.5;
    width: 16px;
    height: 16px;
  }
}
</style>