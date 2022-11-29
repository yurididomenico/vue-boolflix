<template>
    <div>
        <h1>Series Component</h1>
        <CartaC :arrayFilms="arrayFilms" v-for="(elem, index) in arrayFilms" :key="index" :elem="elem"/>
    </div>
</template>

<script>
    import CartaC from './CartaC.vue'

    export default {
        name: 'SeriesC',
        props: {
            arrayFilms: Array
        },
        components: {
            CartaC
        }
    }
</script>

<style lang="scss" scoped>

</style>