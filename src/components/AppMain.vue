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
import MovieComponent from './MovieComponent.vue';

export default {
    name: 'AppMain',
    components: {
        MovieComponent
    },
    data() {
        return {
            store,
            searchQuery: '',
            movieList: []
        }
    },
    methods: {
        callServiceApi () {
            axios.get(store.apiLinkCall, {
                params: {
                    api_key: store.apiKey,
                    query: this.searchQuery,
                }
            })
            .then( (response) => {
                console.log(response.data.results);
                this.movieList = response.data.results
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  
        }
    },
    created() {
        // Perform the initial API call
        // this.callServiceApi ()
    },
}
</script>

<style lang="scss" scoped>
    
</style>