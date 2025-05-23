<template>
  <form @submit.prevent="submit" class="flex gap-2 p-3 bg-white border-t">
    <input
      v-model="text"
      type="text"
      placeholder="Type a message..."
      class="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      class="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition"
    >
      Send
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["send"]);

const text = ref("");
const submit = () => {
  if (text.value.trim()) {
    emit("send", text.value);
    text.value = "";
  }
};
</script>
