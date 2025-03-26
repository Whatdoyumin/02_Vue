<template lang="">
  <div>
    <Child1 />
    <Child2 />
    <Child3 />
    <NoSlotTest />
    <SlotTest />
  </div>
</template>
<script>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';

export default {
  name: 'app',
  components: { Child1, Child2, Child3, NoSlotTest, SlotTest },
};
</script>
<style lang=""></style>
