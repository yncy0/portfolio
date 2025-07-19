<script setup lang="ts">
type Navigation = {
  title: string
  url: string
}
const nav = <Navigation[]>[
  { title: 'Experiences', url: '#experiences' },
  { title: 'Projects', url: '#projects' },
  { title: 'Tech Stack', url: '#tech_stack' },
]
</script>

<template>
  <header>
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <a href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </header>
</template>
