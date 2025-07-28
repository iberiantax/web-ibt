<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import BaseCard from '~/components/shared/ui/BaseCard.vue';
import BaseCarousel from '~/components/shared/ui/BaseCarousel.vue';

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
</script>

<template>
  <section class="bg-blue-700 py-16">
    <div class="mx-auto px-1 sm:px-4 lg:px-6">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-white lg:text-4xl">Which plan is right for you?</h2>
      </div>

      <!-- Selector de owners -->
      <div class="mb-12">
        <!-- Desktop -->
        <div class="hidden justify-center space-x-4 md:flex">
          <button
            v-for="(owner, index) in owners"
            :key="index"
            @click="handleOwnerChange(index)"
            :class="[
              'rounded-[12px] px-6 py-3 font-medium transition-colors',
              selectedOwner === index
                ? 'bg-white text-[#1364B3]'
                : 'border border-white text-white hover:bg-white hover:text-[#1364B3]',
            ]"
          >
            {{ owner }}
          </button>
        </div>

        <!-- Mobile carrusel -->
        <div class="px-4 md:hidden">
          <BaseCarousel
            :items="owners"
            :show-items="2"
            :gap="4"
            :show-arrows="false"
            :show-dots="true"
          >
            <template #default="{ item, index }">
              <button
                @click="handleOwnerChange(index)"
                :class="[
                  'whitespace-nowrap rounded-[12px] px-4 py-3 font-medium transition-colors',
                  selectedOwner === index
                    ? 'bg-white text-[#1364B3]'
                    : 'border border-white text-white hover:bg-white hover:text-[#1364B3]',
                ]"
              >
                {{ item }}
              </button>
            </template>
          </BaseCarousel>
        </div>
      </div>

      <!-- Cards de precios -->
      <div class="mb-16">
        <!-- Desktop -->
        <div class="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
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

        <!-- Mobile carrusel -->
        <div class="px-4 md:hidden">
          <div class="relative">
            <div class="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto">
              <div
                v-for="(plan, index) in plans"
                :key="index"
                class="w-full flex-shrink-0 snap-start"
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

            <!-- Dots indicator -->
            <div class="mt-4 flex justify-center space-x-2">
              <button
                v-for="(plan, index) in plans"
                :key="index"
                class="h-2 w-2 rounded-full transition-all"
                :class="index === 0 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
              />
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
