<template>
  <div class="bg-white p-4 rounded-lg shadow-sm mb-4 space-y-4">
    <input
      v-model="filters.keyword"
      type="text"
      placeholder="Search jobs..."
      class="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div class="flex flex-col sm:flex-row gap-4">
      <select v-model="filters.type" class="flex-1 border px-3 py-2 rounded">
        <option value="">All Types</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Internship</option>
      </select>

      <select
        v-model="filters.location"
        class="flex-1 border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>
        <option>Remote</option>
        <option>On-campus</option>
        <option>Bayelsa</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["filter"]);
const filters = reactive({
  keyword: "",
  type: "",
  location: "",
});

watch(filters, () => {
  emit("filter", { ...filters });
});
</script>
