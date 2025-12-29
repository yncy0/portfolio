<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
</script>

<template>
  <UCard
    variant="subtle"
    :ui="{header: 'border-none', footer: 'border-fg-500'}"
    class="bg-base-500 text-fg-500 border dark:border-ctp-green-200 border-fg-500 shadow-none rounded-sm">

    <template #header>
      <h3>{{ props.title }}</h3>
      <p class="text-cat-text">{{ props.description }}</p>
    </template>

    <div class="flex flex-col gap-5">
      <img :src="props.imageUrl" alt="Image of Portfolio" class="w-full" >
      <ProjectTechStack :lists="props.techstack" />
    </div>

    <template #footer>
      <div class="flex flex-row gap-5">
        <UButton 
          aria-label="Link to Project" 
          label="View Project"
          :to="props.projectUrl"
          target="_blank"
          class="dark:bg-ctp-green-200 bg-fg-500 text-base-500 hover:bg-fg-500"/>
        <UButton
          aria-label="Link to GitHub"
          icon="simple-icons:github"
          label="GitHub"
          :to="props.githubUrl"
          target="_blank"
          class="bg-base-500 dark:text-ctp-green-200 text-cat-text dark:border-ctp-green-200 border-fg-500 border items-center hover:bg-base-500"/>
      </div>
    </template>
  </UCard>
</template>
