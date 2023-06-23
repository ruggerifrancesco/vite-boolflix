<template>
  <main>
    <div class="overlay-shadow px-2 px-sm-0">

        <div class="container">
            <div class="row justify-content-center">

                <div class="col col-sm-10 col-md-8 col-lg-6 col-xl-5 login-container">
                  <div class="logo-container">
                    <img src="../assets/boolflix-logo.png" alt="Main logo">
                  </div>

                  <form>
                    <h1>Sign In</h1>

                    <div class="mb-3">
                      <label for="emailInput" class="form-label floating-label">Email address</label>
                      <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" required>

                      <span id="emailHelp">*We'll never share your email with anyone else.</span>
                    </div>

                    <div class="mb-3">
                      <label for="passwordInput" class="form-label floating-label">Password</label>
                      <input type="password" class="form-control" id="passwordInput" required>
                    </div>

                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                    <button @click="redirectToAppWrapper" class="btn btn-custom">Go to App</button>
                  </form>

                </div>

            </div>
        </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'AppLogin',
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

    body {
      font-family: "Roboto";
    }

    main {
        display: block;
        height: 100vh;
        background-image: url('../assets/login-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: white;
    }

    form {
      width: 90%;
    }

    h1 {
      align-self: flex-start;
      margin-bottom: 2rem;
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
        /* From https://css.glass */
        background: rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11px);
        -webkit-backdrop-filter: blur(11px);
        @include flex (column, flex-start, center);
        padding: 4rem 2rem 6rem 2rem;
    }

    .logo-container {
      width: 50%;
      margin-bottom: 2rem;
    }

    #emailInput, #passwordInput {
      background-color: #444;
      color: white;
      border-radius: 0.2rem;
      border: 1px solid #444;
      height: 40px;
    }

    #emailHelp {
      margin-top: 0.5rem;
    }

    input:focus {
      box-shadow: 0 0 0 0.25rem rgba(253, 117, 13, 0.25);
    }

    .btn-custom {
      width: 100%;
      height: 50px;
      margin-top: 24px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      border-radius: 5px;
      border: none;
      color: #ffffff;
      background-color: #e50914;
    }
    
</style>