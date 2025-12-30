<script setup lang="ts">
const link = "mailto:yncyncy0@gmail.com";
</script>

<template>
    <UButton 
      aria-label="Hire Me button (I use Neovim btw!)" 
      icon="lucide:arrow-right"
      label="Hire me I use Neovim btw!"
      :to="link"
      target="_blank"
      class="dark:bg-ctp-green-200 bg-fg-500 text-base-500 w-full max-w-screen hover:bg-fg-500 text-md font-silk-screen"/>
</template>
