<template>
    <div>
        <h1>Body Component</h1>
        <FilmsC/>
        <SeriesC/>
    </div>
</template>

<script>
    import FilmsC from './FilmsC.vue'
    import SeriesC from './SeriesC.vue'


    export default {
        name: 'MainC',
        components: {
            FilmsC,
            SeriesC
        }
    }
</script>

<style lang="scss" scoped>

</style>