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
                <FlagIcon :code="language" />
            </li>
            <li>
                <strong>Rating: </strong>
                {{ rating }}
            </li>
        </ul>
    </article>
</template>

<script>
import FlagIcon from 'vue-flag-icon';
    
export default {
    name: 'MovieComponent',
    components: {
        FlagIcon
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        rating: Number,
    }
}
</script>\

<style lang="scss">
    
</style>