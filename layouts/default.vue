<template>
  <div class="relative w-full h-full">
    <navbar
      :enableScrollEffect="true"
      :navOptions="[
        { name: 'Home', path: '/' },
        { name: 'Community', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQ(s)', path: '/faq' },
      ]"
      :loginLink="'/auth/login'"
      :loginText="'Login'"
    />
    <slot />

    <Footer />
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  text-decoration: underline;
}
</style>
