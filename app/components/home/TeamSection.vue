<script setup lang="ts">
defineOptions({
  name: 'TeamSection',
});
</script>

<template>
  <section class="bg-neutral-100 py-16">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Título principal -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">Our team</h2>
      </div>

      <!-- Imagen principal -->
      <div class="mb-8">
        <div class="aspect-[21/9] w-full overflow-hidden rounded-2xl">
          <img
            src="/images/hero/FrameHero.png"
            alt="Fundadores de IberianTax sentados en una mesa de oficina moderna, sonriendo a la cámara"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

      <!-- Texto descriptivo -->
      <div class="space-y-8 text-start">
        <p class="text-base leading-relaxed text-neutral-700">
          What started in 2020 as a two-person startup has grown into a leading digital tax service.
          Our team is united by one ambition: to transform the way people handle their taxes for the
          better. What started in 2020 as a two-person startup has grown into a leading digital tax
          service. Our team is united by one ambition: to transform the way people handle their
          taxes for the better.
        </p>

        <p class="text-base leading-relaxed text-neutral-700">
          What started in 2020 as a two-person startup has grown into a leading digital tax service.
          Our team is united by one ambition: to transform the way people handle their taxes for the
          better.
        </p>
      </div>
    </div>
  </section>
</template>
