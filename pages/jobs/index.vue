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

    <jobFilter @filter="applyFilters" />

    <jobList :jobs="filteredJobs" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});

const allJobs = ref([
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "CampusTech",
    location: "Remote",
    type: "Internship",
    description: "Work with Vue/Nuxt on building student-focused tools.",
  },
  {
    id: 2,
    title: "Part-time Graphic Designer",
    company: "StudentHub",
    location: "On-campus",
    type: "Part-time",
    description: "Create visual content for student organizations.",
  },
]);

const filteredJobs = ref([...allJobs.value]);

const applyFilters = ({ keyword, type, location }) => {
  filteredJobs.value = allJobs.value.filter((job) => {
    return (
      (!keyword || job.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (!type || job.type === type) &&
      (!location || job.location === location)
    );
  });
};
</script>
