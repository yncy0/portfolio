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
  <Card class="flex flex-col items-center bg-gruv-light-500 shadow-none border-gruv-dark-500 border-2">
    <CardContent class="flex flex-col items-center">
      <component :is="props.icon" />
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
