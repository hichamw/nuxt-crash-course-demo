<template>
  <div class="card mt-7 max-w-sm mx-auto text-center">
    <p class="mt7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-9" @click="handleClearError">Go back</button>
  </div>
</template>

<script setup lang="ts">
  defineProps(['error']);
  
  const handleClearError = () => clearError({ redirect: '/' });
</script>

<style scoped>

</style>