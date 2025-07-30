<script setup lang="ts">
import {BaseForm} from "~/components/shared/ui";

definePageMeta({
  name: 'calculatorImputedIncome'
})
</script>

<template>
  <div class="text-center py-8">
    <h1 class="text-h1-m font-semibold text-blue-500">Annual Tax Calculator</h1>
    <p class="mb-8 leading-relaxed font-bold pt-3">Calculate how much you have to pay in your annual non-resident tax
      return in Spain
    </p>
  </div>

  <section class="bg-neutral-100 py-8">
    <div class="mx-auto max-w-2xl">
      <BaseForm
          title="Contact Us"
          description="Get in touch with us for any questions or support."
      />
    </div>
  </section>

  <section class="bg-neutral-100 py-8">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-h3-s font-semibold text-blue-500">What is the non-resident tax in Spain?</h2>
      <p class="mb-8 leading-relaxed text-base pt-3">
        The Non-resident Tax is the income tax for those taxpayers who qualify as non-residents in Spain. Typically, you
        will be deemed a non-resident for tax purposes when you spend less than 183 days in the Spanish territory within
        the calendar year.

        You have to pay the non-resident tax when you own a property in Spain whether for personal use (imputed income)
        or
        rental, as well as for any income or capital gains obtained in the Spanish territory.
      </p>
    </div>
  </section>

</template>

<style scoped>

</style>