<script setup lang="ts">

import type {Step} from "~/interfaces/step.interface";

interface Props {
  steps: Step[];
  showCheckmark?: boolean;
}

withDefaults(defineProps<Props>(), {
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
  <div class="relative mx-auto max-w-4xl">
        <div class="absolute bottom-0 left-0 top-0 w-1 bg-[#1364B3] l:left-1/2 l:-translate-x-1/2 l:transform"></div>

        <div class="space-y-16">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative flex items-center"
            @click="handleStepClick(index, $event)"
          >
            <div
              class="absolute left-0 z-10 flex h-[50px] w-[50px] -translate-x-1/2 transform items-center justify-center rounded-full bg-[#1364B3] l:left-1/2"
            >
              <span class="text-2xl font-bold leading-none text-white">{{ step.number }}</span>
            </div>

            <div class="grid w-full grid-cols-1 items-center gap-28 l:grid-cols-2">
              <div
                class="hidden h-[320px] w-[412px] items-center justify-center rounded-lg bg-gray-200 l:flex"
              >
                <div class="h-full w-full">
                  <img
                    src="/images/hero/FrameHero.png"
                    alt="Modern living room interior with warm tones, plants, and contemporary furniture"
                    class="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>

              <div class="col-span-full ml-16 space-y-3 l:col-span-1 l:ml-0">
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
                  <span class="text-base">{{ step.time }}</span>
                </div>

                <h3 class="text-xl font-bold text-blue-500">
                  {{ step.title }}
                </h3>

                <p class="text-base leading-relaxed text-gray-700">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="showCheckmark" class="relative flex items-center">
            <div class="absolute left-0 z-10 flex h-[50px] w-[50px] -translate-x-1/2 transform items-center justify-center rounded-full bg-[#1364B3] l:left-1/2">
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
</template>
