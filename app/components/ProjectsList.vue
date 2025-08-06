<script setup lang="ts">
const projects: Projects[] = [
  {
    title: 'Portfolio',
    description:
      'This project is to showcase my other projects and skills.' +
      'It is made with Vue + Vite, Tailwind CSS, and Shadcn/Vue',
    githubUrl: 'https://github.com/Yncy0/portfolio',
    imageUrl: "/images/projects/portfolio/dark.png"
  },
]
</script>

<template>
  <section id="projects" class="flex flex-col gap-2">
    <h2 class="text-lg lg:text-xl">Projects</h2>
    <ul class="flex flex-row basis-[1/3] gap-2">
      <li v-for="(item, index) in projects" :key="index">
        <ProjectsCard
          :title="item.title"
          :description="item.description"
          :github-url="item.githubUrl"
          :image-url="item.imageUrl"
        />
      </li>
    </ul>
  </section>
</template>
