<script setup lang="ts">
interface Props {
  placeholder?: string;
  modelValue?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success' | 'white' | 'blue' | 'form';
  label?: string;
  helperText?: string;
  errorText?: string;
  leftIcon?: string;
  clearable?: boolean;
  showInfoIcon?: boolean;
  rows?: number;
  maxLength?: number;
  minLength?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  modelValue: '',
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
  clearable: false,
  showInfoIcon: false,
  rows: 4,
  maxLength: undefined,
  minLength: undefined,
  resize: 'vertical',
});

const emit = defineEmits<{
  'update:value': [value: string];
  'update:modelValue': [value: string];
  input: [value: string];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  clear: [];
}>();

// Usar modelValue para v-model
const currentValue = computed({
  get: () => props.modelValue || props.value,
  set: (value) => {
    emit('update:modelValue', value);
    emit('update:value', value);
  },
});

const textareaClasses = computed(() => {
  const baseClasses = [
    'w-full transition-all duration-200 focus:outline-none focus:ring-[0.8px]',
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
    form: 'bg-white border-blue-500 focus:ring-[#1364B3] focus:border-[#1364B3]',
  };

  // Clases de estado
  const stateClasses = [
    props.disabled ? 'cursor-not-allowed opacity-50' : '',
    props.readonly ? 'bg-gray-50' : '',
  ];

  // Clases de resize
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    resizeClasses[props.resize],
    ...stateClasses,
  ].join(' ');
});

const handleClear = () => {
  currentValue.value = '';
  emit('clear');
};

const characterCount = computed(() => {
  return currentValue.value?.length || 0;
});
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

    <!-- Textarea Container -->
    <div class="relative">
      <!-- Left Icon -->
      <div
        v-if="leftIcon"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <BaseIcon :name="leftIcon" size="sm" color="gray" />
      </div>

      <!-- Textarea -->
      <textarea
        :value="currentValue"
        @input="(e) => (currentValue = (e.target as HTMLTextAreaElement).value)"
        @focus="(e) => emit('focus', e)"
        @blur="(e) => emit('blur', e)"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        :maxlength="maxLength"
        :minlength="minLength"
        :class="[textareaClasses, leftIcon ? 'pl-10' : '']"
        v-bind="$attrs"
      />

      <!-- Right Side Icons -->
      <div v-if="clearable" class="absolute right-2 top-2">
        <button
          v-if="currentValue"
          @click="handleClear"
          type="button"
          class="rounded text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-[0.8px] focus:ring-gray-400"
        >
          <BaseIcon name="close" size="sm" />
        </button>
      </div>
    </div>

    <!-- Character Count -->
    <div v-if="maxLength" class="mt-1 flex justify-between text-sm">
      <p v-if="helperText && !errorText" class="text-gray-500">
        {{ helperText }}
      </p>
      <p class="text-gray-500">{{ characterCount }}/{{ maxLength }}</p>
    </div>

    <!-- Helper Text -->
    <p v-else-if="helperText && !errorText" class="mt-1 text-sm text-gray-500">
      {{ helperText }}
    </p>

    <!-- Error Text -->
    <p v-if="errorText" class="mt-1 text-sm text-red-600">
      {{ errorText }}
    </p>
  </div>
</template>
