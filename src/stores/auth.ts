import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const user = ref(null);

  function login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'Spenuh2025') {
      isAuthenticated.value = true;
      user.value = { username };
      return true;
    }
    return false;
  }

  function logout() {
    isAuthenticated.value = false;
    user.value = null;
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
});