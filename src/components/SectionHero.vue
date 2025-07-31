<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

import CoffeeWithCat from './CoffeeWithCat.vue'
</script>

<template>
  <section class="flex flex-row">
    <section class="flex flex-col justify-center items-start gap-7 min-h-dvh lg:w-[50%]">
      <div>
        <h1 class="lg:text-5xl font-fira-code">
          It is I, <strong class="text-gruv-red-500"> Yancy! </strong>
        </h1>
        <h1 class="lg:text-7xl">Your average programming enjoyer</h1>
      </div>
      <div class="flex flex-row gap-3">
        <Badge>Front-end Developer</Badge>
        <Badge>Vue/Nuxt Developer</Badge>
        <Badge>React Native Developer</Badge>
      </div>
    </section>
    <CoffeeWithCat />
  </section>
</template>
