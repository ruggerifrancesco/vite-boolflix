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
                {{ language }}
            </li>
            <li>
                <strong>Rating: </strong>
                {{ rating }}
            </li>
        </ul>
    </article>
</template>

<script>
import AppLanguages from '../AppLanguages.vue';

export default {
    name: 'TvComponent',
    components: {
        AppLanguages
    },
    props: {
        name: String,
        originalName: String,
        language: String,
        rating: Number,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>