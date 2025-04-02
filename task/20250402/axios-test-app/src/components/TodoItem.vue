<!-- NavItem 컴포넌트 -->
<template>
  <li class="">
    <div>
      <p>{{ todo. }}</p>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>
