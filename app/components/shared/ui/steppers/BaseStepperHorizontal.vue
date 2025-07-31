<script setup lang="ts">
interface Step {
  number: number;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'HOW IT WORKS!',
});

const emit = defineEmits<{
  stepClick: [stepIndex: number, event: MouseEvent];
}>();

const handleStepClick = (stepIndex: number, event: MouseEvent) => {
  emit('stepClick', stepIndex, event);
};
</script>

<template>
  <section class="bg-neutral-100 py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-blue-500 lg:text-4xl">
          {{ title }}
        </h2>
      </div>

      <!-- Pasos verticales en grid -->
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex cursor-pointer flex-col items-start"
            @click="handleStepClick(index, $event)"
          >
            <!-- Círculo con número -->
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1364B3] text-2xl font-bold text-white"
            >
              {{ step.number }}
            </div>

            <!-- Contenido de texto -->
            <div class="max-w-xs">
              <h3 class="mb-4 text-xl font-bold text-gray-900">
                {{ step.title }}
              </h3>
              <p class="text-base text-gray-700">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
