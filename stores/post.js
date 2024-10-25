import { defineStore } from "pinia";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

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
} from "~/service/firebase";

import { useAuthStore } from "~/stores/authentication";
import { useUserStore } from "~/stores/user";

export const usePostStore = defineStore("post", {
  state: () => ({
    Userposts: [],
    allPosts: [],
  }),

  actions: {
    // async deleteFunc(fileUrl) {
    //   console.log(fileUrl, "ur;s");

    //   const fileRef = ref(storage, fileUrl);
    //   await deleteObject(fileRef);
    //   console.log(fileRef, "happy");
    // },

    async uploadFile(files) {
      const uploadedImageUrls = [];

      try {
        // Iterate over the array of files
        for (const file of files) {
          console.log(file.name, "file name");

          const storageRef = ref(storage, "images/" + file.name);

          await uploadBytes(storageRef, file);

          const url = await getDownloadURL(storageRef);

          uploadedImageUrls.push(url);
        }

        return uploadedImageUrls;
      } catch (error) {
        console.log("Error uploading file:", error.message);
        throw error;
      }
    },

    async createPost(post) {
      try {
        const store = useAuthStore();

        const userpost = {
          postid: "",
          userid: store.loginUser.id,
          caption: post.caption,
          createdAt: new Date(),
          likedBy: [],
          comments: [],
          image: post.image,
        };

        const docRef = await addDoc(collection(db, "posts"), userpost);

        await updateDoc(docRef, {
          postid: docRef.id,
        });
      } catch (error) {
        console.log(error.message);
      }
    },

    initUserPost() {
      try {
        const store = useAuthStore();

        const q = query(
          collection(db, "posts"),
          where("userid", "==", store.loginUser.id)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const posts = [];
          querySnapshot.forEach((doc) => {
            posts.push(doc.data());
          });

          this.Userposts = posts;
          // console.log("posts ", posts, this.Userposts);
        });
      } catch (error) {
        console.log(error.message);
      }
    },

    async getAllPosts() {
      const store = useUserStore();
      const q = query(collection(db, "posts"));
      const posts = [];
      const querySnapshot = await getDocs(q);
      for (const doc of querySnapshot.docs) {
        const post = doc.data();
        const user = await store.getUserById(post.userid);
        post.user = user;
        posts.push(post);
      }

      this.allPosts = posts;
      // console.log(this.allPosts, posts, "pspososo");

      return this.allPosts;
    },

    async likesfunc(post, userid) {
      const store = useAuthStore();

      if (!post) return;

      console.log(post, post.postid, "Post object");

      const docRef = doc(db, "posts", post.postid);

      if (post.likedBy.includes(userid)) {
        post.likedBy = post.likedBy.filter((id) => id !== userid);
        console.log(post.likedBy, "remove like");
      } else {
        post.likedBy.push(userid);
        console.log(post.likedBy, "add like");
      }

      const likes = post.likedBy;

      await updateDoc(docRef, {
        likedBy: likes,
      });
    },
  },

  persist: true,
});
