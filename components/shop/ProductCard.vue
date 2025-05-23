<template>
  <NuxtLink
    :to="`/shop/${product.id}`"
    class="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
  >
    <img
      :src="product.image"
      alt="Product image"
      class="w-full h-48 object-cover"
    />

    <div class="p-4">
      <h3 class="text-lg font-semibold truncate">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm">{{ product.category }}</p>
      <div class="mt-2 primary font-bold">₦{{ product.price }}</div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({ product: Object });
</script>
