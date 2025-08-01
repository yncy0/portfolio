<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import ExperienceList from './ExperienceList.vue'
import ProjectsList from './ProjectsList.vue'

import { Button } from './ui/button'
</script>

<template>
  <section class="flex flex-col min-h-dvh w-full max-w-screen pt-20 gap-28">
    <section class="flex flex-col gap-5">
      <AboutMe />
      <Button>Hire me</Button>
    </section>

    <section class="flex flex-col gap-10">
      <ExperienceList />
      <ProjectsList />
    </section>
  </section>
</template>
