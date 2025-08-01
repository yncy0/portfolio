<script setup lang="ts">
import type { Component } from 'vue'
import {
  VueDotjsIcon,
  NuxtIcon,
  ReactIcon,
  ExpoIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  SupabaseIcon,
  GitIcon,
  NeovimIcon,
} from 'vue3-simple-icons'
import { Card, CardContent } from './ui/card/Card.vue'
import TechnologyIcon from './TechnologyIcon.vue'

type Technologies = {
  name: string
  description?: string
  icon: Component
}

const technologies: Technologies[] = [
  {
    name: 'Vue',
    description: 'Simple JavaScript Framework',
    icon: VueDotjsIcon,
  },
  {
    name: 'Nuxt',
    description: 'Vue Meta-Framework',
    icon: NuxtIcon,
  },
  {
    name: 'React',
    description: 'Popular JavaScript Library',
    icon: ReactIcon,
  },
  {
    name: 'Expo',
    description: 'Modern React Native Framework',
    icon: ExpoIcon,
  },
  {
    name: 'TailwindCSS',
    description: 'A utility-first CSS framework',
    icon: TailwindCssIcon,
  },
  {
    name: 'TypeScript',
    description: 'JavaScript but with static types',
    icon: TypeScriptIcon,
  },
  {
    name: 'Supabase',
    description: 'Postgres Database',
    icon: SupabaseIcon,
  },
  {
    name: 'Git',
    description: 'Version control',
    icon: GitIcon,
  },
  {
    name: 'Neovim',
    description: 'I use Neovim btw!',
    icon: NeovimIcon,
  },
]
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="text-xl">Technologies</h2>
    <ul class="flex flex-row">
      <li v-for="(item, index) in technologies" :key="index" class="flex-1">
        <TechnologyIcon :name="item.name" :description="item.description" :icon="item.icon"/>
      </li>
    </ul>
  </section>
</template>
