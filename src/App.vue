<template>
  <router-view></router-view>
</template>

<script>
import AppLogin from './components/AppLogin.vue';

export default {
  name: 'App',
  components: {
    AppLogin,
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>