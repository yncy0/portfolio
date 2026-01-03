<script setup lang="ts">
import roomie from "@/assets/images/projects/roomie/sample.png";
import roomie1 from "@/assets/images/projects/roomie/1.png";
import roomie2 from "@/assets/images/projects/roomie/2.png";
import roomie3 from "@/assets/images/projects/roomie/3.png";
import monthsary from "@/assets/images/projects/monthsary/index.png"
import monthsary1 from "@/assets/images/projects/monthsary/1.png"
import monthsary2 from "@/assets/images/projects/monthsary/2.png"
import monthsary3 from "@/assets/images/projects/monthsary/3.png"
import monthsary4 from "@/assets/images/projects/monthsary/4.png"
import monthsary5 from "@/assets/images/projects/monthsary/5.png"
import portfolio from "@/assets/images/projects/portfolio/index.png"
import portfolio1 from "@/assets/images/projects/portfolio/1.png"
import portfolio2 from "@/assets/images/projects/portfolio/2.png"
import portfolio3 from "@/assets/images/projects/portfolio/3.png"

const projects: Projects[] = [
  {
    title: "ROOMIE (WIP)",
    description:
      "ROOMIE is a room availability and management system designed for efficient room organization. " +
      "This project is currently made in React and Supabase. Slowly migrating into Nuxt and Golang.",
    githubUrl: "",
    images: [roomie, roomie1, roomie2, roomie3],
    imageUrl: roomie,
    projectUrl: "",
    techstack: roomieTechStack,
  },
  {
    title: "Monthsary Website",
    description:
      "A fun project dedicated to my girlfriend❤️. " +
      "It has a basic authentication features from Supabase and form validation using Zod",
    githubUrl: "https://github.com/yncynotdev/monthsary",
    images: [monthsary, monthsary1, monthsary2, monthsary3, monthsary4, monthsary5],
    imageUrl: monthsary,
    projectUrl: "",
    techstack: monthsaryTechStack,
  },
  {
    title: "Portfolio",
    description:
      "This project is to showcase my other projects and skills. Currently deployed in Vercel, can you find the easter egg??.",
    githubUrl: "https://github.com/yncynotdev/portfolio",
    images: [portfolio, portfolio1, portfolio2, portfolio3],
    imageUrl: portfolio,
    projectUrl: "https://yncynotdev.nuxt.dev/",
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
          :images="item.images"
          :image-url="item.imageUrl"
          :project-url="item.projectUrl"
          :techstack="item.techstack" />
      </li>
    </ul>
  </section>
</template>
