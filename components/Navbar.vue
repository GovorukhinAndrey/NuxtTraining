<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link to="/" class="navbar-brand">Nuxt SSR</nuxt-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" active-class="active" exact>Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link" active-class="active">About</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
