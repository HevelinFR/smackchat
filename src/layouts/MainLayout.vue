<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          @click="$router.go(-1)"
          icon="arrow_back"
          label="Back"
          flat
          dense
        />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          label="Login"
          flat
          dense
          no-caps
        />
        <q-btn
          v-else
          class="absolute-right q-pr-sm"
          flat
          dense
          no-caps
          icon="account_circle"
          :label="firstName"
        >
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column items-center">
                <div class="text-subtitle1 q-mb-xs">{{ firstName }}</div>

                <q-btn
                  @click="userStore.logout"
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "src/stores/store"; // Importe a store

const userStore = useUserStore();

const route = useRoute();

const title = computed(() => {
  const currentPath = route.fullPath;

  if (currentPath === "/") return "Bate Papo";
  else if (currentPath === "/chat") return "Chat";
  else if (currentPath === "/auth") return "Login";

  return "Bate Papo";
});

const userDetails = computed(() => {
  return userStore.userDetails;
});
const firstName = computed(() => {
  const fullName = userStore.userDetails.name || '';
  return fullName.split(' ')[0]; // Divide o nome completo e retorna o primeiro nome
});


</script>
