<template>
  <div class="w-full flex flex-col gap-5">
    <div v-for="item in myPosts" :key="item.id">
      <postsPostcard :post="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

definePageMeta({
  layout: "profile",
});

const myPosts = ref([
  {
    id: 1,
    caption:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius sintag a esse, ut nostrum!",
    image: "/me.jpg",
  },
  {
    id: 2,
    caption:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius sintag a esse, ut nostrum!",
    image: "/me.jpg",
  },
  // Add more posts as needed
]);
</script>

<style lang="scss" scoped></style>
