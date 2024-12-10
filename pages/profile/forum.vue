<template>
  <div class="w-full">
    <div class="flex flex-col gap-10">
      <ProfileTab :menuOptions="menuOptions" />
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
const menuOptions = ref([
  { name: "Add ", path: "/profile/about" },
  { name: "Forums created", path: "/profile/edit" },
  { name: "Topics created", path: "/profile/editProfilePhoto" },
  { name: "Replies created", path: "/profile/editProfilePhoto" },
]);
</script>

<style lang="scss" scoped></style>
