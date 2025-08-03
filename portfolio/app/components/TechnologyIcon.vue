<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  name: string
  description: string
  icon: Component
}>()
</script>

<template>
  <Card class="flex flex-col items-center bg-gruv-bg-500 shadow-none border-gruv-fg-500 border-2
    text-gruv-fg-500">
    <CardContent class="flex flex-col items-center">
      <component :is="props.icon" />
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
