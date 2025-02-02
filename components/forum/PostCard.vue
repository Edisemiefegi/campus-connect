<template>
  <div class="flex flex-col gap-6">
    <div v-for="item in post" :key="item" class="flex flex-col border bg-white">
      <div
        class="flex text-sm border-b p-6 text-gray-400 font-semibold items-center gap-1"
      >
        <i class="pi pi-calendar text-primary"></i>
        <p>{{ formattedDate }}</p>
      </div>

      <div class="flex p-6 flex-col gap-4">
        <!-- <p class="text-black font-semibold">{{ item?.Subheading }}</p> -->

        <div class="w-full h-full" v-if="item?.image">
          <img :src="item?.image" alt="" class="w-full h-full object-cover" />
        </div>
        <p class="text-gray-500">
          {{ item?.content }}
        </p>

        <div class="flex justify-between">
          <div class="flex gap-4">
            <i class="pi pi-heart"></i>
            <i class="pi pi-bookmark"></i>
          </div>
          <div class="flex gap-3 justify-center items-center">
            <p>{{ item.comment }}</p>
            <i class="pi pi-comment"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  if (!props.post || !props.post.createdAt || !props.post.createdAt.seconds) {
    return "Date not available";
  }

  const timestampFromFirebase = new Date(props.post.createdAt.seconds * 1000);

  const relativeTime = moment(timestampFromFirebase).fromNow();

  return relativeTime;
});

console.log(props.post, "post");
</script>

<style lang="scss" scoped></style>
