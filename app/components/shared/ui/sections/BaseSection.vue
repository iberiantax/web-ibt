<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  titleClass?: string;
  descriptionClass?: string;
  containerClass?: string;
}

withDefaults(defineProps<Props>(), {
  description: '',
  titleClass: 'text-3xl font-bold text-[#1364B3] lg:text-6xl mb-4',
  descriptionClass: 'text-base leading-relaxed font-semibold',
  containerClass: 'mb-12 pt-16 text-center',
});
</script>

<template>
  <div :class="containerClass">
    <h2 :class="titleClass">{{ title }}</h2>
    <div v-if="description" class="mb-12">
      <p :class="descriptionClass">
        {{ description }}
      </p>
    </div>
  </div>
</template>
