<template>
  <div>
    <section class="bg-primary overflow-hidden w-full h-screen">
      <div
        class="mx-auto md:py-0 py-20 w-5/6 flex-col md:flex-row items-center h-full flex"
      >
        <div class="flex flex-col gap-8 text-white md:w-3/6 w-full p-0 md:p-10">
          <h1 class="text-4xl text-white font-bold">
            Campus Connect Makes Your Life Easier & Simple
          </h1>
          <p>
            Aliquam lorem ante dapibus in viverra quis feugiat atellu Peaselus
            vierra nullaut metus varius laoreet unknown printer took scrambled
            make.
          </p>
          <Button
            :bgColor="'bg-white'"
            :textColor="'text-primary'"
            :rounded="'rounded-full'"
            :size="'md'"
          >
            <div class="flex items-center gap-2">
              Read More
              <div
                class="bg-secondary w-10 h-10 rounded-full flex justify-center items-center"
              >
                <i class="pi pi-arrow-right text-white"></i>
              </div>
            </div>
          </Button>
        </div>

        <div class="w-full overflow-hidden md:w-3/6 h-full">
          <img
            src="/public/flat-smiling-college-university-students-with-books.png"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
