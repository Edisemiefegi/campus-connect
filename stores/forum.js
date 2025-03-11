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
  deleteDoc,
  arrayUnion,
} from "~/service/firebase";

import { useAuthStore } from "~/stores/authentication";
import { useUserStore } from "~/stores/user";

export const useForumStore = defineStore("forum", {
  state: () => ({
    userForums: [],
    allForums: [],
    userTopics: [],
  }),

  actions: {
    async createForum(forum) {
      try {
        const store = useAuthStore();

        const userforum = {
          forumid: "",
          userid: store.loginUser.id,
          name: forum.name,
          createdAt: new Date(),
          description: forum.description,
        };

        const docRef = await addDoc(collection(db, "forums"), userforum);
        await updateDoc(docRef, {
          forumid: docRef.id,
        });

        console.log(userforum, "created forum");
        return docRef.id;
      } catch (error) {
        console.log(error.message);
      }
    },

    initUserForum() {
      try {
        const store = useAuthStore();
        const userStore = useUserStore();

        const q = query(
          collection(db, "forums"),
          where("userid", "==", store.loginUser.id)
        );
        const unsubscribe = onSnapshot(q, async (querySnapshot) => {
          const forums = [];
          querySnapshot.forEach((doc) => {
            forums.push(doc.data());
          });
          // console.log(forums, "poo");

          // for (let post of forums) {
          //   try {
          //     const user = await userStore.getUserById(post.userid);
          //     post.user = user; // Add the user data to the post
          //     // console.log(post.userid, user, "user data added to post");
          //   } catch (error) {
          //     console.error(
          //       "Error fetching user data for post:",
          //       post.userid,
          //       error
          //     );
          //   }
          // }

          this.userForums = forums;
          // console.log(this.Userposts, "yeyeyy");

          console.log("ffuio ", forums, this.userForums);
        });
      } catch (error) {
        console.log(error.message);
      }
    },

    async getAllForum() {
      const q = query(collection(db, "forums"));
      const forums = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        forums.push(doc.data());
        this.allForums.push(doc.data());
        // doc.data() is never undefined for query doc snapshots
      });
      this.allForums = forums;
      console.log(this.allForums, "text");
    },
    initUserTopic() {
      try {
        const store = useAuthStore();

        const q = query(
          collection(db, "topics"),
          where("userid", "==", store.loginUser.id)
        );
        const unsubscribe = onSnapshot(q, async (querySnapshot) => {
          const topics = [];
          querySnapshot.forEach((doc) => {
            topics.push(doc.data());
          });
          console.log(topics, "pootopic");

          this.userTopics = topics;
          // console.log(this.Userposts, "yeyeyy");

          console.log("ffuio oueyy ", this.userTopics);
        });
      } catch (error) {
        console.log(error.message);
      }
    },

    async fetchTopicByForumid(forumid) {
      try {
        const q = query(
          collection(db, "topics"),
          where("forumid", "==", forumid)
        );

        const querySnapshot = await getDocs(q);
        const topics = [];
        querySnapshot.forEach((doc) => {
          topics.push(doc.data());
        });
        return topics;
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchPostsByTopicid(topicId) {
      try {
        const topicDoc = await getDoc(doc(db, "topics", topicId));

        if (topicDoc.exists()) {
          return topicDoc.data().posts || [];
        } else {
          console.error("No such topic!");
          return [];
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    // Create a new topic in the selected forum
    async createTopic(forumid, topic) {
      try {
        const store = useAuthStore();

        const topics = {
          userid: store.loginUser.id,

          topicid: "",
          forumid: forumid,
          topic: topic,
          posts: [],
          createdAt: new Date(),
        };
        // console.log(topics, topic, "topics");

        const docRef = await addDoc(collection(db, "topics"), topics);
        await updateDoc(docRef, {
          topicid: docRef.id,
        });

        // console.log(docRef, "created topics");
        return docRef.id;
      } catch (error) {
        console.error("Error creating topic:", error);
      }
    },

    async createPost(topicId, contents) {
      try {
        console.log("Adding post to Topic ID:", topicId, contents);

        const post = {
          content: contents.content,
          file: contents.file,
          createdAt: new Date(),
          postid: "",
        };
        const topicDocRef = doc(db, "topics", topicId);

        await updateDoc(topicDocRef, {
          posts: arrayUnion(post),
        });

        console.log("Post added successfully to topic:", topicId);
      } catch (error) {
        console.error("Error creating post:", error.message);
        throw error;
      }
    },

    // Select a topic and fetch its posts
    async selectTopic(topicId) {
      if (!this.selectedForum) return;

      try {
        const topicRef = doc(
          db,
          "forums",
          this.selectedForum.id,
          "topics",
          topicId
        );
        const topicSnapshot = await getDoc(topicRef);

        if (topicSnapshot.exists()) {
          this.selectedTopic = {
            id: topicSnapshot.id,
            ...topicSnapshot.data(),
          };
          // Fetch posts
          const postsSnapshot = await getDocs(
            collection(
              db,
              "forums",
              this.selectedForum.id,
              "topics",
              topicId,
              "posts"
            )
          );
          this.selectedTopic.posts = postsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        } else {
          console.error("Topic not found");
        }
      } catch (error) {
        console.error("Error selecting topic:", error);
      }
    },

    persist: true,
  },
});
