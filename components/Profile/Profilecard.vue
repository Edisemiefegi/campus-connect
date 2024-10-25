<template>
  <div class="flex justify-between">
    <div
      class="w-16 h-16 flex gap-6 rounded-full justify-center items-center border-dashed border-2 p-1"
    >
      <div
        class="justify-center items-center bg-gray-600 flex rounded-full w-14 h-14"
      >
        <i class="pi pi-user text-white" v-if="user.image == ''"></i>
        <img
          v-else
          :src="user?.image"
          class="w-full h-full object-cover rounded-full"
          alt=""
        />
      </div>
    </div>
    <div>
      <p class="font-semibold">{{ user.username }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

// console.log(props.user, "user");
</script>

<style lang="scss" scoped></style>
