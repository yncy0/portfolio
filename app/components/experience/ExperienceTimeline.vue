<script setup lang="ts">
const items = ref([
  {
    date: "???",
    title: "???",
    description: "This will fill up once I already have a job.",
  },
  {
    date: "2026",
    title: "On Job Training (Internship)",
    description: "Currently looking for internship for school requirements.",
  },
]);

const active = ref(1);
</script>

<template>
  <UTimeline v-model="active" :items="items" color="neutral">
    <template #title="{ item }">
      <h3 class="font-silk-screen font-bold text-lg lg:text-xl text-fg-500 dark:text-ctp-green-200">
        {{ item.title }}
      </h3>
    </template>
    <template #date="{ item }">
      <span class="font-silk-screen font-bold text-md lg:text-lg text-fg-400">{{
        item.date
        }}</span>
    </template>
    <template #description="{ item }">
      <p class="text-fg-500">{{ item.description }}</p>
    </template>
  </UTimeline>
</template>
