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

          <div v-for="item in myPosts" :key="item">
            <postsPostcard :post="item" />
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

definePageMeta({
  layout: "welcome",
});

const myMenuOptions = ref([
  { name: " Updates", path: "/dashboard" },
  { name: "Friends", path: "/profile/friends" },
  { name: " Forums", path: "/forums" },
  // Add more options as needed
]);

const myPosts = ref([
  {
    id: 1,
    caption:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius sintag a esse, ut nostrum!",
    image: "/me.jpg",
  },
  {
    id: 2,
    caption:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius sintag a esse, ut nostrum!",
    image: "/me.jpg",
  },
  // Add more posts as needed
]);
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 4px solid #183a37;
  color: #183a37;
  font-weight: bold;
}
</style>
