<template>
  <div class="space-y-3">
    <NuxtLink
      v-for="chat in chats"
      :key="chat.id"
      :to="`/messaging/${chat.id}`"
      class="block bg-white rounded-lg shadow-sm p-4 hover:bg-blue-50 transition duration-200"
    >
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-base truncate">{{ chat.name }}</h2>
        <span class="text-xs text-gray-400 whitespace-nowrap">{{
          chat.time
        }}</span>
      </div>
      <p class="text-sm text-gray-600 truncate mt-1">{{ chat.lastMessage }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ chats: Array });
</script>
