<script setup lang="ts">

import {BaseCard} from "~/components/shared/ui";
</script>

<template>
  <div class="text-center py-8">
    <h1 class="text-h1-m font-semibold text-blue-500">Tax Calculators</h1>
    <p class="mb-8 leading-relaxed font-bold pt-3">Easily calculate your non-resident tax in Spain</p>
  </div>

  <div class="flex justify-center py-8 gap-8">
    <BaseCard
        type="default-white"
        title="Annual Tax Calculator"
        description="Own a property in Spain? Use our tax tool to calculate how much you have to pay in your annual non-resident tax return in Spain."
        buttonText="Try now"
        buttonVariant="outline"
    />
    <BaseCard
        type="default-white"
        title="Annual Tax Calculator"
        description="Own a property in Spain? Use our tax tool to calculate how much you have to pay in your annual non-resident tax return in Spain."
        buttonText="Try now"
        buttonVariant="outline"
    />
    <BaseCard
        type="default-white"
        title="Annual Tax Calculator"
        description="Own a property in Spain? Use our tax tool to calculate how much you have to pay in your annual non-resident tax return in Spain."
        buttonText="Try now"
        buttonVariant="outline"
    />
  </div>
</template>