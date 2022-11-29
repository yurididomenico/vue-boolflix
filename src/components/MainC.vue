<template>
    <main class="text-white p-5">
        <FilmsC :arrayFilms="arrayFilms"/>
        <SeriesC :arraySeries="arraySeries"/>
    </main>
</template>

<script>
    import FilmsC from './FilmsC.vue'
    import SeriesC from './SeriesC.vue'


    export default {
        name: 'MainC',
        props: {
            arrayFilms: Array,
            arraySeries: Array
        },
        components: {
            FilmsC,
            SeriesC
        }
    }
</script>

<style lang="scss" scoped>
    main
    {
        background-color: rgb(30, 30, 30);
        overflow: auto;
        height: 94vh;
    }
</style>