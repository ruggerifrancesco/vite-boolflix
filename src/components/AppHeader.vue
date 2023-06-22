<template>
    <header>
        <div class="d-flex">
            <input class="form-control me-2 w-50" type="search" v-model="searchQuery" 
                placeholder="Search" aria-label="Search">

            <button class="btn btn-outline-success" type="submit" @click="$emit('search', searchQuery)">
                Search
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
    },
};
</script>


<style lang="scss" scoped>
    
</style>