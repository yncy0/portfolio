<script setup lang="ts">
import type { Technologies } from '~/utils/types';

const props = defineProps<Technologies>();
</script>

<template>
  <Card class="items-center shadow-none bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text border">
    <CardContent class="flex flex-col items-center">
      <Icon :name="props.icon" :size="props.size" :class="props.color"/>
      <h3>{{ props.name }}</h3>
    </CardContent>
  </Card>
</template>
