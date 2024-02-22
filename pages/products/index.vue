<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "products",
});

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: "description",
      content: "Nuxt 3 Merch",
      
    },
  ],
});
</script>

<style lang="scss" scoped></style>
