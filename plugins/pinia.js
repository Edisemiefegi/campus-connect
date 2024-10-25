import { defineNuxtPlugin } from "#app";
import piniaPersist from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia;
  pinia.use(piniaPersist);
});
