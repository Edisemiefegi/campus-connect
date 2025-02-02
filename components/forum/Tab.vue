<template>
  <div class="w-full">
    <div class="flex flex-col gap-10">
      <ProfileTab :menuOptions="menuOptions" />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/authentication";

const store = useAuthStore();

const user = computed(() => {
  store.loginUser;
});
const menuOptions = ref([
  { name: "Add ", path: "/profile/forum" },
  { name: "Forums created", path: "/profile/forum/myforums" },
  { name: "Topics created", path: "/profile/forum/mytopics" },
  { name: "Replies created", path: "/profile/editProfilePhoto" },
]);
</script>

<style lang="scss" scoped></style>
