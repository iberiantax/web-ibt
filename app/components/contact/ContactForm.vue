<script setup lang="ts">
import { BaseForm, BaseSection } from '~/components/shared/ui';
</script>

<template>
  <section class="pb-16">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <BaseSection
        title="Contact us"
        description="Please complete the form below and we will endeavour to respond to you enquiry within 48 hours."
      />

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
