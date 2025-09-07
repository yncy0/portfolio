<script setup lang="ts">
const items: Socials[] = [
  {
    link: "https://github.com/yncy0",
    icon: "simple-icons:github",
    aria: "Link to GitHub"
  },
  {
    link: "mailto:yncyncy0@gmail.com",
    icon: "simple-icons:gmail",
    aria: "Link to Gmail"
  },
  {
    link: "https://x.com/yncynotdev",
    icon: "simple-icons:x",
    aria: "Link to X"
  },
];
</script>

<template>
  <ul class="flex flex-row gap-7">
    <li v-for="(item, index) in items" :key="index">
      <a :href="item.link" :aria-label="item.aria">
        <Icon :name="item.icon" class="size-6"/>
      </a>
    </li>
  </ul>
</template>
