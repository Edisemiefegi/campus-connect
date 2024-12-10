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

    async handleFriendsFunc(userid) {
      if (!userid) return;
      try {
        const store = useAuthStore();
        const user = store.loginUser;
        if (user.id === userid) {
          console.error("You cannot follow yourself!");
          return;
        }
        const docRef = doc(db, "users", user.id);
        if (user.friends.includes(userid)) {
          user.friends = user.friends.filter((id) => id !== userid);
          console.log(user.friends, "remove friend");
        } else {
          user.friends.push(userid);
          console.log(user.friends, "add friend");
        }
        const friend = user.friends;
        console.log(friend, "friensnnsn");

        await updateDoc(docRef, {
          friends: friend,
        });
      } catch (error) {}
    },

    async getallfriends() {
      const store = useAuthStore();
      const user = store.loginUser;

      if (!user.friends || user.friends.length === 0) {
        console.log("No friends found");
        return [];
      }

      try {
        const friendsDetails = await Promise.all(
          user.friends.map((friendId) => {
            console.log(friendId, "id, ");

            return this.getUserById(friendId);
          })
        );

        console.log(friendsDetails, "fd");

        // Filter out null values in case some IDs don't resolve to valid users
        return friendsDetails.filter((details) => details !== null);
      } catch (error) {
        console.error("Error fetching friends' details:", error);
        return [];
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
