<script setup lang="ts">
const education: Education[] = [
  {
    school: "La Consolacion University Philippines",
    course: "Bachelor of Science in Information Technology",
    year: "Undergrad",
  },
  {
    school: "La Consolacion University Philippines",
    course:
      "Technological Vocational Course - Information and Communications Technology",
    year: "2022",
  },
];
</script>

<template>
  <section id="education" class="flex flex-col gap-2 w-full max-w-screen">
    <h2 class="text-xl dark:text-ctp-green-200 text-cat-text">Education</h2>
    <UCard class="bg-base-500 text-fg-500 dark:border-ctp-green-200 border-fg-500 border rounded-sm">
      <ul class="flex flex-col gap-5">
        <li v-for="(item, index) in education" :key="index">
          <div>
            <h3 class="dark:text-ctp-green-200">{{ item.school }}</h3>
            <pre class="whitespace-normal">{{ item.course }}</pre>
            <em>{{ item.year }}</em>
          </div>
        </li>
      </ul>
    </UCard>
  </section>
</template>
