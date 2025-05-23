<template>
  <div class="bg-white p-4 rounded-lg shadow-sm mb-4 space-y-4">
    <input
      v-model="filters.keyword"
      type="text"
      placeholder="Search products..."
      class="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div class="flex flex-col sm:flex-row gap-4">
      <select
        v-model="filters.category"
        class="flex-1 border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        <option>Accessories</option>
        <option>Apparel</option>
        <option>Tech</option>
      </select>

      <select v-model="filters.sort" class="flex-1 border px-3 py-2 rounded">
        <option value="">Sort by</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["filter"]);
const filters = reactive({ keyword: "", category: "", sort: "" });

watch(filters, () => emit("filter", { ...filters }));
</script>
