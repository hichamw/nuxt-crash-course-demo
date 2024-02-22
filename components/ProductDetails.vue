

<template>
  <div class="card">
    <h2 v-if="!product" class="text-4xl m-7">Product not found</h2>
    <div v-else class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" :alt="product.title" class="mx-auto my-7"/>
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '../pages/products/index.vue';
  const { product } = defineProps<{ product: Product | null }>();

</script>

<style scoped>
  img {
    max-width: 25rem;
  }
</style>