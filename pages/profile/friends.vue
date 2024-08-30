<template>
  <div class="w-full">
    <div class="w-full h-full flex flex-col gap-5">
      <div v-for="item in user" :key="item.id">
        <ProfileFriendcard :user="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "profile",
});

const user = ref([
  {
    id: 1,
    image: "/cover.jpg",
  },
  {
    id: 2,
    image: "/cover.jpg",
  },
  {
    id: 3,
    image: "/cover.jpg",
  },
]);
</script>

<style lang="scss" scoped></style>
