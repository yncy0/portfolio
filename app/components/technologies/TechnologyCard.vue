<script setup lang="ts">
import type { Technologies } from '~/utils/types';

const props = defineProps<Technologies>();
</script>

<template>
  <Card class="flex flex-col items-center bg-gruv-bg-500 shadow-none border-gruv-fg-500 border-2 text-gruv-fg-500">
    <CardContent class="flex flex-col items-center">
      <Icon :name="props.icon" :size="props.size" />
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
