<script setup lang="ts">
import { BaseStepper } from '~/components/shared/ui';

// Datos de los pasos del proceso
const steps = [
  {
    number: 1,
    time: '10 seconds',
    title: 'Register for free',
    description:
      'Create an account in seconds. No credit card required. Fill in your personal details.',
  },
  {
    number: 2,
    time: '10 seconds',
    title: 'Fill out your information',
    description: 'Answer a few simple questions about your property and ownership details.',
  },
  {
    number: 3,
    time: '10 seconds',
    title: 'Choose filing and payment method',
    description: 'Answer a few simple questions about your property and ownership details.',
  },
];

const handleStepClick = (stepIndex: number, event: MouseEvent) => {
  console.log('Step clicked:', stepIndex, event);
};
</script>

<template>
  <BaseStepper
    title="How it works?"
    :steps="steps"
    :show-checkmark="true"
    @step-click="handleStepClick"
  />
</template>
