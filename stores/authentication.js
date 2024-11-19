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
  signOut,
} from "~/service/firebase";

export const useAuthStore = defineStore("authentication", {
  state: () => ({
    users: [],
    loginUser: null,
  }),

  getters: {
    getLoggedInUser: (state) => state.loginUser,
  },

  actions: {
    async signupFunc(form) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

        const id = userCredential.user.uid;

        // const userdetails = {
        //   id: id,
        //   identification: form.identification,
        //   email: form.email,
        //   username: form.username,
        //   password: form.password,
        //   department: form.department,
        //   university: form.university,
        //   bio: [
        //     {
        //       info: "Contact Info",
        //       name: form.username,
        //       email: form.email,
        //       phone: "",
        //       address: "",
        //     },
        //     {
        //       info: "Education And Other Information",
        //       birthday: "",
        //       education: form.department,
        //       level: "",
        //       institution: form.university,
        //       employment: form.role,
        //       hobbies: "",
        //     },
        //   ],
        //   following: [],
        //   friends: [],
        //   image: "",
        //   role: form.role,
        // };

        const userdetails = {
          id: id,
          password: form.password,
          ContactInfo: {
            email: form.email,
            phone: "",
            address: "",
          },
          PersonalInfo: {
            username: form.username,
            birthday: "",
            department: form.department,
            university: form.university,
            level: "",
            identification: form.identification,
            employment: form.role,
            hobbies: "",
          },
          friends: [],
          image: "",
        };

        await setDoc(doc(db, "users", id), userdetails);

        this.loginUser = userdetails;

        // console.log(this.loginUser, "register");
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

        const id = userCredential.user.uid;
        console.log(id, "id");

        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.loginUser = docSnap.data();

          // console.log(this.loginUser, docSnap.data(), "login");
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    async signOutUser() {
      try {
        await signOut(auth);
        this.loginUser = null;
        console.log(this.loginUser, "signoutnull");
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
  },

  persist: true,
});
