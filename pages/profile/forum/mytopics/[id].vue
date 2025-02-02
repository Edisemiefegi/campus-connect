<template>
  <div class="w-full">
    <div class="flex flex-col gap-10">
      <forumTab />

      <div class="flex items-center gap-5">
        <p>
          You have
          <span class="font-bold">
            {{ posts?.length }}
          </span>
          Topics in
          <span class="font-bold">
            {{ topicName?.topic }}
          </span>
        </p>
        <div
          @click="createnew = true"
          class="bg-blue-500 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        >
          <i class="pi pi-plus text-white"></i>
        </div>
      </div>
      <forumPostform
        v-if="createnew"
        :post="postData"
        :topic="topicName"
        :isUploading="isUploading"
        @create="createPost"
        @skip="skipCreatingPost"
      />

      <div v-else>
        <ul class="flex flex-col gap-6" v-if="posts.length > 0">
          <li>
            <ForumPostCard :post="posts" />
          </li>
        </ul>
        <p v-else class="text-xl font-semibold">
          No posts available for this topic.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForumStore } from "~/stores/forum";
import { usePostStore } from "~/stores/post";

definePageMeta({
  layout: "profile",
});

const route = useRoute();
const posts = ref([]);
const topicName = ref("");
const topicId = route.params.id;

const createnew = ref(false);
const Poststore = usePostStore();

const store = useForumStore();
const isUploading = ref(false);
const previewImages = ref([]);
const postData = ref({ content: "", file: null });

const mytopics = computed(() => store.userTopics);

onMounted(async () => {
  store.initUserTopic();
  posts.value = await store.fetchPostsByTopicid(topicId);

  //   console.log(posts.value, "jhhshshh");

  const currenttopic = mytopics.value.find((t) => t.topicid === topicId);
  topicName.value = currenttopic;
});

const createPost = async (topic) => {
  try {
    isUploading.value = true;
    const filesToUpload = previewImages.value.map((preview) => preview.file);

    const imageUrls = await Poststore.uploadFile(filesToUpload);

    postData.value.file = imageUrls;
    console.log(postData.value.file, "fileel");

    await store.createPost(topicId, postData.value);
    PostDone.value = true;
    postData.value = { content: "", file: null }; // Reset post form
    createnew.value = false;
  } catch (error) {
  } finally {
    isUploading.value = false;
  }
};

const skipCreatingPost = () => {
  console.log("skip");
};
</script>

<style lang="scss" scoped></style>
