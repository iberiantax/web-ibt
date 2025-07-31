<script setup lang="ts">
interface Props {
  title: string,
  price: string,
  priceDetails: string,
  disclaimer?: string,
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col items-start p-8 w-full max-w-md h-auto bg-white rounded-3xl">
    <div class="flex h-full w-full flex-col items-start">

      <div class="mb-4 w-full">
        <p class="text-lg font-semibold text-gray-900 text-center">{{ title }}</p>
      </div>

      <div class="mb-6 w-full">
        <div class="flex flex-col">
          <h3 class="text-4xl font-bold text-gray-900  text-center">
            {{ price }}
          </h3>
          <span class="text-sm text-gray-600  text-center">{{ priceDetails }}</span>
        </div>
      </div>


      <div :class="['w-full text-center',{'mb-6' : disclaimer}]">
        <button
            class="px-6 py-3 rounded-xl font-normal transition-all duration-200 text-base bg-green-500 text-white hover:bg-green-600"
            type="button">
          Get Started
        </button>
      </div>

      <div v-if="disclaimer" class="w-full  text-center">
        <p class="text-xs text-gray-900">{{ disclaimer }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>