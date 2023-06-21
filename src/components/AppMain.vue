<template>
    <main>
        <div class="d-flex">
            <input class="form-control me-2 w-50" 
                type="search" v-model="searchQuery" 
                placeholder="Search" aria-label="Search">

            <button class="btn btn-outline-success" type="submit" 
                @click="callServiceApi">
                Search
            </button>
        </div>

            <MovieComponent v-for="movie in movieList"
              :title="movie.title"
              :originalTitle="movie.original_title"
              :language="movie.original_language"
              :rating="movie.vote_average"
            />

    </main>
</template>

<script>
import { store } from '../store.js';
import axios from "axios";
import MovieComponent from './single-components/MovieComponent.vue';
import TvComponent from './single-components/TvComponent.vue';

export default {
    name: 'AppMain',
    components: {
        MovieComponent,
        TvComponent
    },
    data() {
        return {
            store,
            searchQuery: '',
            movieList: [],
            tvSeriesList: [],
        }
    },
    methods: {
        callServiceApi() {
            const movieApiUrl = `${store.movieApiLinkCall}?api_key=${store.apiKey}&query=${this.searchQuery}`;
            const tvSeriesApiUrl = `${store.tvSeriesApiLinkCall}?api_key=${store.apiKey}&query=${this.searchQuery}`;

            const movieApiCall = axios.get(movieApiUrl);
            const tvSeriesApiCall = axios.get(tvSeriesApiUrl);

            axios
                .all([movieApiCall, tvSeriesApiCall])
                .then(
                  axios.spread((movieResponse, tvSeriesResponse) => {
                    this.movieList = movieResponse.data.results;
                    this.tvSeriesList = tvSeriesResponse.data.results;
                  })
                )
                .catch(function (error) {
                  console.log(error);
                })
                .finally(function () {
                  // always executed
                });
        },
    },
    created() {
        // Perform the initial API call
        // this.callServiceApi ()
    },
}
</script>

<style lang="scss" scoped>
    
</style>