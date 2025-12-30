<script setup lang="ts">
import type { Technologies } from '~/utils/types';

const props = defineProps<Technologies>();
</script>

<template>
  <UCard class="items-center bg-base-500 text-fg-500 dark:border-ctp-green-200 border-fg-500 border">
    <div class="flex flex-col items-center">
      <Icon :name="props.icon" :size="props.size" :class="props.color"/>
      <h3>{{ props.name }}</h3>
    </div>
  </UCard>
</template>
