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
defineOptions({
  name: 'LoginRegister',
  data(){
    return {
      formData:{
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods:{
    submitForm(){
      if(this.tab == login){
        console.log('login user')
      }else{
        console.log('register user')
      }
    }
  }
})

const props = defineProps({
  tab:{
    required: true
  },

})

</script>

<style lang="scss" scoped>

</style>


