<template>
  <button :class="buttonClasses">
    <div class="flex items-center">
      <slot />
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "no-border", // or 'border'
  },
  borderColor: {
    type: String,
    default: "border-gray-300",
  },
  borderWidth: {
    type: String,
    default: "border",
  },
  bgColor: {
    type: String,
    default: "bg-blue-500",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  rounded: {
    type: String,
    default: "rounded-md", // can be 'rounded-sm', 'rounded-md', 'rounded-full'
  },
  size: {
    type: String,
    default: "md", // can be 'sm', 'md', 'lg'
  },
});

const sizeClasses = {
  sm: "px-2 py-0.5 text-sm w-fit",
  md: "px-4 py-1.5 text-md w-fit",
  lg: "px-6 py-3 text-lg w-fit",
};

const buttonClasses = computed(() => {
  return [
    "px-4",
    "py-2",
    "font-semibold",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    props.variant === "border" ? props.borderWidth : "",
    props.variant === "border" ? props.borderColor : "",
    props.bgColor,
    props.textColor,
    props.rounded,
    "transition",
    "duration-150",
    "ease-in-out",
    sizeClasses[props.size],
  ];
});
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
}
</style>
