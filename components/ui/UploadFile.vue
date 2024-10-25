<template>
  <div @click="$refs.input.click()">
    <slot> </slot>
    <input
      v-bind="$attrs"
      type="file"
      @change="handleChange"
      accept="image/*"
      ref="input"
      class="hidden"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
const emit = defineEmits(["files"]);

const handleChange = (event) => {
  const files = event.target.files;

  emit("files", files);

  console.log(files, "files ");
};
</script>

<style></style>
