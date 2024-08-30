<template>
  <main class="h-fit">
    <!-- main section -->
    <othersLandingmainsection>
      <h1 class="font-bold text-4xl sm:text-5xl">Campus Community</h1>
      <p>
        Having real social contacts can sometimes be difficult. with campus
        connect everything becomes much simpler!
      </p>
      <p class="font-bold text-4xl">10,84,222</p>
      <p>Connected People</p>

      <Button
        :variant="'border'"
        :borderColor="'border-white'"
        :borderWidth="'border-[1px]'"
        :bgColor="''"
        :textColor="'primary'"
        :rounded="'rounded-full'"
        :size="'md'"
      >
        <div class="flex items-center gap-2">
          Discover Now
          <div
            class="bg-secondary w-10 h-10 rounded-full flex justify-center items-center"
          >
            <i class="pi pi-arrow-right text-white"></i>
          </div>
        </div>
      </Button>
    </othersLandingmainsection>

    <!-- what we do section -->
    <othersLandingwhatwedo>
      <div>
        <p class="font-bold text-light mb-2">What We Do</p>
        <p class="text-3xl font-bold">
          Why Join Our Campus Connect for Social Network ?
        </p>
      </div>
      <p class="text-gray-500">
        Social hen an unknown printer took a galley of type and scrambled make
        type specimen book. It has survived not only five centuries but also the
        leap into electronic typesetting of the remaining essential unchanged
        they popularised with release.
      </p>
      <Button
        :variant="'border'"
        :borderColor="'border-primary'"
        :borderWidth="'border-[1px]'"
        :bgColor="''"
        :textColor="'primary'"
        :rounded="'rounded-full'"
        :size="'md'"
      >
        <div class="flex items-center gap-2">
          Join Our Community
          <div
            class="bg-secondary w-10 h-10 rounded-full flex justify-center items-center"
          >
            <i class="pi pi-arrow-right"></i>
          </div>
        </div>
      </Button>
    </othersLandingwhatwedo>

    <!-- we build our community in section -->
    <othersLandingcountries />

    <!-- make your life easier -->
    <othersLandingeasy />

    <!-- find people around you -->
    <section class="bg-white overflow-hidden w-full h-fit">
      <div
        class="w-5/6 pt-28 pb-28 md:pb-32 md:pt-32 mx-auto flex flex-col gap-10 text-center h-full"
      >
        <div class="justify-center items-center flex">
          <div class="flex flex-col gap-8 w-full md:w-3/5">
            <p class="text-4xl font-semibold">Find People Near You</p>
            <p class="text-gray-400">
              When an unknown printer took a galley of type and meeting fari
              scrambled it to make a type of specific specimen book.
            </p>
          </div>
        </div>

        <div
          class="gap-5 w-full grid md:grid-rows-2 md:grid-cols-4 h-full md:h-96"
        >
          <div
            v-for="item in countries"
            :key="item"
            :class="item.cover ? 'md:row-span-2 md:col-span-2' : ''"
          >
            <div
              class="relative h-60 md:h-full overflow-hidden rounded-lg shadow-lg"
            >
              <img
                :src="item.image"
                alt="Zoomable"
                class="transition-transform w-full h-full duration-500 ease-in-out transform hover:scale-110"
              />
              <p
                class="absolute bottom-5 left-5 text-white font-semibold text-xl"
              >
                {{ item.place }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- founder section -->
    <section class="bg-primary overflow-hidden w-full h-screen">
      <div
        class="w-5/6 relative mx-auto flex flex-col gap-10 text-center text-white justify-center items-center h-full"
      >
        <!-- animation -->
        <div class="top-0 md:top-44 md:left-0 absolute">
          <animation />
        </div>

        <div>
          <p class="font-semibold text-xl">CEO Efegi Areye Edisemi</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <p class="w-full md:w-3/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          facilis sunt ipsa culpa veritatis nemo earum iure? Quisquam architecto
          eaque quo omnis dignissimos? Fuga nulla voluptates quam nobis
          cupiditate voluptatum.
        </p>
        <div class="w-24 h-24 rounded-full">
          <img
            src="/public/me.jpg"
            alt=""
            class="w-full h-full object-cover rounded-full"
          />
        </div>

        <!-- animation -->
        <div class="bottom-0 md:bottom-44 md:right-0 absolute">
          <animation />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const countries = ref([
  {
    image: "/buildings/image3.jpg",
    place: " California, United States(US)",
    cover: true,
  },
  {
    image: "/buildings/images.jpeg",
    place: " Tokyo",
    cover: false,
  },
  {
    image: "/buildings/architecture.jpg",
    place: "  France",
    cover: false,
  },
  {
    image: "/buildings/images (1).jpeg",
    place: "Nigeria",
    cover: false,
  },
  {
    image: "/buildings/image4.jpg",
    place: " Canada",
    cover: false,
  },
]);
</script>

<style scoped></style>
