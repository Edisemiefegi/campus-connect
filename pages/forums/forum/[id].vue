<template>
  <div class="">
    <div class="font-semibold text-gray-500 mb-5">
      <p>
        There are {{ topics?.length }} topics and {{ topics?.posts?.length }} in
        this Forum
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
        v-for="topic in topics"
        :key="topic.topicid"
        @click="goToTopic(topic.topicid)"
        class="grid grid-cols-3 text-gray-400"
      >
        <div
          class="p-6 col-span-2 border-b border-r flex flex-col md:flex-row gap-2"
        >
          <!-- <div class="w-12 h-12 rounded-full overflow-hidden">
            <img
              :src="topic?.image"
              alt=""
              class="w-full h-full object-cover"
            />
          </div> -->
          <div class="md:w-3/4 w-full">
            <p
              class="font-semibold cursor-pointer text-black mb-2 text-bold"
              @click="goToTopic(topic)"
            >
              {{ topic.topic }}
            </p>
          </div>
        </div>

        <p class="p-6 border-b">{{ topic?.posts?.length }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useForumStore } from "~/stores/forum";

const store = useForumStore();

definePageMeta({
  layout: "forum",
});
const route = useRoute();
const router = useRouter();
const forumId = route.params.id;

const topics = ref([]);

onMounted(async () => {
  topics.value = await store.fetchTopicByForumid(forumId);
  console.log(topics.value, "fhhfh");
});

const goToTopic = (topic) => {
  router.push(`/forums/topic/${topic}`);
};
</script>
