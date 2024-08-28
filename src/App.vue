<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "src/stores/store"; // Importe a store

// Inicialize a store
const userStore = useUserStore();

onMounted(() => {
  userStore.handleAuthStateChanged();
});

defineOptions({
  name: "App",
});
</script>
