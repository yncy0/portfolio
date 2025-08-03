<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import EducationSection from './EducationSection.vue'
import ExperienceList from './ExperienceList.vue'
import HireMe from './HireMe.vue'
import ProjectsList from './ProjectsList.vue'
import TechnologiesList from './TechnologiesList.vue'
</script>

<template>
  <section class="flex flex-col min-h-dvh w-full max-w-screen pt-20 gap-10">
    <section class="flex flex-col gap-5">
      <AboutMe />
    </section>

    <section class="flex flex-col gap-10">
      <ExperienceList />
      <ProjectsList />
      <TechnologiesList />
      <EducationSection />
    </section>

    <HireMe />
  </section>
</template>
