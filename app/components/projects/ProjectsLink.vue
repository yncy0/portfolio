<script setup lang="ts">
const props = defineProps<{
  projectUrl: string | undefined;
  githubUrl: string | undefined;
}>();

const isGitHubUrlDisabled = ref<boolean>(false);
const isProjectUrlDisabled = ref<boolean>(false);

onMounted(() => {
  if (props.githubUrl === "") {
    isGitHubUrlDisabled.value = true;
  }

  if (props.projectUrl === "") {
    isProjectUrlDisabled.value = true;
  }
});
</script>

<template>
  <div class="flex flex-col items-start gap-1 text-sm">
    <ULink
      aria-label="Link to Project"
      :href="props.projectUrl"
      target="_blank"
      :disabled="isProjectUrlDisabled"
      color="neutral"
      class="text-fg-500 font-silk-screen"
    >
      <Icon name="i-lucide-link" class="text-fg-500" />
      Project Link
    </ULink>
    <ULink
      aria-label="Link to GitHub"
      :to="props.githubUrl"
      target="_blank"
      :disabled="isGitHubUrlDisabled"
      color="neutral"
      class="text-fg-500 items-center font-silk-screen"
    >
      <Icon name="simple-icons:github" class="text-fg-500" />
      GitHub Link
    </ULink>
  </div>
</template>
