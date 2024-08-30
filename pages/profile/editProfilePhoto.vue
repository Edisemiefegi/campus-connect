<template>
  <div class="w-full flex flex-col gap-8">
    <ProfileTab :menuOptions="menuOptions" class="w-full" />

    <div
      class="bg-white flex-col rounded-md flex w-8/12 md:w-5/12 font-medium h-fit"
    >
      <button class="p-3 w-full text-center text-xl border-b">
        Change Profile Photo
      </button>

      <UploadFile @files="handleUpload">
        <button
          class="p-3 w-full text-center font-medium text-blue-400 text-sm border-b"
        >
          Upload photo
        </button>
      </UploadFile>

      <button
        class="p-3 w-full text-center font-medium text-red-400 text-sm border-b"
      >
        Remove photo
      </button>
      <button class="p-3 w-full text-center text-sm border-b">Cancel</button>
      <div class="flex justify-center">
        <spinner v-if="loading" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profile",
});

const menuOptions = ref([
  { name: "View", path: "/profile/about" },
  { name: "Edit", path: "/profile/edit" },
  { name: "Change Photo", path: "/profile/editProfilePhoto" },
]);
</script>

<style lang="scss" scoped></style>
