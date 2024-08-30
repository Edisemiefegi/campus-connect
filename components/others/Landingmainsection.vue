<template>
  <div>
    <section class="w-full h-screen overflow-hidden relative bg-primary">
      <div
        class="w-5/6 mx-auto pt-24 flex h-full justify-center items-center"
        data-aos="fade-down"
      >
        <div
          class="md:w-3/6 w-full lg:w-3/5 p-5 text-white flex flex-col gap-5"
        >
          <slot></slot>
          <!-- <h1 class="font-bold text-4xl sm:text-5xl">Campus Community</h1>
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
          </Button> -->
        </div>
        <div class="w-5/12 md:block hidden h-full">
          <img src="/public/Students-cuate.png" class="w-full" alt="" />
        </div>
      </div>
      <div class="w-full sm:w-3/4 absolute bottom-0">
        <img src="/public/map.png" alt="" class="w-full" />
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
