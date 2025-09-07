<script setup lang="ts">
const link = "mailto:yncyncy0@gmail.com";
</script>

<template>
  <a :href="link">
    <Button 
      aria-label="Hire Me button (I use Neovim btw!)" 
      class="dark:bg-ctp-green-200 bg-cat-text text-cat-base w-full max-w-screen hover:bg-cat-text text-md">
      Hire me I use Neovim btw!
      <Icon name="lucide:arrow-right" />
    </Button>
  </a>
</template>
