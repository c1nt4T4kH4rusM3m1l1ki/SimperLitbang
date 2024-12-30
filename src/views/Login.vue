<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

// Reaktifitas untuk form
const username = ref('');
const password = ref('');
const error = ref('');
const showPassword = ref(false);

// Router dan Store
const router = useRouter();
const authStore = useAuthStore();

// Fungsi untuk mengubah visibilitas password
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Fungsi untuk menangani login
const handleLogin = () => {
  const isLoggedIn = authStore.login(username.value, password.value);
  if (isLoggedIn) {
    router.push('/');
  } else {
    error.value = 'Invalid username or password';
  }
};
</script>

<template>
  <div class="login-page">
    <div class="login-form">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <!-- Input Username -->
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
            required
          />
        </div>

        <!-- Input Password dengan toggle visibilitas -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-control"
              id="password"
              v-model="password"
              required
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="togglePasswordVisibility"
              aria-label="Toggle password visibility"
            >
              <i :class="showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'"></i>
            </button>
          </div>
        </div>

        <!-- Menampilkan pesan error jika ada -->
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <!-- Tombol Submit -->
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}
</style>
