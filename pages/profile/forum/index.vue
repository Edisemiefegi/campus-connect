<template>
  <div class="w-full flex flex-col gap-10">
    <forumTab />
    <forumForumform
      v-if="!selectedForum"
      :forum="forumData"
      @create="createNewForum"
    />
    <forumTopicform
      v-else-if="!selectedTopic"
      :topic="topicData"
      :forum="selectedForum"
      @create="createTopic"
      @skip="reset"
    />
    <forumPostform
      v-else-if="!PostDone"
      :post="postData"
      :topic="selectedTopic"
      :isUploading="isUploading"
      @create="createPost"
      @skip="skipCreatingPost"
    />
    <div v-else>
      <h3 class="text-xl font-semibold">Forum Setup Complete</h3>
      <Button @click="reset" class="my-3">Back to Add Forums</Button>
    </div>
  </div>
</template>

<script setup>
import { useForumStore } from "~/stores/forum";
import { usePostStore } from "~/stores/post";

definePageMeta({
  layout: "profile",
});

const store = useForumStore();
const Poststore = usePostStore();

const forumData = ref({
  name: "",
  description: "",
});
const topicData = ref({
  name: "",
});
const postData = ref({ content: "", file: null });

const selectedForum = ref(null);
const selectedTopic = ref(null);
const PostDone = ref(false);
const isUploading = ref(false);
const previewImages = ref([]);

const createNewForum = async (forum) => {
  const newForumid = await store.createForum(forumData.value);
  selectedForum.value = { id: newForumid, ...forumData.value };
  alert("forum creates successfully");

  forumData.value = { name: "", description: "" };
};

const createTopic = async () => {
  try {
    const topicId = await store.createTopic(
      selectedForum.value.id,
      topicData.value.name
    );
    selectedTopic.value = { id: topicId, name: topicData.value.name };

    // Clear the form fields
    topicData.value.name = "";
  } catch (error) {
    console.error("Error creating topic:", error);
    alert("Failed to create topic.");
  }
};

const createPost = async () => {
  try {
    isUploading.value = true;
    const filesToUpload = previewImages.value.map((preview) => preview.file);

    const imageUrls = await Poststore.uploadFile(filesToUpload);

    postData.value.file = imageUrls;
    // console.log(postData.value.file, "fileel");

    await store.createPost(selectedTopic.value.id, postData.value);
    PostDone.value = true;
    postData.value = { content: "", file: null }; // Reset post form
  } catch (error) {
  } finally {
    isUploading.value = false;
  }
};

const skipCreatingPost = () => {
  PostDone.value = true; // Skip creating post
};
const reset = () => {
  selectedForum.value = null;
  selectedTopic.value = null;
  PostDone.value = false;
};
</script>

<style lang="scss" scoped></style>
