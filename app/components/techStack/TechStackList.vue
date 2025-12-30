<script setup lang="ts">
import type { Technologies } from "#imports";

const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <ul class="grid grid-cols-4 lg:grid-cols-9 gap-y-5">
    <li v-for="(item, index) in props.lists" :key="index">
      <Icon :name="item.icon" :size="item.size" :class="item.color" />
    </li>
  </ul>
</template>
