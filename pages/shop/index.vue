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

    <shopFilter @filter="applyFilters" />

    <shopList :products="filteredProducts" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});

const allProducts = ref([
  {
    id: 1,
    name: "Engraved Bracelet",
    category: "Accessories",
    price: 25,
    image: "/buildings/image3.jpg",
    description: "Beautifully crafted bracelet, perfect for any occasion.",
  },
  {
    id: 2,
    name: "Campus Hoodie",
    category: "Apparel",
    price: 45,
    image: "/buildings/image4.jpg",
    description: "Stay warm and stylish with this exclusive hoodie.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "Tech",
    price: 50,
    image: "/buildings/images.jpeg",
    description: "High-quality sound with long battery life.",
  },
]);

const filteredProducts = ref([...allProducts.value]);

const applyFilters = ({ keyword, category, sort }) => {
  let result = [...allProducts.value];

  if (keyword) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (sort === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  filteredProducts.value = result;
};
</script>
