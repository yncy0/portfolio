<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import SectionHero from './components/SectionHero.vue'
import SectionMain from './components/SectionMain.vue'
import ToggleTheme from './components/ToggleTheme.vue'
</script>

<template>
  <main class="flex flex-col items-start justify-center px-5 lg:px-44">
    <SectionHero />
    <SectionMain />

    <ToggleTheme />
  </main>
  <AppFooter />
</template>
