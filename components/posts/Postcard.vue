<template>
  <div class="bg-white w-full h-fit rounded-lg p-8 flex flex-col gap-5">
    <div class="flex justify-between relative">
      <div>
        <ProfileProfilecard :user="post?.user" />
        <p class="text-sm text-gray-400 mt-2">{{ formattedDate }}</p>
      </div>
      <i class="pi pi-ellipsis-v cursor-pointer" @click="show = true"></i>
      <div v-if="show" class="absolute right-4 mt-4 z-20">
        <div class="relative">
          <Button @click="handleFriends" :class="follow ? 'bg-red-500' : ''">
            <span v-if="!follow">Friend</span>
            <span v-else>Unfriend</span></Button
          >
          <i
            class="pi pi-times text-xs absolute -top-5 right-1 cursor-pointer"
            @click="show = false"
          ></i>
        </div>
      </div>
    </div>
    <p>
      {{ post?.caption }}
    </p>
    <div
      v-if="post?.image && post?.image.length > 0"
      class="w-full h-fit rounded-lg overflow-hidden"
    >
      <img
        v-if="post?.image.length === 1"
        :src="post?.image[0]"
        alt="Post image"
        class="object-cover w-full h-full cursor-pointer"
      />

      <!-- Grid layout for 2 to 4 images -->
      <div v-else-if="post?.image?.length > 1" class="grid grid-cols-2 gap-4">
        <img
          v-for="(image, index) in post?.image"
          :key="index"
          :src="image"
          alt="Post Image"
          class="h-auto object-cover cursor-pointer"
        />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex gap-4">
        <div class="flex justify-center gap-1">
          <p class="-mt-1">{{ post?.likedBy?.length }}</p>
          <i
            class="pi pi-heart cursor-pointer"
            @click="likeFunc()"
            :class="liked ? 'text-red-600 ' : ''"
          ></i>
        </div>
        <i
          class="pi pi-bookmark cursor-pointer"
          @click="favFunc()"
          :class="fav ? 'text-red-600 ' : ''"
        ></i>
      </div>
      <div class="flex gap-3 justify-center items-center">
        <p>4</p>
        <i class="pi pi-comment"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import moment from "moment";
import { usePostStore } from "~/stores/post";
import { useAuthStore } from "~/stores/authentication";
import { useUserStore } from "~/stores/user";

const store = usePostStore();
const Authstore = useAuthStore();
const userStore = useUserStore();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const show = ref(false);

// console.log(props.post, "ddjdj");

const formattedDate = computed(() => {
  if (!props.post || !props.post.createdAt || !props.post.createdAt.seconds) {
    return "Date not available";
  }

  const timestampFromFirebase = new Date(props.post.createdAt.seconds * 1000);

  // Convert to relative time using Moment.js
  const relativeTime = moment(timestampFromFirebase).fromNow();

  return relativeTime;
});

const liked = computed(() => {
  return props?.post?.likedBy?.includes(Authstore.loginUser.id);
});

const fav = computed(() => {
  return store?.favPosts?.find((e) => e.post.postid === props.post.postid);
});

const likeFunc = async () => {
  await store.likesfunc(props.post, Authstore.loginUser.id);
};

const favFunc = async () => {
  // console.log(store.favPosts, "sjjd");

  await store.favPostfunc(props.post, Authstore.loginUser.id);
};

const follow = computed(() => {
  return Authstore?.loginUser?.friends?.includes(props?.post?.userid);
});

const handleFriends = async () => {
  console.log(follow.value, "friends");
  await userStore.handleFriendsFunc(props.post.userid);
};
</script>

<style lang="scss" scoped></style>
