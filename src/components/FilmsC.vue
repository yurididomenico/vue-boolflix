<template>
    <div class="overflow">
        <h1>Films</h1>
        <div class="d-flex p-3 mx-auto">
            <CartaC class="mx-4"
            :arrayFilms="arrayCarte"
            v-for="(elem, index) in arrayFilms"
            :key="index"
            :elem="elem"/>
        </div>
    </div>
</template>

<script>
    import CartaC from './CartaC.vue'

    export default {
        name: 'FilmsC',
        props: {
            arrayFilms: Array
        },
        components: {
            CartaC
        }
    }
</script>

<style lang="scss" scoped>
    .overflow
    {
        overflow-x: auto;
    }
</style>