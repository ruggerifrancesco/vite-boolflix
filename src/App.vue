<template>
  <AppHeader />
  <AppMain />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMainVue from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMainVue
  }
}
</script>

<style lang="scss">
  
</style>