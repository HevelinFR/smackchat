// Pinia Store
import { defineStore } from "pinia";
import { auth } from 'src/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async registerUser(payload) {
      try {
        console.log("entrou");
        const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});
