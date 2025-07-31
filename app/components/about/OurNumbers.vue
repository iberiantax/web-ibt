<script setup lang="ts">

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/svg/clock.svg',
    title: '7 awards',
    description:
      'Won this year',
  },
  {
    icon: '/svg/starHome.svg',
    title: '4.9',
    description:
      'As an average Trustpilot rating',
  },
  {
    icon: '/svg/calculator.svg',
    title: '6M+ Tax Refunds',
    description:
      "That we have supported",
  },
  {
    icon: '/svg/card.svg',
    title: '89 Clients',
    description:
      'Supported around the world',
  },
  {
    icon: '/svg/accurate.svg',
    title: '15.000+ Users',
    description:
      'That trusted in us',
  },
  {
    icon: '/svg/secure.svg',
    title: '2021',
    description:
      'Been grinding since!',
  },
];

const emit = defineEmits<{
  cardClick: [index: number, event: MouseEvent];
}>();

const handleCardClick = (index: number, event: MouseEvent) => {
  emit('cardClick', index, event);
};
</script>

<template>
  <section class="bg-neutral-100 py-8">
    <div class=" mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-blue-500 lg:text-4xl">Our Numbers</h2>
      </div>

      <!-- Grid de cards -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="rounded-lg bg-white p-8"
          @click="handleCardClick(index, $event)"
        >
          <!-- Icono -->
          <div class="mb-6 flex justify-start">
<!--            <flag class="text-blue-300 h-10 w-10"></flag>-->
            <img :src="feature.icon" :alt="feature.title" class="h-10 w-10" />
          </div>

          <!-- Título -->
          <h3 class="mb-4 text-start text-[28px] font-bold text-blue-500">
            {{ feature.title }}
          </h3>

          <!-- Descripción -->
          <p class="text-start text-base leading-relaxed text-gray-700">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
