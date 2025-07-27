<script setup lang="ts">
import AppHeader from "~/components/shared/app/AppHeader.vue";
import AppFooter from "~/components/shared/app/AppFooter.vue";
</script>

<template>
  <div>
    <app-header/>

    <main>
      <slot />
    </main>

    <app-footer/>
  </div>
</template>