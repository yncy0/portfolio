<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const props = defineProps<{
  title: string
  description: string
  imageUrl?: string
  githubUrl?: string
  projectUrl?: string
}>()
</script>

<template>
  <Card class="bg-gruv-light-500 shadow-none border-gruv-dark-500 border-2">
    <CardHeader>
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <img :src="props.imageUrl" />
      <a :href="props.githubUrl">{{ props.githubUrl }}</a>
    </CardContent>
    <CardFooter>
      <Button>
        <a :href="props.githubUrl">View Project</a>
      </Button>
    </CardFooter>
  </Card>
</template>
