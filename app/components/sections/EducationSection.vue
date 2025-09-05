<script setup lang="ts">
const education: Education[] = [
  {
    school: 'La Consolacion University Philippines',
    course: 'Bachelor of Science in Information Technology',
    year: 'Undergrad',
  },
  {
    school: 'La Consolacion University Philippines',
    course: 'Technological Vocational Course - Information and Communications Technology',
    year: '2022',
  },
]
</script>

<template>
  <section id="education" class="flex flex-col gap-2 w-full max-w-screen">
    <h2 class="text-xl">Education</h2>
    <ul class="flex flex-col gap-5">
      <li v-for="(item, index) in education" :key="index">
        <div>
          <h3>{{ item.school }}</h3>
          <pre class="whitespace-normal">{{ item.course }}</pre>
          <em>{{ item.year }}</em>
        </div>
      </li>
    </ul>
  </section>
</template>
