<script setup lang="ts">
type Navigation = {
  title: string
  url: string
}
const nav = <Navigation[]>[
  { title: 'Experiences', url: '#experiences' },
  { title: 'Projects', url: '#projects' },
  { title: 'Education', url: '#education' },
  { title: 'Technologies', url: '#technologies' },
]
</script>

<template>
  <header class="sticky top-0">
    <ul class="flex flex-row gap-5 w-full bg-gruv-light-500 p-5 items-center justify-center">
      <li v-for="(item, index) in nav" :key="index">
        <a href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </header>
</template>
