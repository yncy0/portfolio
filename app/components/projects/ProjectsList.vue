<script setup lang="ts">
import roomie from "@/assets/images/projects/roomie/sample.png";
import monthsary from "@/assets/images/projects/monthsary/hero-section.png"
import portfolio from "@/assets/images/projects/portfolio/index.png"

const projects: Projects[] = [
  {
    title: "ROOMIE (WIP)",
    description:
      "ROOMIE is a room availability and management system designed for efficient room organization. " +
      "This project is currently made in React and Supabase. Slowly migrating into Nuxt and Golang.",
    githubUrl: "",
    imageUrl: roomie,
    projectUrl: "",
    techstack: roomieTechStack,
  },
  {
    title: "Monthsary Website",
    description:
      "A fun project dedicated to my girlfriend❤️. " +
      "It has a basic authentication features from Supabase and form validation using Zod",
    githubUrl: "https://github.com/yncy0/monthsary",
    imageUrl: monthsary,
    projectUrl: "https://monthsary-website.nuxt.dev/",
    techstack: monthsaryTechStack,
  },
  {
    title: "Portfolio",
    description:
      "This project is to showcase my other projects and skills. Currently deplyed in NuxtHub.",
    githubUrl: "https://github.com/yncy0/portfolio",
    imageUrl: portfolio,
    projectUrl: "https://yncy0.nuxt.dev/",
    techstack: portfolioTechStack,
  },
  {
    title: "???",
    description: "Soon..",
    githubUrl: "",
    imageUrl: "",
    projectUrl: "",
  },
];
</script>

<template>
  <section>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-9">
      <li v-for="(item, index) in projects" :key="index">
        <ProjectsCard
          :title="item.title"
          :description="item.description" 
          :github-url="item.githubUrl"
          :image-url="item.imageUrl"
          :project-url="item.projectUrl"
          :techstack="item.techstack" />
      </li>
    </ul>
  </section>
</template>
