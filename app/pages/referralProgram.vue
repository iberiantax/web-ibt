<script setup lang="ts">
import {ReferralHero} from "~/components/hero";
import {BaseStepperVertical} from "~/components/shared/ui";
import FAQ from "~/components/home/FAQ.vue";

definePageMeta({
  name: 'referralProgram'
})
</script>

<template>
  <referral-hero></referral-hero>
  <section class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">


    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-blue-500 lg:text-4xl">How it works?</h2>
      </div>
    </div>

    <div class="mx-auto max-w-4xl">
      <BaseStepperVertical
          :steps="[
                {
                  number: 1,
                  title: 'Register for free',
                  description:
                    'Create an account in seconds. No credit card required. Fil in your personal details',
                },
                {
                  number: 2,
                  title: 'Fill out your information',
                  description:
                    'Answer a few questions about your property and ownership details',
                },
                {
                  number: 3,
                  title: 'Choos filing and payment metho',
                  description:
                    'Answer a few questions about your property and ownership details',
                },
              ]"
      />
    </div>
  </section>
  <f-a-q></f-a-q>
</template>
