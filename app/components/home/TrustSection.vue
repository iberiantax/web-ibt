<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/svg/accurate.svg',
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
    icon: '/svg/world.svg',
    title: 'Automatically save progress',
    description:
      'Your non-resident tax progress is automatically saved, allowing you to complete your filing at your own pace.',
  },
  {
    icon: '/svg/euro.svg',
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
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- Columna izquierda: 4 cards en grid 2x2 -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            @click="handleCardClick(index, $event)"
          >
            <!-- Icono -->
            <div class="mb-4 flex justify-start">
              <img :src="feature.icon" :alt="feature.title" class="h-8 w-8" />
            </div>

            <!-- Título -->
            <h3 class="mb-3 text-start text-xl font-bold text-[#1364B3]">
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
          <div class="relative h-[300px] w-full max-w-lg">
            <!-- Placeholder para la imagen - puedes reemplazar con tu imagen real -->
            <div class="flex h-full w-full items-center justify-center rounded-lg bg-gray-200">
              <span class="text-gray-500">Imagen aquí</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
