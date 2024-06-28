<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="name" placeholder="Name" />
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input v-model="password_confirmation" type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
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
  