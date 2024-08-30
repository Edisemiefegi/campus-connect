<template>
  <div>
    <section
      class="bg-gray-50 overflow-hidden w-full md:h-screen h-fit relative"
    >
      <div
        class="w-5/6 mx-auto flex md:flex-row flex-col md:gap-0 gap-28 md:pt-0 pt-32 justify-between"
      >
        <div class="w-full md:w-3/6 md:mt-40 flex flex-col gap-8">
          <slot />
        </div>

        <div class="relative mt-0 md:mt-20 mb-28 md:mb-28 w-fit md:w-[47%]">
          <div
            class="w-96 md:block hidden h-96 p-1 z-0 border-r-8 rounded-full absolute top-10 -left-52"
          ></div>
          <div class="md:absolute z-10 flex flex-col gap-10">
            <div
              data-aos="fade-left"
              class="group flex gap-10 w-full"
              v-for="item in aboutData"
              :key="item"
              :class="item.addMarginLeft ? 'ml-0 md:ml-28' : ''"
            >
              <span
                class="w-32 h-32 group-hover:bg-primary bg-white rounded-full flex justify-center items-center"
              >
                <i
                  :class="['pi', item.icon]"
                  class="text-4xl cursor-pointer text-gray-500 group-hover:text-white"
                ></i>
              </span>
              <div class="w-3/6">
                <h1 class="group-hover:text-primary mb-3 text-xl font-semibold">
                  {{ item.title }}
                </h1>
                <p class="text-gray-400">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const aboutData = ref([
  {
    icon: "pi-comments",
    title: "Meet Great People",
    text: "When an unknown printer took a galley of scrambled it to ma type specimen It has survived not only.",
    addMarginLeft: false,
  },
  {
    icon: "pi-comments",
    title: "Meet Great People",
    text: "When an unknown printer took a galley of scrambled it to ma type specimen It has survived not only.",
    addMarginLeft: true,
  },
  {
    icon: "pi-comments",
    title: "Meet Great People",
    text: "When an unknown printer took a galley of scrambled it to ma type specimen It has survived not only.",
    addMarginLeft: false,
  },
]);
</script>

<style lang="scss" scoped></style>
