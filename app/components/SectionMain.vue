<template>
  <section class="flex flex-col min-h-dvh w-full max-w-screen pt-20 gap-10">
    <section class="flex flex-col gap-5">
      <AboutMe />
    </section>

    <section class="flex flex-col gap-10">
      <ExperienceList />
      <ProjectsList />

      <h2 class="text-lg lg:text-xl">Technologies</h2>
      <TechnologiesList :lists="technologiesList" />

      <EducationSection />
    </section>

    <HireMe />
  </section>
</template>
