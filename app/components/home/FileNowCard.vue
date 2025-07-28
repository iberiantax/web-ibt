<script setup lang="ts">
import InfoCard from './InfoCard.vue';

const emit = defineEmits<{
  buttonClick: [event: MouseEvent];
}>();

const handleButtonClick = (event: MouseEvent) => {
  emit('buttonClick', event);
};
</script>

<template>
  <InfoCard
    title="File your Spanish taxes for free."
    description="Only pay when you are completely satisfied."
    button-text="File now"
    background-color="bg-blue-200"
    @button-click="handleButtonClick"
  />
</template>
