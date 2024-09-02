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
            layoutClass="flex-row"
            contentWrapperClass="w-full md:w-4/6 "
            iconSrc="/chat.svg"
            iconWrapperClass="w-24"
            showCircle
            showcontentWrapperClass
            circleClass="bg-gray-200 "
            title="Our Forums"
            titleClass="text-3xl md:text-5xl text-gray-100 "
            description="Activity > forums"
            descriptionClass="text-white text-base"
            mainImageSrc="/Peopletalking.svg"
            imageWrapperClass=" hidden w-full   md:w-2/3 md:block "
            shapesImageSrc="/shapes.png"
            shapesWrapperClass="w-80"
          />

          <div class="w-full md:w-3/5 flex flex-col gap-12">
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
// definePageMeta({
//   layout: "welcome",
// });
</script>

<style lang="scss" scoped></style>
