<template>
  <div class="w-full">
    <div class="flex flex-col gap-10">
      <forumTab />
      <div class="flex items-center gap-5">
        <p>
          You have
          <span class="font-bold">
            {{ topics?.length }}
          </span>
          Topics in
          <span class="font-bold">
            {{ forumName.name }}
          </span>
        </p>

        <div
          @click="createnew = true"
          class="bg-blue-500 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        >
          <i class="pi pi-plus text-white"></i>
        </div>
      </div>

      <forumTopicform
        v-if="createnew"
        :topic="topicData"
        :forum="forumName"
        @create="newTopic"
        @skip="reset"
      />

      <ul
        v-else
        class="flex flex-col gap-6"
        v-for="(topic, index) in topics"
        :key="index"
      >
        <li
          class="py-2 px-4 flex justify-between border-b relative border-primary"
        >
          <button
            @click="openTopic(topic.topicid)"
            class="font-semibold cursor-pointer"
          >
            {{ index + 1 }}. {{ topic.topic }} ({{ topic?.posts?.length }}
            posts)
          </button>
          <i
            @click="confirmDelete(topic.topicid)"
            class="pi pi-trash text-red-500 cursor-pointer"
          ></i>
          <div
            v-if="showmodal && itemToDelete == topic.topicid"
            class="absolute top-8 right-2 flex items-center justify-center"
          >
            <div class="bg-white rounded-md shadow-lg p-4 relative">
              <p class="text-sm">
                Note all posts under this forum will be deleted.
              </p>
              <button
                class="text-red-600 cursor-pointer"
                @click="deletetopic(topic)"
              >
                OK
              </button>
              <button @click="showmodal = false" class="text-primary ml-3">
                Cancel
              </button>
            </div>
          </div>
        </li>
      </ul>

      <h1 v-if="!topics?.length" class="text-xl font-semibold">
        You dont have any topic created!
      </h1>
    </div>
  </div>
</template>

<script setup>
import { useForumStore } from "~/stores/forum";
definePageMeta({
  layout: "profile",
});

const route = useRoute();
const router = useRouter();
const topics = ref([]);
const forumName = ref("");
const forumId = route.params.id;
const showmodal = ref(false);
const createnew = ref(false);
const itemToDelete = ref(null);
const topicData = ref({
  name: "",
});

const store = useForumStore();

const myforums = computed(() => store.userForums);

onMounted(async () => {
  store.initUserForum();
  store.initUserTopic();
  topics.value = await store.fetchTopicByForumid(forumId);

  const currentforum = myforums.value.find((f) => f.forumid === forumId);
  forumName.value = currentforum;
  console.log(forumName.value);
});
const deletetopic = (forum) => {
  // showmodal.value = true;
  console.log(forum, "forum to be deleted");
};

const confirmDelete = (Id) => {
  itemToDelete.value = Id;
  showmodal.value = true;
};

const newTopic = async () => {
  try {
    await store.createTopic(forumId, topicData.value.name);
    // selectedTopic.value = { id: topicId, name: topicData.value.name };
    console.log(topicData.value.name, "topicnae ");
    alert("topic created successfull");

    // // Clear the form fields
    topicData.value.name = "";
    createnew.value = false;
  } catch (error) {
    console.error("Error creating topic:", error);
    alert("Failed to create topic.");
  }
};

const openTopic = (id) => {
  router.push(`/profile/forum/mytopics/${id}`);
};

const Cancel = () => {
  console.log("skip");
};
</script>

<style lang="scss" scoped></style>
