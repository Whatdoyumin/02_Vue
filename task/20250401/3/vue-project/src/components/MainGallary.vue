<script setup>
import BaseButton from './UI/BaseButton.vue';
import BaseAlert from './UI/BaseAlert.vue';
import BaseBadge from './UI/BaseBadge.vue';
</script>

<template lang="">
  <div>
    <main class="component-grid">
      <!-- 컴포넌트 그룹 (그리드 아이템) -->
      <section class="component-card">
        <h2>버튼</h2>
        <BaseButton class="btn-primary">Primary</BaseButton>
        <!-- class 대신 variant도 가능 -->
        <BaseButton class="btn-outline">Outline</BaseButton>
        <BaseButton class="btn-pill">Pill</BaseButton>
      </section>
      <section class="component-card">
        <h2>알림창</h2>
        <BaseAlert variant="success">Success</BaseAlert>
        <BaseAlert variant="warning">Warning</BaseAlert>
        <BaseAlert variant="error">Error</BaseAlert>
      </section>
      <section class="component-card">
        <BaseBadge variant="success">badge</BaseBadge>
        <BaseBadge variant="number">3</BaseBadge>
      </section>
    </main>
  </div>
</template>
<style lang=""></style>
