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
    </main>
</template>

<script>
import { store } from '../store.js';
import axios from "axios";

export default {
    name: 'AppMain',
    components: {

    },
    data() {
        return {
            store,
            searchQuery: ''
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
            .then(function (response) {
              console.log(response.data);
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