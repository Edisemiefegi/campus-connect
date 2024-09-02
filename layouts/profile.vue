<template>
  <div>
    <div class="relative w-full h-full z-30">
      <navbar
        :search="true"
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

    <div>
      <div class="h-fit bg-gray-100 mt-20">
        <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
          <announcement
            bgClass="bg-secondary"
            showProfile
            layoutClass="flex-row"
            shapesImageSrc="/shapes.png"
            shapesWrapperClass="w-80"
          />
          <div class="w-full md:w-3/5 flex flex-col gap-12">
            <ProfileTab />

            <slot />
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});
</script>

<style lang="scss" scoped></style>
