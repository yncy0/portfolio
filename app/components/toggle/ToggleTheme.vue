<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <Button
    aria-label="Toggle Theme Button"
    class="bg-cat-base text-cat-text border-cat-text border hover:bg-gruv-bg-hard"
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
