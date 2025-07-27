<script setup lang="ts">
import {ArrowRight} from "lucide-vue-next";
import ButtonPrimary from "~/components/shared/buttons/ButtonPrimary.vue";
import Logo from "~/components/shared/logos/logo.vue";
</script>

<template>
  <header class="px-16 py-2.5 flex justify-between items-center absolute right-0 top-0 w-full h-24">
    <logo width="200" height="200"/>
    <nav class="flex items-center gap-8">
      <ul class="hidden md:flex gap-4 items-center">
        <li><a to="/about" class="text-lg px-2 hover:text-primary">About</a></li>
        <li><a to="/pricing" class="text-lg px-2 hover:text-primary">Pricing</a></li>
        <li><a to="/services" class="text-lg px-2 hover:text-primary">Services</a></li>
        <li><a to="/resources" class="text-lg px-2 hover:text-primary">Resources</a></li>
        <li><button class="text-lg hover:text-primary">EN</button></li>
      </ul>
      <div class="flex gap-4">
        <ButtonPrimary outline>Login</ButtonPrimary>
        <ButtonPrimary>Get Started <ArrowRight /></ButtonPrimary>
      </div>
    </nav>
  </header>
</template>