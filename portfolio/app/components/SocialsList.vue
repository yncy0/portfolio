<script setup lang="ts">
import { GitHubIcon, GmailIcon, XIcon} from 'vue3-simple-icons'
</script>

<!-- FIXME: bad design -->
<template>
  <ul class="flex flex-row gap-4">
    <li>
      <a href="https://github.com/Yncy0">
        <GitHubIcon />
      </a>
    </li>
    <li>
      <a href="mailto:yncyncy0@gmail.com">
        <GmailIcon />
      </a>
    </li>
    <li>
      <a href="https://x.com/yncynotdev">
        <XIcon/>
      </a>
    </li>
  </ul>
</template>
