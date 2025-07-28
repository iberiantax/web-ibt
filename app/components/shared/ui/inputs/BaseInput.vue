<script setup lang="ts">
interface Props {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success' | 'white' | 'blue';
  label?: string;
  helperText?: string;
  errorText?: string;
  leftIcon?: string;
  rightIcon?: string;
  clearable?: boolean;
  showInfoIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  value: '',
  disabled: false,
  readonly: false,
  required: false,
  size: 'md',
  variant: 'default',
  label: '',
  helperText: '',
  errorText: '',
  leftIcon: '',
  rightIcon: '',
  clearable: false,
  showInfoIcon: false,
});

const emit = defineEmits<{
  'update:value': [value: string | number];
  input: [value: string | number];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  clear: [];
}>();

const inputValue = computed({
  get: () => props.value,
  set: (value) => {
    emit('update:value', value);
    emit('input', value);
  },
});

const inputClasses = computed(() => {
  const baseClasses = [
    'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
    'border rounded-xl',
  ];

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  // Clases por variante
  const variantClasses = {
    default: 'border-gray-300 focus:ring-[#1364B3] focus:border-[#1364B3]',
    error: 'border-red-300 focus:ring-red-500 focus:border-red-500',
    success: 'border-green-300 focus:ring-green-500 focus:border-green-500',
    white: 'bg-white border-gray-300 focus:ring-[#1364B3] focus:border-[#1364B3]',
    blue: 'bg-blue-50 border-blue-500 focus:ring-[#1364B3] focus:border-[#1364B3]',
  };

  // Clases de estado
  const stateClasses = [
    props.disabled ? 'cursor-not-allowed opacity-50' : '',
    props.readonly ? 'bg-gray-50' : '',
  ];

  return [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    ...stateClasses,
  ].join(' ');
});

const handleClear = () => {
  inputValue.value = '';
  emit('clear');
};
</script>

<template>
  <div class="w-full">
    <!-- Label -->
    <label v-if="label" :for="$attrs.id" class="mb-1 block text-sm font-medium text-gray-700">
      <span class="inline-flex items-center">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
        <span v-if="showInfoIcon" class="ml-1 inline-flex items-center">
          <img src="/svg/info.svg" alt="Info" class="h-4 w-4" />
        </span>
      </span>
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Left Icon -->
      <div
        v-if="leftIcon"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <BaseIcon :name="leftIcon" size="sm" color="gray" />
      </div>

      <!-- Input -->
      <input
        :type="props.type"
        :value="inputValue"
        @input="(e) => (inputValue = (e.target as HTMLInputElement).value)"
        @focus="(e) => emit('focus', e)"
        @blur="(e) => emit('blur', e)"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="[inputClasses, leftIcon ? 'pl-10' : '', rightIcon || clearable ? 'pr-10' : '']"
        v-bind="$attrs"
      />

      <!-- Right Icon or Clear Button -->
      <div v-if="rightIcon || clearable" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          v-if="clearable && inputValue"
          @click="handleClear"
          type="button"
          class="text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <BaseIcon name="close" size="sm" />
        </button>
        <BaseIcon v-else-if="rightIcon" :name="rightIcon" size="sm" color="gray" />
      </div>
    </div>

    <!-- Helper Text -->
    <p v-if="helperText && !errorText" class="mt-1 text-sm text-gray-500">
      {{ helperText }}
    </p>

    <!-- Error Text -->
    <p v-if="errorText" class="mt-1 text-sm text-red-600">
      {{ errorText }}
    </p>
  </div>
</template>
