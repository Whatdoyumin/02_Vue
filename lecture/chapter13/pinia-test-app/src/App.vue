<template>
  <div id="app">
    <h1>Pinia Test App</h1>
    <p>Count: {{ store.count }} / {{ store.doubleCount }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from './stores/counter.js';
import { computed } from 'vue';

const store = useCounterStore();
const { increment } = store;

const count = computed(() => store.count);

increment();
</script>
