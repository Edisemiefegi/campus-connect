import { defineStore } from "pinia";
import { doc, getDoc, db, updateDoc, storage } from "~/service/firebase";
import { ref, deleteObject } from "firebase/storage";

import { useAuthStore } from "~/stores/authentication";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    test: [],
    bio: [],
  }),

  actions: {
    async getUserById(userid) {
      try {
        const docRef = doc(db, "users", userid);
        const docSnap = await getDoc(docRef);

        let user = null;
        if (docSnap.exists()) {
          user = docSnap.data();
        } else {
          console.log("No such document!");
        }

        return user;
      } catch (error) {
        console.error("Error fetching user or posts:", error);
      }
    },

    async fetchBio() {
      try {
        const store = useAuthStore();
        const user = store.loginUser;

        this.bio = [
          {
            info: "Contact Info",
            ...user.ContactInfo,
          },
          {
            info: "Education and Other Info",
            ...user.PersonalInfo,
          },
        ];
      } catch (error) {
        console.error("Error fetching bio:", error);
      }
    },

    async updateBio(bio) {
      const store = useAuthStore();

      const docRef = doc(db, "users", store.loginUser.id);

      const contactInfo = bio.find((item) => item.info === "Contact Info");
      const personalInfo = bio.find(
        (item) => item.info === "Education and Other Info"
      );

      // Update Firestore with the separated sections

      await updateDoc(docRef, {
        ContactInfo: contactInfo || this.bio.ContactInfo,
        PersonalInfo: personalInfo || this.bio.PersonalInfo,
      });

      store.loginUser = {
        ...store.loginUser,
        ContactInfo: contactInfo,
        PersonalInfo: personalInfo,
      };

      // Update local state
      this.bio = bio;
    },

    async editProfileImg(img) {
      try {
        const store = useAuthStore();

        const docRef = doc(db, "users", store.loginUser.id);

        await updateDoc(docRef, {
          image: img,
        });

        store.loginUser = {
          ...store.loginUser,
          image: img,
        };
      } catch (error) {
        throw error;
      }
    },

    async removeProfileImg() {
      try {
        const store = useAuthStore();
        const fileRef = ref(storage, path);

        await deleteObject(fileRef);

        const docRef = doc(db, "users", store.loginUser.id);

        await updateDoc(docRef, {
          image: "",
        });

        store.loginUser = {
          ...store.loginUser,
          image: "",
        };
        console.log(store.loginUser.image, "profile deleted");
      } catch (error) {
        throw error;
      }
    },
    // async deleteFunc(fileUrl) {
    //   console.log(fileUrl, "ur;s");
    //   const fileRef = ref(storage, fileUrl);
    //   await deleteObject(fileRef);
    //   console.log(fileRef, "happy");
    // },
  },
});
