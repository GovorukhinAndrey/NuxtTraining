<template>
  <section>
    <h1>Login page</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" class="form-control">
      </div>

      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>

      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  width: 500px;
  margin: 20px auto;
}

</style>
