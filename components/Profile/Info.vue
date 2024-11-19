<template>
  <div
    class="contact-info flex flex-col gap-4 bg-white p-10 rounded-lg shadow-md"
  >
    <h2 class="text-xl font-semibold">{{ info }}</h2>
    <div class="flex gap-1.5">
      <div class="w-2 p-0.5 bg-primary"></div>
      <div class="p-0.5 w-7 bg-primary"></div>
    </div>
    <ul class="flex flex-col justify-between w-full text-gray-500">
      <template v-for="[key, value] in Object.entries(infoDetails)">
        <li
          v-if="key !== 'info'"
          :key="key"
          class="border-b p-4 flex justify-between w-full"
        >
          <strong>{{ key }}:</strong>

          <span v-if="isInput">
            <input
              v-model="editableDetails[key]"
              @input="emitUpdate"
              type="text"
              class="border rounded px-2 py-1"
            />
          </span>
          <span class="w-3/5" v-else>
            {{ value || "N/A" }}
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
const props = defineProps({
  info: {
    type: String,
  },
  infoDetails: {
    type: Object,
  },
  edit: {
    type: Boolean,
    default: false,
  },
  isInput: {
    type: Boolean,
    default: false,
  },
});

console.log(props.info, props.infoDetails, "sjsj");

const emit = defineEmits(["updateBio"]);

const editableDetails = ref({ ...props.infoDetails });

// Emit updated values to the parent
const emitUpdate = () => {
  emit("updateBio", editableDetails.value);
};

// Optional: Submit changes to finalize
// const submitChanges = () => {
//   emit('update:infoDetails', { ...editableDetails.value });
// };

// Watch for changes in props to update `editableDetails`
watch(
  () => props.infoDetails,
  (newDetails) => {
    editableDetails.value = { ...newDetails };
  },
  { immediate: true }
);
</script>

<style scoped>
.contact-info ul {
  list-style: none;
  padding: 0;
}
.contact-info li {
  font-size: 16px;
}
</style>
