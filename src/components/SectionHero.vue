<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

import CoffeeWithCat from './CoffeeWithCat.vue'
</script>

<template>
  <section class="flex flex-col-reverse lg:flex-row w-full max-w-screen">
    <section class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full lg:min-h-dvh w-full max-w-screen">
      <div>
        <h1 class="text-3xl lg:text-5xl font-fira-code">
          It is I, <strong class="text-gruv-red-500"> Yancy! </strong>
        </h1>
        <h1 class="text-5xl lg:text-7xl">Your average programming enjoyer</h1>
      </div>
      <div class="flex flex-col lg:flex-row gap-3 max-w-screen w-full">
        <Badge>Front-end Developer</Badge>
        <Badge>Vue/Nuxt Developer</Badge>
        <Badge>React Native Developer</Badge>
      </div>
    </section>
    <CoffeeWithCat />
  </section>
</template>
