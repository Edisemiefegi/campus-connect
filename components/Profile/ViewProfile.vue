<template>
  <div>
    <div
      class="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-48 z-30"
    >
      <RouterLink
        to="/profile/posts"
        class="block text-gray-700 hover:bg-gray-100 p-2 rounded"
        >View Profile</RouterLink
      >
      <button
        @click="logout"
        class="block w-full text-red-700 hover:bg-gray-100 p-2 rounded"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/authentication";
const AuthStore = useAuthStore();
const router = useRouter();

const loggedinUser = computed(() => AuthStore.getLoggedInUser);

const logout = () => {
  console.log(loggedinUser.value, "auuu");

  AuthStore.signOutUser();
  router.push({ path: "/auth/login" });
};
</script>

<style lang="scss" scoped></style>
