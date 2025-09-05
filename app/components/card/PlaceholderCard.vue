<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="border-gruv-fg-600 border-2 p-20 rounded-lg flex justify-center">
    <p class="text-sm lg:text-md">{{ props.label }}</p>
  </div>
</template>
