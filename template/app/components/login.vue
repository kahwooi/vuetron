<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log In</h2>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input 
        type="text" 
        class="form-control"
        placeholder="Enter your email"
        v-model="credentials.email"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <div class="form-group">
        <label><input v-model="credentials.rememberMe" type="checkbox" /> Remember Me</label>
    </div>
    <button class="btn btn-primary" @click="submit()">Access</button>
    <div v-show="error" class="alert alert-danger" role="alert">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
        rememberMe: false
      },
      error: ''
    }
  },

  methods: {
    submit() {
      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password,
        rememberMe: this.credentials.rememberMe
      }
    }
  }
  
}
</script>