<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'white',
  icon?: Component,
  title: string,
  description: string,
  buttonVariant?: 'primary' | 'secondary',
  buttonText?: string,
  buttonLink?: string,
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  buttonVariant: 'primary',
})

const variantClasses = {
  card: {
    primary: 'bg-blue-100',
    secondary: 'bg-green-100',
    white: 'bg-white',
  },
  button: {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-green-500 text-white hover:bg-green-600',
  },
};

const cardClasses = computed(() => variantClasses.card[props.variant])
const buttonClasses = computed(() => variantClasses.button[props.buttonVariant])
</script>

<template>
  <div :class="['w-full flex flex-col items-start p-10 h-auto rounded-3xl',cardClasses]">
    <div class="flex h-full w-full max-w-sm flex-col items-start rounded-3xl">
      <div v-if="icon" class="mb-8">
        <component :is="icon" class="h-8 w-8 text-blue-500" />
      </div>

      <div class="mb-6 w-full">
        <h3 class="text-xl font-semibold leading-tight tracking-tight text-blue-500">
          {{ title }}
        </h3>
      </div>

      <div v-if="description" class="mb-8 w-full">
        <p class="text-base leading-relaxed">{{ description }}</p>
      </div>

      <div v-if="buttonText" class="mt-auto w-full">
        <NuxtLink :class="['px-6 py-3 rounded-xl font-normal transition-all duration-200 text-base cursor-pointer', buttonClasses]" :to="buttonLink">
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>