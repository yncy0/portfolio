<script setup lang="ts">
import type { Component } from 'vue'
import { Card, CardContent } from '@/components/ui/card'

const props = defineProps<{
  name: string
  description: string
  icon: Component
}>()
</script>

<template>
  <Card class="flex flex-col items-center">
    <CardContent class="flex flex-col items-center">
      <component :is="props.icon" />
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
