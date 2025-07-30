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
];

</script>

<template>
  <section class="bg-neutral-100 py-16">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Título principal -->
      <div class="mb-6">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">
          Certifications and affiliations
        </h2>
      </div>

      <div class="mb-12">
        <p class="text-base leading-relaxed text-neutral-700">
          IberianTax is an official partner of the Spanish Tax Agency (Agencia Tributaria) and a
          member of AEDAF, the Spanish Association of Tax Advisors. This collaboration ensures our
          services meet the highest standards of compliance, reliability, and expertise. We work
          closely with authorities to make tax filing simpler, safer, and fully aligned with Spanish
          regulations.
        </p>
      </div>

      <!-- Carrusel de logos -->
      <div class="mb-12">
        <div class="relative">
          <div class="flex justify-between"
          >
            <div
              v-for="(logo, index) in logos"
              :key="index"
              class="flex h-16 w-32 flex-shrink-0 items-center justify-center md:w-40"
            >
              <img
                :src="logo.src"
                :alt="logo.alt"
                class="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
