<template>
  <section class="flex flex-col-reverse lg:flex-row lg:items-center w-full max-w-screen">
    <section class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-1/2 max-w-screen lg:pb-28">
      <h1 class="text-3xl lg:text-5xl font-fira-code">
        <span class="bg-gradient-to-r from-ctp-mauve-300 to-ctp-pink-300">
          <strong class="text-transparent">It is I,</strong>
        </span>
        <span class="bg-gradient-to-r from-ctp-green-300 to-ctp-teal-300">
          <strong class="text-transparent"> Yancy! </strong>
        </span>
        <br >
        <strong class="text-5xl lg:text-7xl">
          Your average programming enjoyer</strong>
      </h1>
      <BadgesList />
    </section>

    <CoffeeWithCat />
  </section>
</template>

<style scoped>
span {
  background-clip: text;
}
</style>
