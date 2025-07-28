<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import BaseButton from '~/components/shared/buttons/BaseButton.vue';

defineOptions({
  name: 'HeroSection',
});
</script>

<template>
  <section class="bg-neutral-100">
    <div class="mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
        <!-- Contenido de texto - Izquierda (60%) -->
        <div class="space-y-6 lg:col-span-3">
          <!-- Título principal -->
          <h1 class="text-[48px] font-bold leading-tight text-[#1364B3]">
            We handle your non-resident Spanish taxes
          </h1>

          <!-- Descripción -->
          <p class="text-base font-semibold leading-relaxed">
            Fast and hassle-free tax filing that fully complies with official tax authority
            <br />
            requirements, ensuring accuracy and peace of mind.
          </p>

          <!-- Características de confianza -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <img src="/svg/security.svg" alt="Security icon" class="h-5 w-5" />
              <span class="text-sm text-neutral-700">Tax Office Collaborator</span>
            </div>

            <div class="flex items-center space-x-3">
              <img src="/svg/person.svg" alt="Person icon" class="h-5 w-5" />
              <span class="text-sm text-neutral-700">Trusted by +15.000 property owners</span>
            </div>
          </div>

          <!-- Botón CTA -->
          <div class="pt-2">
            <BaseButton variant="primary">
              Start tax return <ArrowRight class="ml-2 h-4 w-4" />
            </BaseButton>
          </div>

          <!-- Reseñas -->
          <div class="flex flex-wrap items-center space-x-6">
            <div class="flex items-center space-x-2">
              <img src="/svg/google.svg" alt="Google icon" class="h-4 w-4" />
              <span class="text-xs text-neutral-600">4.9 (627 reviews) on Google</span>
            </div>

            <div class="flex items-center space-x-2">
              <img src="/svg/star.svg" alt="Star icon" class="h-4 w-4" />
              <span class="text-xs text-neutral-600">4.8 (58 reviews) on Trustpilot</span>
            </div>
          </div>
        </div>

        <!-- Imagen - Derecha (40%) -->
        <div class="relative lg:col-span-2">
          <div class="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="/images/hero/FrameHero.png"
              alt="Modern living room interior with warm tones, plants, and contemporary furniture"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
