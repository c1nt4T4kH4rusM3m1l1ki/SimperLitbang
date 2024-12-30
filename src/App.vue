<script setup lang="ts">
import { useAuthStore } from './stores/auth';
import Sidebar from './components/Sidebar.vue';
import BottomNav from './components/BottomNav.vue';

const authStore = useAuthStore();
</script>

<template>
  <div>
    <template v-if="authStore.isAuthenticated">
      <Sidebar />
      <main class="main-content">
        <router-view></router-view>
      </main>
      <BottomNav />
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>