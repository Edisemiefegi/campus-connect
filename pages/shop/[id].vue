<template>
  <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
    <announcement
      bgClass="bg-secondary"
      layoutClass="flex-row"
      contentWrapperClass="w-full md:w-4/6 "
      iconSrc="/circled.svg"
      iconWrapperClass="w-24"
      showCircle
      showcontentWrapperClass
      circleClass="bg-gray-200 "
      title="Campus Store"
      titleClass="text-3xl md:text-5xl text-gray-100 "
      description=""
      descriptionClass="text-white text-base"
      mainImageSrc="/shopping.svg"
      imageWrapperClass=" hidden w-full pt-2  md:w-2/3 md:block "
      shapesImageSrc="/shapes.png"
      shapesWrapperClass="w-80"
    />
    <div
      class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 flex flex-col lg:flex-row gap-6"
    >
      <img
        :src="product.image"
        class="w-full lg:w-1/2 h-64 object-cover rounded"
      />

      <div class="flex-1 space-y-4">
        <h1 class="text-2xl font-bold">{{ product.name }}</h1>
        <p class="text-sm text-gray-500">{{ product.category }}</p>
        <div class="text-primary text-xl font-semibold">
          ₦{{ product.price }}
        </div>
        <p class="text-gray-700">{{ product.description }}</p>

        <button
          class="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
definePageMeta({
  layout: "welcome",
});

const route = useRoute();
const products = [
  {
    id: 1,
    name: "Engraved Bracelet",
    category: "Accessories",
    price: 25,
    image: "/bangle.jpeg",
    description: "Beautifully crafted bracelet, perfect for any occasion.",
  },
  {
    id: 2,
    name: "Campus Hoodie",
    category: "Apparel",
    price: 45,
    image: "/hoodie.jpeg",
    description: "Stay warm and stylish with this exclusive hoodie.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "Tech",
    price: 50,
    image: "/earbud.jpeg",
    description: "High-quality sound with long battery life.",
  },
];

const product = products.find((p) => p.id === Number(route.params.id));
</script>
