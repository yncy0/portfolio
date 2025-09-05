<script setup lang="ts">
import type { Technologies } from "#imports";

const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <section id="technologies" class="flex flex-col gap-2">
    <ul class="flex flex-row flex-wrap basis-1/3 gap-1">
      <li v-for="(item, index) in props.lists" :key="index" class="flex-1">
        <TechnologyCard :name="item.name" :icon="item.icon" :size="item.size" />
      </li>
    </ul>
  </section>
</template>
