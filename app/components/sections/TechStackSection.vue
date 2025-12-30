<template>
  <section class="flex flex-col gap-7 w-full max-w-screen">
    <h2 class="text-lg lg:text-xl dark:text-ctp-green-200">Technologies</h2>
    <div class="flex flex-col gap-5">
      <h3 class="text-md lg:text-lg dark:text-ctp-green-200">Main Stack</h3>
      <MainStackList :lists="mainStackList" />
    </div>
    <div class="flex flex-col gap-5">
      <h3 class="text-md lg:text-lg dark:text-ctp-green-200">Others</h3>
      <TechStackList :lists="techStackList"/>      
    </div>
  </section>
</template>
