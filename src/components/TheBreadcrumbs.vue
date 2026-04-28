<template>
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
        <span v-else class="breadcrumbs__link-text text-body">{{ item.title }}</span>
        <meta itemprop="position" :content="index + 1">
      </router-link>
      <span v-else class="breadcrumbs__item-text text-body">
        {{ item.title }}
        <meta itemprop="position" :content="index + 1">
      </span>
    </li>
  </ol>
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

.breadcrumbs__item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 0;

}

.breadcrumbs__item:not(:last-child)::after {
  content: '';
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M5.61035 13.3327L10.0009 8.94211C10.5194 8.42359 10.5194 7.57511 10.0009 7.05659L5.61035 2.66602' stroke='%2380889D' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

.breadcrumbs__item-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
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

@media (max-width: 1023px) {
  .breadcrumbs__item {
    display: none;
  }
  
  .breadcrumbs__item:nth-last-child(2) {
    display: flex;
    order: -1;
  }
  
  .breadcrumbs__item:nth-last-child(2)::after {
    display: none;
  }
  
  .breadcrumbs__item:nth-last-child(2)::before {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M5.61035 13.3327L10.0009 8.94211C10.5194 8.42359 10.5194 7.57511 10.0009 7.05659L5.61035 2.66602' stroke='%2380889D' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(180deg);
    flex-shrink: 0;
    order: -1;
  }
  

}
</style>