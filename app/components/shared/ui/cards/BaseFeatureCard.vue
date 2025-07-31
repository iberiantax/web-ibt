<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component;
  title: string;
  description: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  cardClass?: string;
  iconContainerClass?: string;
}

withDefaults(defineProps<Props>(), {
  iconClass: 'text-blue-300',
  titleClass: 'mb-4 text-start text-[28px] font-bold text-blue-500',
  descriptionClass: 'text-start text-base leading-relaxed text-gray-700',
  cardClass: 'rounded-lg bg-white p-8',
  iconContainerClass: 'mb-6 flex justify-start',
});
</script>

<template>
  <div :class="cardClass">
    <div :class="iconContainerClass">
      <component :is="icon" :class="['h-10 w-10', iconClass]" />
    </div>

    <h3 :class="titleClass">
      {{ title }}
    </h3>

    <p :class="descriptionClass">
      {{ description }}
    </p>
  </div>
</template>
