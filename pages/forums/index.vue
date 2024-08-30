<template>
  <div>
    <div class="flex flex-col gap-8">
      <!-- search -->
      <div class="p-4 rounded-md bg-white w-full flex">
        <input
          type="text"
          placeholder="Search for:"
          class="outline-none border text-sm rounded-md w-11/12 p-3"
        />
        <div
          class="flex justify-center items-center rounded-br-md rounded-tr-md bg-primary w-2/12"
        >
          <i class="pi pi-search text-white"></i>
        </div>
      </div>

      <!-- forum table -->
      <div class="h-full bg-white">
        <div
          class="grid grid-cols-4 w-full bg-primary text-white rounded-tr-md rounded-tl-md"
        >
          <p class="p-6 border-r col-span-2">Forum</p>
          <p class="p-6 border-r">Topics</p>
          <p class="p-6">Posts</p>
        </div>

        <div
          v-for="forum in forumData"
          :key="forum.id"
          class="grid grid-cols-4 text-gray-400"
        >
          <div
            class="p-6 border-b col-span-2 border-r flex-col md:flex-row flex gap-2"
          >
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img
                :src="forum.image"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-3/4">
              <p
                class="font-semibold text-black mb-2 text-bold cursor-pointer"
                @click="goToForum(forum)"
              >
                {{ forum.name }}
              </p>
              <p>{{ forum.description }}</p>
            </div>
          </div>
          <p class="p-6 border-b border-r">
            {{ forum.topics?.length }}
          </p>
          <p class="p-6 border-b">{{ forum.posts }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

definePageMeta({
  layout: "forum",
});

const forumData = [
  {
    id: 1,
    image: "/me.jpg",

    name: "GeneralDiscussion ",
    description: "short description",
    topics: [
      { id: 1, name: "Introduction", posts: 15 },
      { id: 2, name: "Community Guidelines", posts: 8 },
    ],
    posts: 23,
  },
  {
    id: 2,
    image: "/me.jpg",

    name: "Technical Support",
    description: "short description dhdhd ddjjjd djjdjdj djdjdj djdjdj jdjdj",

    topics: [
      { id: 1, name: "Troubleshooting", posts: 45 },
      { id: 2, name: "FAQ", posts: 32 },
    ],
    posts: 77,
  },
];

const goToForum = (forum) => {
  console.log(forum, "active forum");

  router.push(`/forums/forum/${forum.id}`);
};
</script>

<style lang="scss" scoped></style>
