<template>
  <form @submit.prevent="submit">
    <div class="w-full flex flex-col gap-3">
      <p>
        Create a topic in <span class="font-bold">{{ forum.name }}</span>
      </p>
      <label class="font-semibold">Name</label>
      <input
        v-model="topic.name"
        type="text"
        placeholder="Topic name..."
        class="w-full p-2 border-b-2 border-primary outline-none rounded-t-md"
      />
    </div>
    <Button type="submit" class="my-3 mr-3">Create Topic</Button>
    <Button type="button" @click="$emit('skip')">Skip</Button>
  </form>
</template>

<script setup>
const props = defineProps({
  topic: { type: Object, required: true },
  forum: { type: Object },
});
const emit = defineEmits(["create", "skip"]);

const submit = () => {
  emit("create", props.topic);
};
</script>
