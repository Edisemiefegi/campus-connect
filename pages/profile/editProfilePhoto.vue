<template>
  <div class="w-full flex flex-col gap-8">
    <ProfileTab :menuOptions="menuOptions" class="w-full" />

    <div
      class="bg-white flex-col py-4 rounded-md flex items-center w-8/12 md:w-full font-medium h-fit"
    >
      <div
        v-if="!user?.image"
        class="md:w-44 md:h-44 w-36 h-36 rounded-full bg-gray-500 flex justify-center items-center text-xl"
      >
        <i class="pi pi-user"></i>
      </div>
      <img
        :src="user?.image?.url"
        alt=""
        class="md:w-44 md:h-44 w-36 h-36 rounded-full object-cover"
        v-else
      />

      <uiUploadFile @files="handleUpload" class="w-full">
        <button
          :disabled="loading"
          class="p-3 w-full text-center font-medium text-blue-400 text-sm border-b"
        >
          <span v-if="!loading"> Upload photo </span>
          <span v-else>Uploading.....</span>
        </button>
      </uiUploadFile>

      <button
        @click="removePhoto"
        class="p-3 w-full text-center font-medium text-red-400 text-sm border-b"
      >
        Remove photo
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
import { useAuthStore } from "~/stores/authentication";
import { uploadFile } from "~/composables";

definePageMeta({
  layout: "profile",
});

const menuOptions = ref([
  { name: "View", path: "/profile/about" },
  { name: "Edit", path: "/profile/edit" },
  { name: "Profile", path: "/profile/editProfilePhoto" },
]);
const loading = ref(false);
const store = useUserStore();
const authStore = useAuthStore();
const user = computed(() => authStore.loginUser);

const handleUpload = async (files) => {
  try {
    loading.value = true;
    const file = files[0];
    const path = `profilePhotos/${user.value.id}/${file.name}`;

    const url = await uploadFile(file, path);

    await store.editProfileImg(url);
    alert("Profile photo updated successfully!");
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.value = false;
  }
};

const removePhoto = async () => {
  const path = `profilePhotos/${user.value.id}/${user.value.image.path}`;
  if (!path) throw new Error("No profile photo to delete.");

  await store.removeProfileImg();
};
</script>

<style lang="scss" scoped></style>
