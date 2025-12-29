<script setup lang="ts">
const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(item, index) in props.lists" :key="index">
      <UBadge class="bg-fg-500 text-base-500 rounded-md">
        <Icon :name="item.icon" :class="item.color"/>{{ item.name }}
      </UBadge>
    </div>
  </div>
</template>
