<script setup lang="ts">
defineProps<{
  width: string,
  height: string,
}>();
</script>

<template>
  <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
  >
    <path
        d="M22.0799 9.71669H14.3815L12.0036 2.32031L9.61832 9.71669L1.91992 9.70919L8.15444 14.285L5.76912 21.6739L12.0036 17.1056L18.2307 21.6739L15.8528 14.285L22.0799 9.71669Z"
        fill="#00B67A"
    ></path>
    <path
        d="M16.3876 15.9541L15.8526 14.2812L12.0034 17.1018L16.3876 15.9541Z"
        fill="#005128"
    ></path>
  </svg>
</template>