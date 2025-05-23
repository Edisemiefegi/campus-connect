<template>
  <NuxLink
    :to="`/notifications/${id}`"
    :class="[
      'p-4 rounded-lg shadow transition flex justify-between items-start',
      read ? 'bg-white' : 'bg-blue-50 border-l-4 border-light',
    ]"
  >
    <div class="flex-1">
      <h2 class="font-semibold text-base">{{ title }}</h2>
      <p class="text-sm text-gray-700 mt-1">{{ message }}</p>
      <span class="text-xs text-gray-400 mt-2 block">{{ time }}</span>
    </div>

    <button
      v-if="!read"
      @click="$emit('markAsRead')"
      class="text-xs text-light hover:underline ml-4 whitespace-nowrap"
    >
      Mark as Read
    </button>
  </NuxLink>
</template>

<script setup>
defineProps({
  id: [String, Number],
  title: String,
  message: String,
  type: String,
  time: String,
  read: Boolean,
});
</script>
