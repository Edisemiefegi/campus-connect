<template>
  <div class="relative">
    <!-- nav -->
    <div class="relative w-full h-full z-30">
      <navbar
        :isDisplayed="true"
        :search="true"
        :enableScrollEffect="false"
        :navOptions="navOptions"
        :loginLink="'/'"
        :loginText="'Logout'"
      />
    </div>

    <div class="h-fit bg-gray-100 mt-20">
      <slot />
    </div>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup>
import { usePostStore } from "~/stores/post";

const Poststore = usePostStore();

const navOptions = ref([
  { name: "Home", path: "/dashboard", icon: "pi pi-home" },

  // { name: "Post new", icon: "pi pi-pencil" },
  { name: "Messaging", path: "/messaging", icon: "pi pi-comments" },
  { name: "Notification", path: "/notifications", icon: "pi pi-bell" },

  { name: "Forum", path: "/forums", icon: "pi pi-users" },
  { name: "Jobs", path: "/jobs", icon: "pi pi-briefcase" },
  { name: "Shop", path: "/shop", icon: "pi pi-cart-arrow-down" },
]);
</script>

<style lang="scss" scoped></style>
