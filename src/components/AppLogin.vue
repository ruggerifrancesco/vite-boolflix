<template>
  <main>

    <div class="overlay-shadow">
        <button @click="redirectToAppWrapper">Go to App</button>
    </div>

  </main>
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

<style lang="scss" scoped>
    main {
        display: block;
        height: 100vh;
        background-image: url('../assets/login-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .overlay-shadow {
        height: 100%;
        width: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 70%);    
        overflow: hidden;
    }
</style>