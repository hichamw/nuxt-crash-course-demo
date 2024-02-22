<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
      quibusdam esse voluptas perspiciatis obcaecati aut accusamus adipisci iure
      doloribus amet.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
      quibusdam esse voluptas perspiciatis obcaecati aut accusamus adipisci iure
      doloribus amet.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
  type Ninja = {
    message: string;
  };
  const { data } = await useFetch<Ninja>(`/api/currency/MAD`);

</script>

<style scoped></style>
