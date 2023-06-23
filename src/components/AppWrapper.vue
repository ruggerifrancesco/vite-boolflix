<template>
    <AppHeader @search="callServiceApi"/>
    <AppMain v-if="!searchQuery" :movieArray="movieList" :tvArray="tvSeriesList"/>
    <div v-else>
      <!-- Display search results -->
    </div>
  </template>
  
<script>
import { store } from '../store.js';
import axios from "axios";
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';

export default {
    name: 'AppWrapper',
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            movieList: [],
            tvSeriesList: [],
            searchQuery: '',
            store,
        }
    },  
    methods: {
      callServiceApi(searchInput) {
      this.searchQuery = searchInput; // Update the search query

      if (searchInput) {
        const movieApiUrl = `${store.movieApiLinkCall}?api_key=${store.apiKey}&query=${searchInput}`;
        const tvSeriesApiUrl = `${store.tvSeriesApiLinkCall}?api_key=${store.apiKey}&query=${searchInput}`;

        const movieApiCall = axios.get(movieApiUrl);
        const tvSeriesApiCall = axios.get(tvSeriesApiUrl);

        axios
          .all([movieApiCall, tvSeriesApiCall])
          .then(axios.spread((movieResponse, tvSeriesResponse) => {
            this.movieList = movieResponse.data.results;
            this.tvSeriesList = tvSeriesResponse.data.results;
          }))
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // Clear the search results when the search query is empty
        this.movieList = [];
        this.tvSeriesList = [];
      }
    },
  },
}
</script>  

<style lang="scss">
// General Code to the app after login
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    body {
      background-color: $main-app-bg;
    }

</style>