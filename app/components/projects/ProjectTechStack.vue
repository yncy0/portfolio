<script setup lang="ts">
const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(item, index) in props.lists" :key="index">
      <Badge class="text-gruv-bg-500 bg-gruv-fg-500 rounded-md">
        <Icon :name="item.icon" :class="item.color"/>{{ item.name }}
      </Badge>
    </div>
  </div>
</template>
