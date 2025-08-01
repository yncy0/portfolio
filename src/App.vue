<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import SectionHero from './components/SectionHero.vue'
import SectionMain from './components/SectionMain.vue'
</script>

<template>
  <AppHeader />
  <main class="flex flex-col items-start justify-center px-44">
    <SectionHero />
    <SectionMain />
  </main>
  <AppFooter />
</template>

<style scoped></style>
