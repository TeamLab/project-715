<template>
  <div class="hello">
    <div v-for="(user, index) in users" :key="index" class="user-wrap">
      <h2>No. {{ index + 1 }}</h2>
      <dl>
        <dt>아이디</dt>
        <dd>{{ user.userid }}</dd>
        <dt>이름</dt>
        <dd>{{ user.name }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.$http.get('/api/users').then((response) => {
      this.users = response.data
    })
  }
}
</script>
