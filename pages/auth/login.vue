<template>
  <div class="w-full h-full">
    <form
      action=""
      class="flex flex-col gap-4 mt-4"
      @submit.prevent="LoginUser"
    >
      <input
        v-model="form.email"
        type="text"
        placeholder="Enter your email"
        class="outline-primary rounded-full p-2.5 text-xs w-full bg-gray-100"
      />
      <div>
        <input
          v-model="form.password"
          type="password"
          placeholder="Enter your Password"
          class="outline-primary rounded-full p-2.5 text-xs w-full bg-gray-100"
        />
        <p class="text-xs text-red-400 text-end font-bold">
          Forgotten Password?
        </p>
      </div>
      <Button
        type="submit"
        class="w-full flex justify-center items-center"
        :variant="'none'"
        :bgColor="'bg-primary'"
        :textColor="'text-white'"
        :rounded="'rounded-full'"
        :size="'md'"
      >
        Login
      </Button>
      <p class="text-sm text-center">
        Do not have an account?<span class="text-primary font-bold">
          <RouterLink to="/auth/signup">Signup</RouterLink></span
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

const form = ref({
  email: "",
  password: "",
});

const LoginUser = async () => {
  try {
    await authstore.loginFunc(form.value);
    router.push({ path: "/dashboard" });
    form.value.email = "";
    form.value.password = "";
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<style lang="scss" scoped></style>
