<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
const isEmptyImage = ref<boolean>(false);

onMounted(() => {
  if (props.imageUrl === "") {
    isEmptyImage.value = true;
  }
});
</script>

<template>
  <UCard
    variant="subtle"
    :ui="{ header: 'border-none', footer: 'border-fg-500', body: 'flex-1' }"
    class="h-full flex flex-col bg-base-500 text-fg-500 border dark:border-ctp-green-200 border-fg-500 rounded-sm"
  >
    <template #header>
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
    </template>

    <div class="flex flex-col gap-5">
      <div v-if="!isEmptyImage">
        <img :src="props.imageUrl" alt="Image of Project" class="w-full" >
      </div>
      <div v-else>
        <GreenCat />
      </div>
      <ProjectsLink
        :project-url="props.projectUrl"
        :github-url="props.githubUrl"
      />
      <ProjectsTechStack :lists="props.techstack" />
    </div>

    <template #footer>
      <LazyProjectsModal
        :title="props.title"
        :description="props.description"
        :images="props.images"
        :techstack="props.techstack"
      />
    </template>
  </UCard>
</template>
