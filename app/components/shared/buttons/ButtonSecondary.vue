<script setup lang="ts">
import BaseButton from "~/components/shared/buttons/BaseButton.vue";
</script>

<template>
  <BaseButton variantClass="btn-secondary" v-bind="$attrs">
    <slot />
  </BaseButton>
</template>