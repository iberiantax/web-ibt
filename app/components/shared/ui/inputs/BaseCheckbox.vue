<script setup lang="ts">
interface Props {
  modelValue?: boolean;
  value?: boolean;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'blue' | 'dark';
  label?: string;
  text?: string;
  helperText?: string;
  errorText?: string;
  showInfoIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  value: false,
  disabled: false,
  required: false,
  size: 'md',
  variant: 'default',
  label: '',
  text: 'Text',
  helperText: '',
  errorText: '',
  showInfoIcon: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'update:value': [value: boolean];
  change: [value: boolean];
}>();

// Usar modelValue para v-model
const currentValue = computed({
  get: () => props.modelValue || props.value,
  set: (value) => {
    emit('update:modelValue', value);
    emit('update:value', value);
    emit('change', value);
  },
});

const handleToggle = () => {
  if (!props.disabled) {
    currentValue.value = !currentValue.value;
  }
};

const checkboxClasses = computed(() => {
  const baseClasses = [
    'flex items-center justify-between w-full rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-[0.8px]',
  ];

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  // Clases por variante
  const variantClasses = {
    default: 'bg-gray-50 border-gray-300 hover:bg-gray-100 focus:ring-[#1364B3]',
    white: 'bg-white border-gray-300 hover:bg-gray-50 focus:ring-[#1364B3]',
    blue: 'bg-blue-50 border-blue-500 hover:bg-blue-100 focus:ring-[#1364B3]',
    dark: 'bg-blue-900 border-white hover:bg-blue-800 focus:ring-[#1364B3]',
  };

  // Clases de estado
  const stateClasses = [props.disabled ? 'cursor-not-allowed opacity-50' : ''];

  return [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    ...stateClasses,
  ].join(' ');
});

const checkboxIconClasses = computed(() => {
  const baseClasses = ['w-5 h-5 rounded border-2 transition-all duration-200'];

  // Clases por variante
  const variantClasses = {
    default: currentValue.value ? 'bg-black border-black' : 'bg-white border-blue-500',
    white: currentValue.value ? 'bg-white border-black' : 'bg-white border-black',
    blue: currentValue.value ? 'bg-black border-black' : 'bg-white border-blue-500',
    dark: currentValue.value ? 'bg-white border-white' : 'bg-blue-900 border-white',
  };

  return [baseClasses, variantClasses[props.variant]].join(' ');
});
</script>

<template>
  <div class="w-full">
    <!-- Label -->
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">
      <span class="inline-flex items-center">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
        <span v-if="showInfoIcon" class="ml-1 inline-flex items-center">
          <img src="/svg/info.svg" alt="Info" class="h-4 w-4" />
        </span>
      </span>
    </label>

    <!-- Checkbox Container -->
    <button
      type="button"
      @click="handleToggle"
      :disabled="disabled"
      :class="checkboxClasses"
      v-bind="$attrs"
    >
      <!-- Label Text -->
      <span
        :class="[
          'text-left',
          props.variant === 'dark' ? 'text-white' : '',
          props.variant === 'white' ? 'text-white' : '',
        ]"
        >{{ text }}</span
      >

      <!-- Checkbox Icon -->
      <div :class="checkboxIconClasses" class="flex items-center justify-center">
        <!-- Checkmark when checked -->
        <svg
          v-if="currentValue"
          :class="[
            'h-5 w-5',
            props.variant === 'dark' || props.variant === 'white' ? 'text-blue-500' : 'text-white',
          ]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </button>

    <!-- Helper Text -->
    <p v-if="helperText" class="mt-1 text-sm text-gray-500">{{ helperText }}</p>

    <!-- Error Text -->
    <p v-if="errorText" class="mt-1 text-sm text-red-500">{{ errorText }}</p>
  </div>
</template>
