<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
      {{ locale.code }}
    </button>
    <h1>{{ t('welcome') }}</h1>
  </div>
</template>