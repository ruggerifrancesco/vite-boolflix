<template>
    <article>
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
                {{ rating }}
            </li>
            <li>
                <img :src="posterSrc" alt="">
            </li>
        </ul>
    </article>
</template>

<script>
import AppLanguages from '../AppLanguages.vue';
    
export default {
    name: 'MovieComponent',
    components: {
        AppLanguages
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
    
</style>