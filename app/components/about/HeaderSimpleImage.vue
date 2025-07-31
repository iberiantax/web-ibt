<script setup lang="ts">
defineOptions({
  name: 'HeroSection',
});
</script>

<template>
  <section class="bg-neutral-100">
    <div class="mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div class="space-y-4">
          <h1 class="text-[48px] font-bold leading-tight text-blue-500">We make it easy</h1>

          <p class="text-lg leading-relaxed">
            IberianTax was founded in 2020 with one mission: to make taxes less stressful and more
            accessible for everyone. After helping over 8 million clients, our goal remains
            unchanged — to give you the freedom to take control of your taxes. We believe that tax
            services should be simple, transparent, and fully digital. And yes, we can't wait to
            become your go-to tax partner.
          </p>
        </div>

        <div class="relative">
          <div class="h-[300px] overflow-hidden rounded-2xl">
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
