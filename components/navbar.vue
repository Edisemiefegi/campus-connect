<template>
  <div class="relative w-full h-full">
    <header
      :class="navbarClasses"
      class="bg-primary z-20 fixed top-0 w-full transition duration-300 ease-in-out border-b border-opacity-30"
    >
      <nav
        class="flex relative justify-between items-center py-5 w-5/6 mx-auto"
      >
        <div class="flex gap-6 justify-center items-center">
          <img src="/logo.png" alt="Logo" class="w-fit h-fit" />

          <!-- search -->
          <div v-if="search">
            <div class="lg:block hidden">
              <div
                class="flex justify-between p-1 pl-4 rounded-full w-80 bg-green-100 overflow-hidden"
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
            </div>
            <div class="lg:hidden block">
              <i class="pi pi-search text-white"></i>
            </div>
          </div>
        </div>

        <!-- nav options -->
        <div class="flex items-center gap-2 w-3/5">
          <div
            v-for="item in navOptions"
            :key="item"
            class="text-white w-full relative cursor-pointer"
            @mouseover="handleMouseOver(item)"
            @click="handlePostModal(item)"
          >
            <ul class="">
              <li class="text-white text-sm cursor-pointer group">
                <RouterLink :to="item?.path">
                  <div class="flex flex-col justify-center items-center">
                    <i
                      :class="[
                        item?.icon,
                        isActive(item)
                          ? 'font-bold border-b border-green-500 lg:border-none'
                          : '',
                      ]"
                      class="text-white text-sm md:text-2xl group-hover:text-light"
                    ></i>
                    <span
                      v-if="isDisplayed"
                      :class="[
                        isActive(item)
                          ? 'font-bold border-b border-green-500'
                          : '',
                        'mt-1 hidden lg:block group-hover:text-light',
                      ]"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                </RouterLink>

                <!-- Showcommunity component on hover -->
                <div
                  @mouseleave="showList = false"
                  v-if="item.name === 'Community' && showList"
                >
                  <Showcommunity />
                </div>

                <!-- show post modal -->
                <keep-alive>
                  <div v-if="showPostModal">
                    <PostsCreatePost @close="showPostModal = false" />
                  </div>
                </keep-alive>
              </li>
            </ul>
          </div>
        </div>

        <!-- Profile Section -->
        <div class="relative" v-if="isDisplayed">
          <div
            @click="showProfileModal = true"
            class="flex flex-col items-center justify-center cursor-pointer"
          >
            <img
              src="/me.jpg"
              alt="Profile"
              class="md:w-8 md:h-8 w-6 h-6 rounded-full"
            />
            <span class="text-white text-sm hidden lg:block">Me</span>
          </div>

          <!-- Profile Modal -->
          <ProfileViewProfile
            v-if="showProfileModal"
            @close="closeProfileModal"
          />
          <!-- Modal Overlay (for closing modal when clicking outside) -->
          <div
            v-if="showProfileModal"
            @click="closeProfileModal"
            class="fixed inset-0 bg-black opacity-50 z-20"
          ></div>
        </div>

        <!-- btn -->
        <div class="" v-if="!isDisplayed">
          <Button
            :bgColor="'bg-white'"
            :textColor="'text-primary'"
            :rounded="'rounded-md'"
            :size="'md'"
          >
            <RouterLink :to="loginLink"> {{ loginText }} </RouterLink>
          </Button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
const showProfileModal = ref(false);
const isScrolled = ref(false);
const showList = ref(false);
const showPostModal = ref(false);

const router = useRouter();

// Prop to toggle scroll effect
const props = defineProps({
  navOptions: {
    type: Array,

    default: [
      { name: "Home", path: "/", icon: "pi pi-home" },
      { name: "Community", path: "/", icon: "pi pi-globe" },
      { name: "About", path: "/about", icon: "pi pi-volume-up" },
      { name: "Contact Us", path: "/contact", icon: "pi pi-phone" },
      { name: "FAQ(s)", path: "/faq", icon: "pi pi-question-circle" },
    ], // Array of navbar options (label and link)
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
  isDisplayed: {
    type: Boolean,
    default: false,
  },
});

// Handle mouse hover over "Community" option
const handleMouseOver = (option) => {
  if (option.name === "Community") {
    showList.value = true;
  }
};

// Handle click on  "create post " option
const handlePostModal = (option) => {
  console.log(option, "option");

  if (option.name === "Post new") {
    showPostModal.value = true;
  } else {
    router.push({ path: `${option.path}` });
  }
};

// Toggle modal visibility
const toggleProfileModal = () => {
  showProfileModal.value = !showProfileModal.value;
};

// Close modal when clicking outside
const closeProfileModal = () => {
  showProfileModal.value = false;
};

// Function to check active route
const isActive = (item) => {
  if (process.client) {
    return window.location.pathname === item.path;
  }
  return false; // Default to false on the server-side
};

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
/* .router-link-exact-active {
  color: #0abf54;
} */
</style>
