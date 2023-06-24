<template>
    <section>

        <div class="container-fluid">
            <h1 class="text-center">Movies</h1>

            <div class="container-wrapper">
                <MovieComponent v-for="movie in movieArray"
                    :title="movie.title"
                    :originalTitle="movie.original_title"
                    :language="movie.original_language"
                    :rating="movie.vote_average"
                    :posterSrc="buildImageUrl(movie.poster_path)"
                />
            </div>

            <h1 class="text-center">Tv Series</h1>
            <div class="container-wrapper">
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
            return 'https://thesame.tv/assets/img/film-poster-placeholder.png';
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    section {
        margin-top: 6rem;
        margin-bottom: 2rem;
        color: white;
    }

    h1 {
        margin-bottom: 2rem
    }

    .container-wrapper {
        @include flex (row, flex-start, flex-start);
        flex-wrap: wrap;
        padding-right: 2rem;
        margin-bottom: 2rem;
    }

</style>