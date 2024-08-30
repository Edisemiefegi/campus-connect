<template>
  <div class="w-full h-screen bg-white shadow-lg relative">
    <!-- animation -->
    <div class="bottom-16 md:left-3 absolute">
      <animation />
    </div>
    <div
      class="w-3/4 h-fit absolute top-0 left-1/2 transform -translate-x-1/2 -mt-20"
    >
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
