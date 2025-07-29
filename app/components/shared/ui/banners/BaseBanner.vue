<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import BaseButton from '~/components/shared/ui/buttons/BaseButton.vue';

interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  showArrow?: boolean;
  showDescription?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'Will you get a refund or have to pay?',
  description:
    "Whatever the outcome, we'll make sure you get the best possible result. Best of luck!",
  buttonText: 'Calculate result',
  image: '',
  imageAlt: 'Banner image',
  backgroundColor: 'bg-blue-100',
  showArrow: true,
  showDescription: true,
});

const emit = defineEmits<{
  buttonClick: [event: MouseEvent];
}>();

const handleButtonClick = (event: MouseEvent) => {
  emit('buttonClick', event);
};
</script>

<template>
  <div class="w-full rounded-[8px] p-4 sm:rounded-[12px] sm:p-6" :class="backgroundColor">
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
      <!-- Imagen -->
      <div class="flex-shrink-0">
        <div v-if="image" class="h-12 w-12 overflow-hidden rounded-[8px] sm:h-16 sm:w-16">
          <img :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
        </div>
        <div v-else class="flex h-12 w-12 items-center justify-center rounded-[8px] bg-gray-200 sm:h-16 sm:w-16">
          <svg class="h-6 w-6 text-gray-400 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <!-- Contenido de texto -->
      <div class="flex-1 text-center sm:mx-6 sm:text-left">
        <h3
          class="mb-1 font-bold text-[#1364B3]"
          :class="showDescription ? 'text-sm sm:text-base' : 'text-lg sm:text-2xl'"
        >
          {{ title }}
        </h3>
        <p v-if="showDescription" class="text-xs text-gray-700 sm:text-sm">{{ description }}</p>
      </div>

      <!-- Botón -->
      <div class="flex-shrink-0 w-full sm:w-auto">
        <BaseButton
          variant="primary"
          @click="handleButtonClick"
          class="flex w-full items-center justify-center space-x-2 sm:w-auto"
        >
          <span class="text-sm sm:text-base">{{ buttonText }}</span>
          <ArrowRight v-if="showArrow" class="h-3 w-3 sm:h-4 sm:w-4" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
