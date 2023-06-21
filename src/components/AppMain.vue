<template>
    <main>
        <div class="d-flex">
            <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
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
        }
    },
    methods: {
        callServiceApi () {
            axios.get(store.apiLinkCall, {
                params: {
                    api_key: store.apiKey,
                    query: ''
                }
            })
            .then(function (response) {
              console.log(response);
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
        this.callServiceApi ()
    },
}
</script>

<style lang="scss" scoped>
    
</style>