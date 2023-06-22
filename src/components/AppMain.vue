<template>
    <main>

        <h1>Movies</h1>
        <MovieComponent v-for="movie in movieArray"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :language="movie.original_language"
            :rating="movie.vote_average"
        />

        <h1>Tv Series</h1>
        <TvComponent v-for="serie in tvArray"
            :name="serie.name"
            :originalName="serie.original_name"
            :language="serie.original_language"
            :rating="serie.vote_average"
        />
            
    </main>
</template>

<script>
import MovieComponent from './single-components/MovieComponent.vue';
import TvComponent from './single-components/TvComponent.vue';

export default {
    name: 'AppMain',
    components: {
        MovieComponent,
        TvComponent
    },
    props: {
        movieArray: Array,
        tvArray: Array,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
    
</style>