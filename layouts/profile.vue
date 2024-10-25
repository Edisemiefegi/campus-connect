<template>
  <div>
    <div class="relative w-full h-full z-30">
      <navbar
        :isDisplayed="true"
        :search="true"
        :enableScrollEffect="false"
        :navOptions="[
          { name: 'Home', path: '/dashboard', icon: 'pi pi-home' },

          { name: 'Post new', icon: 'pi pi-pencil' },
          { name: 'Messaging', icon: 'pi pi-comments' },
          { name: 'Notification', path: '/notifications', icon: 'pi pi-bell' },

          { name: 'Forum', path: '/forums', icon: 'pi pi-users' },
          { name: 'Jobs', path: '/jobs', icon: 'pi pi-briefcase' },
          { name: 'Shop', path: '/shop', icon: 'pi pi-cart-arrow-down' },
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
