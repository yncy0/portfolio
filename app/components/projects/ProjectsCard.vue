<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
</script>

<template>
  <Card class="bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text border shadow-none rounded-sm">
    <CardHeader>
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription class="text-cat-text">{{
        props.description
        }}</CardDescription>
    </CardHeader>

    <CardContent class="flex flex-col gap-5">
      <img :src="props.imageUrl" alt="Image of Portfolio" class="w-full" >
      <ProjectTechStack :lists="props.techstack" />
    </CardContent>

    <CardFooter class="flex flex-row gap-5">
      <Button aria-label="Link to Project" class="dark:bg-ctp-green-200 bg-cat-text text-cat-base p-5">
        <a :href="props.projectUrl">View Project</a>
      </Button>
      <Button
        aria-label="Link to GitHub"
        class="bg-cat-base dark:text-ctp-green-200 text-cat-text 
              dark:border-ctp-green-200 border-cat-text border shadow-none p-5 items-center">
        <a :href="props.githubUrl" class="flex flex-row items-center gap-2">
          <Icon name="simple-icons:github" class="size-4" />
          GitHub
        </a>
      </Button>
    </CardFooter>
  </Card>
</template>
