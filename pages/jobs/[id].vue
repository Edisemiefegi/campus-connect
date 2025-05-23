<template>
  <div class="w-5/6 mx-auto pt-20 pb-20 flex flex-col gap-10">
    <announcement
      bgClass="bg-secondary"
      layoutClass="flex-row"
      contentWrapperClass="w-full md:w-4/6 "
      iconSrc="/person.svg"
      iconWrapperClass="w-24"
      showCircle
      showcontentWrapperClass
      circleClass="bg-gray-200 "
      title="Job Listings"
      titleClass="text-3xl md:text-5xl text-gray-100 "
      description=""
      descriptionClass="text-white text-base"
      mainImageSrc="/resume.svg"
      imageWrapperClass=" hidden w-full pt-2  md:w-2/3 md:block "
      shapesImageSrc="/shapes.png"
      shapesWrapperClass="w-80"
    />
    <div class="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <h1 class="text-2xl font-bold">{{ job.title }}</h1>
      <p class="text-gray-600">{{ job.company }} - {{ job.location }}</p>
      <span
        class="inline-block text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded"
      >
        {{ job.type }}
      </span>
      <p class="text-gray-800 mt-4">{{ job.description }}</p>

      <button
        class="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Apply Now
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
definePageMeta({
  layout: "welcome",
});

const route = useRoute();
const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "CampusTech",
    location: "Remote",
    type: "Internship",
    description:
      "This is a remote internship role for a frontend developer working on Campus Connect. Tasks include building responsive UIs using Vue/Nuxt, collaborating with backend teams, and participating in sprint planning.",
  },
  {
    id: 2,
    title: "Part-time Graphic Designer",
    company: "StudentHub",
    location: "On-campus",
    type: "Part-time",
    description:
      "Design posters, banners, and social content for student events and societies.",
  },
];

const job = jobs.find((j) => j.id === Number(route.params.id));
</script>
