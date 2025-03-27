<template lang="">
  <div>
    <Calc />
    <br />
    <Calc2 />
    <br />
    <Calc3 />
  </div>
</template>
<script>
import Calc from './components/Calc.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Cal3.vue';

export default {
  name: 'App',
  components: { Calc, Calc2, Calc3 },
};
</script>
<style lang=""></style>
