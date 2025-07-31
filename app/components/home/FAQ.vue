<script setup lang="ts">
import {BaseAccordion} from '~/components/shared/ui';
import type {Faq} from "~/interfaces/faq.interface";

interface Props {
  faqs: Faq[]
}

defineProps<Props>();

const emit = defineEmits<{
  accordionClick: [index: number, event: MouseEvent];
}>();

const handleAccordionClick = (index: number, event: MouseEvent) => {
  emit('accordionClick', index, event);
};
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div
        v-for="(item, index) in faqs"
        :key="index"
        @click="handleAccordionClick(index, $event)"
    >
      <BaseAccordion :title="item.question" variant="primary" size="md">
        <p class="text-base font-light">{{ item.answer }}</p>
      </BaseAccordion>
    </div>
  </div>
</template>
