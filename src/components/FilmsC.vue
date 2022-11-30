<template>
    <div>
        <h1>Films</h1>
        <div class="d-flex p-3 mx-auto overflow">
            <CartaFilms class="mx-4"
            :arrayFilms="arrayFilms"
            v-for="(elem, index) in arrayFilms"
            :key="index"
            :elem="elem"/>
        </div>
    </div>
</template>

<script>
    import CartaFilms from './CartaFilms.vue'

    export default {
        name: 'FilmsC',
        props: {
            arrayFilms: Array
        },
        components: {
            CartaFilms
        }
    }
</script>

<style lang="scss" scoped>
    .overflow
    {
        overflow-x: auto;
    }
</style>