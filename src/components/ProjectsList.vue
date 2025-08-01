<script setup lang="ts">
import ProjectsCard from './ProjectsCard.vue'

type Projects = {
  title: string
  desription: string
  imageUrl?: string
  githubUrl?: string
  projectUrl?: string
}

const projects: Projects[] = [
  {
    title: 'Portfolio',
    desription:
      'This project is to showcase my other projects and skills.' +
      'It is made with Vue + Vite, Tailwind CSS, and Shadcn/Vue',
    githubUrl: 'https://github.com/Yncy0/portfolio',
  },
]
</script>

<template>
  <section id="projects" class="flex flex-col gap-2">
    <h2 class="text-xl">Projects</h2>
    <ul>
      <li v-for="(item, index) in projects" :key="index">
        <ProjectsCard
          :title="item.title"
          :description="item.desription"
          :github-url="item.githubUrl"
        />
      </li>
    </ul>
  </section>
</template>
