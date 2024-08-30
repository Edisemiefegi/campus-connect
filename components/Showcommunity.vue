<template>
  <div>
    <div
      class="absolute grid grid-cols-2 gap-4 top-10 left-10 mt-2 w-96 bg-white border border-gray-300 rounded shadow-lg p-8 z-10"
    >
      <div v-for="item in list" :key="item" class="col-span-1">
        <p class="text-gray-500">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const list = ref([
  "Newsfeed",
  "Forums",
  "Profile Timeline",
  "Forum Timeline",
  "Profile About",
  "Forum Topic",
  "Profile Friends",
  "Topic Engagement",
  "Profile Groups",
  "Topics Discussion",
  "Profile Photos",
  "All Members",
  "Profile Videos",
  "All Groups",
]);
</script>

<style lang="scss" scoped></style>
