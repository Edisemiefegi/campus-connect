<template>
  <div class="py-1.5 px-2 flex flex-col gap-1">
    <!-- Sent by me -->
    <div v-if="message.from === 'me'" class="flex justify-end">
      <div
        class="bg-blue-600 text-white max-w-xs sm:max-w-md md:max-w-lg px-4 py-2 rounded-2xl rounded-br-none shadow-md"
      >
        <p class="text-sm">{{ message?.text }}</p>
        <span class="block text-[11px] text-white/80 mt-1 text-right">
          {{ formatDate(message?.createdAt) }}
        </span>
      </div>
    </div>

    <!-- Sent by others -->
    <div v-else class="flex justify-start">
      <div
        class="bg-gray-200 text-gray-900 max-w-xs sm:max-w-md md:max-w-lg px-4 py-2 rounded-2xl rounded-bl-none shadow"
      >
        <p class="text-sm">{{ message?.text }}</p>
        <span class="block text-[11px] text-gray-500 mt-1">
          {{ formatDate(message?.createdAt) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ message: Object });

const formatDate = (date) => {
  return (
    date
      ?.toDate?.()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) ||
    "Just now"
  );
};
</script>
