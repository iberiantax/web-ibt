<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import BaseButton from '~/components/shared/ui/buttons/BaseButton.vue';

defineOptions({
  name: 'Form210Hero',
});
</script>

<template>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <!-- Sección izquierda - Título -->
        <div class="space-y-6">
          <h1 class="text-4xl font-bold leading-tight text-[#1364B3] md:text-5xl lg:text-5xl">
            Form 210 - Rental Income
          </h1>
        </div>

        <!-- Sección derecha - Descripción y botones -->
        <div class="space-y-8">
          <!-- Descripción -->
          <p class="text-base leading-relaxed">
            IberianTax was founded in 2020 with one mission: to make taxes less stressful and more
            accessible for everyone. After helping over 8 million clients, our goal remains
            unchanged — to give you the freedom to take control of your taxes. We believe that tax
            services should be simple, transparent, and fully digital. And yes, we can't wait to
            become your go-to tax partner.
          </p>

          <!-- Botones -->
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <BaseButton variant="primary" class="flex items-center">
              Start tax return <ArrowRight class="ml-2 h-4 w-4" />
            </BaseButton>
            <BaseButton variant="outline" class="flex items-center"> See prices </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
