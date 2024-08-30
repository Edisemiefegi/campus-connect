<template>
  <div
    class="contact-info flex flex-col gap-4 bg-white p-10 rounded-lg shadow-md"
  >
    <h2 class="text-xl font-semibold">{{ info }}</h2>
    <div class="flex gap-1.5">
      <div class="w-2 p-0.5 bg-primary"></div>
      <div class="p-0.5 w-7 bg-primary"></div>
    </div>
    <ul class="flex flex-col justify-between w-full text-gray-500">
      <li
        v-for="(item, index) in infoDetails"
        :key="index"
        class="border-b p-4 flex justify-between w-full"
      >
        <strong>{{ item.label }}:</strong>

        <span v-if="item.isInput">
          <input
            v-model="item.value"
            type="text"
            class="border rounded px-2 py-1"
          />
        </span>
        <span class="w-3/5" v-else>
          {{ item.value }}
        </span>
      </li>
    </ul>
    <Button
      :bgColor="'bg-primary'"
      :textColor="'text-white'"
      :rounded="'rounded-md'"
      :size="'sm'"
      >Submit</Button
    >
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: String,
  },
  infoDetails: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.contact-info ul {
  list-style: none;
  padding: 0;
}
.contact-info li {
  font-size: 16px;
}
</style>
