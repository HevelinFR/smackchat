<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.fullPath.includes('/chat')" @click="$router.go(-1)" icon="arrow_back" label="Back" flat dense/>
        <q-toolbar-title class="absolute-center">
          {{title}}
        </q-toolbar-title>

        <q-btn to="/auth" class="absolute-right q-pr-sm" icon="account_circle" label="Login" flat dense no-caps/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout',
  computed:{
    title(){
      let currentPath = this.$route.fullPath
      console.log(currentPath)
      if(currentPath == '/') return 'Bate Papo'
      else if (currentPath == '/chat') return 'Chat'
      else if(currentPath == '/auth') return 'Login'

      return 'Bate papo'
    }
  }
})
</script>
