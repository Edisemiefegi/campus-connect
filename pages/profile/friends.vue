<template>
  <div class="w-full">
    <div class="w-full h-full flex flex-col gap-5" v-if="friends.length > 0">
      <div v-for="item in friends" :key="item">
        <ProfileFriendcard :user="item" />
      </div>
    </div>
    <p v-else>No friends found.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~/stores/user";

definePageMeta({
  layout: "profile",
});

const store = useUserStore();

const friends = ref([]);

onMounted(async () => {
  friends.value = await store.getallfriends();
});
</script>

<style lang="scss" scoped></style>
