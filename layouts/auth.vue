<template>
  <div class="w-full h-full relative">
    <navbar />

    <div class="w-full xl:h-full h-[900px] relative">
      <img src="/public/gif.gif" alt="" class="w-full h-full object-cover" />
      <div
        class="w-3/4 md:w-3/5 h-fit bg-secondary py-10 px-8 flex gap-4 flex-col md:flex-row top-28 absolute left-1/2 transform -translate-x-1/2 shadow-md rounded-md overflow-hidden"
      >
        <div class="w-full md:w-[45%] overflow-hidden h-36 md:h-full">
          <img src="/public/login.svg" alt="" class="w-full h-full" />
        </div>
        <div class="w-full md:w-3/6 h-fit md:h-full">
          <div class="flex flex-col items-center">
            <img src="/public/logo.png" alt="" />
            <p class="text-xl font-semibold text-primary">Welcome</p>
            <p class="text-white text-sm">Join millions of people</p>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
