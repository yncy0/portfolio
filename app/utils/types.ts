// This single-file handles all the type of each component in @/component/*

// EducationSection.vue
export type Education = {
  school: string
  course: string
  year: string
}

// ProjectCard.vue && ProjectsList.vue
export type Projects = {
  title: string
  description: string
  imageUrl?: string
  githubUrl?: string
  projectUrl?: string
}

// TechnologiesList.vue && TechnologyIcon.vue
export type Technologies = {
  name: string
  icon: string
}
