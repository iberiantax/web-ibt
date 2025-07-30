<script setup lang="ts">
defineOptions({
  name: 'MediaPresence',
});

// Array de logos con información
const logos = [
  {
    src: '/images/png/Logo/AEDAF.png',
    alt: 'AEDAF - Spanish Association of Tax Advisors',
  },
  {
    src: '/images/png/Logo/Agencia Tributaria.png',
    alt: 'Agencia Tributaria - Spanish Tax Agency',
  },
  {
    src: '/images/png/Logo/AT.png',
    alt: 'AT - Tax Agency',
  },
  {
    src: '/images/png/Logo/El Pais.png',
    alt: 'EL PAÍS',
  },
  {
    src: '/images/png/Logo/Enisa.png',
    alt: 'ENISA - Empresa Nacional de Innovación',
  },
  {
    src: '/images/png/Logo/Mallorca.png',
    alt: 'Mallorca Zeitung',
  },
  {
    src: '/images/png/Logo/Olive.png',
    alt: 'The Olive Press',
  },
];

const currentIndex = ref(0);
const containerRef = ref<HTMLElement>();

const goPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    scrollToIndex();
  }
};

const goNext = () => {
  if (currentIndex.value < logos.length - 4) {
    currentIndex.value++;
    scrollToIndex();
  }
};

const scrollToIndex = () => {
  if (containerRef.value) {
    const logoWidth = containerRef.value.scrollWidth / logos.length;
    const scrollAmount = currentIndex.value * logoWidth;
    containerRef.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <section class="bg-neutral-100 py-16">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Título principal -->
      <div class="mb-6">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">
          Media Presence
        </h2>
      </div>

      <!-- Carrusel de logos -->
      <div class="mb-12">
        <div class="relative">
          <div
            ref="containerRef"
            class="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto"
            style="height: 80px; scrollbar-width: none; -ms-overflow-style: none"
          >
            <div
              v-for="(logo, index) in logos"
              :key="index"
              class="flex h-16 w-32 flex-shrink-0 snap-start items-center justify-center md:w-40"
              style="scroll-snap-align: start"
            >
              <img
                :src="logo.src"
                :alt="logo.alt"
                class="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Botones de navegación centrados y juntos -->
        <div class="mt-6 flex justify-end space-x-2">
          <button
            @click="goPrev"
            :disabled="currentIndex === 0"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="goNext"
            :disabled="currentIndex >= logos.length - 4"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
