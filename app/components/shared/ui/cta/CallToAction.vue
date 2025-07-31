<script setup lang="ts">
import type { Component } from 'vue'
import {BaseLink} from "~/components/shared/ui";

interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  buttonText?: string;
  buttonLink?: string;
  icon?: Component
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const variantClasses = {
  primary: 'bg-blue-200',
  secondary: 'bg-green-200',
};

const cardClasses = computed(() => variantClasses[props.variant])
</script>

<template>
  <div class="flex w-full justify-center">
    <div :class="['w-full max-w-4xl rounded-lg p-12 text-center', cardClasses]">
      <h2 class="mb-2 text-3xl font-bold leading-[48px] tracking-[0%] text-blue-500 lg:text-[40px]">
        {{ title }}
      </h2>

      <p :class="['text-base leading-relaxed',{ 'mb-8' : buttonText}]">
        {{ description }}
      </p>

      <base-link v-if="buttonText" :text="buttonText" :icon="icon || undefined" :href="buttonLink || '#'"/>
    </div>
  </div>
</template>
