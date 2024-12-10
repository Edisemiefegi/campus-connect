<template>
  <div class="">
    <div
      class="w-full h-32 flex gap-8 items-center rounded-lg relative bg-white overflow-hidden"
    >
      <div class="w-2/6 md:w-[2%5] lg:w-[19%] h-full">
        <img
          src="/cover.jpg"
          alt=""
          class="object-cover relative w-full h-full z-10"
        />
        <div
          class="w-16 justify-center items-center h-16 absolute top-5 md:top-9 left-5 md:left-10 z-20 flex gap-6 rounded-full border-dashed border-2 p-1"
        >
          <img
            v-if="user?.image"
            :src="user?.image"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
          <i class="pi pi-user" v-else></i>
        </div>
      </div>
      <div class="flex gap-1 flex-col lg:flex-row justify-between w-[70%]">
        <div>
          <p class="text-xl font-semibold text-primary">
            {{ user.PersonalInfo.username }}
          </p>
          <p class="text-gray-400">lorem</p>
        </div>
        <div class="flex gap-3 h-fit">
          <Button
            :bgColor="'bg-primary'"
            :textColor="'text-white'"
            :rounded="'rounded-md'"
            :size="'sm'"
            >Chat</Button
          >

          <Button
            @click="handleFriends"
            :rounded="'rounded-md'"
            :size="'sm'"
            :class="follow ? 'bg-red-500' : 'bg-primary'"
          >
            <span v-if="!follow">Friend</span>
            <span v-else>Unfriend</span></Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useUserStore } from "~/stores/user";
import { useAuthStore } from "~/stores/authentication";

const props = defineProps({
  user: {
    type: Object,
  },
});

const store = useUserStore();
const authstore = useAuthStore();

// console.log(props.user, "use");
const follow = computed(() => {
  return authstore?.loginUser?.friends?.includes(props?.user?.id);
});

const handleFriends = async () => {
  // console.log(follow.value, "friends");
  await store.handleFriendsFunc(props.user.id);
};
</script>

<style lang="scss" scoped></style>
