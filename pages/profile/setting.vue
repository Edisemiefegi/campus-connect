<template>
  <div class="w-full">
    <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
      <p class="text-2xl text-center">setting page Coming Soon..</p>
      <!-- <ProfileDetailcard /> -->
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profile",
});
import { useAuthStore } from "~/stores/authentication";

const store = useAuthStore();

const user = computed(() => {
  store.loginUser;
});
</script>

<style lang="scss" scoped></style>
