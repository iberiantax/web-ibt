<script setup lang="ts">
interface Props {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  dot?: boolean;
  removable?: boolean;
  rating?: number;
  maxRating?: number;
  showValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  rounded: false,
  dot: false,
  removable: false,
  rating: 0,
  maxRating: 5,
  showValue: false,
});

const emit = defineEmits<{
  remove: [value: unknown];
}>();

const badgeClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center font-medium transition-all duration-200',
    props.rounded ? 'rounded-full' : 'rounded-md',
  ];

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  // Clases por variante
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-[#1364B3] text-white',
    secondary: 'bg-gray-200 text-gray-700',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return [...baseClasses, sizeClasses[props.size], variantClasses[props.variant]].join(' ');
});

const handleRemove = () => {
  emit('remove');
};
</script>

<template>
  <div v-if="rating > 0" :class="badgeClasses" v-bind="$attrs">
    <BaseIcon
      v-for="i in maxRating"
      :key="i"
      name="star"
      :size="size === 'sm' ? 'xs' : 'sm'"
      :class="i <= rating ? 'text-yellow-400' : 'text-gray-300'"
    />
    <span v-if="showValue" class="ml-1 text-xs">{{ rating }}/{{ maxRating }}</span>
  </div>

  <div v-else :class="badgeClasses" v-bind="$attrs">
    <span
      v-if="dot"
      class="mr-1.5 h-2 w-2 rounded-full"
      :class="{
        'bg-gray-400': variant === 'default',
        'bg-[#1364B3]': variant === 'primary',
        'bg-gray-500': variant === 'secondary',
        'bg-green-500': variant === 'success',
        'bg-yellow-500': variant === 'warning',
        'bg-red-500': variant === 'error',
        'bg-blue-500': variant === 'info',
      }"
    ></span>

    <slot />

    <button
      v-if="removable"
      @click="handleRemove"
      class="-mr-1 ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:outline-none focus:ring-[0.8px] focus:ring-gray-400"
    >
      <BaseIcon name="close" size="xs" />
    </button>
  </div>
</template>
