<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    class="bg-gruv-bg-500 text-gruv-fg-500 border-gruv-fg-500 border-2 fixed bottom-20 lg:bottom-10 right-1 lg:right-20 hover:bg-gruv-bg-500"
    @click="toggleDark()"
  >
    <div v-if="isDark">
      <Sun />
    </div>
    <div v-else>
      <Moon />
    </div>
  </Button>
</template>
