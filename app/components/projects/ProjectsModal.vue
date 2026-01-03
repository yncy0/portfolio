<script setup lang="ts">
import type { Projects } from "~/utils/types";

enum Orientation {
  vertical = "vertical",
  horizontal = "horizontal",
}

const props = defineProps<Projects>();
const orientation = ref<Orientation>(Orientation.horizontal);
const widthState = ref<number | null>(null);

onMounted(() => {
  window.addEventListener('resize', onHandleWidthSize);
})

onBeforeMount(() => {
  window.addEventListener('resize', onHandleWidthSize);
})

watch(widthState, () => {
  if (!widthState.value) return;

  if (widthState.value > 640){
    orientation.value = Orientation.horizontal;
  }
  if (widthState.value < 480) {
    orientation.value = Orientation.vertical;
  } 

}, { immediate: true });

function onHandleWidthSize() {
  widthState.value = window.outerWidth;
}
</script>

<template>
  <UModal>
    <UButton
      label="View Project"
      class="w-full flex items-center justify-center bg-fg-500 dark:bg-ctp-green-200 hover:bg-fg-300 font-silk-screen" />

    <template #title>
      <h3>{{ props.title }}</h3>
    </template>

    <template #description>
      <p>
        {{ props.description }}
      </p>
    </template>

    <template #body>
      <div v-if="props.images" class="flex flex-col gap-7 lg:px-44 items-center justify-center h-full">
        <UCarousel
          v-slot="{ item }"
          :items="props.images"
          :orientation="orientation"
          loop
          :autoplay="{ delay: 3000 }"
          arrows 
          :ui="{
            item: 'basis-[70%] transition-opacity [&:not(.is-snapped)]:opacity-100',
            container: 'h-[360px] lg:h-full',
          }" 
          class="w-full mx-auto">
          <img :src="item" alt="Snap images of the Project" >
        </UCarousel>
      </div>

      <div v-else>
        <GreenCat />
      </div>
    </template>

    <template #footer>
      <div class="flex flex-col gap-5">
        <ProjectsTechStack :lists="props.techstack" />
        <ProjectsLink :project-url="props.projectUrl" :github-url="props.githubUrl" />
      </div>
    </template>
  </UModal>
</template>
