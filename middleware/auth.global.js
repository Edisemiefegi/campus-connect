import { onAuthStateChanged, auth } from "~/service/firebase";

export default defineNuxtRouteMiddleware((to, from) => {
  // Log the current path for debugging purposes
  //   console.log("Current Path:", to.path);

  // Allow access to the login or signup page without any checks
  if (to.path === "/auth/login" || to.path === "/auth/signup") {
    return;
  }

  // Use a synchronous approach to prevent infinite redirect loops
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // Allow navigation to proceed
      } else {
        if (to.path !== "/auth/login") {
          resolve("/auth/login"); // Redirect to login if the user is not authenticated
        } else {
          resolve(true); // Stay on the login page
        }
      }
    });
  });
});
