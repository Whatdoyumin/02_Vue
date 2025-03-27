<template lang="">
  <div>
    <Calc />
    <br />
    <Calc2 />
  </div>
</template>
<script>
import Calc from './components/Calc.vue';
import Calc2 from './components/Calc2.vue';

export default {
  name: 'App',
  components: { Calc, Calc2 },
};
</script>
<style lang=""></style>
