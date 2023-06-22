<template>
  <div>
    <!-- Your login form content -->

    <button @click="redirectToAppWrapper">Go to App</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToAppWrapper() {
      this.$router.push({ name: 'AppWrapper' });
    }
  }
}
</script>

<style lang="scss">

</style>