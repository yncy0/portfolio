<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <Button
    aria-label="Toggle Theme Button"
    class="bg-base-500 dark:text-ctp-green-200 text-fg-500 dark:border-ctp-green-200 border-fg-500 border hover:bg-base-500"
    @click="toggleDark()"
  >
    <div v-if="isDark">
      <Icon name="lucide:moon" />
    </div>
    <div v-if="!isDark">
      <Icon name="lucide:sun" />
    </div>
  </Button>
</template>
