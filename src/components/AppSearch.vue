<template>
    <section>

        <div class="container-fluid">
            <h1>Movies</h1>

            <div class="container-movie-wrapper">
                <MovieComponent v-for="movie in movieArray"
                    :title="movie.title"
                    :originalTitle="movie.original_title"
                    :language="movie.original_language"
                    :rating="movie.vote_average"
                    :posterSrc="buildImageUrl(movie.poster_path)"
                />
            </div>

            <h1>Tv Series</h1>
            <div class="container-movie-wrapper">
                <TvComponent v-for="serie in tvArray"
                    :name="serie.name"
                    :originalName="serie.original_name"
                    :language="serie.original_language"
                    :rating="serie.vote_average"
                    :posterSrc="buildImageUrl(serie.poster_path)"
                />
            </div>
        </div>
            
    </section>
</template>

<script>
import MovieComponent from './single-components/MovieComponent.vue';
import TvComponent from './single-components/TvComponent.vue';

export default {
    name: 'AppSearch',
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
            imgSize: 'w342'
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
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    section {
        margin-top: 4rem;
        color: white;
    }

    .container-movie-wrapper,
    .container-tv-wrapper {
        @include flex (row, flex-start, flex-start);
        flex-wrap: wrap;
        padding-right: 2rem;
    }

</style>