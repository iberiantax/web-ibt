<script setup lang="ts">
interface Step {
  number: number;
  time: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface Props {
  steps: Step[];
  title?: string;
  showCheckmark?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'How it works?',
  showCheckmark: true,
});

const emit = defineEmits<{
  stepClick: [stepIndex: number, event: MouseEvent];
}>();

const handleStepClick = (stepIndex: number, event: MouseEvent) => {
  emit('stepClick', stepIndex, event);
};
</script>

<template>
  <section class="bg-neutral-100 py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">
          {{ title }}
        </h2>
      </div>

      <!-- Timeline vertical centrado -->
      <div class="relative mx-auto max-w-4xl">
        <!-- Línea vertical del timeline (centrada en desktop, izquierda en mobile) -->
        <div
          class="absolute bottom-0 left-0 top-0 w-1 bg-[#1364B3] md:left-1/2 md:-translate-x-1/2 md:transform"
        ></div>

        <!-- Pasos -->
        <div class="space-y-16">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative flex items-center"
            @click="handleStepClick(index, $event)"
          >
            <!-- Nodo del timeline centrado sobre la línea -->
            <div
              class="absolute left-0 z-10 flex h-[50px] w-[50px] -translate-x-1/2 transform items-center justify-center rounded-full bg-[#1364B3] md:left-1/2"
            >
              <span class="text-xl font-bold leading-none text-white">{{ step.number }}</span>
            </div>

            <!-- Contenido del paso -->
            <div class="grid w-full grid-cols-1 items-center gap-24 md:grid-cols-2">
              <!-- Imagen a la izquierda (oculta en mobile) -->
              <div
                class="hidden h-[320px] w-[412px] items-center justify-center rounded-lg bg-gray-200 md:flex"
              >
                <div v-if="step.image" class="h-full w-full">
                  <img
                    :src="step.image"
                    :alt="step.imageAlt || step.title"
                    class="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center rounded-lg bg-gray-200"
                >
                  <svg
                    class="h-8 w-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>

              <!-- Contenido a la derecha (en mobile ocupa todo el ancho) -->
              <div class="col-span-full ml-16 space-y-3 md:col-span-1 md:ml-0">
                <!-- Tiempo -->
                <div class="flex items-center space-x-2">
                  <svg
                    class="h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-500">{{ step.time }}</span>
                </div>

                <!-- Título -->
                <h3 class="text-xl font-bold text-[#1364B3]">
                  {{ step.title }}
                </h3>

                <!-- Descripción -->
                <p class="text-base leading-relaxed text-gray-700">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Checkmark final -->
          <div v-if="showCheckmark" class="relative flex items-center">
            <div
              class="absolute left-0 z-10 flex h-[50px] w-[50px] -translate-x-1/2 transform items-center justify-center rounded-full bg-[#1364B3] md:left-1/2"
            >
              <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
