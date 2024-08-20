<template>
  <q-form @submit="submitForm">
    <q-input v-if="tab == 'register'" class="q-mb-md" outlined v-model="formData.name" label="Name"></q-input>
    <q-input class="q-mb-md" outlined type="email" v-model="formData.email" label="E-mail"></q-input>
    <q-input class="q-mb-md" outlined type="password" v-model="formData.password" label="Password"></q-input>
    <div class="row">
      <q-space/>
      <q-btn type="submit" color="primary" :label="tab"></q-btn>
    </div>
  </q-form>
</template>

<script setup>
import { useUserStore } from 'src/stores/store'; // Importe a store
import { ref } from 'vue';

// Define props
const props = defineProps({
  tab: {
    required: true,
    type: String
  },
});

// Inicialize a store
const userStore = useUserStore();

// Defina os dados do formulário
const formData = ref({
  name: '',
  email: '',
  password: ''
});

// Função de envio do formulário
function submitForm(evt) {
  evt.preventDefault();

  if (props.tab === 'login') {
    // Chame a ação de login na store
    userStore.login(formData);
  } else {
    // Chame a ação de registro na store
    userStore.registerUser(formData.value);
  }
}

</script>

<style lang="scss" scoped>
/* Seu estilo aqui */
</style>

