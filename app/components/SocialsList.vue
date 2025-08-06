<script setup lang="ts">
const items: Socials[] = [
  {
    link: "https://github.com/Yncy0",
    icon: "simple-icons:github",
  },
  {
    link: "mailto:yncyncy0@gmail.com",
    icon: "simple-icons:gmail",
  },
  {
    link: "https://x.com/yncynotdev",
    icon: "simple-icons:x",
  },
];
</script>

<template>
  <ul class="flex flex-row gap-4">
    <li v-for="(item, index) in items" :key="index">
      <a :href="item.link">
        <Icon :name="item.icon"/>
      </a>
    </li>
  </ul>
</template>
