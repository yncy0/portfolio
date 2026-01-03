<script setup lang="ts">
const items = ref([
  {
    date: '???',
    title: '???',
    description: 'This will fill up once I already have a job.',
  },
  {
    date: '2026',
    title: 'On Job Training (Internship)',
    description: 'Currently looking for internship for school requirements.',
  },
])

const active = ref(1);
</script>

<template>
  <UTimeline v-model="active" :items="items" color="neutral" />
</template>

