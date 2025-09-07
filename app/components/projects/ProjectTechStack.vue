<script setup lang="ts">
const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(item, index) in props.lists" :key="index">
      <Badge class="bg-cat-text text-cat-base rounded-md">
        <Icon :name="item.icon" :class="item.color"/>{{ item.name }}
      </Badge>
    </div>
  </div>
</template>
