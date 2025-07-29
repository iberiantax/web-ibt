<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  buttonText?: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  maxWidth?: string;
}

withDefaults(defineProps<Props>(), {
  buttonText: 'Get started',
  backgroundColor: 'bg-[#A0E8D9]',
  maxWidth: 'max-w-sm',
});
</script>

<template>
  <div
    class="mx-auto rounded-[16px] p-6 sm:rounded-[20px] sm:p-8"
    :class="[backgroundColor, maxWidth]"
  >
    <div class="flex flex-col items-center gap-4">
      <!-- Contenido de texto -->
      <div class="w-full text-start">
        <h2 class="mb-3 text-xl font-bold text-[#2A60B0] sm:text-2xl lg:text-3xl">
          {{ title }}
        </h2>
        <p class="mb-4 text-sm text-gray-700 sm:text-base lg:mb-6">
          {{ description }}
        </p>
      </div>

      <!-- Imagen -->
      <div class="w-full">
        <div class="aspect-[4/3] w-full overflow-hidden rounded-[16px]">
          <img v-if="image" :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
          <div v-else class="flex h-full w-full items-center justify-center bg-gray-200">
            <svg
              class="h-12 w-12 text-gray-400 sm:h-16 sm:w-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
