<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const isOpen = ref(false);

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeSidebarOnMobile = () => {
  if (window.innerWidth <= 768) {
    isOpen.value = false;
  }
};

// Close sidebar when route changes on mobile
onMounted(() => {
  router.afterEach(closeSidebarOnMobile);
});

onUnmounted(() => {
  router.afterEach(closeSidebarOnMobile);
});
</script>

<template>
  <MobileNavToggle :is-open="isOpen" :toggle="toggleSidebar" />
  <div class="sidebar" :class="{ 'show': isOpen }">
    <h3 class="text-white mb-4">SimperLitbang</h3>
    <nav class="nav flex-column">
      <router-link to="/" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-house-door me-2"></i>Home
      </router-link>
      <router-link to="/perencanaan" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-calendar-check me-2"></i>Perencanaan
      </router-link>
      <router-link to="/kepegawaian" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-people me-2"></i>Kepegawaian
      </router-link>
      <router-link to="/laporan" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-file-text me-2"></i>Laporan
      </router-link>
      <router-link to="/kegiatan" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-calendar-event me-2"></i>Kegiatan
      </router-link>
      <router-link to="/peraturan" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-journal-text me-2"></i>Peraturan
      </router-link>
      <router-link to="/keuangan" class="nav-link" active-class="active" @click="closeSidebarOnMobile">
        <i class="bi bi-cash-stack me-2"></i>Keuangan
      </router-link>
      <a @click="handleLogout" class="nav-link" style="cursor: pointer">
        <i class="bi bi-box-arrow-right me-2"></i>Logout
      </a>
    </nav>
  </div>
</template>