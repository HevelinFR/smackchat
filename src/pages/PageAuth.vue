<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab"></login-register>
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab"></login-register>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';

// Definindo a aba inicial
const tab = ref('login');

// Importando o componente LoginRegister de forma assíncrona
const LoginRegister = defineAsyncComponent(() =>
  import('components/LoginRegister.vue')
);

</script>
