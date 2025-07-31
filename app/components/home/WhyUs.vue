<script setup lang="ts">
import { BaseFeatureCard } from '~/components/shared/ui';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/svg/clock.svg',
    title: 'Quick',
    description:
      'Create an account for free and start right away. File your Form 210 online within less than 10 minutes.',
  },
  {
    icon: '/svg/starHome.svg',
    title: 'Simple',
    description:
      'Questionnaire based, data entry form, with step-by-step guidance. No tax knowledge required.',
  },
  {
    icon: '/svg/calculator.svg',
    title: 'Low cost',
    description:
      "Cheaper than any Tax Consultant or Accountant, who's prices can cost around 120€. Our service costs from only 34.95€!",
  },
  {
    icon: '/svg/card.svg',
    title: 'Online payment',
    description:
      'No need to be in Spain. You can file your 210 Form online anywhere, anytime. We also offer 3 different payment methods to finish you tax returns.',
  },
  {
    icon: '/svg/accurate.svg',
    title: 'Accurate',
    description:
      'Our software has been developed by tax experts with years of experience filing non-resident taxes in Spain and has in-built checkers to ensure 100% accuracy.',
  },
  {
    icon: '/svg/secure.svg',
    title: 'Secure',
    description:
      'We use data encryption to ensure the highest level of security. All of your private information is securely saved and we also offer secure payment options.',
  },
];

const emit = defineEmits<{
  cardClick: [index: number, event: MouseEvent];
}>();

const handleCardClick = (index: number, event: MouseEvent) => {
  emit('cardClick', index, event);
};
</script>

<template>
  <section class="bg-neutral-100 py-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-blue-500 lg:text-4xl">Why us?</h2>
      </div>

      <!-- Grid de cards -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BaseFeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          @click="handleCardClick(index, $event)"
        />
      </div>
    </div>
  </section>
</template>
