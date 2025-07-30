<script setup lang="ts">
import { Compass, Eye, Shield, User } from 'lucide-vue-next';

defineOptions({
  name: 'AboutValues',
});

// Valores de la empresa
const values = [
  {
    icon: Compass,
    title: 'Clarity',
    description:
      'We believe taxes should be autonomous. Where tax filing is completely taken care of by technology.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We believe taxes should be autonomous. Where tax filing is completely taken care of by technology.',
  },
  {
    icon: Shield,
    title: 'Security',
    description:
      'We believe taxes should be autonomous. Where tax filing is completely taken care of by technology.',
  },
  {
    icon: User,
    title: 'Personalization',
    description:
      'We believe taxes should be autonomous. Where tax filing is completely taken care of by technology.',
  },
];
</script>

<template>
  <section class="bg-neutral-100 py-16">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <!-- Título principal -->
      <div class="mb-12 text-start">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">Who we are</h2>
      </div>

      <!-- Dos bloques en fila -->
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Bloque izquierdo - Contenido principal -->
        <div class="space-y-6">
          <p class="text-base text-neutral-700">
            Tax prep is expensive, the process old-school and service sub-par. We knew it had to
            change.
          </p>

          <ul class="space-y-3 text-base text-neutral-700">
            <li class="flex items-start">
              <span class="mr-2 mt-1 text-neutral-400">•</span>
              <span>No lengthy questionnaires</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 mt-1 text-neutral-400">•</span>
              <span>No waiting for accountant replies or high tax filing fees</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 mt-1 text-neutral-400">•</span>
              <span>No confusing processes or offshore teams</span>
            </li>
          </ul>

          <p class="text-base text-neutral-700">
            With the support of technology, we collect data, prepare an efficient tax return, and
            file it to HMRC in one sitting.
          </p>

          <p class="text-base text-neutral-700">
            We drive towards a world where technology handles all tax accounting, giving you more
            time for what matters, reducing stress, and keeping more money in your pocket.
          </p>
        </div>

        <!-- Bloque derecho - Valores -->
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div v-for="value in values" :key="value.title" class="space-y-4">
            <div class="flex items-center space-x-3">
              <component :is="value.icon" class="h-6 w-6 text-[#1364B3]" aria-hidden="true" />
              <h3 class="text-md font-semibold text-[#1364B3]">
                {{ value.title }}
              </h3>
            </div>
            <p class="text-base text-neutral-700">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
