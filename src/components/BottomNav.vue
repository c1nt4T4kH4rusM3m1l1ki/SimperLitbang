<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const isMenuOpen = ref(false);

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="bottom-nav">
    <nav class="nav">
      <router-link to="/" class="nav-link" active-class="active">
        <i class="bi bi-house-door"></i>
        <span>Home</span>
      </router-link>
      <a class="nav-link" @click="toggleMenu">
        <i class="bi bi-list"></i>
        <span>Menu</span>
      </a>
      <a @click="handleLogout" class="nav-link">
        <i class="bi bi-box-arrow-right"></i>
        <span>Logout</span>
      </a>
    </nav>

    <!-- Dropdown Menu -->
    <div class="mobile-dropdown" :class="{ 'show': isMenuOpen }">
      <router-link to="/perencanaan" class="dropdown-item" @click="toggleMenu">
        <i class="bi bi-calendar-check me-2"></i>Perencanaan
      </router-link>
      <router-link to="/kepegawaian" class="dropdown-item" @click="toggleMenu">
        <i class="bi bi-people me-2"></i>Kepegawaian
      </router-link>
      <router-link to="/laporan" class="dropdown-item" @click="toggleMenu">
        <i class="bi bi-file-text me-2"></i>Laporan
      </router-link>
      <router-link to="/kegiatan" class="dropdown-item" @click="toggleMenu">
        <i class="bi bi-calendar-event me-2"></i>Kegiatan
      </router-link>
      <router-link to="/peraturan" class="dropdown-item" @click="toggleMenu">
        <i class="bi bi-journal-text me-2"></i>Peraturan
      </router-link>
      <router-link to="/keuangan" class="dropdown-item" @click="toggleMenu">
        <i class="bi bi-cash-stack me-2"></i>Keuangan
      </router-link>
    </div>
  </div>
</template>