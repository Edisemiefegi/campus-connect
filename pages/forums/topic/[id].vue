<template>
  <div>
    <div
      class="flex gap-4 px-6 py-4 rounded-tr-md rounded-tl-md bg-primary text-white"
    >
      <p>Author</p>
      <p>Posts</p>
    </div>
    <div class="bg-gray-50 p-6">
      <ProfileProfilecard />
    </div>
    <forumPostCard :post="topicData" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
definePageMeta({
  layout: "forum",
});

const route = useRoute();

// const activeTopic = computed(() => {
//   return forumData.value.find(
//     (element) => element.id === Number(route.params.id)
//   );
// });

const topicData = ref({
  id: 1,
  name: "Introduction",
  posts: [
    {
      user: "",
      Subheading: "sub heading",
      content:
        "lorem loreme kjeidj sjsj sjsj jsjs sj sjsjjs sjsjs sjjsjs sjjsj",
      comments: 4,
      image: "/me.jpg",
      time: "May 31, 2024 at 5:55am",
    },
    {
      user: "",
      Subheading: "sub heading",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis saepe placeat labore mollitia voluptas illum fuga distinctio pariatur maiores! Atque dolorum iure dolores odio, at quia magnam consequuntur condignissimos necessitatibus cumque enim provident qui, optio aperiam,nihil perspiciatis! Consectetur?",
      comments: 4,
      image: "",
      time: "May 31, 2024 at 5:55am",
    },
  ],
  description: "short description",
});

console.log(topicData.value.posts);
</script>
