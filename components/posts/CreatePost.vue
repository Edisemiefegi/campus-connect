<template>
  <div
    @click.stop
    class="fixed inset-0 z-20 flex items-center w-screen h-screen cursor-pointer justify-center bg-black bg-opacity-20"
  >
    <i
      @click.stop="$emit('close')"
      class="absolute top-4 right-4 m-4 cursor-pointer pi pi-times font-bold"
    >
    </i>
    <div
      class="bg-white mb-36 sm:mb-0 text-black overflow-hidden flex-col rounded-xl sm:w-4/12 w-5/6 flex font-medium h-96"
    >
      <p class="p-3 w-full text-center border-b text-black">Create new Post</p>
      <div class="p-4 flex flex-col gap-6">
        <textarea
          v-model="post.caption"
          placeholder="What's on your mind?"
          class="border-b-2 border-black rounded-t-md p-2 bg-gray-200 outline-none w-full text-black"
        />

        <!-- Image Upload Input  -->
        <div class="max-h-[32%]">
          <uiUploadFile multiple @files="handleUpload">
            <button
              :disabled="isUploading"
              class="bg-blue-400 p-2 text-white text-sm hover:bg-blue-500 rounded-md"
            >
              Select Photo
            </button>
          </uiUploadFile>

          <div
            v-if="spinner"
            class="w-full h-full justify-center flex items-center"
          >
            <i class="pi pi-spin pi-spinner text-blue-600"></i>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-3 h-full overflow-auto w-full">
            <div
              v-for="(image, index) in previewImages"
              :key="index"
              class="relative"
            >
              <img
                :src="image.url"
                alt="preview"
                class="w-full max-h-[6rem] max-w-full object-contain rounded-lg"
              />
              <button :disabled="isUploading">
                <i
                  @click="removeImage(index)"
                  class="absolute top-2 right-2 text-red-500 pi pi-times"
                >
                </i>
              </button>
            </div>
          </div>
        </div>

        <button
          @click="submitPost"
          :disabled="isUploading"
          class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-8"
        >
          {{ isUploading ? "Posting..." : "Post" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePostStore } from "~/stores/post";
import { useAuthStore } from "~/stores/authentication";

const emit = defineEmits(["close"]);
const Poststore = usePostStore();
const AuthStore = useAuthStore();

const post = ref({
  caption: "",
  image: [],
});
const spinner = ref(false);
const isUploading = ref(false);
const previewImages = ref([]);

const handleUpload = async (files) => {
  try {
    spinner.value = true;

    for (const file of files) {
      previewImages.value.push({
        url: URL.createObjectURL(file),
        file, // Store the actual file for upload later
      });
    }

    // console.log(previewImages.value, "url");
  } catch (error) {
    console.log(error.message);
  } finally {
    spinner.value = false;
  }
};

const removeImage = async (index) => {
  previewImages.value.splice(index, 1);
};

const submitPost = async () => {
  try {
    isUploading.value = true;
    const filesToUpload = previewImages.value.map((preview) => preview.file);

    const imageUrls = await Poststore.uploadFile(filesToUpload);

    post.value.image = imageUrls;
    // console.log(post.value);

    await Poststore.createPost(post.value);
    emit("close");
  } catch (error) {
    console.log(error.message);
  } finally {
    isUploading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
