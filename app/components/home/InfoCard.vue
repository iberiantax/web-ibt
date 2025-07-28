<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import BaseButton from '~/components/shared/buttons/BaseButton.vue';

interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  showIcon?: boolean;
  backgroundColor?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'File your Spanish taxes for free.',
  description: 'Only pay when you are completely satisfied.',
  buttonText: 'File now',
  showIcon: true,
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
  <section class="bg-neutral-100 pb-8 pt-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-center">
        <div class="rounded-lg p-12 text-center" :class="backgroundColor">
          <!-- Título -->
          <h2
            class="mb-6 text-[46px] font-[40] font-bold leading-[48px] tracking-[0%] text-[#1364B3]"
          >
            {{ title }}
          </h2>

          <!-- Descripción -->
          <p class="mb-8 leading-relaxed text-gray-700">
            {{ description }}
          </p>

          <!-- Botón -->
          <BaseButton
            variant="primary"
            size="lg"
            @click="handleButtonClick"
            class="inline-flex items-center space-x-2"
          >
            <span>{{ buttonText }}</span>
            <ArrowRight v-if="showIcon" class="h-4 w-4" />
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
