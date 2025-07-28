<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  buttonText?: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
}

withDefaults(defineProps<Props>(), {
  buttonText: 'Get started',
  backgroundColor: 'bg-[#D6E6F7]',
});

const emit = defineEmits<{
  buttonClick: [event: MouseEvent];
}>();

const handleButtonClick = (event: MouseEvent) => {
  emit('buttonClick', event);
};
</script>

<template>
  <div class="w-full rounded-[24px] p-8" :class="backgroundColor">
    <div class="flex items-center gap-8">
      <!-- Contenido de texto -->
      <div class="flex-1">
        <h2 class="mb-4 text-3xl font-bold text-[#1364B3] lg:text-4xl">
          {{ title }}
        </h2>
        <p class="mb-6 text-base text-gray-700">
          {{ description }}
        </p>
        <button
          @click="handleButtonClick"
          class="rounded-lg border border-[#1364B3] bg-white px-6 py-3 text-base font-medium text-[#1364B3] transition-colors hover:bg-[#1364B3] hover:text-white"
        >
          {{ buttonText }}
        </button>
      </div>

      <!-- Imagen -->
      <div class="flex-shrink-0">
        <div class="h-64 w-64 overflow-hidden rounded-[24px]">
          <img v-if="image" :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
          <div v-else class="flex h-full w-full items-center justify-center bg-gray-200">
            <svg
              class="h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
