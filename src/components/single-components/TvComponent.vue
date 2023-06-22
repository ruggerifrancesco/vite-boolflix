<template>
    <article>
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
            <li>
                <img :src="posterSrc" alt="">
            </li>
        </ul>
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
    
</style>