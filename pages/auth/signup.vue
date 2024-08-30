<template>
  <div class="w-full h-full">
    <form
      action=""
      class="flex flex-col gap-4 mt-4"
      @submit.prevent="SignUpUser"
    >
      <div v-for="item in visibleFields" :key="item">
        <input
          :type="item.type"
          :name="item.name"
          v-model="formData[item.name]"
          :placeholder="item.placeholder"
          @keydown.enter.prevent
          class="outline-primary rounded-full p-2.5 text-xs w-full bg-gray-100"
        />
      </div>

      <Button
        v-if="currentPage < totalPages"
        type="submit"
        class="w-full flex justify-center items-center"
        :variant="'none'"
        :bgColor="'bg-primary'"
        :textColor="'text-white'"
        :rounded="'rounded-full'"
        :size="'md'"
        @click="nextPage"
      >
        Next
      </Button>

      <div class="flex justify-between">
        <Button
          v-if="currentPage > 1"
          type="submit"
          class="w-[48%] flex justify-center items-center"
          :variant="'none'"
          :bgColor="'bg-primary'"
          :textColor="'text-white'"
          :rounded="'rounded-full'"
          :size="'md'"
          @click="prevPage"
        >
          Previous
        </Button>

        <Button
          v-if="currentPage === totalPages"
          type="submit"
          class="w-[48%] flex justify-center items-center"
          :variant="'none'"
          :bgColor="'bg-primary'"
          :textColor="'text-white'"
          :rounded="'rounded-full'"
          :size="'md'"
        >
          Signup
        </Button>
      </div>

      <p class="text-sm text-center">
        Already have an account?<span class="text-primary font-bold">
          <RouterLink to="/auth/login">Login</RouterLink></span
        >
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/authentication";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const authstore = useAuthStore();

const formInput = ref([
  {
    name: "email",
    placeholder: "Enter your Email",
    type: "email",
  },
  { name: "username", placeholder: "Enter your Username", type: "text" },
  {
    name: "role",
    placeholder: "Enter your role e.g student, lecturer etc",
    type: "text",
  },
  {
    name: "identification",
    placeholder: "Enter your unique ID e.g Matno/lectureId",
    type: "text",
  },
  { name: "department", placeholder: "Enter your Department", type: "text" },
  {
    name: "university",
    placeholder: "Enter your University",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
  },
]);

const formData = ref({
  email: "",
  username: "",
  role: "",
  identification: "",
  department: "",
  university: "",
  password: "",
});

const currentPage = ref(1);
const itemsPerPage = 4;

const totalPages = computed(() =>
  Math.ceil(formInput.value.length / itemsPerPage)
);
console.log(totalPages.value);

const visibleFields = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return formInput.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const clearData = () => {
  formData.value.email = "";
  formData.value.username = "";
  formData.value.role = "";
  formData.value.uniqueId = "";
  formData.value.department = "";
  formData.value.university = "";
  formData.value.password = "";
};

const SignUpUser = async () => {
  console.log(formData.value);
  try {
    await authstore.signupFunc(formData.value);
    router.push({ path: "/dashboard" });
    clearData();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
</script>

<style lang="scss" scoped></style>
