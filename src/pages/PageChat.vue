<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      User is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width" @submit="sendMessage">
          <q-input
            bg-color="white"
            outlined
            rounded
            v-model="newMessage"
            label="Message"
            dense
          >
            <template v-slot:after>
              <q-btn round dense flat type="submit" @click="sendMessage" icon="send" color="white" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script setup>
defineOptions({
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "Oii, tudo bem?",
          from: "me",
        },
        {
          text: "Oii, tudo bem e com vc?",
          from: "them",
        },
        {
          text: "Tudo bem tb",
          from: "me",
        },
      ],
    };
  },
  methods:{
    sendMessage(){
      console.log('ok')
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
    }
  }
});
</script>
