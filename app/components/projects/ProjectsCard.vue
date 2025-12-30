<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
const isDisabled = ref<boolean>(false);
const isEmptyImage = ref<boolean>(false);

onMounted(() => {
  if (props.githubUrl === "" || props.projectUrl === "") {
    isDisabled.value = true
  }

  if (props.imageUrl === "") {
    isEmptyImage.value = true
  }
})
</script>

<template>
  <UCard
    variant="subtle"
    :ui="{header: 'border-none', footer: 'border-fg-500', body: 'flex-1'}"
    class="h-full flex flex-col bg-base-500 text-fg-500 border dark:border-ctp-green-200 border-fg-500 rounded-sm">

    <template #header>
      <h3>{{ props.title }}</h3>
      <p class="text-cat-text">{{ props.description }}</p>
    </template>

    <div class="flex flex-col gap-5">
      <div v-if="!isEmptyImage">
        <img :src="props.imageUrl" alt="Image of Project" class="w-full" >
      </div>
      <div v-else>
        <GreenCat />
      </div>
      <ProjectTechStack :lists="props.techstack" />
    </div>

    <template #footer>
      <div class="flex flex-row gap-5">
        <UButton 
          aria-label="Link to Project" 
          icon="i-lucide-link"
          label="View Project"
          :to="props.projectUrl"
          target="_blank"
          :disabled="isDisabled"
          color="neutral"
          class="dark:bg-ctp-green-200 bg-base-500 text-fg-500 hover:bg-base-500 border border-fg-500 dark:border-ctp-green-200"/>
        <UButton
          aria-label="Link to GitHub"
          icon="simple-icons:github"
          label="GitHub"
          :to="props.githubUrl"
          target="_blank"
          :disabled="isDisabled"
          color="neutral"
          class="bg-base-500 dark:text-ctp-green-200 text-fg-500 dark:border-ctp-green-200 border-fg-500 border items-center hover:bg-base-500"/>
      </div>
    </template>
  </UCard>
</template>
