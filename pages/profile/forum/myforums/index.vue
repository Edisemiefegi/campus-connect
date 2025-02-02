<template>
  <div class="w-full">
    <div class="flex flex-col gap-10">
      <forumTab />
      <p>
        You have
        <span class="font-bold">
          {{ myforums.length }}
        </span>
        forums created
      </p>
      <ul
        class="flex flex-col gap-6"
        v-for="(forum, index) in myforums"
        :key="forum.forumid"
      >
        <li class="py-2 flex justify-between px-4 border-b border-primary">
          <button
            @click="openForum(forum.forumid)"
            class="font-semibold cursor-pointer"
          >
            {{ index + 1 }}. {{ forum.name }}
          </button>
          <i class="pi pi-trash text-red-600"></i>
          <div
            v-if="showmodal"
            class="fixed inset-0 flex items-center justify-center"
          >
            <div class="bg-white rounded-md shadow-lg p-4 relative">
              <p class="text-sm">
                Note all topics and posts under this forum will be deleted.
              </p>
              <button class="text-red-600" @click="deleteforum">OK</button>
            </div>
            <div
              class="fixed inset-0 bg-black opacity-50"
              @click="closeModal"
            ></div>
          </div>
        </li>
      </ul>

      <h1 v-if="!myforums.length" class="text-xl font-semibold">
        You dont have any forum created!
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
const router = useRouter();

onMounted(() => {
  store.initUserForum();
});

const showmodal = ref(false);

const myforums = computed(() => store.userForums);

const deleteforum = (forum) => {
  showmodal.value = true;
};

const closeModal = () => {
  showmodal.value = false;
};

const openForum = (id) => {
  router.push(`/profile/forum/myforums/${id}`);
};
</script>

<style lang="scss" scoped></style>
