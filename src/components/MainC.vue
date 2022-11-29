<template>
    <div class="text-white p-5">
        <FilmsC :arrayFilms="arrayFilms"/>
        <SeriesC/>
    </div>
</template>

<script>
    import FilmsC from './FilmsC.vue'
    import SeriesC from './SeriesC.vue'


    export default {
        name: 'MainC',
        props: {
            arrayFilms: Array
        },
        components: {
            FilmsC,
            SeriesC
        }
    }
</script>

<style lang="scss" scoped>
    div
    {
        background-color: rgb(30, 30, 30);
    }
</style>