<template>
  <transition name="fade">
    <div
      v-if="visible"
      :class="[
        'fixed bottom-5 right-5 max-w-xs w-full px-4 py-3 rounded-lg shadow-lg text-sm flex items-start gap-3 z-50',
        notificationClasses[type],
      ]"
      role="alert"
    >
      <div class="flex-1">
        <strong class="block mb-1 capitalize">{{ type }}</strong>
        <p>{{ message }}</p>
      </div>
      <button
        @click="dismiss"
        class="text-white font-bold text-lg leading-none"
      >
        &times;
      </button>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "info", // success, error, warning, info
  },
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const visible = ref(true);

const notificationClasses = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

const dismiss = () => {
  visible.value = false;
};

onMounted(() => {
  setTimeout(() => {
    dismiss();
  }, props.duration);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
