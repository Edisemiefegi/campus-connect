<template>
  <div>
    <div
      class="flex gap-4 px-6 py-4 rounded-tr-md rounded-tl-md bg-primary text-white"
    >
      <p>Author</p>
      <p>Posts</p>
    </div>
    <div class="bg-gray-50 p-6">
      <ProfileProfilecard :user="user" />
    </div>
    <forumPostCard :post="posts" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
definePageMeta({
  layout: "forum",
});
import { useForumStore } from "~/stores/forum";
import { useUserStore } from "~/stores/user";

const route = useRoute();

const store = useForumStore();
const userStore = useUserStore();
const topicId = route.params.id;

console.log(topicId, "id");

const posts = ref([]);
const user = ref(null);

onMounted(async () => {
  posts.value = await store.fetchPostsByTopicid(topicId);
  user.value = await userStore.getUserById("nnZlISMmoXXir6vUPrqGXdXZiI03");
  console.log(posts.value, "fhhfhpost");
});
</script>
