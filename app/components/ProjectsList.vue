<script setup lang="ts">
const projects: Projects[] = [
  {
    title: "Portfolio",
    description:
      "This project is to showcase my other projects and skills." +
      "It is made with Nuxt, Tailwind CSS, and Shadcn/Vue",
    githubUrl: "https://github.com/Yncy0/portfolio",
    imageUrl: "/images/projects/portfolio/dark.png",
    projectUrl: "https://yncy0.nuxt.dev/",
    techstack: portfolioTechStack,
  },
  {
    title: "Monthsary Website",
    description:
      "A fun project dedicated to my girlfriend❤️. " +
      "This Project compose of Nuxt + Nuxt plugins and ecosystem, Tailwdind CSS, and Supabase as back-end",
    githubUrl: "https://github.com/Yncy0/monthsary",
    imageUrl: "/images/projects/monthsary/hero-section.png",
    projectUrl: "https://monthsary-website.nuxt.dev/",
    techstack: monthsaryTechStack,
  },
];
</script>

<template>
  <section id="projects" class="flex flex-col gap-2">
    <h2 class="text-lg lg:text-xl">Projects</h2>
    <ul class="flex flex-col lg:flex-row lg:basis-1/3 gap-2">
      <li v-for="(item, index) in projects" :key="index">
        <ProjectsCard
          :title="item.title"
          :description="item.description"
          :github-url="item.githubUrl"
          :image-url="item.imageUrl"
          :project-url="item.projectUrl"
          :techstack="item.techstack"
        />
      </li>
    </ul>
  </section>
</template>
