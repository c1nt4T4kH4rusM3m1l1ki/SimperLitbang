<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  toggle: () => void;
}>();
</script>

<template>
  <button class="mobile-nav-toggle" @click="toggle">
    <i class="bi" :class="isOpen ? 'bi-x-lg' : 'bi-list'"></i>
  </button>
</template>