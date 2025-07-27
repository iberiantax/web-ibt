<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  outline?: boolean
  variantClass: string
}>(), {
  type: 'button',
  outline: false,
})
</script>

<template>
  <button :type="props.type" class="btn-base"
          :class="[props.outline ? `${props.variantClass}-outline` : props.variantClass]">
    <slot/>
  </button>
</template>