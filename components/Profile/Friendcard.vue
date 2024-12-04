<template>
  <div class="">
    <div
      class="w-full h-32 flex gap-8 items-center rounded-lg relative bg-white overflow-hidden"
    >
      <div class="w-2/6 md:w-[2%5] lg:w-[19%] h-full">
        <img
          :src="user?.image"
          alt=""
          class="object-cover relative w-full h-full z-10"
        />
        <div
          class="w-16 h-16 absolute top-5 md:top-9 left-5 md:left-10 z-20 flex gap-6 rounded-full border-dashed border-2 p-1"
        >
          <img
            src="/public/me.jpg"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
      </div>
      <div class="flex gap-1 flex-col lg:flex-row justify-between w-[70%]">
        <div>
          <p class="text-xl font-semibold text-primary">Username</p>
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
            :bgColor="'bg-primary'"
            :textColor="'text-white'"
            :rounded="'rounded-md'"
            :size="'sm'"
            >Unfollow</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  user: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
