<template>
  <div>
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

      <div class="w-full md:w-3/5 flex flex-col gap-12">
        <div class="space-y-4 w-full">
          <notificationsCard
            v-for="(notification, index) in notifications"
            :key="index"
            :id="notification.id"
            :title="notification.title"
            :message="notification.message"
            :type="notification.type"
            :time="notification.time"
            :read="notification.read"
            @markAsRead="markAsRead(index, notification.id)"
          />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});

const notifications = ref([
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
]);
const router = useRouter();

const markAsRead = (index, id) => {
  try {
    notifications.value[index].read = true;
    router.push(`/notifications/${id}`);
  } catch (error) {
  } finally {
    notifications.value[index].read = false;
  }
};
</script>

<style lang="scss" scoped></style>
