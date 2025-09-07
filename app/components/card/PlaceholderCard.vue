<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <Card
    class="bg-cat-base dark:border-ctp-green-200 border-cat-text border p-20 rounded-sm flex items-center justify-center">
    <CardContent>
      <p class="text-sm lg:text-md text-cat-text">{{ props.label }}</p>
    </CardContent>
  </Card>
</template>
