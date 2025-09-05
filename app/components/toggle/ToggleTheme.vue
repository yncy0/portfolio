<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button
    class="bg-gruv-bg-500 text-gruv-fg-500 border-gruv-fg-500 border-2 hover:bg-gruv-bg-500"
    @click="toggleDark()">
    <div v-if="isDark">
      <Icon name="lucide:moon" />
    </div>
    <div v-else>
      <Icon name="lucide:sun" />
    </div>
  </Button>
</template>
