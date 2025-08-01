<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
import ExperienceList from './ExperienceList.vue'
import ProjectsList from './ProjectsList.vue'

import { Button } from './ui/button'
</script>

<template>
  <section class="flex flex-row min-h-dvh pt-20 gap-28">
    <section class="flex flex-col w-[50%] gap-5">
      <AboutMe />
      <Button>Hire me</Button>
      <AppFooter />
    </section>

    <section class="flex flex-col w-[50%] gap-10">
      <AppHeader />
      <ExperienceList />
      <ProjectsList />
    </section>
  </section>
</template>
