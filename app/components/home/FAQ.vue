<script setup lang="ts">
import BaseAccordion from '~/components/shared/ui/BaseAccordion.vue';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Do I need to pay non-resident tax?',
    answer:
      'Yes, if you own property in Spain but are not a resident, you are required to pay non-resident tax (Form 210) annually. This applies to both rental income and imputed income from your property.',
  },
  {
    question: 'Do I need to pay tax on my Spanish property?',
    answer:
      'Yes, Spanish property owners who are non-residents must pay annual property taxes. This includes imputed income tax (even if the property is not rented) and rental income tax if the property generates rental income.',
  },
  {
    question: 'Can I file my non-resident tax online?',
    answer:
      'Yes! IberianTax allows you to file your non-resident tax completely online. Our platform guides you through the process step-by-step, making it simple and secure.',
  },
  {
    question: 'What do I need to get started?',
    answer:
      'To get started, you need your property details, personal information, and any rental income documentation if applicable. Our platform will guide you through all the required information.',
  },
  {
    question: 'Can I pay my non-resident tax online?',
    answer:
      'Yes, IberianTax offers secure online payment options. You can pay using credit card, bank transfer, or other digital payment methods directly through our platform.',
  },
  {
    question: 'Do I have to pay tax on my Spanish property?',
    answer:
      'Yes, as a non-resident property owner in Spain, you are legally required to pay annual taxes on your property. This includes both imputed income tax and rental income tax if applicable.',
  },
];

const emit = defineEmits<{
  accordionClick: [index: number, event: MouseEvent];
}>();

const handleAccordionClick = (index: number, event: MouseEvent) => {
  emit('accordionClick', index, event);
};
</script>

<template>
  <section class="bg-neutral-100 pt-16 pb-28">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">Frequently Asked Questions</h2>
      </div>

      <!-- Grid de FAQ items -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          @click="handleAccordionClick(index, $event)"
        >
          <BaseAccordion :title="item.question" variant="primary" size="md">
            <p class="text-base font-light">{{ item.answer }}</p>
          </BaseAccordion>
        </div>
      </div>
    </div>
  </section>
</template>
