<template>
  <div class="hello">
    <div>
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <input type="text" v-model="chat" />
    <button @click="pingServer()">Ping Server</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      isConnected: false,
      socketMessage: '',
      chat: null
    }
  },
  sockets: {
    connect () {
      // Fired when the socket connects.
      this.isConnected = true
    },

    disconnect () {
      this.isConnected = false
    },
    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel (data) {
      this.socketMessage = data
    }
  },

  methods: {
    pingServer () {
      // Send the "pingServer" event to the server.
      this.$socket.emit('chat', { chat: this.chat })
      // this.$socket.emit(Channel name: string, data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
