<template>
  <div>
    <!-- main section -->
    <othersLandingmainsection>
      <h1 class="font-bold text-4xl sm:text-5xl">Campus Connect</h1>
      <p class="font-bold text-4xl">Contact Us</p>
    </othersLandingmainsection>

    <othersLandinginquiries>
      <div
        class="flex flex-col md:gap-0 gap-5 md:flex-row p-8 justify-between bg-white shadow-md rounded"
      >
        <form action="" class="flex flex-col gap-6 w-full md:w-3/6">
          <label for="" class="font-semibold text-xl">Get In Touch</label>
          <div class="flex gap-1.5">
            <div class="w-2 p-0.5 bg-primary"></div>
            <div class="p-0.5 w-7 bg-primary"></div>
          </div>

          <div class="flex flex-wrap w-full justify-between gap-y-7">
            <input
              type="text"
              placeholder="First Name"
              class="rounded-md w-[45%] p-2 border outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="rounded-md w-[45%] p-2 border outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="rounded-md w-[45%] p-2 border outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              class="rounded-md w-[45%] p-2 border outline-none"
            />
            <textarea
              name=""
              id=""
              cols="3"
              class="rounded-md w-full p-2 border outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button :size="md">Send Us Message</Button>
        </form>

        <div class="w-full md:w-[40%] flex flex-col gap-6">
          <p class="font-semibold text-xl">Contact info.</p>
          <div class="flex gap-1.5">
            <div class="w-2 p-0.5 bg-primary"></div>
            <div class="p-0.5 w-7 bg-primary"></div>
          </div>
          <div class="flex gap-2 items-center">
            <i class="pi pi-map-marker text-primary"></i>
            <p class="font-semibold">598 Kazi Avenue, New York, NY23598</p>
          </div>
          <div class="flex gap-2 items-center">
            <i class="pi pi-envelope text-primary"></i>
            <p class="font-semibold">info@radiustheme.net</p>
          </div>
          <div class="flex gap-2 items-center">
            <i class="pi pi-phone text-primary"></i>
            <p class="font-semibold">(+123) 456 789 101</p>
          </div>
        </div>
      </div>
    </othersLandinginquiries>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
