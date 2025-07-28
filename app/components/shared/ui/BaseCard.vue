<script setup lang="ts">
interface Props {
  type?: 'default' | 'default-white' | 'blog' | 'case-studies' | 'review' | 'pricing';
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'green-500';
  disabled?: boolean;
  fullWidth?: boolean;
  financialData?: {
    total: string;
    owners: string;
    sellPrice: string;
    saleCosts: string;
    purchasePrice: string;
    purchaseCosts: string;
    withholdingTax: string;
    nationality: string;
    taxRateEU: string;
  };
  taxCalculation?: string;
  rating?: number;
  reviewerName?: string;
  price?: string;
  pricePeriod?: string;
  disclaimer?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  title: 'Title',
  subtitle: '',
  description: 'Description text goes here',
  image: '',
  imageAlt: 'Card image',
  buttonText: 'Button',
  buttonVariant: 'primary',
  disabled: false,
  fullWidth: false,
  financialData: () => ({
    total: 'XXX.XXX €',
    owners: 'X owners',
    sellPrice: 'XXX.XXX €',
    saleCosts: 'XXX.XXX €',
    purchasePrice: 'XXX.XXX €',
    purchaseCosts: 'XXX.XXX €',
    withholdingTax: 'XXX.XXX €',
    nationality: 'Nationality',
    taxRateEU: 'XX %',
  }),
  taxCalculation:
    'Tax calculation: ((100.000 - 4.000) - (60.000 + 6.000)) x 19% = 5.700 - 3.000 = 2.700 €',
  rating: 4.5,
  reviewerName: 'Name Surname',
  price: 'Title',
  pricePeriod: '/ year (inc. VAT)',
  disclaimer: 'Renews every year. Cancel anytime.',
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const cardClasses = computed(() => {
  const baseClasses = ['transition-all duration-200', props.fullWidth ? 'w-full' : 'w-auto'];

  // Clases por tipo
  const typeClasses = {
    default: props.fullWidth
      ? 'flex flex-col items-start p-10 h-auto bg-blue-50 rounded-3xl w-full'
      : 'flex flex-col items-start p-10 h-auto bg-blue-50 rounded-3xl max-w-sm',
    'default-white': props.fullWidth
      ? 'flex flex-col items-start p-10 h-auto bg-white rounded-3xl w-full'
      : 'flex flex-col items-start p-10 h-auto bg-white rounded-3xl max-w-sm',
    blog: 'flex flex-col items-start p-0 relative w-full max-w-md h-auto bg-white rounded-3xl',
    'case-studies': 'flex flex-col items-start p-6 w-full max-w-lg h-auto bg-white rounded-3xl',
    review: 'flex flex-col items-start p-6 w-full max-w-md h-auto bg-white rounded-3xl',
    pricing: 'flex flex-col items-start p-8 w-full max-w-md h-auto bg-white rounded-3xl',
  };

  return [...baseClasses, typeClasses[props.type]].join(' ');
});

const buttonClasses = computed(() => {
  const baseClasses = 'px-6 py-3 rounded-xl font-medium transition-all duration-200';

  const variantClasses = {
    primary: 'bg-[#1364B3] text-white hover:bg-[#0f4d8a]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'bg-white text-[#1364B3] border border-[#1364B3] hover:bg-[#1364B3] hover:text-white',
    'green-500': 'bg-green-500 text-white hover:bg-green-600',
  };

  const stateClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return [baseClasses, variantClasses[props.buttonVariant], stateClasses].join(' ');
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <div :class="cardClasses" v-bind="$attrs">
    <!-- Default Type -->
    <div v-if="type === 'default'" class="flex h-full w-full flex-col items-start">
      <!-- Icon -->
      <div class="mb-8">
        <svg class="h-8 w-8 text-[#1364B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </div>

      <!-- Title -->
      <div class="mb-6 w-full">
        <h3 class="text-lg font-semibold leading-tight tracking-tight text-[#1364B3]">
          {{ title }}
        </h3>
      </div>

      <!-- Description -->
      <div class="mb-8 w-full">
        <p v-if="subtitle" class="mb-3 text-sm font-medium text-gray-600">{{ subtitle }}</p>
        <p class="text-base leading-relaxed text-gray-700">{{ description }}</p>
      </div>

      <!-- Button -->
      <div class="mt-auto w-full">
        <button
          v-if="buttonText"
          :class="buttonClasses"
          @click="handleClick"
          :disabled="disabled"
          type="button"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>

    <!-- Default White Type -->
    <div
      v-else-if="type === 'default-white'"
      class="flex h-full w-full max-w-sm flex-col items-start rounded-3xl bg-white"
    >
      <!-- Icon -->
      <div class="mb-4">
        <svg class="h-8 w-8 text-[#1364B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </div>

      <!-- Title -->
      <div class="w-full">
        <h3 class="mb-3 text-lg font-semibold leading-tight tracking-tight text-[#1364B3]">
          {{ title }}
        </h3>
      </div>

      <!-- Description -->
      <div class="w-full">
        <p v-if="subtitle" class="mb-3 text-sm font-medium text-gray-600">{{ subtitle }}</p>
        <p class="mb-4 text-base leading-relaxed text-gray-700">{{ description }}</p>
      </div>

      <!-- Button -->
      <div class="mt-auto w-full">
        <button
          v-if="buttonText"
          :class="buttonClasses"
          @click="handleClick"
          :disabled="disabled"
          type="button"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>

    <!-- Blog Type -->
    <div v-else-if="type === 'blog'" class="flex h-full w-full flex-col items-start">
      <!-- Image at top -->
      <div v-if="image" class="h-48 w-full overflow-hidden rounded-t-3xl">
        <img :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
      </div>
      <div v-else class="flex h-32 w-full items-center justify-center rounded-t-3xl bg-gray-200">
        <svg class="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </div>

      <!-- Content below image -->
      <div class="w-full p-6">
        <h3 class="mb-2 text-xl font-bold text-gray-900">{{ title }}</h3>
        <p class="mb-4 text-base text-gray-700">{{ description }}</p>
        <button
          v-if="buttonText"
          :class="buttonClasses"
          @click="handleClick"
          :disabled="disabled"
          type="button"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>

    <!-- Case Studies Type -->
    <div v-else-if="type === 'case-studies'" class="flex h-full w-full flex-col items-start">
      <!-- Title -->
      <h3 class="my-6 text-xl font-bold text-gray-900">{{ title }}</h3>

      <!-- Financial Data -->
      <div class="mb-6 w-full">
        <div class="flex flex-row items-center gap-20">
          <!-- Left Column (Labels) -->
          <div class="flex-1 space-y-3">
            <div class="text-sm text-gray-700">Total</div>
            <div class="text-sm text-gray-700">Owners</div>
            <div class="text-sm text-gray-700">Sell price</div>
            <div class="text-sm text-gray-700">Sale costs</div>
            <div class="text-sm text-gray-700">Purchase price</div>
            <div class="text-sm text-gray-700">Purchase costs</div>
            <div class="text-sm text-gray-700">Withholding tax</div>
            <div class="text-sm text-gray-700">Nationality</div>
            <div class="text-sm text-gray-700">Tax rate EU</div>
          </div>

          <!-- Right Column (Values) -->
          <div class="flex-1 space-y-3 text-right">
            <div class="text-lg font-bold text-gray-900">{{ financialData.total }}</div>
            <div class="text-sm text-gray-700">{{ financialData.owners }}</div>
            <div class="text-sm text-gray-700">{{ financialData.sellPrice }}</div>
            <div class="text-sm text-gray-700">{{ financialData.saleCosts }}</div>
            <div class="text-sm text-gray-700">{{ financialData.purchasePrice }}</div>
            <div class="text-sm text-gray-700">{{ financialData.purchaseCosts }}</div>
            <div class="text-sm text-gray-700">{{ financialData.withholdingTax }}</div>
            <div class="text-sm text-gray-700">{{ financialData.nationality }}</div>
            <div class="text-sm text-gray-700">{{ financialData.taxRateEU }}</div>
          </div>
        </div>
      </div>

      <!-- Tax Calculation -->
      <div class="w-full">
        <p class="text-sm text-gray-600">{{ taxCalculation }}</p>
      </div>
    </div>

    <!-- Review Type -->
    <div v-else-if="type === 'review'" class="flex h-full w-full flex-col items-start">
      <!-- Rating Stars -->
      <div class="mb-4 flex justify-center">
        <div class="flex space-x-1">
          <svg
            v-for="i in 5"
            :key="i"
            class="h-5 w-5"
            :class="
              i <= Math.floor(rating)
                ? 'text-yellow-400'
                : i === Math.ceil(rating) && rating % 1 !== 0
                  ? 'text-yellow-400'
                  : 'text-gray-300'
            "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Review Text -->
      <div class="mb-4 w-full">
        <p class="line-clamp-4 text-base text-gray-700">{{ description }}</p>
      </div>

      <!-- Reviewer Name -->
      <div class="w-full">
        <p class="text-sm font-bold text-[#1364B3]">{{ reviewerName }}</p>
      </div>
    </div>

    <!-- Pricing Type -->
    <div v-else-if="type === 'pricing'" class="flex h-full w-full flex-col items-start">
      <!-- Subtitle -->
      <div v-if="subtitle" class="mb-4 w-full">
        <p class="text-lg font-semibold text-gray-900">{{ subtitle }}</p>
      </div>

      <!-- Price -->
      <div class="mb-6 w-full">
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold text-gray-900">{{ price }}</h3>
          <span class="text-sm text-gray-600">{{ pricePeriod }}</span>
        </div>
      </div>

      <!-- Button -->
      <div class="mb-6 w-full">
        <button
          v-if="buttonText"
          :class="buttonClasses"
          @click="handleClick"
          :disabled="disabled"
          type="button"
        >
          {{ buttonText }}
        </button>
      </div>

      <!-- Disclaimer -->
      <div class="w-full">
        <p class="text-xs text-gray-900">{{ disclaimer }}</p>
      </div>
    </div>
  </div>
</template>
