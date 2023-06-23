<template>
    <AppHeader @search="callServiceApi" @clear="clearSearch" />
    <AppMain v-if="!showSearch" :movieArray="movieList" :tvArray="tvSeriesList"/>
    <AppSearch v-if="showSearch" :movieArray="movieList" :tvArray="tvSeriesList"/>
  </template>
  
<script>
import { store } from '../store.js';
import axios from "axios";
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import AppSearch from './AppSearch.vue';

export default {
    name: 'AppWrapper',
    components: {
        AppHeader,
        AppMain,
        AppSearch
    },
    data() {
        return {
            movieList: [],
            tvSeriesList: [],
            searchQuery: '',
            store,
            showSearch: false,
        }
    },  
    methods: {
      callServiceApi(searchInput) {
      this.searchQuery = searchInput; // Update the search query
      this.showSearch = true;

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
        this.clearSearch();
      }
    },
    clearSearch() {
      this.showSearch = false; // Set showSearch to false to display AppMain component
      this.movieList = [];
      this.tvSeriesList = [];
      this.searchQuery = '';
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