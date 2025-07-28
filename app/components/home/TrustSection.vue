<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/svg/check.svg',
    title: 'Verification of the entries',
    description:
      'We verify the accuracy and completeness of all data entered in Form 210 to ensure compliance with Spanish tax regulations.',
  },
  {
    icon: '/svg/calculator.svg',
    title: 'Online tax calculation',
    description:
      'Automatic calculation of tax liability according to Spanish Tax Law, ensuring accurate and up-to-date calculations.',
  },
  {
    icon: '/svg/euro.svg',
    title: 'Automatically save progress',
    description:
      'Your non-resident tax progress is automatically saved, allowing you to complete your filing at your own pace.',
  },
  {
    icon: '/svg/world.svg',
    title: 'Tax office collaborator',
    description:
      'IberianTax is certified by Agencia Tributaria to submit taxes on behalf of users, ensuring official compliance.',
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
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">
          Trust that your non-resident taxes are accurate
        </h2>
      </div>

      <!-- Layout principal: dos bloques en row -->
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-2">
        <!-- Columna izquierda: 4 cards en grid 2x2 -->
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="cursor-pointer rounded-lg bg-white p-6"
            @click="handleCardClick(index, $event)"
          >
            <!-- Icono -->
            <div class="mb-4 flex justify-start">
              <Check v-if="feature.icon === 'check'" class="h-10 w-10 text-[#1364B3]" />
              <img v-else :src="feature.icon" :alt="feature.title" class="h-10 w-10" />
            </div>

            <!-- Título -->
            <h3 class="mb-3 text-start text-[28px] font-bold text-[#1364B3]">
              {{ feature.title }}
            </h3>

            <!-- Descripción -->
            <p class="text-start text-sm leading-relaxed text-gray-700">
              {{ feature.description }}
            </p>
          </div>
        </div>

        <!-- Columna derecha: imagen -->
        <div class="flex items-center justify-center">
          <div class="relative h-[300px] w-full">
            <img
              src="/images/hero/FrameHero.png"
              alt="Modern living room interior with warm tones, plants, and contemporary furniture"
              class="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
