<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'

import { Button } from './ui/button'
</script>

<template>
  <section class="flex flex-row min-h-dvh pt-20 gap-10">
    <section class="flex flex-col w-[50%] gap-5">
      <AboutMe />
      <Button>Hire me</Button>
      <AppFooter />
    </section>

    <section class="flex flex-col w-[50%]">
      <AppHeader />
    </section>
  </section>
</template>
