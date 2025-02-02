<template>
  <div class="w-full">
    <div class="flex flex-col gap-10">
      <forumTab />
      <p>
        You have
        <span class="font-bold">
          {{ mytopics?.length }}
        </span>
        Topics created
      </p>
      <div v-if="mytopics.length > 0">
        <ul
          class="flex flex-col gap-6"
          v-for="(topic, index) in mytopics"
          :key="index"
        >
          <li class="py-2 px-4 border-b border-primary">
            <button
              @click="openTopic(topic.topicid)"
              class="font-semibold cursor-pointer"
            >
              {{ index + 1 }}. {{ topic.topic }}
            </button>
          </li>
        </ul>
      </div>

      <h1 v-else class="text-xl font-semibold">
        No topic available for this forum.
      </h1>
    </div>
  </div>
</template>

<script setup>
import { useForumStore } from "~/stores/forum";
definePageMeta({
  layout: "profile",
});

const store = useForumStore();
onMounted(() => {
  store.initUserTopic();
});

const router = useRouter();

const mytopics = computed(() => store.userTopics);

const openTopic = (id) => {
  router.push(`/profile/forum/mytopics/${id}`);
};
</script>

<style lang="scss" scoped></style>
