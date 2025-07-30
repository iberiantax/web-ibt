<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import { BaseCard } from '~/components/shared/ui';

interface Plan {
  title: string;
  price: string;
  subtitle?: string;
  buttonText: string;
  type: string;
}

interface Feature {
  text: string;
}

const plans: Plan[] = [
  {
    title: 'Tax Calculation',
    price: '0,00 €',
    buttonText: 'Get started',
    type: 'default',
  },
  {
    title: 'Imputed income',
    price: '34,95 €',
    subtitle: '/ year (inc. VAT)',
    buttonText: 'Get started',
    type: 'default',
  },
  {
    title: 'Rental income',
    price: '79,95 €',
    subtitle: '/ year (inc. VAT)',
    buttonText: 'Get started',
    type: 'default',
  },
  {
    title: 'Capital gains',
    price: '149,95 €',
    subtitle: '/ year (inc. VAT)',
    buttonText: 'Get started',
    type: 'default',
  },
];

const features: Feature[] = [
  { text: 'Access to our tax tool' },
  { text: 'Easy and simplified questionnaire' },
  { text: 'Tax calculation' },
];

const owners = ['1 owner', '2 owners', '3 owners', '4 owners'];
const selectedOwner = ref(0);
const currentCardIndex = ref(0);
const containerRef = ref<HTMLElement>();

const emit = defineEmits<{
  ownerChange: [index: number];
  planClick: [planIndex: number, event: MouseEvent];
}>();

const handleOwnerChange = (index: number) => {
  selectedOwner.value = index;
  emit('ownerChange', index);
};

const handlePlanClick = (planIndex: number, event: MouseEvent) => {
  emit('planClick', planIndex, event);
};

// Funciones para navegación de cards en móvil
const goPrev = () => {
  if (currentCardIndex.value > 0) {
    currentCardIndex.value--;
    scrollToIndex();
  }
};

const goNext = () => {
  if (currentCardIndex.value < plans.length - 1) {
    currentCardIndex.value++;
    scrollToIndex();
  }
};

const scrollToIndex = () => {
  if (containerRef.value) {
    const cardWidth = containerRef.value.scrollWidth / plans.length;
    const scrollAmount = currentCardIndex.value * cardWidth;
    containerRef.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <section class="-mx-6 bg-blue-700 py-16 md:-mx-36">
    <div class="mx-auto px-6 md:px-36">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-white lg:text-4xl">Which plan is right for you?</h2>
      </div>

      <!-- Selector de owners -->
      <div class="mb-12">
        <!-- Desktop -->
        <div class="hidden justify-center space-x-4 lg:flex">
          <button
            v-for="(owner, index) in owners"
            :key="index"
            @click="handleOwnerChange(index)"
            :class="[
              'font-base rounded-[12px] px-6 py-2 transition-colors',
              selectedOwner === index
                ? 'bg-white text-[#1364B3]'
                : 'border border-white text-white',
            ]"
          >
            {{ owner }}
          </button>
        </div>

        <!-- Mobile y Tablet - Grid 2x2 -->
        <div class="lg:hidden">
          <div class="grid grid-cols-2 gap-3 px-4">
            <button
              v-for="(owner, index) in owners"
              :key="index"
              @click="handleOwnerChange(index)"
              :class="[
                'whitespace-nowrap rounded-[12px] px-4 py-3 font-medium transition-colors',
                selectedOwner === index
                  ? 'bg-white text-[#1364B3]'
                  : 'border border-white text-white hover:bg-white hover:text-[#1364B3]',
              ]"
            >
              {{ owner }}
            </button>
          </div>
        </div>
      </div>

      <!-- Cards de precios -->
      <div class="mb-16">
        <!-- Desktop -->
        <div class="hidden grid-cols-1 gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-4">
          <BaseCard
            v-for="(plan, index) in plans"
            :key="index"
            type="pricing"
            :subtitle="plan.title"
            :price="plan.price"
            :price-period="plan.subtitle"
            :button-text="plan.buttonText"
            button-variant="green-500"
            disclaimer="Renews every year. Cancel anytime."
            @click="handlePlanClick(index, $event)"
          />
        </div>

        <!-- Mobile y Tablet carrusel -->
        <div class="px-4 lg:hidden">
          <div class="relative">
            <div
              ref="containerRef"
              class="flex snap-x snap-mandatory gap-4 overflow-x-auto"
              style="scrollbar-width: none; -ms-overflow-style: none"
            >
              <div
                v-for="(plan, index) in plans"
                :key="index"
                class="w-full flex-shrink-0 snap-start md:w-2/3"
                style="scroll-snap-align: start"
              >
                <BaseCard
                  type="pricing"
                  :subtitle="plan.title"
                  :price="plan.price"
                  :price-period="plan.subtitle"
                  :button-text="plan.buttonText"
                  button-variant="green-500"
                  disclaimer="Renews every year. Cancel anytime."
                  @click="handlePlanClick(index, $event)"
                />
              </div>
            </div>

            <!-- Flechas de navegación (como en HappyClients) -->
            <div class="mt-6 flex justify-end space-x-2">
              <button
                @click="goPrev"
                :disabled="currentCardIndex === 0"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-black transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                @click="goNext"
                :disabled="currentCardIndex >= plans.length - 1"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-black transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card informativa con features -->
      <div class="mx-4 rounded-[12px] bg-white p-8 shadow-sm md:mx-0">
        <div class="mb-8 text-center">
          <h3 class="text-2xl font-bold text-gray-900">
            Each plan have all that you need and more
          </h3>
        </div>

        <!-- Grid de features 3x3 -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div v-for="column in 3" :key="column" class="space-y-4">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center space-x-3"
            >
              <Check class="h-5 w-5 flex-shrink-0 text-[#1BC5BD]" />
              <span class="text-gray-700">{{ feature.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ocultar scrollbar en móvil */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
