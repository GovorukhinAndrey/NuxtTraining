<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link to="/" class="navbar-brand">Nuxt SSR</nuxt-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" active-class="active" exact no-prefetch>Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link" active-class="active">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="nav-link" active-class="active">Users</nuxt-link>
        </li>
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link to="/login" class="nav-link" active-class="active">Login</nuxt-link>
        </li>
        <li class="nav-item" v-else>
          <a href="#" class="nav-link" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
