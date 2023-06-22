<template>
    <div>
        <font-awesome-icon v-for="i in 5" :key="i" :icon="getStarIcon(i)" />
        <!-- TO DO Stroke star -->
        <!-- <font-awesome-icon :icon="['far', 'star-half-stroke']" /> -->
    </div>
</template>

<script>
export default {
    name: 'RatingComponent',
    props: {
        rating: Number
    },
    methods: {
        getStarIcon(index) {
            const fullStars = Math.floor(this.rating / 2);
            return index <= fullStars ? 'star' : ['far', 'star'];
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>