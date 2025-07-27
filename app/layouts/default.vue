<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
});

import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-neutral-100">
    <app-header />

    <main class="flex-1 bg-neutral-100">
      <slot />
    </main>

    <app-footer />
  </div>
</template>
