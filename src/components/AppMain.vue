<template>
    <main>
        
    </main>
</template>

<script>
import { axios } from "axios";
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {

    },
    data() {
        return {
            
        }
    },
    methods: {
        callServiceApi () {
            axios.get(store.apiLinkCall, {
                params: {
                    api_key: store.apiKey
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
        callServiceApi ()
    },
}
</script>

<style lang="scss" scoped>
    
</style>