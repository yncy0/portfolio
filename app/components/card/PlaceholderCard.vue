<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <UCard
    class="bg-base-500 border dark:border-ctp-green-200 border-fg-500 p-20 rounded-sm flex items-center justify-center">
    <p class="text-sm lg:text-md text-cat-text">{{ props.label }}</p>
  </UCard>
</template>
