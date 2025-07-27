<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {useLocalePath} from '#i18n'

const {t, locales, setLocale} = useI18n();
const localePath = useLocalePath()
</script>

<template>
<!--  <div>-->
<!--    <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">-->
<!--      {{ locale.code }}-->
<!--    </button>-->
<!--    <h1>{{ t('home.welcome') }}</h1>-->
<!--  </div>-->

<!--  <div>-->
<!--    <NuxtLink :to="localePath('about')">Ir a About</NuxtLink>-->
<!--    <NuxtLink :to="localePath('blog')">Ir a About</NuxtLink>-->
<!--    <NuxtLink :to="localePath('calculators')">Ir a Calculadoras</NuxtLink>-->
<!--    <NuxtLink :to="localePath('calculators-imputed-income')">Ir a calculadora de imputed</NuxtLink>-->
<!--  </div>-->
</template>