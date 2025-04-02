<template>
  <div class="container">
    <slot name="header"></slot>
    <slot name="navbar"></slot>
  </div>

  <div class="content my-5 px-3">
    <!-- v-slot default가 이 자리에 들어옴 -->
    <slot></slot>
  </div>
</template>

<script setup></script>
