<template>
  <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
    <announcement
      bgClass="bg-secondary"
      layoutClass="flex-row"
      contentWrapperClass="w-full md:w-4/6 "
      iconSrc="/chat.svg"
      iconWrapperClass="w-24"
      showCircle
      showcontentWrapperClass
      circleClass="bg-gray-200 "
      title="Chats"
      titleClass="text-3xl md:text-5xl text-gray-100 "
      description=""
      descriptionClass="text-white text-base"
      mainImageSrc="/messaging.svg"
      imageWrapperClass=" hidden w-full pt-2  md:w-2/3 md:block "
      shapesImageSrc="/shapes.png"
      shapesWrapperClass="w-80"
    />
    <div>
      <!-- Chat Header -->
      <div class="sticky top-0 z-10 bg-white p-4 shadow text-lg font-semibold">
        {{ chat?.name }}
      </div>

      <!-- Messages Area -->
      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        <chatMessage
          v-for="(msg, index) in chat?.messages"
          :key="index"
          :message="msg"
        />
      </div>

      <!-- Input Area -->
      <div class="sticky bottom-0 z-10">
        <chatInput @send="handleSend" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useChats } from "~/composables/useChats";

definePageMeta({ layout: "welcome" });

const { getChatById, sendMessage } = useChats();
const route = useRoute();
const chatId = Number(route.params.id);
const chat = getChatById(chatId);

const handleSend = (msg) => {
  if (msg.trim()) {
    sendMessage(chatId, msg);
  }
};
</script>
