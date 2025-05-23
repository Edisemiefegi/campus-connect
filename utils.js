import { useToast } from "vue-toastification";

const toast = useToast();

export function showToast(type, message) {
  toast[type](message);
}
