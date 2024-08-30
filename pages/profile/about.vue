<template>
  <div class="w-full flex flex-col gap-8">
    <ProfileTab :menuOptions="menuOptions" class="w-full" />
    <ProfileInfo :infoDetails="contactDetails" :info="'Contact Info'" />

    <ProfileInfo
      :infoDetails="educationDetails"
      :info="'Education And Other Information'"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profile",
});

const menuOptions = ref([
  { name: "View", path: "/profile/about" },
  { name: "Edit", path: "/profile/edit" },
  { name: "Change Photo", path: "/profile/editProfilePhoto" },
]);

const contactDetails = ref([
  { label: "Name", value: "Rebeca Powel", isInput: false },
  { label: "Email", value: "info@example.com", isInput: false },
  { label: "Phone", value: "123 98566836", isInput: false },
  { label: "Address", value: "59 Street, Newyork City", isInput: false },
  { label: "Website", value: "http://www.rebeca.com", isInput: false },
]);

const educationDetails = ref([
  { label: "Birthday", value: "Rebeca Powel", isInput: false },
  { label: "Education", value: "info@example.com", isInput: false },
  { label: "Level", value: "http://www.rebeca.com", isInput: false },
  { label: "Institution", value: "123 98566836", isInput: false },
  { label: "Employment", value: "59 Street, Newyork City", isInput: false },
  { label: "Hobbies", value: "http://www.rebeca.com", isInput: false },
]);
</script>

<style lang="scss" scoped></style>
