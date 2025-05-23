<template>
  <NuxtLink
    :to="`/jobs/${job.id}`"
    class="block bg-white rounded-lg shadow-sm p-4 hover:bg-blue-50 transition"
  >
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg font-semibold truncate">{{ job.title }}</h2>
      <span class="text-sm text-gray-500">{{ job.type }}</span>
    </div>
    <p class="text-sm text-gray-600">{{ job.company }}</p>
    <p class="text-xs text-gray-500">{{ job.location }}</p>
    <p class="text-sm mt-2 text-gray-700 line-clamp-2">{{ job.description }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({ job: Object });
</script>
