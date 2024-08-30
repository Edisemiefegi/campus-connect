import { defineStore } from "pinia";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
} from "~/service/firebase";

export const useAuthStore = defineStore("authentication", {
  state: () => {
    users: [];
    LoginUser: null;
  },

  actions: {
    async signupFunc(form) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

        const userId = userCredential.user.uid;

        await setDoc(doc(db, "users", userId), form);

        this.LoginUser = form;
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },

    async loginFunc(form) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        const userId = userCredential.user.uid;

        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.LoginUser = docSnap.data();
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
