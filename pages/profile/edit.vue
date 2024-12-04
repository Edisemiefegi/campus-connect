<template>
  <div class="w-full flex flex-col gap-8">
    <ProfileTab :menuOptions="menuOptions" class="w-full" />

    <form
      action=""
      @submit.prevent="submitBio"
      v-for="(item, index) in userStore.bio"
      :key="index"
      class="flex flex-col gap-4 bg-white p-10 rounded-lg shadow-md"
    >
      <div>
        <h2 class="text-xl font-semibold">{{ item.info }}</h2>
        <div class="flex gap-1.5">
          <div class="w-2 p-0.5 bg-primary"></div>
          <div class="p-0.5 w-7 bg-primary"></div>
        </div>

        <template v-for="(value, key) in item">
          <li
            v-if="key !== 'info'"
            :key="key"
            class="border-b p-4 flex justify-between w-full"
          >
            <strong>{{ key }}:</strong>

            <span class="w-3/5">
              <input
                v-model="userStore.bio[index][key]"
                type="text"
                :id="key"
                class="border rounded px-2 py-1 w-full"
              />
            </span>
          </li>
        </template>
      </div>

      <Button
        :disabled="loading"
        type="submit"
        :bgColor="'bg-primary'"
        :textColor="'text-white'"
        :rounded="'rounded-md'"
        :size="'sm'"
      >
        <spinner v-if="loading" />

        <span v-else> Submit </span>
      </Button>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";

import { ref } from "vue";

definePageMeta({
  layout: "profile",
});

const menuOptions = ref([
  { name: "View", path: "/profile/about" },
  { name: "Edit", path: "/profile/edit" },
  { name: "Profile", path: "/profile/editProfilePhoto" },
]);

const userStore = useUserStore();
const bio = ref(null);
const loading = ref(false);

onMounted(() => {
  userStore.fetchBio();
  bio.value = userStore?.bio;
  console.log(userStore.bio, "edi", bio.value);
});

async function submitBio() {
  try {
    loading.value = true;
    await userStore.updateBio(bio.value);

    alert("Profile updated!");
  } catch (error) {
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped></style>
