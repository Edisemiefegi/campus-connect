<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="px-4 py-2 border-b-2" v-if="!activeForum">Forum</th>
          <th class="px-4 py-2 border-b-2">Topics</th>
          <th class="px-4 py-2 border-b-2">Posts</th>
        </tr>
      </thead>
      <tbody>
        <!-- Forum List -->
        <template v-if="!activeForum">
          <tr v-for="forum in forums" :key="forum.id" class="cursor-pointer">
            <td class="px-4 py-2 border-b" @click="goToForum(forum)">
              {{ forum.name }}
            </td>
            <td class="px-4 py-2 border-b">
              {{ forum.topics?.length }}
            </td>
            <td class="px-4 py-2 border-b">{{ forum.posts }}</td>
          </tr>
        </template>

        <!-- Topic List -->
        <!-- <template v-else>
          <tr
            v-for="topic in activeForum.topics"
            :key="topic.id"
            class="cursor-pointer"
            @click="goToTopic(topic.id)"
          >
            <td class="px-4 py-2 border-b text-blue-500">{{ topic.name }}</td>
            <td class="px-4 py-2 border-b">{{ topic.posts }}</td>
          </tr>
          <tr>
            <td
              colspan="2"
              class="px-4 py-2 border-b text-center text-blue-500 cursor-pointer"
              @click="resetTable"
            >
              Back to Forums
            </td>
          </tr>
        </template> -->

        <!-- <template v-else>
          <tr v-for="topic in activeForum.topics" :key="topic.id">
            <td class="px-4 py-2 border-b">{{ topic.name }}</td>
            <td class="px-4 py-2 border-b">{{ topic.posts }}</td>
          </tr>
          <tr>
            <td
              colspan="2"
              class="px-4 py-2 border-b text-center text-blue-500 cursor-pointer"
              @click="resetTable"
            >
              Back to Forums
            </td>
          </tr>
        </template> -->
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  forums: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

const activeForum = ref(null);

const goToForum = (forum) => {
  console.log(activeForum.value, "active forum");

  router.push(`/forums/forum/${forum.id}`);

  activeForum.value = forum;
  console.log(activeForum.value, "active forum");
};

// const resetTable = () => {
//   activeForum.value = null;
// };
</script>

<style scoped>
/* You can add custom styles here */
</style>
