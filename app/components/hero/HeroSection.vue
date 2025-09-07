<template>
  <section
    class="flex flex-col-reverse lg:flex-row lg:items-center w-full max-w-screen"
  >
    <section
      class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-1/2 max-w-screen lg:pb-28"
    >
      <div>
        <h1 class="text-3xl lg:text-5xl font-fira-code">
          It is I, <strong class="text-ctp-red-500"> Yancy! </strong>
        </h1>
        <h1 class="text-5xl lg:text-7xl">Your average programming enjoyer</h1>
      </div>
      <BadgesList />
    </section>

    <CoffeeWithCat />
  </section>
</template>
