<script setup lang="ts">
const props = defineProps<{
  name: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <Card class="flex flex-col items-center bg-gruv-bg-500 shadow-none border-gruv-fg-500 border-2 text-gruv-fg-500">
    <CardContent class="flex flex-col items-center">
      <Icon :name="props.icon" />
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
