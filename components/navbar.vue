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

        <!-- commuinty -->
        <div class="relative" v-if="!isDisplayed">
          <div
            @mouseover="showList = true"
            class="flex flex-col items-center justify-center cursor-pointer"
          >
            <i class="pi pi-globe text-white text-sm md:text-2xl"></i>
          </div>

          <!-- Showcommunity component on hover -->
          <div @mouseleave="showList = false" v-if="showList">
            <Showcommunity />
          </div>
        </div>

        <!-- nav options -->
        <div class="flex items-center gap-2 w-3/5">
          <div
            v-for="item in navOptions"
            :key="item"
            class="text-white w-full relative cursor-pointer"
          >
            <ul class="">
              <li class="text-white text-sm cursor-pointer group">
                <div @click="handleRoute(item)">
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
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- post section -->
        <div class="relative mr-3" v-if="isDisplayed">
          <div
            @click="showPostModal = true"
            class="flex flex-col items-center justify-center cursor-pointer"
          >
            <i class="pi pi-pencil text-white text-sm md:text-2xl"></i>
            <span class="text-white text-sm hidden lg:block">Create</span>
          </div>

          <!-- show post modal -->
          <keep-alive>
            <div v-if="showPostModal">
              <PostsCreatePost @close="showPostModal = false" />
            </div>
          </keep-alive>
        </div>

        <!-- Profile Section -->
        <div class="relative" v-if="isDisplayed">
          <div
            @click="showProfileModal = true"
            class="flex flex-col items-center justify-center cursor-pointer"
          >
            <img
              v-if="user?.image"
              :src="user?.image?.url"
              alt="Profile"
              class="md:w-8 md:h-8 w-6 h-6 rounded-full"
            />
            <div
              v-else
              class="md:w-8 md:h-8 rounded-full w-6 h-6 flex justify-center items-center"
            >
              <i class="pi pi-user text-white"></i>
            </div>
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
import { useAuthStore } from "~/stores/authentication";

const showProfileModal = ref(false);
const isScrolled = ref(false);
const showList = ref(false);
const showPostModal = ref(false);
const store = useAuthStore();

const router = useRouter();
const route = useRoute();
const user = computed(() => store.getLoggedInUser);

// Prop to toggle scroll effect
const props = defineProps({
  navOptions: {
    type: Array,

    default: [
      { name: "Home", path: "/", icon: "pi pi-home" },
      { name: "About", path: "/about", icon: "pi pi-volume-up" },
      { name: "Contact Us", path: "/contact", icon: "pi pi-phone" },
      { name: "FAQ(s)", path: "/faq", icon: "pi pi-question-circle" },
    ],
  },
  search: {
    type: Boolean,
    default: false,
  },

  loginLink: {
    type: String,
    default: "/auth/login",
  },
  loginText: {
    type: String,
    default: "Login",
  },
  enableScrollEffect: {
    type: Boolean,
    default: true,
  },
  isDisplayed: {
    type: Boolean,
    default: false,
  },
});

const handleRoute = (item) => {
  router.push(item.path);
  console.log(item.path, "handleroute");
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
  return route.path === item.path;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const navbarClasses = computed(() => {
  if (!props.enableScrollEffect) {
    return "bg-primary shadow-lg border-b-0";
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

<style scoped></style>
