<script setup lang="ts">
interface Props {
  placeholder?: string;
  modelValue?: string | number;
  value?: string | number;
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
  options?: Array<{ value: string | number; label: string }>;
  open?: boolean;
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
  options: () => [],
  open: false,
});

const emit = defineEmits<{
  'update:value': [value: string | number];
  'update:modelValue': [value: string | number];
  'update:open': [open: boolean];
  input: [value: string | number];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  clear: [];
  toggle: [];
}>();

const isOpen = ref(props.open);

// Usar modelValue para v-model
const currentValue = computed({
  get: () => props.modelValue || props.value,
  set: (value) => {
    emit('update:modelValue', value);
    emit('update:value', value);
  },
});

const dropdownClasses = computed(() => {
  const baseClasses = [
    'w-full transition-all duration-200 focus:outline-none focus:ring-[0.8px]',
    'border rounded-xl cursor-pointer',
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

  return [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    ...stateClasses,
  ].join(' ');
});

const dropdownMenuClasses = computed(() => {
  const baseClasses = [
    'absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg',
    'max-h-60 overflow-auto',
  ];

  return baseClasses.join(' ');
});

const handleToggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
    emit('toggle');
    emit('update:open', isOpen.value);
  }
};

const handleClear = () => {
  currentValue.value = '';
  emit('clear');
};

const handleSelectOption = (option: { value: string | number; label: string }) => {
  currentValue.value = option.value;
  isOpen.value = false;
  emit('update:open', false);
};

const selectedOption = computed(() => {
  if (!currentValue.value) return null;
  return props.options.find((option) => option.value === currentValue.value);
});

// Cerrar dropdown cuando se hace click fuera
const dropdownRef = ref<HTMLElement>();

onMounted(() => {
  document.addEventListener('click', (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false;
      emit('update:open', false);
    }
  });
});
</script>

<template>
  <div class="w-full" ref="dropdownRef">
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

    <!-- Dropdown Container -->
    <div class="relative">
      <!-- Left Icon -->
      <div
        v-if="leftIcon"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <BaseIcon :name="leftIcon" size="sm" color="gray" />
      </div>

      <!-- Dropdown Button -->
      <button
        type="button"
        @click="handleToggle"
        @focus="(e) => emit('focus', e)"
        @blur="(e) => emit('blur', e)"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="[dropdownClasses, leftIcon ? 'pl-10' : '', 'pr-10']"
        v-bind="$attrs"
      >
        <span v-if="selectedOption" class="block w-full text-left">
          {{ selectedOption.label }}
        </span>
        <span v-else-if="placeholder" class="block w-full text-left text-gray-500">
          {{ placeholder }}
        </span>
        <span v-else class="block w-full text-left text-gray-500"> Seleccionar opción </span>
      </button>

      <!-- Right Side Icons -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          v-if="clearable && currentValue"
          @click="handleClear"
          type="button"
          class="mr-2 rounded text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-[0.8px] focus:ring-gray-400"
        >
          <BaseIcon name="close" size="sm" />
        </button>

        <!-- Caret Icon -->
        <svg
          class="h-4 w-4 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <!-- Dropdown Menu -->
      <div v-if="isOpen && options.length > 0" :class="dropdownMenuClasses">
        <div class="py-1">
          <button
            v-for="option in options"
            :key="option.value"
            @click="handleSelectOption(option)"
            class="w-full px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-[0.8px] focus:ring-gray-400"
            :class="{
              'bg-blue-50 text-blue-600': option.value === currentValue,
              'text-gray-900': option.value !== currentValue,
            }"
          >
            {{ option.label }}
          </button>
        </div>
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
