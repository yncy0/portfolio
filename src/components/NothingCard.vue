<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="border-gruv-dark-600 border-2 p-20 rounded-lg flex justify-center">
    <p>{{ props.label }}</p>
  </div>
</template>
