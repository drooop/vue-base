import { ref } from "vue";
import { defineStore } from "pinia";

export const authStore = defineStore("authStore", () => {
  const authStatus = ref(localStorage.getItem("token") === "<token>");
  const login = () => {
    localStorage.setItem("token", "<token>");
    authStatus.value = true;
  };
  const logout = () => {
    localStorage.removeItem("token");
    authStatus.value = false;
  };

  return { authStatus, login, logout };
});
