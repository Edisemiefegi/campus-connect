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
          v-for="forum in forums"
          :key="forum.id"
          class="grid grid-cols-4 text-gray-400"
        >
          <div
            class="p-6 border-b col-span-2 border-r flex-col md:flex-row flex gap-2"
          >
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img
                :src="forum?.image"
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
            {{ forum?.topics?.length }}
          </p>
          <p class="p-6 border-b">
            {{
              forum.topics.reduce(
                (total, topic) =>
                  total + (topic.posts ? topic.posts.length : 0),
                0
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useForumStore } from "~/stores/forum";

const router = useRouter();
const store = useForumStore();

definePageMeta({
  layout: "forum",
});

const forums = ref([]);
const forumData = computed(() => store.userForums);

onMounted(async () => {
  store.initUserForum();

  forums.value = await Promise.all(
    forumData.value.map(async (f) => {
      const topics = await store.fetchTopicByForumid(f.forumid);
      return {
        ...f,
        topics,
      };
    })
  );

  console.log(forums.value, "footossi");
});

const goToForum = (forum) => {
  console.log(forum, "active forum");
  console.table(forum, "table");

  router.push(`/forums/forum/${forum.forumid}`);
};
</script>

<style lang="scss" scoped></style>
