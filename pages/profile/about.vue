<template>
  <div class="w-full flex flex-col gap-8">
    <ProfileTab :menuOptions="menuOptions" class="w-full" />

    <div
      v-for="item in UserStore.bio"
      :key="item.info"
      class="flex flex-col gap-4 bg-white p-10 rounded-lg shadow-md"
    >
      <h2 class="text-xl font-semibold">{{ item.info }}</h2>
      <div class="flex gap-1.5">
        <div class="w-2 p-0.5 bg-primary"></div>
        <div class="p-0.5 w-7 bg-primary"></div>
      </div>

      <template v-for="[key, value] in Object.entries(item)">
        <li
          v-if="key !== 'info'"
          :key="key"
          class="border-b p-4 flex justify-between w-full"
        >
          <strong>{{ key }}:</strong>

          <span class="w-3/5">
            {{ value || "N/A" }}
          </span>
        </li>
      </template>
      <!-- <ProfileInfo :infoDetails="item" :info="item.info" /> -->
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
import { useAuthStore } from "~/stores/authentication";

definePageMeta({
  layout: "profile",
});

const store = useAuthStore();

console.log(store.loginUser, "loginusuus");

const UserStore = useUserStore();

const userDetails = computed(() => store.getLoggedInUser);

console.log(userDetails.value, "userde");

const menuOptions = ref([
  { name: "View", path: "/profile/about" },
  { name: "Edit", path: "/profile/edit" },
  { name: "Change Photo", path: "/profile/editProfilePhoto" },
]);

onMounted(() => {
  UserStore.fetchBio();
  console.log(UserStore.bio, "shshh");
});
</script>

<style lang="scss" scoped></style>
