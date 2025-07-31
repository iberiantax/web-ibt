<script setup lang="ts">
interface Props {
  classes?: string
}

withDefaults(defineProps<Props>(), {
  classes: 'pt-8 pb-20 mx-auto px-4 sm:px-6 lg:px-8',
});
</script>

<template>
  <section :class="classes">
    <slot/>
  </section>
</template>