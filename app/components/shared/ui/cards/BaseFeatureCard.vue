<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  cardClass?: string;
  iconContainerClass?: string;
}

withDefaults(defineProps<Props>(), {
  iconClass: 'h-10 w-10',
  titleClass: 'mb-4 text-start text-[28px] font-bold text-[#1364B3]',
  descriptionClass: 'text-start text-base leading-relaxed text-gray-700',
  cardClass: 'cursor-pointer rounded-lg bg-white p-8',
  iconContainerClass: 'mb-6 flex justify-start',
});
</script>

<template>
  <div :class="cardClass">
    <!-- Icono -->
    <div :class="iconContainerClass">
      <img :src="icon" :alt="title" :class="iconClass" />
    </div>

    <!-- Título -->
    <h3 :class="titleClass">
      {{ title }}
    </h3>

    <!-- Descripción -->
    <p :class="descriptionClass">
      {{ description }}
    </p>
  </div>
</template>
