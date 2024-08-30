<template>
  <div>
    <div>
      <div class="w-full rounded-lg flex">
        <div
          v-for="item in menuOptions"
          :key="item.path"
          class="w-[30%] md:w-[20%] py-4 border-r bg-white text-center"
        >
          <RouterLink :to="item.path" class="py-4 bg-white hover:text-gray-600">
            {{ item.name }}
          </RouterLink>
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
      { name: "Settings", path: "/profile/setting" },
    ],
  },
});
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 4px solid #183a37;
  color: #183a37;
  font-weight: bold;
}
</style>
