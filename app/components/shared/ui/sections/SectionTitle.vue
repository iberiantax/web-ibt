<script setup lang="ts">
interface Props {
  title: string;
  titleVariant?: 'primary' | 'secondary' | 'white';
  description?: string;
  descriptionVariant?: 'primary' | 'secondary' | 'white';
}

const props = withDefaults(defineProps<Props>(), {
  titleVariant: 'primary',
  descriptionVariant: 'secondary',
});

const variantClasses = {
  title: {
    primary: 'text-3xl font-bold text-blue-500 lg:text-4xl mb-4',
    secondary: 'text-3xl font-bold text-green-500 lg:text-4xl mb-4',
    white: 'text-3xl font-bold text-white lg:text-4xl mb-4',
  },
  description: {
    primary: 'text-base leading-relaxed text-blue-500 font-semibold',
    secondary: 'text-base leading-relaxed text-green-500 font-semibold',
    white: 'text-base leading-relaxed text-white font-semibold',
  },
};

const titleClasses = computed(() => variantClasses.title[props.titleVariant]);
const descriptionClasses = computed(() => variantClasses.description[props.descriptionVariant]);
</script>

<template>
  <div class="mb-8 text-center">
    <h2 :class="['text-3xl font-bold text-blue-500 lg:text-4xl mb-4', titleClasses]">
      {{ title }}
    </h2>
    <div v-if="description" :class="['text-base leading-relaxed font-semibold',descriptionClasses]">
      <p :class="descriptionClass">
        {{ description }}
      </p>
    </div>
  </div>
</template>
