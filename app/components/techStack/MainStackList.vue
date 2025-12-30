<script setup lang="ts">
import type { Technologies } from "#imports";

const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <ul class="flex flex-row flex-wrap gap-3">
    <li v-for="(item, index) in props.lists" :key="index" class="flex-1 basis-1/3 lg:basis-0">
      <TechStackCard :name="item.name" :icon="item.icon" :size="item.size" :color="item.color" />
    </li>
  </ul>
</template>
