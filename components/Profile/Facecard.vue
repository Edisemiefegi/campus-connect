<template>
  <div>
    <div class="w-full h-56 relative overflow-hidden bg-secondary rounded-lg">
      <div
        class="absolute bottom-6 flex md:flex-row flex-col gap-4 md:justify-between w-full z-20 p-10"
      >
        <div class="w-full md:w-3/6">
          <ProfileProfilecard class="text-white text-xl" />
          <p class="ml-20 -mt-7 text-sm text-white">United State of America</p>
        </div>
        <div class="w-full md:w-4/12 flex justify-between text-white">
          <p>Post: 0</p>
          <p>Friends: 4</p>
          <p>Forums: 4</p>
        </div>
      </div>

      <div class="absolute w-96 right-44 -top-10">
        <img
          src="/public/shapes.png"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "~/stores/post";
import { useAuthStore } from "~/stores/authentication";

const Poststore = usePostStore();
const AuthStore = useAuthStore();
const myPosts = computed(() => Poststore.Userposts);

// console.log(myPosts.value, "jjj");
</script>

<style lang="scss" scoped></style>
