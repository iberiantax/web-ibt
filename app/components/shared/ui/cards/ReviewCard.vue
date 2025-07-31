<script setup lang="ts">
import { Star, StarHalf } from 'lucide-vue-next'

interface Props {
  rating: number;
  description: string,
  author: string,
}

defineProps<Props>();
</script>

<template>
  <div class="h-full flex flex-col items-start p-6 w-full max-w-md bg-white rounded-3xl">
    <div class="flex h-full w-full flex-col items-start">
      <div class="mb-4 flex justify-center">
        <div class="flex space-x-1">
          <template v-for="i in 5" :key="i">
            <template v-if="i <= Math.floor(rating)">
              <star class="h-5 w-5 text-yellow-400" fill="currentColor"></star>
            </template>
            <template v-if="i - rating <= 0.5 && i - rating > 0">
              <star-half class="h-5 w-5 text-yellow-400" fill="currentColor"></star-half>
            </template>

          </template>
        </div>
      </div>

      <div class="mb-4 w-full">
        <p class="line-clamp-4 text-base text-gray-700">{{ description }}</p>
      </div>

      <div class="w-full">
        <p class="text-sm font-bold text-blue-500">{{ author }}</p>
      </div>
    </div>
  </div>
</template>