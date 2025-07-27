<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>

<template>
  <BaseButton variantClass="btn-primary" v-bind="$attrs">
    <slot />
  </BaseButton>
</template>