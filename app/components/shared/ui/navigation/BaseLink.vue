<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  text: string;
  href: string;
  variant?:
      | 'primary'
      | 'primary-outline'
      | 'secondary'
      | 'secondary-outline'
      | 'black'
      | 'black-outline'
      | 'circular'
      | 'circular-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: Component,
  external?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  variant: 'primary',
  size: 'md',
  external: false
});

const linkClasses = computed(() => {
  const baseClasses = ['inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-[0.8px] cursor-pointer'];

  const variantClasses = {
    primary: 'rounded-xl px-6 py-3 bg-[#1364B3] text-white hover:bg-[#0f4d8a] focus:ring-[#1364B3]',
    'primary-outline': 'rounded-xl px-6 py-3 bg-white text-blue-500 border border-[#1364B3] hover:bg-[#1364B3] hover:text-white focus:ring-[#1364B3]',
    secondary:'rounded-xl px-6 py-3 bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    'secondary-outline': 'rounded-xl px-6 py-3 bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white focus:ring-[#1364B3]',
    black: 'rounded-xl px-6 py-3 bg-black text-white hover:bg-gray-800 focus:ring-gray-800',
    'black-outline':
        'rounded-xl px-6 py-3 bg-white text-black border border-black hover:bg-black hover:text-white focus:ring-gray-800',
    circular:
        'rounded-full w-12 h-12 bg-black text-white hover:bg-gray-800 flex items-center justify-center focus:ring-gray-800',
    'circular-outline':
        'rounded-full w-12 h-12 bg-white text-black border border-black hover:bg-black hover:text-white flex items-center justify-center focus:ring-gray-800',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return [...baseClasses, variantClasses[props.variant], sizeClasses[props.size]].join(' ');
});
</script>

<template>
  <NuxtLink v-if="!props.external" :to="props.href" :class="linkClasses" v-bind="$attrs">
    <span>{{ text }}</span>
    <component v-if="icon" :is="icon"/>
  </NuxtLink>




<!--  <a v-else :href="props.href" :target="props.href" :class="linkClasses" v-bind="$attrs">-->
<!--    <span v-if="!props.variant?.includes('circular')">{{ text }}</span>-->
<!--    <img-->
<!--        v-if="!props.variant?.includes('circular')"-->
<!--        src="/svg/arrow.svg"-->
<!--        alt="Arrow"-->
<!--        class="ml-2 h-4 w-4"-->
<!--        :style="{ filter: arrowFilter }"-->
<!--    />-->
<!--    <img v-else src="/svg/arrow.svg" alt="Arrow" class="h-4 w-4" :style="{ filter: arrowFilter }"/>-->
<!--    <span v-if="props.external" class="ml-1 inline-block">-->
<!--      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--        <path-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"-->
<!--        ></path>-->
<!--      </svg>-->
<!--    </span>-->
<!--  </a>-->
</template>
