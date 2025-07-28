<script setup lang="ts">
interface Props {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'white' | 'gray' | 'primary' | 'secondary';
  border?: 'none' | 'top' | 'bottom' | 'all';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  fluid?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  maxWidth: 'lg',
  padding: 'md',
  margin: 'none',
  background: 'transparent',
  border: 'none',
  rounded: 'none',
  shadow: 'none',
  center: true,
  fluid: false,
});

const containerClasses = computed(() => {
  const baseClasses = ['w-full'];

  // Clases por maxWidth
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
    none: '',
  };

  // Clases por padding
  const paddingClasses = {
    none: '',
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-12 py-8',
  };

  // Clases por margin
  const marginClasses = {
    none: '',
    sm: 'mx-4 my-2',
    md: 'mx-6 my-4',
    lg: 'mx-8 my-6',
    xl: 'mx-12 my-8',
  };

  // Clases por background
  const backgroundClasses = {
    transparent: '',
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-[#1364B3]',
    secondary: 'bg-gray-100',
  };

  // Clases por border
  const borderClasses = {
    none: '',
    top: 'border-t border-gray-200',
    bottom: 'border-b border-gray-200',
    all: 'border border-gray-200',
  };

  // Clases por rounded
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  // Clases por shadow
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // Clases adicionales
  const additionalClasses = [props.center && !props.fluid ? 'mx-auto' : ''].filter(Boolean);

  return [
    ...baseClasses,
    maxWidthClasses[props.maxWidth],
    paddingClasses[props.padding],
    marginClasses[props.margin],
    backgroundClasses[props.background],
    borderClasses[props.border],
    roundedClasses[props.rounded],
    shadowClasses[props.shadow],
    ...additionalClasses,
  ].join(' ');
});
</script>

<template>
  <div :class="containerClasses" v-bind="$attrs">
    <slot />
  </div>
</template>
