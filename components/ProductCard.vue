
<template>
  <div class="card text-center">
    <img :src="product.image" :alt="product.title" class="thumb"/>
    <p class="font-bold text-gray-500 m-4 truncate">{{  product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '../pages/products/index.vue';
  const { product } = defineProps<{ product: Product }>();

</script>

<style scoped>
  .thumb {
    max-height: 7.5rem;
    max-width: 70%;
    margin: 0 auto;
  }
</style>