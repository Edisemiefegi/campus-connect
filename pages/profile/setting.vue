<template>
  <div class="w-full">
    <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
      <ProfileFacecard />
      <ProfileDetailcard />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});
</script>

<style lang="scss" scoped></style>
