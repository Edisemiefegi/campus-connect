<template>
  <div>
    <footer class="flex flex-col gap-10 mt-10">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-10 w-5/6 mx-auto">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <img
              src="/public/logo.png"
              class="w-12 h-12 object-contain"
              alt=""
            />
            <p class="font-semibold text-xl">Campus Connect</p>
          </div>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            mollitia!
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <p class="font-semibold text-xl">Important Links</p>
          <div class="flex gap-1.5">
            <div class="w-2 p-0.5 bg-primary"></div>
            <div class="p-0.5 w-7 bg-primary"></div>
          </div>
          <div class="flex flex-col gap-3 text-gray-600">
            <RouterLink to="/" class="hover:text-light">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-light"
              >About Us</RouterLink
            >
            <RouterLink to="/contact" class="hover:text-light"
              >Contact Us</RouterLink
            >

            <RouterLink to="/faq" class="hover:text-light">FAQ(s)</RouterLink>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <p class="font-semibold text-xl">Community</p>
          <div class="flex gap-1.5">
            <div class="w-2 p-0.5 bg-primary"></div>
            <div class="p-0.5 w-7 bg-primary"></div>
          </div>

          <ul class="flex flex-col gap-3 text-gray-600">
            <li>Newsfeed</li>
            <li>Groups</li>
            <li>Friends</li>
            <li>Forum</li>
          </ul>
        </div>
      </div>
      <div class="border-t text-center py-8 text-gray-600">
        <p>Copyright@2024 Campus Connect by Edisemi</p>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
