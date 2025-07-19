<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import AppFooter from "./AppFooter.vue"
import AppHeader from './AppHeader.vue';
import SocialsList from './SocialsList.vue';

import { Button } from './ui/button';
</script>

<template>
  <section class="flex flex-row min-h-dvh pt-20">
    <section class="flex flex-col w-[50%] gap-5">
      <AboutMe />
      <AppHeader />

      <Button>Hire me</Button>
      <SocialsList />
      <AppFooter />
    </section>
  </section>
</template>
