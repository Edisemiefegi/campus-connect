<template>
  <div class="w-full flex flex-col gap-5">
    <div v-for="item in myPosts" :key="item.id">
      <postsPostcard :post="item.post" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profile",
});

import { usePostStore } from "~/stores/post";
import { useAuthStore } from "~/stores/authentication";

const Poststore = usePostStore();
const AuthStore = useAuthStore();

onMounted(() => {
  Poststore.getFavPost();
  // console.log(Poststore.initUserPost(), "osts");
});

const loggedinUser = computed(() => AuthStore.getLoggedInUser);
const myPosts = computed(() => Poststore.favPosts);

// console.log(myPosts.value, "my post");
</script>

<style lang="scss" scoped></style>
