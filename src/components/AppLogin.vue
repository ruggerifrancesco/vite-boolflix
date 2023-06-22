<template>
  <main>
    <div class="overlay-shadow">

        <div class="container">
            <div class="row justify-content-center justify-content-lg-end">

                <div class="col col-sm-10 col-md-8 col-lg-6 col-xl-5 login-container">
                  <div class="logo-container">
                    <img src="../assets/boolflix-logo.png" alt="Main logo">
                  </div>

                  <button @click="redirectToAppWrapper">Go to App</button>
                </div>

            </div>
        </div>

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
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    main {
        display: block;
        height: 100vh;
        background-image: url('../assets/login-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .overlay-shadow {
        height: 100%;
        width: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 70%);    
        overflow: hidden;
        @include flex (row, center, center);
    }

    .login-container {
        height: 800px;
        /* From https://css.glass */
        background: rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11px);
        -webkit-backdrop-filter: blur(11px);
        @include flex (column, flex-start, center);
    }

    .logo-container {
      width: 50%;
    }
</style>