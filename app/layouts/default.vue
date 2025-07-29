<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
});

import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col bg-neutral-100">
    <div class="px-6 md:px-20">
      <app-header />
    </div>

    <main class="flex-1 bg-neutral-100">
      <div class="px-6 md:px-20">
        <slot />
      </div>
    </main>

    <app-footer />
  </div>
</template>
