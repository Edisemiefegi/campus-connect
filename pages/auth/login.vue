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
        :disabled="loading"
        type="submit"
        class="w-full flex justify-center items-center"
        :variant="'none'"
        :bgColor="'bg-primary'"
        :textColor="'text-white'"
        :rounded="'rounded-full'"
        :size="'md'"
      >
        <spinner v-if="loading" />
        <span v-else> Login </span>
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
import { showToast } from "@/utils";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const authstore = useAuthStore();
const loading = ref(false);

const form = ref({
  email: "",
  password: "",
});

const LoginUser = async () => {
  try {
    loading.value = true;
    const payload = { ...form.value };
    await authstore.loginFunc(payload);
    showToast("success", "Login successfully.");
    // $toast.success("Login successfull!");
    router.push({ path: "/dashboard" });
    form.value.email = "";
    form.value.password = "";
  } catch (error) {
    showToast(
      "error",
      error.message.split("(")[1]?.split(")")[0] || "Invalid login credentials."
    );
    console.log(error.message, "error auth");

    throw new Error(error.message);
    // $toast.error(error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
