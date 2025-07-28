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
  title: 'Common Reasons',
});

const emit = defineEmits<{
  stepClick: [stepIndex: number, event: MouseEvent];
}>();

const handleStepClick = (stepIndex: number, event: MouseEvent) => {
  emit('stepClick', stepIndex, event);
};
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex cursor-pointer items-stretch space-x-4"
      @click="handleStepClick(index, $event)"
    >
      <div
        class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1364B3] font-bold text-white"
      >
        {{ step.number }}
      </div>
      <div>
        <h3 class="mb-2 text-base font-bold text-gray-900">{{ step.title }}</h3>
        <p class="text-base text-gray-700">
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>
