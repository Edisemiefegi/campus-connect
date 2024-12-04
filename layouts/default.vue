<template>
  <div class="relative w-full h-full">
    <navbar :enableScrollEffect="true" />
    <slot />

    <Footer />
  </div>
</template>

<script setup></script>

<style scoped>
/* .router-link-exact-active {
  text-decoration: underline;
} */
</style>
