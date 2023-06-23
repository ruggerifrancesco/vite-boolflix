<template>
    <main>
            
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

</style>