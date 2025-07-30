<script setup lang="ts">
import {BaseForm} from "~/components/shared/ui";
</script>

<template>
  <section class="pt-16 pb-16">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-6xl">Contact us</h2>
        <div class="mb-12">
          <p class="text-base leading-relaxed font-semibold">
            Please complete the form below and we will endeavour to respond to you enquiry within 48 hours.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-2xl">
        <BaseForm
            title="Contact Us"
            description="Get in touch with us for any questions or support."
            @submit="handleFormSubmit"
        />
      </div>
    </div>
  </section>
</template>