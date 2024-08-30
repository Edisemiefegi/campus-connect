<template>
  <div class="bg-white w-full h-fit rounded-lg p-8 flex flex-col gap-5">
    <div class="flex justify-between">
      <div>
        <ProfileProfilecard />
        <p class="text-sm text-gray-400 mt-2">4hr ago</p>
      </div>
      <i class="pi pi-ellipsis-v"></i>
    </div>
    <p>
      {{ post.caption }}
    </p>
    <div class="w-full h-fit rounded-lg overflow-hidden">
      <img
        v-if="post.image"
        :src="post.image"
        alt="Post image"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="flex justify-between">
      <div class="flex gap-4">
        <i class="pi pi-heart"></i>
        <i class="pi pi-bookmark"></i>
      </div>
      <div class="flex gap-3 justify-center items-center">
        <p>4</p>
        <i class="pi pi-comment"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
