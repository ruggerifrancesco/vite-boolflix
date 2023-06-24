<template>
    <article class="poster-card">
        <div class="poster-img">
            <img :src="posterSrc" alt="">
        </div>

        <div class="overlay-info-card">
            <ul>
                <li>
                    <strong>Title: </strong>
                    {{ name }}
                </li>
                <li>
                    <strong>Original Title: </strong>
                    {{ originalName }}
                </li>
                <li>
                    <strong>Language: </strong>
                    <AppLanguages :languageCode="language" />
                </li>
                <li>
                    <strong>Rating: </strong>
                    <RatingComponent :rating="rating"/>
                </li>
            </ul>
        </div>
    </article>

</template>

<script>
import AppLanguages from '../AppLanguages.vue';
import RatingComponent from './RatingComponent.vue';

export default {
    name: 'TvComponent',
    components: {
        AppLanguages,
        RatingComponent
    },
    props: {
        name: String,
        originalName: String,
        language: String,
        rating: Number,
        posterSrc: String,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .poster-card {
        width: calc((100% / 5) - 2rem);
        margin-left: 2rem;
        position: relative;
        margin-bottom: 2rem;
        border-radius: 1rem;
        overflow: hidden;

        &:hover {
            transform: scale(1.1);
            transition: scale ease-in-out 10s;
            cursor: pointer;
        }

        .poster-img {
            width: 100%;
            aspect-ratio: 2/3;

            & img {
                object-fit: cover;
                object-position: top;
            }
        }

        .overlay-info-card {
            position: absolute;
            top: 0;
        }
    }

</style>