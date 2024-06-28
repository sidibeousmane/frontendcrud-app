<template>
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {{ user.name }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {},
      };
    },
    async created() {
      try {
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      async logout() {
        try {
          await axios.post('/api/logout', {}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
  
          localStorage.removeItem('token');
          this.$router.push('/login');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  