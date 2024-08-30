<template>
  <div class="h-full">
    <othersLandingmainsection>
      <h1 class="font-bold text-4xl sm:text-5xl">Campus Connect</h1>
      <p class="font-bold text-4xl">Frequently Asked Questions</p>
    </othersLandingmainsection>

    <othersLandinginquiries class="w-full">
      <div class="bg-white shadow-md rounded p-6">
        <h2 class="text-2xl font-semibold mb-4 text-center text-primary">
          Frequently Asked Questions
        </h2>
        <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
          <button
            class="w-full flex justify-between items-center text-left font-medium text-primary"
            @click="toggleFaq(index)"
          >
            {{ faq.question }}
            <i
              :class="faq.open ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
            ></i>
          </button>
          <div v-if="faq.open" class="mt-2 p-4 bg-secondary rounded text-white">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </othersLandinginquiries>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "What is campus connect? Who uses it and why should I use it?",
    answer:
      "lorem2 lorem lorem At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    open: false,
  },
  {
    question: "How can I use campus connect? Is it free or will I have to pay?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
  {
    question: "Is there any age restriction to use campus connect?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
  {
    question: "Can I use campus connect anywhere in the world?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
  {
    question: "Can I search for a specific person on campus connect?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
  {
    question: "How do I edit my profile?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
  {
    question: "How can I invite other people to join campus connect?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
  {
    question: "How do I create an account on campus connect?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style lang="scss" scoped></style>
