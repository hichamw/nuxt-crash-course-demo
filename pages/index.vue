<template>
  <div>
    
    <h2>Home</h2>
    <p>{{ count }}</p>
    <button @click="add">+</button>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
      quibusdam esse voluptas perspiciatis obcaecati aut accusamus adipisci iure
      doloribus amet.
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 1.25rem;
    font-size: 2.25;
  }

  p {
    margin: 1.25rem 0;
  }

</style>
