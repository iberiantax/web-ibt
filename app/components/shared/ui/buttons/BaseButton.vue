<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  fullWidth: false,
  loading: false,
});

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-normal transition-all duration-200 focus:outline-none focus:ring-[0.8px] rounded-[12px]',
    props.fullWidth ? 'w-full' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ];

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-base leading-6',
    md: 'px-4 py-2 text-base leading-6',
    lg: 'px-6 py-3 text-base leading-6',
  };

  // Clases por variante con el color azul correcto #1364B3
  const variantClasses = {
    primary: 'bg-[#1364B3] text-white hover:bg-[#0f4d8a] focus:ring-[#1364B3]',
    secondary:
      'bg-white text-blue-500 border border-[#1364B3] hover:bg-blue-50 focus:ring-[#1364B3]',
    tertiary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
    ghost: 'text-blue-500 border border-[#1364B3] hover:bg-blue-50 focus:ring-[#1364B3]',
    outline:
      'bg-transparent text-gray-700 border border-gray-900 hover:bg-gray-50 focus:ring-gray-500',
  };

  return [...baseClasses, sizeClasses[props.size], variantClasses[props.variant]].join(' ');
});
</script>

<template>
  <button :type="props.type" :disabled="props.disabled" :class="buttonClasses" v-bind="$attrs">
    <slot v-if="!props.loading" />
    <div v-else class="flex items-center">
      <svg class="-ml-1 mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Loading...
    </div>
  </button>
</template>
