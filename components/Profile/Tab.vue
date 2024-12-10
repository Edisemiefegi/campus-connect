<template>
  <div>
    <div>
      <div class="w-full rounded-lg flex flex-wrap">
        <div
          :class="
            route.path == item.path
              ? 'border-b-4 border-b-green-900 text-900 font-bold'
              : ''
          "
          v-for="item in menuOptions"
          :key="item"
          class="w-fit px-3 py-4 border-r bg-white text-center"
        >
          <button
            @click="handleRoute(item)"
            class="bg-white text-smv hover:text-gray-600"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  menuOptions: {
    type: Array,
    default: () => [
      { name: "Posts", path: "/profile/posts" },
      { name: "Favorites", path: "/profile/favorite" },
      { name: "Friends", path: "/profile/friends" },
      { name: "About", path: "/profile/about" },
      { name: "My-Forum", path: "/profile/forum" },
    ],
  },
});
const router = useRouter();
const route = useRoute();

const handleRoute = (item) => {
  router.push(item.path);
  console.log(route, "path");
};

console.log();
</script>

<style scoped></style>
