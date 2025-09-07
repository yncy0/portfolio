<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="border-gruv-fg-500 border p-20 rounded-sm flex justify-center">
    <p class="text-sm lg:text-md">{{ props.label }}</p>
  </div>
</template>
