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
  gradientClass?: string;
  showArrow?: boolean;
  showDescription?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'Will you get a refund or have to pay?Will you get a refund or have to pay? Whatever the outcome, we’ll make sure you get the best possible result. Best of luck!',
  description:
    "",
  buttonText: 'Calculate result',
  image: '',
  imageAlt: 'Banner image',
  backgroundColor: 'bg-white',
  gradientClass: '',
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
  <div
    class="w-full rounded-[12px] p-8 sm:rounded-[12px] sm:p-6"
    :class="[backgroundColor, gradientClass]"
  >
    <div class="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
      <!-- Imagen -->
      <div class="w-full flex-shrink-0 sm:w-auto">
        <div v-if="image" class="h-24 w-full overflow-hidden rounded-[16px]">
          <img :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
        </div>
        <div
          v-else
          class="flex h-32 w-full items-center justify-center rounded-[16px] bg-gray-200 sm:h-48 sm:w-48"
        >
          <svg
            class="h-16 w-16 text-gray-400 sm:h-24 sm:w-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 00-2 2v12a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <!-- Contenido de texto -->
      <div class="flex-1 text-center sm:mx-6 sm:text-left">
        <h3
          class="mb-2 font-bold text-blue-500"
          :class="showDescription ? 'text-lg sm:text-2xl' : 'text-xl sm:text-3xl'"
        >
          {{ title }}
        </h3>
        <p v-if="showDescription" class="text-sm text-gray-700 sm:text-base">{{ description }}</p>
      </div>

      <!-- Botón -->
      <div class="flex flex-shrink-0 justify-center sm:justify-end">
        <BaseButton
          variant="primary"
          @click="handleButtonClick"
          class="flex items-center space-x-2 px-6 py-3"
        >
          <span class="text-sm sm:text-base">{{ buttonText }}</span>
          <ArrowRight v-if="showArrow" class="h-4 w-4 sm:h-5 sm:w-5" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
