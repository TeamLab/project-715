<template>
    <div>
        <button @click="addMessage">메시지 추가</button>
        <div class="messages" ref="message">
            <div class="container" v-for="(message, idx) in messagesa" :key="idx">
                <img src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" style="width:100%;" />
                <p></p>
                <span class="time-right">11:00</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChatA',
  data() {
    return {
      messagesa: []
    }
  },
  methods: {
    addMessage() {
      this.messagesa.push(`메시지 - ${Math.random()}`)
    }
  },
  watch: {
    messagesa() {
      // 화면에 추가된 후 동작하도록
      this.$nextTick(() => {
        const messages = this.$refs.message

        messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' })
      })
    }
  }
}
</script>

<style>
body {
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;
}
.messages {
    height: 300px;
    overflow: auto;
}
.container {
    text-align: left;
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}

.darker {
    border-color: #ccc;
    background-color: #ddd;
}

.container::after {
    content: '';
    clear: both;
    display: table;
}

.container img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
}

.container img.right {
    float: right;
    margin-left: 20px;
    margin-right: 0;
}

.time-right {
    float: right;
    color: #aaa;
}

.time-left {
    float: left;
    color: #999;
}
</style>
