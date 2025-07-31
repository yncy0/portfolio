<script setup lang="ts">
type Navigation = {
  title: string
  url: string
}
const nav = <Navigation[]>[
  { title: 'Experiences', url: '#experiences' },
  { title: 'Projects', url: '#projects' },
  { title: 'Education', url: '#tech_stack' },
  { title: 'Tech Stack', url: '#tech_stack' },
]
</script>

<template>
  <header>
    <ul class="flex flex-row gap-5 w-full items-center justify-center">
      <li v-for="(item, index) in nav" :key="index">
        <a href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </header>
</template>
