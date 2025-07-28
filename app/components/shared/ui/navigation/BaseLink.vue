<script setup lang="ts">
interface Props {
  href?: string;
  variant?:
    | 'blue'
    | 'blue-600'
    | 'blue-outline'
    | 'black'
    | 'black-outline'
    | 'white-outline'
    | 'green-500'
    | 'green-600'
    | 'circular'
    | 'circular-outline';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  disabled?: boolean;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  variant: 'blue',
  size: 'md',
  external: false,
  disabled: false,
  text: 'Text',
});

const linkClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none',
    props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
  ];

  // Clases por variante
  const variantClasses = {
    blue: 'rounded-xl px-6 py-3 bg-[#1364B3] text-white hover:bg-[#0f4d8a]',
    'blue-600': 'rounded-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700',
    'blue-outline':
      'rounded-xl px-6 py-3 bg-white text-[#1364B3] border border-[#1364B3] hover:bg-[#1364B3] hover:text-white',
    black: 'rounded-xl px-6 py-3 bg-black text-white hover:bg-gray-800',
    'black-outline':
      'rounded-xl px-6 py-3 bg-white text-black border border-black hover:bg-black hover:text-white',
    'white-outline':
      'rounded-xl px-6 py-3 bg-white text-black border border-black hover:bg-black hover:text-white',
    'green-500': 'rounded-xl px-6 py-3 bg-green-500 text-white hover:bg-green-600',
    'green-600': 'rounded-xl px-6 py-3 bg-green-600 text-white hover:bg-green-700',
    circular:
      'rounded-full w-12 h-12 bg-black text-white hover:bg-gray-800 flex items-center justify-center',
    'circular-outline':
      'rounded-full w-12 h-12 bg-white text-black border border-black hover:bg-black hover:text-white flex items-center justify-center',
  };

  // Clases por tamaño
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return [...baseClasses, variantClasses[props.variant], sizeClasses[props.size]].join(' ');
});

const target = computed(() => (props.external ? '_blank' : undefined));
const rel = computed(() => (props.external ? 'noopener noreferrer' : undefined));

const arrowFilter = computed(() => {
  // Determinar el color de la flecha basado en la variante
  const variantColors = {
    blue: 'brightness(0) saturate(100%) invert(1)', // Blanco
    'blue-600': 'brightness(0) saturate(100%) invert(1)', // Blanco
    'blue-outline':
      'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(199deg) brightness(104%) contrast(97%)', // Azul
    black: 'brightness(0) saturate(100%) invert(1)', // Blanco
    'black-outline': 'brightness(0) saturate(100%)', // Negro
    'white-outline': 'brightness(0) saturate(100%)', // Negro
    'green-500': 'brightness(0) saturate(100%) invert(1)', // Blanco
    'green-600': 'brightness(0) saturate(100%) invert(1)', // Blanco
    circular: 'brightness(0) saturate(100%) invert(1)', // Blanco
    'circular-outline': 'brightness(0) saturate(100%)', // Negro
  };

  return variantColors[props.variant] || 'brightness(0) saturate(100%)';
});
</script>

<template>
  <NuxtLink v-if="!props.external" :to="props.href" :class="linkClasses" v-bind="$attrs">
    <span v-if="!props.variant?.includes('circular')">{{ text }}</span>
    <img
      v-if="!props.variant?.includes('circular')"
      src="/svg/arrow.svg"
      alt="Arrow"
      class="ml-2 h-4 w-4"
      :style="{ filter: arrowFilter }"
    />
    <img v-else src="/svg/arrow.svg" alt="Arrow" class="h-4 w-4" :style="{ filter: arrowFilter }" />
  </NuxtLink>

  <a v-else :href="props.href" :target="target" :rel="rel" :class="linkClasses" v-bind="$attrs">
    <span v-if="!props.variant?.includes('circular')">{{ text }}</span>
    <img
      v-if="!props.variant?.includes('circular')"
      src="/svg/arrow.svg"
      alt="Arrow"
      class="ml-2 h-4 w-4"
      :style="{ filter: arrowFilter }"
    />
    <img v-else src="/svg/arrow.svg" alt="Arrow" class="h-4 w-4" :style="{ filter: arrowFilter }" />
    <span v-if="props.external" class="ml-1 inline-block">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        ></path>
      </svg>
    </span>
  </a>
</template>
