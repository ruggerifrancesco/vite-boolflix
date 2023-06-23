<template>
    <article class="poster-card">
        <div class="poster-img">
            <img :src="posterSrc" alt="">
        </div>
        <ul>
            <li>
                <strong>Title: </strong>
                {{ title }}
            </li>
            <li>
                <strong>Original Title: </strong>
                {{ originalTitle }}
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
    </article>
</template>

<script>
import AppLanguages from '../AppLanguages.vue';
import RatingComponent from './RatingComponent.vue';
    
export default {
    name: 'MovieComponent',
    components: {
        AppLanguages,
        RatingComponent
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        rating: Number,
        posterSrc: String,
    }
}
</script>\

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .poster-card {
        width: calc((100% / 5) - 2rem);
        margin-left: 2rem;
    }

</style>