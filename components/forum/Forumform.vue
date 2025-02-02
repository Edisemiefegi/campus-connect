<template>
  <form @submit.prevent="submit">
    <div class="w-full flex flex-col gap-3">
      <label class="font-semibold">Name</label>
      <input
        v-model="forum.name"
        type="text"
        placeholder="Forum name..."
        class="w-full p-2 border-b-2 border-primary outline-none rounded-t-md"
      />
    </div>
    <div class="w-full flex flex-col gap-3">
      <label class="font-semibold">Description</label>
      <textarea
        v-model="forum.description"
        placeholder="Forum description..."
        class="w-full p-2 border-b-2 border-primary outline-none rounded-t-md"
      />
    </div>
    <Button type="submit" class="my-3">Create Forum</Button>
  </form>
</template>

<script setup>
const props = defineProps({
  forum: { type: Object, required: true },
});
const emit = defineEmits(["create"]);

const submit = () => {
  console.log(props.forum, "props");

  emit("create", props.forum);
};
</script>
