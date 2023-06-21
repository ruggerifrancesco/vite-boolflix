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
export default {
    name: 'MovieComponent',
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