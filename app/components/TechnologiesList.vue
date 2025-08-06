<script setup lang="ts">
type Technologies = {
  name: string
  icon: string
}

const technologies: Technologies[] = [
  {
    name: 'Vue',
    icon: 'simple-icons:vuedotjs',
  },
  {
    name: 'Nuxt',
    icon: 'simple-icons:nuxt',
  },
  {
    name: 'React',
    icon: 'simple-icons:react',
  },
  {
    name: 'Expo',
    icon: 'simple-icons:expo',
  },
  {
    name: 'TailwindCSS',
    icon: 'simple-icons:tailwindcss',
  },
  {
    name: 'TypeScript',
    icon: 'simple-icons:typescript',
  },
  {
    name: 'Supabase',
    icon: 'simple-icons:supabase',
  },
  {
    name: 'Git',
    icon: 'simple-icons:git',
  },
  {
    name: 'Neovim',
    icon: 'simple-icons:neovim',
  },
]
</script>

<template>
  <section id="technologies" class="flex flex-col gap-2">
    <h2 class="text-lg lg:text-xl">Technologies</h2>
    <ul class="flex flex-row flex-wrap basis-1/3 gap-1">
      <li v-for="(item, index) in technologies" :key="index" class="flex-1">
        <TechnologyIcon :name="item.name" :icon="item.icon"/>
      </li>
    </ul>
  </section>
</template>
