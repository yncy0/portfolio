<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
</script>

<template>
  <Card class="bg-gruv-bg-500 shadow-none border-gruv-fg-500 border-2 text-gruv-fg-500">
    <CardHeader>
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-5">
      <img :src="props.imageUrl" class="w-full" >
      <a :href="props.githubUrl" class="flex flex-row items-center gap-2">
        <Icon name="lucide:link" />{{ props.githubUrl }}
      </a>
      <ProjectTechStack :lists="props.techstack"/>
    </CardContent>
    <CardFooter>
      <Button class="bg-gruv-fg-500 text-gruv-bg-500">
        <a :href="props.projectUrl">View Project</a>
      </Button>
    </CardFooter>
  </Card>
</template>
