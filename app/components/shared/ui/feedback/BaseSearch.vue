<script setup lang="ts">
interface Props {
  placeholder?: string;
  modelValue?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success' | 'white' | 'blue';
  label?: string;
  helperText?: string;
  errorText?: string;
  clearable?: boolean;
  showInfoIcon?: boolean;
  searchResults?: Array<{ id: string; title: string; description: string }>;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search',
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
  clearable: true,
  showInfoIcon: false,
  searchResults: () => [],
  loading: false,
});

const emit = defineEmits<{
  'update:value': [value: string];
  'update:modelValue': [value: string];
  input: [value: string];
  search: [value: string];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  clear: [];
  selectResult: [result: { id: string; title: string; description: string }];
}>();

// Usar modelValue para v-model
const currentValue = computed({
  get: () => props.modelValue || props.value,
  set: (value) => {
    emit('update:modelValue', value);
    emit('update:value', value);
  },
});

const searchClasses = computed(() => {
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

  // Clases por variante (solo cuando no hay resultados)
  const variantClasses = showResults.value
    ? {}
    : {
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
    showResults.value ? 'border-[#1364B3] focus:ring-[#1364B3]' : '',
  ];

  // Clases de variante cuando hay resultados
  const resultVariantClasses = showResults.value
    ? {
        white: 'bg-white',
        blue: 'bg-blue-50',
      }
    : {};

  return [
    ...baseClasses,
    sizeClasses[props.size],
    showResults.value
      ? resultVariantClasses[props.variant] || ''
      : variantClasses[props.variant] || '',
    ...stateClasses,
  ].join(' ');
});

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  currentValue.value = value;
  emit('search', value);
};

const handleClear = () => {
  currentValue.value = '';
  emit('clear');
};

const handleSelectResult = (result: { id: string; title: string; description: string }) => {
  currentValue.value = result.title;
  emit('selectResult', result);
};

const showResults = computed(() => {
  return currentValue.value && (props.searchResults.length > 0 || props.loading);
});

// Cerrar resultados cuando se hace click fuera
const searchRef = ref<HTMLElement>();

onMounted(() => {
  document.addEventListener('click', (event) => {
    if (searchRef.value && !searchRef.value.contains(event.target as Node)) {
      // No cerrar automáticamente para permitir selección
    }
  });
});
</script>

<template>
  <div class="w-full" ref="searchRef">
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

    <!-- Search Container -->
    <div class="relative">
      <!-- Search Icon -->
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <!-- Search Input -->
      <input
        type="text"
        :value="currentValue"
        @input="handleInput"
        @focus="(e) => emit('focus', e)"
        @blur="(e) => emit('blur', e)"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="[
          searchClasses,
          'pl-10',
          clearable ? 'pr-10' : '',
          showResults ? 'rounded-b-none rounded-t-xl' : 'rounded-xl',
        ]"
        v-bind="$attrs"
      />

      <!-- Right Side Icons -->
      <div v-if="clearable" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          v-if="currentValue"
          @click="handleClear"
          type="button"
          class="rounded text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-[0.8px] focus:ring-gray-400"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Results (Expanded) -->
    <div v-if="showResults" class="rounded-b-xl border border-t-0 border-[#1364B3] bg-white">
      <!-- Loading State -->
      <div v-if="loading" class="p-4 text-center">
        <div class="flex items-center justify-center">
          <svg class="h-5 w-5 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
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
          <span class="ml-2 text-sm text-gray-500">Buscando...</span>
        </div>
      </div>

      <!-- Results List -->
      <div v-else-if="searchResults.length > 0" class="p-3">
        <button
          v-for="result in searchResults"
          :key="result.id"
          @click="handleSelectResult(result)"
          class="mb-2 w-full rounded text-left transition-colors duration-150 last:mb-0 focus:outline-none focus:ring-[0.8px] focus:ring-gray-400"
        >
          <div class="rounded-xl bg-blue-100 p-3">
            <div class="mb-1">
              <h4 class="text-sm font-medium text-gray-900">{{ result.title }}</h4>
            </div>
            <p class="text-xs text-gray-500">{{ result.description }}</p>
          </div>
        </button>
      </div>

      <!-- No Results -->
      <div v-else-if="currentValue && !loading" class="p-4 text-center">
        <p class="text-sm text-gray-500">No se encontraron resultados</p>
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
