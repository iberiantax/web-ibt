<script setup lang="ts">
interface Props {
  title: string;
  defaultOpen?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
  variant: 'primary',
  size: 'md',
  disabled: false,
});

const isOpen = ref(props.defaultOpen);

const toggleAccordion = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const accordionClasses = computed(() => {
  const baseClasses = ['transition-all duration-200 rounded-xl border'];

  // Clases por variante
  const variantClasses = {
    primary: 'bg-white border-blue-500',
    secondary: 'bg-blue-50 border-blue-500',
  };

  return [...baseClasses, variantClasses[props.variant]].join(' ');
});

const headerClasses = computed(() => {
  const baseClasses = [
    'flex items-center justify-between w-full transition-all duration-200',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ];

  // Clases por variante para el header
  const variantClasses = {
    primary: 'bg-white hover:bg-blue-100',
    secondary: 'bg-blue-50 hover:bg-blue-100',
  };

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-2',
    lg: 'px-6 py-2',
  };

  // Border radius - solo rounded-t-xl cuando está abierto, rounded-xl cuando cerrado
  const radiusClasses = isOpen.value ? 'rounded-t-xl' : 'rounded-xl';

  return [
    ...baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    radiusClasses,
  ].join(' ');
});

const contentClasses = computed(() => {
  const baseClasses = ['overflow-hidden transition-all duration-300 ease-in-out'];

  // Clases por variante para el contenido
  const variantClasses = {
    primary: 'bg-white',
    secondary: 'bg-white', // El contenido siempre es blanco en secondary
  };

  // Clases por tamaño - padding top y bottom cuando está abierto
  const sizeClasses = {
    sm: `px-3 ${isOpen.value ? 'pt-3 pb-3' : ''}`,
    md: `px-4 ${isOpen.value ? 'pt-4 pb-4' : ''}`,
    lg: `px-6 ${isOpen.value ? 'pt-6 pb-6' : ''}`,
  };

  // Border radius - solo rounded-b-xl cuando está abierto, rounded-xl cuando cerrado
  const radiusClasses = isOpen.value ? 'rounded-b-xl' : 'rounded-xl';

  return [
    ...baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    radiusClasses,
  ].join(' ');
});
</script>

<template>
  <div :class="accordionClasses" v-bind="$attrs">
    <!-- Header -->
    <button :class="headerClasses" @click="toggleAccordion" :disabled="disabled" type="button">
      <span class="text-base font-bold text-gray-900">{{ title }}</span>

      <!-- Icon -->
      <span class="text-lg font-bold text-blue-500">
        {{ isOpen ? '-' : '+' }}
      </span>
    </button>

    <!-- Content -->
    <div
      :class="contentClasses"
      :style="{
        maxHeight: isOpen ? '1000px' : '0px',
        opacity: isOpen ? '1' : '0',
      }"
    >
      <slot />
    </div>
  </div>
</template>
