<script setup>
import CommonHeader from './components/CommonHeader.vue';
import MainGallary from './components/MainGallary.vue';
{
  /* <script>
import CommonHeader from './components/CommonHeader.vue';
import MainGallary from './components/MainGallary.vue';
import { ref } from 'vue';

export default {
  components: {
    CommonHeader,
    MainGallary,
  },
  setup() {
    const number = ref(0);
    return { number };
  },
}; */
}
</script>

<template>
  <CommonHeader />
  <MainGallary />
</template>

<style scoped></style>
