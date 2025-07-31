<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import BaseButton from '~/components/shared/ui/buttons/BaseButton.vue';

defineOptions({
  name: 'ReferralHero',
});
</script>

<template>
  <section>
    <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <!-- Imagen principal - Parte superior -->
      <div class="mb-10 flex justify-center">
        <div class="aspect-[21/9] w-full overflow-hidden rounded-3xl">
          <img
            src="/images/hero/FrameHero.png"
            alt="Sala de estar moderna con sofá marrón, televisión plana y plantas verdes"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

      <!-- Contenido de texto - Parte inferior -->
      <div class="text-start">
        <!-- Título principal -->
        <h1 class="mb-4 text-4xl font-bold leading-tight text-blue-500 md:text-5xl">
          Recommend our tax filing software and earn 10 €
        </h1>

        <!-- Descripción -->
        <p class="mb-8 text-base font-medium leading-relaxed text-neutral-700">
          Earn 10€ for each referral and they will also get a 10% discount on their first submission
          too. Start sharing, saving, and earning now.
        </p>

        <!-- Botón CTA -->
        <div class="flex justify-start">
          <BaseButton variant="primary" class="flex items-center">
            Start tax return <ArrowRight class="ml-2 h-4 w-4" />
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
