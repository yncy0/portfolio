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
  {
    link: "https://www.linkedin.com/in/yancy-paala",
    icon: "simple-icons:linkedin",
    aria: "Link to Linkedin"
  },
  {
    link: "https://discord.com/users/892331973132038174",
    icon: "simple-icons:discord",
    aria: "Link to Discord"
  },
];
</script>

<template>
  <ul class="flex flex-row gap-7">
    <li v-for="(item, index) in items" :key="index">
      <a :href="item.link" :aria-label="item.aria" target="_blank">
        <Icon :name="item.icon" class="size-6"/>
      </a>
    </li>
  </ul>
</template>
