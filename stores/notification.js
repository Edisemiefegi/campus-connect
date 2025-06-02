import { defineStore } from "pinia";
import { useAuthStore } from "~/stores/authentication";
import {
  storage,
  doc,
  setDoc,
  collection,
  addDoc,
  db,
  updateDoc,
  query,
  where,
  getDocs,
  getDoc,
  onSnapshot,
  deleteDoc,
} from "~/service/firebase";

const store = useAuthStore();

export const useNotification = defineStore("notification", {
  state: () => ({
    allNotifications: [],
    userNotifications: [],
  }),
  actions: {
    async addNotification(sender, post, type, message) {
      const notification = [
        {
          userid: store.loginUser.id,
          type: type,
          title: "",
          date: "",
          message: message,
          read: false,
          notificationid: "",
          sender: sender,
        },
      ];
      const docRef = await addDoc(
        collection(db, "notifications"),
        notification
      );
      console.log("Document written with ID: ", docRef.id);

      await updateDoc(docRef, {
        notificationid: docRef.id,
      });

      console.log(notification, "notification");
    },
  },
});
