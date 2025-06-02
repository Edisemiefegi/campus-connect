<template>
  <div class="">
    <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
      <announcement
        bgClass="bg-secondary"
        layoutClass="flex-row"
        contentWrapperClass="w-full md:w-4/6"
        iconSrc="/volume.png"
        iconWrapperClass="w-24"
        showCircle
        showcontentWrapperClass
        circleClass="bg-gray-200"
        title="Newsfeed"
        titleClass="text-3xl md:text-5xl text-gray-100"
        description="Check what your friends have been up to!"
        descriptionClass="text-white text-base"
        mainImageSrc="/Team-spirit.svg"
        imageWrapperClass="md:w-2/3"
        shapesImageSrc="/shapes.png"
        shapesWrapperClass="w-80"
      />

      <div class="flex justify-between">
        <div class="w-full md:w-3/5 flex flex-col gap-6">
          <ProfileTab :menuOptions="myMenuOptions" />
          <spinner
            v-if="loading"
            class="!text-black text-2xl flex items-center justify-center h-full w-full"
          />
          <!-- Error Message -->
          <div v-else-if="errorMessage" class="text-red-500 text-center">
            {{ errorMessage }}
          </div>

          <!-- No Posts Message -->
          <div
            v-else-if="allPosts.length === 0"
            class="text-gray-600 text-center"
          >
            No post yet try refreshing
          </div>

          <div v-else class="flex flex-col gap-8">
            <div v-for="item in allPosts" :key="item">
              <postsPostcard :post="item" />
            </div>
          </div>
        </div>

        <div class="bg-white w-4/12 md:block hidden rounded-lg h-52 p-6">
          <p>Suggested</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { usePostStore } from "~/stores/post";
import { showToast } from "@/utils";

definePageMeta({
  layout: "welcome",
});

const loading = ref(false);
const errorMessage = ref("");
const Poststore = usePostStore();

const myMenuOptions = ref([
  { name: " Updates", path: "/dashboard" },
  { name: "Friends", path: "/profile/friends" },
  { name: " Forums", path: "/forums" },
]);

const fetchAllPost = async () => {
  try {
    loading.value = true;
    errorMessage.value = "";
    await Poststore.getAllPosts();
    Poststore.initUserPost();
  } catch (error) {
    errorMessage.value =
      error.message.split("(")[1]?.split(")")[0] ||
      "Unable to fetch posts, try refreshing";
    showToast("error", errorMessage.value);
    console.log(error.message, "err");
    throw error;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchAllPost();
});

const allPosts = computed(() => Poststore.allPosts);
</script>

<style scoped></style>
