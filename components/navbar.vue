<template>
  <div class="relative w-full h-full">
    <header
      :class="navbarClasses"
      class="bg-primary z-20 fixed top-0 w-full transition duration-300 ease-in-out border-b border-opacity-30"
    >
      <nav
        class="flex relative justify-between items-center py-5 w-5/6 mx-auto"
      >
        <img src="/public/logo.png" alt="Logo" />
        <div
          :class="search ? 'md:w-[40%] lg:block hidden lg:flex' : 'md:w-[50%]'"
          class="gap-10 md:block hidden md:flex"
        >
          <div
            v-for="item in navOptions"
            :key="item"
            class="text-white w-full relative cursor-pointer hover:text-light"
            @mouseover="handleMouseOver(item)"
          >
            <ul class="">
              <li class="text-white cursor-pointer hover:text-light">
                <RouterLink :to="item.path"> {{ item.name }} </RouterLink>
                <!-- Showcommunity component on hover -->
                <div
                  @mouseleave="showList = false"
                  v-if="item.name === 'Community' && showList"
                >
                  <Showcommunity />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- search -->
        <div
          v-if="search"
          class="flex justify-between p-1 pl-4 rounded-full w-[330px] md:w-96 bg-green-100 overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search here.."
            class="w-4/6 bg-green-100 text-sm outline-none"
          />
          <div
            class="w-10 h-10 rounded-full bg-secondary flex justify-center items-center"
          >
            <i class="pi pi-search text-white"></i>
          </div>
        </div>

        <!-- btn -->
        <div class="md:block hidden">
          <Button
            :bgColor="'bg-white'"
            :textColor="'text-primary'"
            :rounded="'rounded-md'"
            :size="'md'"
          >
            <RouterLink :to="loginLink"> {{ loginText }} </RouterLink>
          </Button>
        </div>

        <div class="block md:hidden">
          <i class="pi pi-bars text-white text-lg"></i>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const showList = ref(false);

// Prop to toggle scroll effect
const props = defineProps({
  navOptions: {
    type: Array,
    required: true, // Array of navbar options (label and link)
  },
  search: {
    type: Boolean,
    default: false,
  },

  loginLink: {
    type: String,
    default: "/auth/login", // Default login link
  },
  loginText: {
    type: String,
    default: "Login", // Default login button text
  },
  enableScrollEffect: {
    type: Boolean,
    default: true, // Default to enabling scroll effect
  },
});

// Handle mouse hover over "Community" option
const handleMouseOver = (option) => {
  if (option.name === "Community") {
    showList.value = true;
  }
};

// Handle mouse leave from "Community" option
// const handleMouseLeave = () => {
//   showList.value = false;
// };

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const navbarClasses = computed(() => {
  if (!props.enableScrollEffect) {
    return "bg-primary shadow-lg border-b-0"; // Fixed style without scroll effect
  }
  return {
    "bg-transparent border-b border-gray-200": !isScrolled.value,
    "bg-primary shadow-lg border-b-0": isScrolled.value,
  };
});

onMounted(() => {
  if (props.enableScrollEffect) {
    window.addEventListener("scroll", checkScroll);
  }
});

onUnmounted(() => {
  if (props.enableScrollEffect) {
    window.removeEventListener("scroll", checkScroll);
  }
});
</script>

<style scoped>
.router-link-exact-active {
  text-decoration: underline;
}
</style>
