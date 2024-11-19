import { onAuthStateChanged, auth } from "~/service/firebase";
import { useAuthStore } from "~/stores/authentication";

export default defineNuxtRouteMiddleware((to, from) => {
  // Log the current path for debugging purposes
  // console.log("Current Path:", to.path);

  // Allow access to the login or signup page without any checks
  if (
    to.path === "/auth/login" ||
    to.path === "/auth/signup" ||
    to.path === "/" ||
    to.path === "/about" ||
    to.path === "/faq" ||
    to.path === "/contact"
  ) {
    return;
  }

  // Check for token in localStorage (or cookies) before Firebase auth check
  // Ensure this code only runs on the client-side
  if (process.client) {
    const userToken = localStorage.getItem("authToken");

    const AuthStore = useAuthStore();

    if (userToken) {
      return; // Allow navigation if token is present
    }

    // Use Firebase to check auth state
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log(user, "user");

          // Store the token in localStorage
          localStorage.setItem("authToken", user.accessToken);
          resolve(true); // Allow navigation
        } else {
          AuthStore.signOutUser();
          resolve("/auth/login"); // Redirect to login if not authenticated
        }
      });
    });
  } else {
    // In the server-side context, just return to avoid errors
    return;
  }
});
