<template>
  <form @submit.prevent="submit">
    <p class="mb-2">
      Create post under <span class="font-bold"> {{ topic.topic }}</span>
    </p>
    <textarea
      v-model="post.content"
      placeholder="Enter post content"
      class="w-full p-2 border rounded-md"
    ></textarea>
    <FileUploader @upload="handleUpload" :isUploading="isUploading" />
    <Button type="submit" :disabled="isUploading" class="my-3 mr-3"
      >Create Post</Button
    >
    <Button type="button" @click="$emit('skip')">Skip</Button>
  </form>
</template>

<script setup>
const props = defineProps({
  post: { type: Object, required: true },
  isUploading: { type: Boolean, default: false },
  topic: { type: Object },
});
const emit = defineEmits(["create", "skip"]);

console.log(props.topic, "topiccs");

const handleUpload = (files) => {
  props.post.file = files;
};

const submit = () => {
  emit("create", props.post);
};
</script>
