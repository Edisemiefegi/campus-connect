import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    maxToasts: 9,
    newestOnTop: true,
    hideProgressBar: true,
  };

  nuxtApp.vueApp.use(Toast, options);
});
