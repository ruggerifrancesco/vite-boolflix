<template>
    <main>

        <h1>Movies</h1>
        <MovieComponent v-for="movie in movieArray"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :language="movie.original_language"
            :rating="movie.vote_average"
            :posterSrc="buildImageUrl(movie.poster_path)"
        />

        <h1>Tv Series</h1>
        <TvComponent v-for="serie in tvArray"
            :name="serie.name"
            :originalName="serie.original_name"
            :language="serie.original_language"
            :rating="serie.vote_average"
            :posterSrc="buildImageUrl(serie.poster_path)"
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
        return {
            imgApiLink: 'https://image.tmdb.org/t/p/',
            imgSize: 'w780'
        }
    },
    methods: {
        buildImageUrl(posterPath) {
            if (posterPath) {
              return this.imgApiLink + this.imgSize + posterPath;
            }
            return 'path_to_default_image';
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>