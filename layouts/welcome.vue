<template>
  <div class="">
    <!-- nav -->
    <div class="relative w-full h-full z-30">
      <navbar
        :enableScrollEffect="false"
        :navOptions="[
          { name: 'Home', path: '/dashboard' },
          { name: 'Profile', path: '/profile/posts' },
          { name: 'Forum', path: '/forums' },
          { name: 'Jobs', path: '/jobs' },
          { name: 'Shop', path: '/shop' },
        ]"
        :loginLink="'/'"
        :loginText="'Logout'"
      />
    </div>

    <div class="h-fit bg-gray-100 mt-20">
      <slot />
    </div>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
