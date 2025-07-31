<script setup lang="ts">
import PricingCard from "~/components/shared/ui/cards/PricingCard.vue";
import {Check} from "lucide-vue-next";
import type {PricingPlan} from "~/interfaces/pricing-plan.interface";
import type {PricingFeature} from "~/interfaces/pricing-feature.interface";

const features: PricingFeature[] = [
  {text: 'Access to our tax tool'},
  {text: 'Easy and simplified questionnaire'},
  {text: 'Tax calculation'},
];
const plans: PricingPlan[] = [
  {
    title: 'Tax Calculation',
    owners: ['Free', 'Free', 'Free', 'Free'],
    details: 'Free use of the platform',
    disclaimer: 'Disclaimer'
  },
  {
    title: 'Imputed Income',
    owners: ['34,95€', '59,95€', '89,95€', '119,85€'],
    details: '/incl. VAT',
    disclaimer: ''
  },
  {
    title: 'Rental Income',
    owners: ['79,95€', '149,95€', '219,95€', '289,95€'],
    details: '/incl. VAT',
    disclaimer: ''
  },
  {
    title: 'Capital Gains',
    owners: ['149,95€', '199,95€', '249,95€', '299,95€'],
    details: '/incl. VAT',
    disclaimer: ''
  },
];
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
  <div class="mb-12">
    <div class="hidden justify-center space-x-4 lg:flex">
      <button v-for="(plan, index) in plans" :key="index"
              @click="handleOwnerChange(index)"
              :class="[
              'font-base rounded-[12px] px-6 py-2 transition-colors',
              selectedOwner === index
                ? 'bg-white text-blue-500'
                : 'border border-white text-white',
            ]"
      >
        {{ `${index + 1} ${0 === index ? 'Owner' : 'Owners'}` }}
      </button>
    </div>

    <div class="lg:hidden">
      <div class="grid grid-cols-2 gap-3 px-4">
        <button v-for="(plan, index) in plans" :key="index"
                @click="handleOwnerChange(index)"
                :class="[
                'whitespace-nowrap rounded-[12px] px-4 py-3 font-medium transition-colors',
                selectedOwner === index
                  ? 'bg-white text-blue-500'
                  : 'border border-white text-white hover:bg-white hover:text-blue-500',
              ]"
        >
          {{ `${index + 1} ${0 === index ? 'Owner' : 'Owners'}` }}
        </button>
      </div>
    </div>
  </div>

  <div class="mb-16">
    <div class="hidden grid-cols-1 gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-4">
      <pricing-card
          v-for="(plan, index) in plans"
          :key="index"
          :title="plan.title"
          :price="plan.owners[selectedOwner] ?? ''"
          :price-details="plan.details"
          :disclaimer="plan.disclaimer"
      >
      </pricing-card>
    </div>

    <div class="px-4 lg:hidden">
      <div class="relative">
        <div ref="containerRef"
             class="flex snap-x snap-mandatory gap-4 overflow-x-auto"
             style="scrollbar-width: none; -ms-overflow-style: none"
        >
          <div
              v-for="(plan, index) in plans"
              :key="index"
              class="w-full flex-shrink-0 snap-start md:w-2/3"
              style="scroll-snap-align: start"
          >
            <pricing-card
                :title="plan.title"
                :price="plan.owners[selectedOwner] ?? ''"
                :price-details="plan.details"
                :disclaimer="plan.disclaimer"
            >
            </pricing-card>
          </div>
        </div>

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

  <div class="mx-4 rounded-[12px] bg-white p-8 shadow-sm md:mx-0">
    <div class="mb-8 text-center">
      <h3 class="text-2xl font-bold text-gray-900">
        Each plan have all that you need and more
      </h3>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div v-for="column in 3" :key="column" class="space-y-4">
        <div v-for="(feature, index) in features" :key="index" class="flex items-center space-x-3">
          <Check class="h-5 w-5 flex-shrink-0 text-green-500"/>
          <span class="text-gray-700">{{ feature.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
