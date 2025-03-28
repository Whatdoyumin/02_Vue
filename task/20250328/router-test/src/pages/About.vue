<template lang="">
  <div class="card card-body">
    <h2>About</h2>
    <!-- <p>요청 경로: {{ $route.fullPath }}</p> -->
    <p>요청 경로: {{ route.fullPath }}</p>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';

export default {
  name: 'About',
  // created() {
  //   console.log(this.$route);
  // },

  setup() {
    const route = useRoute();
    console.log(route.fullPath);

    return { route };
  },
};
</script>
<style lang=""></style>
