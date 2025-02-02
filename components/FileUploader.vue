<template>
  <div>
    <input type="file" multiple @change="uploadFiles" hidden ref="fileInput" />
    <button
      type="button"
      :disabled="isUploading"
      class="bg-blue-400 p-2 text-white text-sm hover:bg-blue-500 rounded-md"
      @click="selectFiles"
    >
      Select Photo
    </button>
    <div v-if="spinner" class="spinner"></div>
    <div v-for="(file, index) in previews" :key="index">
      <img :src="file.url" alt="preview" />
      <button type="button" @click="removeFile(index)" class="text-red-500">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isUploading: Boolean,
});
const emit = defineEmits(["upload"]);

const previews = ref([]);
const spinner = ref(false);
const fileInput = ref(null);

const selectFiles = () => fileInput.value.click();

const uploadFiles = (event) => {
  const files = Array.from(event.target.files);
  previews.value = files.map((file) => ({
    url: URL.createObjectURL(file),
    file,
  }));
  emit("upload", files);
};

const removeFile = (index) => previews.value.splice(index, 1);
</script>
