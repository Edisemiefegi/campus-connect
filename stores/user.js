import { defineStore } from "pinia";
import { doc, getDoc, db } from "~/service/firebase";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    test: [],
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

    // async deleteFunc(fileUrl) {
    //   console.log(fileUrl, "ur;s");
    //   const fileRef = ref(storage, fileUrl);
    //   await deleteObject(fileRef);
    //   console.log(fileRef, "happy");
    // },
  },
});
