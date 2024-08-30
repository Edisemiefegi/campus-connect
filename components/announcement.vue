<!-- <template>
  <div class="w-full h-56 relative overflow-hidden bg-secondary rounded-lg">
    <div class="absolute inset-0 flex justify-between w-full z-20">
      <div class="p-12 flex gap-4 w-3/6">
        <div class="w-36 md:w-20 h-full">
          <img
            src="/public/volume.png"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
        <div class="h-16 p-0.5 rounded-full bg-white"></div>
        <div class="">
          <p class="font-bold text-2xl md:text-4xl text-white">Newsfeed</p>
          <p class="text-white text-sm mt-3">
            Check what your friends have been up to!
          </p>
        </div>
      </div>
      <div class="md:w-80 w-3/6">
        <img
          src="/public/Team-spirit.svg"
          alt=""
          class="w-full h-full object-cover md:object-contain"
        />
      </div>
    </div>

    <div class="absolute w-96 right-44 -top-10">
      <img
        src="/public/shapes.png"
        alt=""
        class="w-full h-full object-contain"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
- -->

<template>
  <div :class="['w-full h-56 relative overflow-hidden rounded-lg', bgClass]">
    <div :class="['absolute inset-0 flex w-full z-20', layoutClass]">
      <!-- Section for icon, title, and description -->
      <div
        v-if="showcontentWrapperClass"
        :class="['p-12 flex gap-4', contentWrapperClass]"
      >
        <div v-if="iconSrc" :class="['h-full', iconWrapperClass]">
          <img :src="iconSrc" alt="Icon" class="w-full h-full object-contain" />
        </div>
        <div
          v-if="showCircle"
          :class="['h-16 p-0.5 rounded-full', circleClass]"
        ></div>
        <div>
          <p :class="['font-bold', titleClass]">{{ title }}</p>
          <p :class="['mt-3', descriptionClass]">{{ description }}</p>
        </div>
      </div>

      <div
        :class="'p-12 w-full md:flex-row flex-col flex md:items-center justify-between'"
      >
        <!-- Section for profile card and location -->
        <div v-if="showProfile" :class="['w-full', profileWrapperClass]">
          <ProfileProfilecard :class="profileCardClass" />
          <p :class="['ml-20 -mt-7 text-sm', locationClass]">{{ location }}</p>
        </div>

        <!-- Section for statistics -->
        <div
          v-if="showProfile"
          :class="['flex justify-between text-white', statsWrapperClass]"
        >
          <p>Post: {{ postCount }}</p>
          <p>Friends: {{ friendsCount }}</p>
          <p>Forums: {{ forumsCount }}</p>
        </div>
      </div>

      <!-- Section for main image -->
      <div
        v-if="mainImageSrc && showcontentWrapperClass"
        :class="['w-full h-full', imageWrapperClass]"
      >
        <img
          :src="mainImageSrc"
          alt="Main Image"
          class="md:w-full h-full object-contain"
        />
      </div>
    </div>

    <!-- Section for additional shapes image -->
    <div
      v-if="shapesImageSrc"
      :class="['absolute right-44 -top-10', shapesWrapperClass]"
    >
      <img
        :src="shapesImageSrc"
        alt="Shapes"
        class="w-full h-full object-contain"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  bgClass: {
    type: String,
    default: "bg-secondary",
  },
  layoutClass: {
    type: String,
    default: "justify-between md:flex-row flex-col",
  },
  contentWrapperClass: {
    type: String,
    default: "w-full md:w-3/6",
  },
  showcontentWrapperClass: {
    type: Boolean,
    default: false,
  },
  iconSrc: {
    type: String,
    default: "/public/volume.png",
  },
  iconWrapperClass: {
    type: String,
    default: "w-36 md:w-20",
  },
  showCircle: {
    type: Boolean,
    default: true,
  },
  circleClass: {
    type: String,
    default: "bg-white",
  },
  title: {
    type: String,
    default: "Newsfeed",
  },
  titleClass: {
    type: String,
    default: "text-2xl md:text-4xl text-white",
  },
  description: {
    type: String,
    default: "Check what your friends have been up to!",
  },
  descriptionClass: {
    type: String,
    default: "text-white text-sm",
  },
  showProfile: {
    type: Boolean,
    default: false,
  },
  profileWrapperClass: {
    type: String,
    default: "md:w-3/6",
  },
  profileCardClass: {
    type: String,
    default: "text-white text-xl",
  },
  location: {
    type: String,
    default: "United States of America",
  },
  locationClass: {
    type: String,
    default: "text-white",
  },
  showStats: {
    type: Boolean,
    default: true,
  },
  statsWrapperClass: {
    type: String,
    default: "md:w-4/12",
  },
  postCount: {
    type: Number,
    default: 4,
  },
  friendsCount: {
    type: Number,
    default: 4,
  },
  forumsCount: {
    type: Number,
    default: 4,
  },
  mainImageSrc: {
    type: String,
    default: "/public/Team-spirit.svg",
  },
  imageWrapperClass: {
    type: String,
    default: "",
  },
  shapesImageSrc: {
    type: String,
    default: "/public/shapes.png",
  },
  shapesWrapperClass: {
    type: String,
    default: "w-96",
  },
});
</script>

<style lang="scss" scoped></style>
