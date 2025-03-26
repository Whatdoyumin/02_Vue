<template lang="">
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-chaged', { id, checked: $event.target.checked })"
    />
    <slot>Item</slot>
  </div>
</template>
<script>
export default {
  name: 'Checkbox1',
  props: ['id', 'checked'],
};
</script>
<style lang=""></style>
