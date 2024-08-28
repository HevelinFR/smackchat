// Pinia Store
import { defineStore } from "pinia";
import { auth } from "src/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getDatabase, ref, set, child, get, update,  onValue } from "firebase/database";

export const useUserStore = defineStore("user", {
  state: () => ({
    userDetails: {},
    users: [],
  }),
  actions: {
    async registerUser(payload) {
      try {
        console.log("entrou");
        const response = await createUserWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        );
        console.log(response);
        const db = getDatabase();
        set(ref(db, "users/" + response.user.uid), {
          name: payload.name,
          email: payload.email,
          online: true,
        });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode);
      }
    },
    async login(payload) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        );
        console.log(response);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode);
      }
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {})
        .catch((error) => {});
    },
    handleAuthStateChanged() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const dbRef = ref(getDatabase());
          get(child(dbRef, `users/${uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                let userDetails = snapshot.val();
                this.setUserDetails({
                  ...userDetails,
                  userId: uid,
                });
                this.updateUser({
                  userId: uid,
                  updates: {
                    online: true,
                  },
                });
                this.getUsers();
                this.router.push("/");
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          // User is signed out
          this.updateUser({
            userId: this.userDetails.userId,
            updates: {
              online: false,
            },
          });
          this.userDetails = {};
          this.router.replace("/auth");
        }
      });
    },
    updateUser(payload) {
      const db = getDatabase();
      update(ref(db, "users/" + payload.userId), payload.updates);
    },
    getUsers() {
      const db = getDatabase();
      const dbRef = ref(db, "users/");
      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            this.setUsersUser({
              userId: childSnapshot.key,
              ...childSnapshot.val()
            })
          });
        },
        {
          onlyOnce: true,
        }
      );
    },
    setUserDetails(payload) {
      this.userDetails = payload;
    },
    setUsersUser(payload){
      this.users.push(payload)
    }
  },
  getters: {},
});
