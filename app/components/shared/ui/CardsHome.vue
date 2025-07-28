<script setup lang="ts">
import BaseButton from '../buttons/BaseButton.vue';

interface CardData {
  icon?: string;
  title: string;
  description: string;
  buttonText?: string;
}

interface Props {
  title?: string;
  cards: CardData[];
  bottomButtonText?: string;
  bottomButtonVariant?: 'primary' | 'secondary' | 'outline';
}

withDefaults(defineProps<Props>(), {
  title: 'Types of Form 210',
  bottomButtonText: 'Find your Form 210',
  bottomButtonVariant: 'outline',
});

const emit = defineEmits<{
  cardClick: [index: number, event: MouseEvent];
  bottomButtonClick: [event: MouseEvent];
}>();

const handleCardClick = (index: number, event: MouseEvent) => {
  emit('cardClick', index, event);
};

const handleBottomButtonClick = (event: MouseEvent) => {
  emit('bottomButtonClick', event);
};

// Iconos específicos para cada card
const cardIcons = ['/svg/home.svg', '/svg/company.svg', '/svg/capital-gain.svg'];
</script>

<template>
  <section class="bg-neutral-100 py-16">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">
          {{ title }}
        </h2>
      </div>

      <!-- Grid de cards -->
      <div class="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex h-auto w-full cursor-pointer flex-col items-start rounded-3xl bg-blue-100 p-10 transition-all duration-200 hover:shadow-lg"
          @click="handleCardClick(index, $event)"
        >
          <!-- Icono específico -->
          <div class="mb-8">
            <img :src="cardIcons[index]" :alt="card.title" class="h-10 w-10" />
          </div>

          <!-- Título -->
          <div class="mb-6 w-full">
            <h3 class="text-[20px] font-semibold leading-tight tracking-tight text-[#1364B3]">
              {{ card.title }}
            </h3>
          </div>

          <!-- Descripción -->
          <div class="mb-8 w-full">
            <p class="text-base leading-relaxed text-gray-700">{{ card.description }}</p>
          </div>

          <!-- Botón -->
          <div class="mt-auto w-full">
            <button
              class="cursor-pointer rounded-xl bg-[#1364B3] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#0f4d8a]"
            >
              {{ card.buttonText || 'More info' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Botón outline debajo -->
      <div class="text-center">
        <BaseButton :variant="bottomButtonVariant" @click="handleBottomButtonClick">
          {{ bottomButtonText }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
