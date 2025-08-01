<script setup lang="ts">
type Education = {
  school: string
  course: string
  year: string
}

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
  <section id="education" class="flex flex-col gap-2">
    <h2 class="text-xl">Education</h2>
    <ul>
      <li v-for="(item, index) in education" :key="index">
        <div>
          <h3>{{ item.school }}</h3>
          <pre>{{ item.course }}</pre>
          <em>{{ item.year }}</em>
        </div>
      </li>
    </ul>
  </section>
</template>
