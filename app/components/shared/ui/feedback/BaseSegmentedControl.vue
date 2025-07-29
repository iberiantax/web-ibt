<script setup lang="ts">
interface Segment {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface Props {
  segments: Segment[];
  modelValue?: string | number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  fullWidth?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  size: 'md',
  variant: 'light',
  fullWidth: false,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  change: [value: string | number];
}>();

const selectedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
    emit('change', value);
  },
});

const containerClasses = computed(() => {
  const baseClasses = [
    'inline-flex gap-0.5 transition-all duration-200',
    props.fullWidth ? 'w-full' : '',
  ];

  // Clases por variante
  const variantClasses = {
    light: 'bg-white p-1 rounded-lg',
    dark: 'bg-[#1F3F6B] p-1 rounded-lg',
  };

  // Clases por tamaño
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return [...baseClasses, variantClasses[props.variant], sizeClasses[props.size]].join(' ');
});

const getSegmentClasses = (segment: Segment) => {
  const isSelected = selectedValue.value === segment.value;
  const isDisabled = props.disabled || segment.disabled;

  // Clases base
  const baseClasses = [
    'flex-1 text-center font-medium transition-all duration-200 rounded-md mx-0 focus:outline-none focus:ring-[0.8px]',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ];

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  // Clases por estado según variante
  let stateClasses = [];

  if (props.variant === 'light') {
    if (isSelected) {
      stateClasses = ['bg-[#DDEBFD] text-black border border-[#1364B3] focus:ring-[#1364B3]'];
    } else {
      stateClasses = ['bg-transparent text-black border border-[#1364B3] focus:ring-[#1364B3]'];
    }
  } else if (props.variant === 'dark') {
    if (isSelected) {
      stateClasses = ['bg-white text-black border border-[#1364B3] focus:ring-[#1364B3]'];
    } else {
      stateClasses = ['bg-[#1F3F6B] text-white border border-white focus:ring-[#1364B3]'];
    }
  }

  if (isDisabled) {
    stateClasses.push('opacity-50 cursor-not-allowed');
  }

  return [...baseClasses, sizeClasses[props.size], ...stateClasses].join(' ');
};

const handleSegmentClick = (segment: Segment) => {
  if (!props.disabled && !segment.disabled) {
    selectedValue.value = segment.value;
  }
};
</script>

<template>
  <div :class="containerClasses" v-bind="$attrs">
    <button
      v-for="segment in segments"
      :key="segment.value"
      :class="getSegmentClasses(segment)"
      @click="handleSegmentClick(segment)"
      :disabled="disabled || segment.disabled"
      type="button"
    >
      {{ segment.label }}
    </button>
  </div>
</template>
