// This single-file handles all the type of each component in @/component/*

// EducationSection.vue
export type Education = {
  school: string;
  course: string;
  year: string;
};

// ProjectCard.vue && ProjectsList.vue
export type Projects = {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  techstack: Technologies[]
};

// SocialsList.vue
export type Socials = {
  link: string;
  icon: string;
};

// TechnologiesList.vue && TechnologyIcon.vue
export interface Technologies {
  name?: string;
  icon: string;
  size?: number;
}

