<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
</script>

<template>
  <Card
    class="bg-gruv-bg-hard shadow-none border-gruv-fg-500 border rounded-sm text-gruv-fg-500"
  >
    <CardHeader>
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>

    <CardContent class="flex flex-col gap-5">
      <img :src="props.imageUrl" class="w-full" >
      <ProjectTechStack :lists="props.techstack" />
    </CardContent>

    <CardFooter class="flex flex-row gap-2">
      <Button class="bg-gruv-fg-500 text-gruv-bg-hard">
        <a :href="props.projectUrl">View Project</a>
      </Button>
      <Button class="bg-gruv-bg-hard text-gruv-fg-500 shadow-none border-gruv-fg-500 border">
        <a :href="props.githubUrl" class="flex flex-row items-center gap-2">
          <Icon name="simple-icons:github" /> 
          GitHub
        </a>
      </Button>
    </CardFooter>
  </Card>
</template>
