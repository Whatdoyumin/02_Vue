<template lang="">
  <div class="container">
    <Header />
    <route-view></route-view>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  components: { Header },
};
</script>
<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
