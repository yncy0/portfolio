<script setup lang="ts">
import type { Technologies } from "#imports";

const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <section id="technologies" class="flex flex-col gap-2">
    <ul class="flex flex-row flex-wrap gap-1">
      <li v-for="(item, index) in props.lists" :key="index" class="flex-1 basis-1/3 lg:basis-0">
        <TechnologyCard :name="item.name" :icon="item.icon" :size="item.size" :color="item.color"/>
      </li>
    </ul>
  </section>
</template>
