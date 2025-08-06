<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  imageUrl?: string
  githubUrl?: string
  projectUrl?: string
}>()
</script>

<template>
  <Card class="bg-gruv-bg-500 shadow-none border-gruv-fg-500 border-2 text-gruv-fg-500">
    <CardHeader>
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-5">
      <img :src="props.imageUrl" class="w-96" />
      <a :href="props.githubUrl" class="flex flex-row items-center gap-2">
        <Icon name="lucide:link" />{{ props.githubUrl }}
      </a>
    </CardContent>
    <CardFooter>
      <Button class="bg-gruv-fg-500 text-gruv-bg-500">
        <a :href="props.githubUrl">View Project</a>
      </Button>
    </CardFooter>
  </Card>
</template>
