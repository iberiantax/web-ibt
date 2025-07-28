<script setup lang="ts">
interface ReportItem {
  text: string;
}

interface Props {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  basicReports: ReportItem[];
  advancedReports: ReportItem[];
}

withDefaults(defineProps<Props>(), {
  backgroundColor: 'bg-[#D6E6F7]',
});

const emit = defineEmits<{
  basicReportClick: [item: ReportItem, index: number];
  advancedReportClick: [item: ReportItem, index: number];
}>();

const handleBasicReportClick = (item: ReportItem, index: number) => {
  emit('basicReportClick', item, index);
};

const handleAdvancedReportClick = (item: ReportItem, index: number) => {
  emit('advancedReportClick', item, index);
};
</script>

<template>
  <section class="w-full py-12" :class="backgroundColor">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex items-center gap-12">
          <!-- Imagen -->
          <div class="flex-shrink-0">
            <div class="h-80 w-80 overflow-hidden rounded-[24px]">
              <img v-if="image" :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
              <div v-else class="flex h-full w-full items-center justify-center bg-gray-200">
                <svg
                  class="h-16 w-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Contenido de texto -->
          <div class="flex-1">
            <h2 class="mb-4 text-3xl font-bold text-[#1364B3] lg:text-4xl">
              {{ title }}
            </h2>
            <p class="mb-8 text-base text-gray-700">
              {{ description }}
            </p>

            <!-- Dos columnas de reportes -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <!-- Reportes básicos -->
              <div>
                <h3 class="mb-2 text-lg font-bold text-[#1364B3]">Basic reports include</h3>
                <p class="mb-4 text-sm text-gray-600">Can be exported as PDFs and include:</p>
                <ul class="space-y-2">
                  <li
                    v-for="(item, index) in basicReports"
                    :key="index"
                    class="flex cursor-pointer items-center text-base text-gray-700"
                    @click="handleBasicReportClick(item, index)"
                  >
                    <span class="mr-2 text-[#1364B3]">✓</span>
                    {{ item.text }}
                  </li>
                </ul>
              </div>

              <!-- Reportes avanzados -->
              <div>
                <h3 class="mb-2 text-lg font-bold text-[#1364B3]">Advanced reports include</h3>
                <p class="mb-4 text-sm text-gray-600">
                  Can also be exported as fully editable CSV files and:
                </p>
                <ul class="space-y-2">
                  <li
                    v-for="(item, index) in advancedReports"
                    :key="index"
                    class="flex cursor-pointer items-center text-base text-gray-700"
                    @click="handleAdvancedReportClick(item, index)"
                  >
                    <span class="mr-2 text-[#1364B3]">✓</span>
                    {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
