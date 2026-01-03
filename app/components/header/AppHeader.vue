<template>
  <header class="flex flex-row justify-between items-center pt-5 w-full max-w-screen dark:text-ctp-green-200">
    <SocialsList class="hidden lg:flex"/>
    <a href="https://github.com/yncynotdev" aria-label="Link to GitHub" target="_blank" class="sm:flex lg:hidden">
      <Icon name="simple-icons:github" class="size-6"/>
    </a>

    <ToggleTheme />
  </header>
</template>
