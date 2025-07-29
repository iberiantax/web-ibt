<script setup lang="ts">
defineOptions({
  name: 'MediaPresence',
});
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

      <!-- Logos de medios -->
      <div class="flex flex-wrap items-center justify-between gap-12 md:gap-16">
        <!-- Mallorca Zeitung -->
        <div class="flex items-center">
          <img
            src="/images/png/Logo/Mallorca.png"
            alt="Mallorca Zeitung"
            class="h-8 w-auto object-contain md:h-12"
          />
        </div>

        <!-- El País -->
        <div class="flex items-center">
          <img
            src="/images/png/Logo/El Pais.png"
            alt="EL PAÍS"
            class="h-8 w-auto object-contain md:h-12"
          />
        </div>

        <!-- The Olive Press -->
        <div class="flex items-center">
          <img
            src="/images/png/Logo/Olive.png"
            alt="The Olive Press"
            class="h-8 w-auto object-contain md:h-12"
          />
        </div>
      </div>
    </div>
  </section>
</template>
