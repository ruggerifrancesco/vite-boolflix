<template>
    <article class="poster-card">
        <div class="poster-img">
            <img :src="posterSrc" alt="">
        </div>

        <div class="overlay-info-card">

            <div class="titles-container">
                <span class="title">{{ name }}</span>
                <span>OT: {{ originalName }}</span>
            </div>
            <div class="language-container">
                <AppLanguages :languageCode="language" />
            </div>
            <RatingComponent class="rating-container" :rating="rating"/>

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
            transform: scale(1.02);
            transition: scale ease-in-out 10s;
            cursor: pointer;
            outline: 2px solid white;
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
            background: rgb(20,20,20);
            background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(255,255,255,0) 100%);
            height: 100%;
            width: 100%;
            opacity: 0;
            position: absolute;
            top: 0;
        }

        &:hover .overlay-info-card {
            opacity: 1;
        }

        .titles-container,
        .language-container,
        .rating-container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        .titles-container {
            bottom: 6rem;
            width: 90%;
            text-align: center;

            .title {
                font-weight: bold;
                text-transform: uppercase;
            }
        }

        .language-container {
            bottom: 3.5rem;
        }
        .rating-container {
            bottom: 1rem;
        }

    }

</style>