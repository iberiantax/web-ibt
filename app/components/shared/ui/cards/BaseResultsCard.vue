<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import BaseButton from '~/components/shared/ui/buttons/BaseButton.vue';

interface ResultItem {
  label: string;
  value: string;
  isHighlighted?: boolean;
}

interface Props {
  title?: string;
  results: ResultItem[];
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'green-500';
  backgroundColor?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Results',
  results: () => [
    { label: 'Tax base', value: '3.850,00 €' },
    { label: 'Tax rate', value: '19 %' },
    { label: 'Tax Liability', value: '731,50 €', isHighlighted: true },
  ],
  buttonText: 'Start tax returns',
  buttonVariant: 'primary',
  backgroundColor: 'bg-blue-100',
});

const emit = defineEmits<{
  buttonClick: [event: MouseEvent];
}>();

const handleButtonClick = (event: MouseEvent) => {
  emit('buttonClick', event);
};
</script>

<template>
  <div class="w-full rounded-xl p-6" :class="backgroundColor">
    <!-- Título -->
    <div class="mb-6">
      <h3 class="text-3xl font-bold text-gray-900">{{ title }}</h3>
    </div>

    <!-- Resultados -->
    <div class="mb-6 space-y-3">
      <div
        v-for="(result, index) in results"
        :key="index"
        class="flex items-center justify-between"
      >
        <span class="text-base text-gray-700">{{ result.label }}</span>
        <span
          :class="[
            result.isHighlighted
              ? 'text-3xl font-bold text-gray-900'
              : 'text-base font-medium text-gray-900',
          ]"
        >
          {{ result.value }}
        </span>
      </div>
    </div>

    <!-- Botón -->
    <div class="flex justify-start">
      <BaseButton
        :variant="buttonVariant"
        @click="handleButtonClick"
        class="flex items-center space-x-2"
      >
        <span>{{ buttonText }}</span>
        <ArrowRight class="h-4 w-4" />
      </BaseButton>
    </div>
  </div>
</template>
