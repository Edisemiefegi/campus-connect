<template>
  <div class="">
    <div class="font-semibold text-gray-500 mb-5">
      <p>
        There are {{ activeForum.topics.length }} topics and
        {{ activeForum.posts }} in this Forum
      </p>
    </div>

    <div class="h-full bg-white">
      <div
        class="grid grid-cols-3 w-full bg-primary text-white rounded-tr-md rounded-tl-md"
      >
        <p class="p-6 border-r col-span-2">Topics</p>
        <p class="p-6">Posts</p>
      </div>

      <div
        v-for="topic in activeForum.topics"
        :key="topic.id"
        @click="goToTopic(topic.id)"
        class="grid grid-cols-3 text-gray-400"
      >
        <div
          class="p-6 col-span-2 border-b border-r flex flex-col md:flex-row gap-2"
        >
          <div class="w-12 h-12 rounded-full overflow-hidden">
            <img
              :src="activeForum.image"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-3/4 w-full">
            <p
              class="font-semibold cursor-pointer text-black mb-2 text-bold"
              @click="goToTopic(topic)"
            >
              {{ topic.name }}
            </p>
            <p>{{ topic.description }}</p>
          </div>
        </div>

        <p class="p-6 border-b">{{ topic.posts }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";

definePageMeta({
  layout: "forum",
});
const route = useRoute();
const router = useRouter();

const forumData = ref([
  {
    id: 1,
    image: "/me.jpg",

    name: "GeneralDiscussion ",
    description: "short description",
    topics: [
      {
        id: 1,
        name: "Introduction",
        posts: 15,
        description: "short description",
      },
      {
        id: 2,
        name: "Community Guidelines",
        posts: 8,
        description: "short description",
      },
    ],
    posts: 23,
  },
  {
    id: 2,
    image: "/me.jpg",

    name: "Technical Support",
    description: "short description dhdhd ddjjjd djjdjdj djdjdj djdjdj jdjdj",

    topics: [
      {
        id: 1,
        name: "Troubleshooting",
        posts: 45,
        description: "short description",
      },
      { id: 2, name: "FAQ", posts: 32, description: "short description" },
    ],
    posts: 77,
  },
]);

const activeForum = computed(() => {
  return forumData.value.find(
    (element) => element.id === Number(route.params.id)
  );
});

const goToTopic = (topic) => {
  router.push(`/forums/topic/${topic.id}`);
};

console.log(activeForum.value, activeForum.value.topics, "data");
</script>
