<script setup lang="ts">
import type { Technologies } from '~/utils/types';

const props = defineProps<Technologies>();
</script>

<template>
  <Card class="items-center bg-gruv-bg-hard shadow-none border-gruv-fg-500 border text-gruv-fg-500">
    <CardContent class="flex flex-col items-center">
      <Icon :name="props.icon" :size="props.size" :class="props.color"/>
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
