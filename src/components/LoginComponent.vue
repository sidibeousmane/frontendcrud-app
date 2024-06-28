<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.email,
            password: this.password,
          });
  
          localStorage.setItem('token', response.data.token);
          this.$router.push('/employee');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  