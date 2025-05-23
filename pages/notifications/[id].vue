<template>
  <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
    <announcement
      bgClass="bg-secondary"
      layoutClass="flex-row"
      contentWrapperClass="w-full md:w-4/6 "
      iconSrc="/envelopes.svg"
      iconWrapperClass="w-24"
      showCircle
      showcontentWrapperClass
      circleClass="bg-gray-200 "
      title="My Notifications"
      titleClass="text-3xl md:text-5xl text-gray-100 "
      description=""
      descriptionClass="text-white text-base"
      mainImageSrc="/notifications.svg"
      imageWrapperClass=" hidden w-full pt-2  md:w-2/3 md:block "
      shapesImageSrc="/shapes.png"
      shapesWrapperClass="w-80"
    />

    <div class="w-full mx-auto bg-white p-6 rounded shadow">
      <h2 class="text-xl font-semibold mb-2">{{ notification?.title }}</h2>
      <p class="text-sm text-gray-600 mb-4">{{ notification?.time }}</p>
      <p class="text-base text-gray-800">{{ notification?.message }}</p>

      <NuxtLink
        to="/notifications"
        class="text-blue-600 text-sm mt-6 inline-block hover:underline"
      >
        ← Back to Notifications
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const notification = ref(null);

const dummyNotifications = [
  {
    id: 1,
    title: "New Forum Reply",
    message: "Alex replied to your post in “Study Group for CSC101”.",
    type: "info",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Event Reminder",
    message: "Hackathon begins tomorrow at 9:00 AM. Join early!",
    type: "warning",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 3,
    title: "New Friend Request",
    message: "Grace just sent you a friend request.",
    type: "success",
    time: "3 hours ago",
    read: false,
  },
];

onMounted(() => {
  const id = Number(route.params.id);
  const found = dummyNotifications.find((n) => n.id === id);

  if (!found) {
    router.push("/notifications"); // redirect if not found
  } else {
    found.read = true; // mark as read when opened
    notification.value = found;
  }
});
</script>
