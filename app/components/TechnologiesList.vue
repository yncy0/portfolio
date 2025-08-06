<script setup lang="ts">
type Technologies = {
  name: string
  description?: string
  icon: string
}

const technologies: Technologies[] = [
  {
    name: 'Vue',
    description: 'Simple JavaScript Framework',
    icon: 'simple-icons:vuedotjs',
  },
  {
    name: 'Nuxt',
    description: 'Vue Meta-Framework',
    icon: 'simple-icons:nuxt',
  },
  {
    name: 'React',
    description: 'Popular JavaScript Library',
    icon: 'simple-icons:react',
  },
  {
    name: 'Expo',
    description: 'Modern React Native Framework',
    icon: 'simple-icons:expo',
  },
  {
    name: 'TailwindCSS',
    description: 'A utility-first CSS framework',
    icon: 'simple-icons:tailwindcss',
  },
  {
    name: 'TypeScript',
    description: 'JavaScript but with static types',
    icon: 'simple-icons:typescript',
  },
  {
    name: 'Supabase',
    description: 'Postgres Database',
    icon: 'simple-icons:supabase',
  },
  {
    name: 'Git',
    description: 'Version control',
    icon: 'simple-icons:git',
  },
  {
    name: 'Neovim',
    description: 'I use Neovim btw!',
    icon: 'simple-icons:neovim',
  },
]
</script>

<template>
  <section id="technologies" class="flex flex-col gap-2">
    <h2 class="text-lg lg:text-xl">Technologies</h2>
    <ul class="flex flex-row flex-wrap basis-1/3 gap-1">
      <li v-for="(item, index) in technologies" :key="index" class="flex-1">
        <TechnologyIcon :name="item.name" :description="item.description" :icon="item.icon"/>
      </li>
    </ul>
  </section>
</template>
