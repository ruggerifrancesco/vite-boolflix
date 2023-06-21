<template>
    <main>
        
    </main>
</template>

<script>
export default {
    name: 'AppMain',
    components: {

    },
    data() {
        return {
            
        }
    },
    methods: {
        callServieApi () {
            axios.get('/user', {
                params: {
                  ID: 12345
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
}
</script>

<style lang="scss" scoped>
    
</style>