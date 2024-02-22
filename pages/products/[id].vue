<template>
  <Head>
    <Title>Nuxt Dojo | {{ product?.title }}</Title>
    <Meta name="description" :content="product?.description" />
  </Head>
  
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<script lang="ts" setup>
  import type { Product } from './index.vue';

  definePageMeta({
    layout: 'products',
  });
  const { id } = useRoute().params;

  const { data: product } = await useFetch<Product>(
    `https://fakestoreapi.com/products/${id}`
  );

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found',  fatal: true });
  }
</script>

<style lang="scss" scoped></style>
